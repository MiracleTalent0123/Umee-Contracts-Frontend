import {
  ChainGetter,
  QueriesStore,
  MsgOpt,
  AccountSetBase,
  CosmosMsgOpts,
  HasCosmosQueries,
  AccountWithCosmos,
  QueriesSetBase,
  AccountSetOpts,
  CosmosAccount,
  HasCosmosAccount,
} from '@keplr-wallet/stores';
import { DeepReadonly } from 'utility-types';
import deepmerge from 'deepmerge';
import { HasUmeeQueries } from '../query';
import { useWeb3 } from 'api/web3';
import { cosmos } from '@keplr-wallet/cosmos';
import { umeenetwork as umeeLeverage } from '../../../types/leverage/bundle.js';
import { gravity } from './bundle.js';
import { displayToast, TToastType } from 'components/common/toasts';
import { prettifyTxError } from 'api/cosmosStores/prettify-tx-error';
import { EmbedChainInfos } from '../../../../config';
import { ChainStore } from '../../chain';

export interface UmeeMsgOpts {
  readonly sendToEth: MsgOpt;
  readonly cancelSendToEth: MsgOpt;
  readonly lendToken: MsgOpt;
  readonly withdrawToken: MsgOpt;
  readonly setCollateral: MsgOpt;
  readonly borrowToken: MsgOpt;
  readonly repayToken: MsgOpt;
  readonly compoundReward: MsgOpt;
}

export interface HasUmeeAccount {
  umee: DeepReadonly<UmeeAccount>;
}
export interface KeplrIntereactionOptions {
  readonly sign?: KeplrSignOptions;
}

export interface KeplrSignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;
}
export class Account
  extends AccountSetBase<CosmosMsgOpts & UmeeMsgOpts, HasCosmosQueries & HasUmeeQueries>
  implements HasCosmosAccount, HasUmeeAccount
{
  public readonly cosmos: DeepReadonly<CosmosAccount>;
  public readonly umee: DeepReadonly<UmeeAccount>;

  static readonly defaultMsgOpts: CosmosMsgOpts & UmeeMsgOpts = deepmerge(AccountWithCosmos.defaultMsgOpts, {
    sendToEth: {
      type: 'gravity/MsgSendToEth',
      gas: 200000,
    },
    lendToken: {
      type: 'umee/leverage/MsgLendAsset',
      gas: 300000,
    },
    withdrawToken: {
      type: 'umee/leverage/MsgWithdrawAsset',
      gas: 300000,
    },
    borrowToken: {
      type: 'umee/leverage/MsgBorrowAsset',
      gas: 300000,
    },
    repayToken: {
      type: 'umee/leverage/MsgRepayAsset',
      gas: 300000,
    },
    setCollateral: {
      type: 'umee/leverage/MsgSetCollateral',
      gas: 300000,
    },
    cancelSendToEth: {
      type: 'gravity/MsgCancelSendToEth',
      gas: 200000,
    },
    compoundReward: {
      type: 'cosmos-sdk/MsgDelegate',
      gas: 250000,
    },
  });
  constructor(
    protected readonly eventListener: {
      addEventListener: (type: string, fn: () => unknown) => void;
      removeEventListener: (type: string, fn: () => unknown) => void;
    },
    protected readonly chainGetter: ChainGetter,
    protected readonly chainId: string,
    protected readonly queriesStore: QueriesStore<QueriesSetBase & HasCosmosQueries & HasUmeeQueries>,
    protected readonly opts: AccountSetOpts<CosmosMsgOpts & UmeeMsgOpts>
  ) {
    super(eventListener, chainGetter, chainId, queriesStore, opts);

    this.cosmos = new CosmosAccount(
      this as AccountSetBase<CosmosMsgOpts, HasCosmosQueries>,
      chainGetter,
      chainId,
      queriesStore
    );
    this.umee = new UmeeAccount(
      this as AccountSetBase<UmeeMsgOpts, HasUmeeQueries>,
      chainGetter,
      chainId,
      queriesStore
    );
  }
}

export class UmeeAccount {
  constructor(
    protected readonly base: AccountSetBase<UmeeMsgOpts, HasUmeeQueries>,
    protected readonly chainGetter: ChainGetter,
    protected readonly chainId: string,
    protected readonly queriesStore: QueriesStore<QueriesSetBase & HasUmeeQueries>
  ) {}

  async compoundReward(
    delegatorAddress: string,
    data: { validatorAddress: string; amount: { amount: string; denom: string } }[],
    onFulfill: () => void
  ) {
    let msg: any[] = [];
    data.map((data) => {
      msg.push({
        type: this.base.msgOpts.compoundReward.type,
        value: {
          delegator_address: delegatorAddress,
          validator_address: data.validatorAddress,
          amount: data.amount,
        },
      });
    });

    let protoMsgs: any[] = [];
    data.map((data) => {
      protoMsgs.push({
        type_url: '/cosmos.staking.v1beta1.MsgDelegate',
        value: cosmos.staking.v1beta1.MsgDelegate.encode({
          delegatorAddress: delegatorAddress,
          validatorAddress: data.validatorAddress,
          amount: data.amount,
        }).finish(),
      });
    });

    const chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
    const chainInfo = chainStore.getChain('umee-1');

    await this.base.sendMsgs(
      this.base.msgOpts.compoundReward.type,
      {
        aminoMsgs: msg,
        protoMsgs: protoMsgs,
      },
      '',
      {
        amount: [],
        gas: (this.base.msgOpts.compoundReward.gas * data.length).toString(),
      },
      undefined,
      {
        onBroadcasted: (txHash: Uint8Array) => {
          displayToast('Compounding Reward', TToastType.TX_BROADCASTING);
        },
        onFulfill: (tx: any) => {
          if (!tx.code) {
            displayToast('Transaction Included in the Block', TToastType.TX_SUCCESSFUL, {
              customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
            });
            onFulfill();
          }
        },
      }
    );
  }

  async sendToEthereum(ethereumAddress: string, denom: string, amount: string, fee: string, onFulfill: () => void) {
    const msg = {
      type: this.base.msgOpts.sendToEth.type,
      value: {
        sender: this.base.bech32Address.toLowerCase(),
        eth_dest: ethereumAddress.toLowerCase(),
        amount: {
          denom: denom,
          amount: amount,
        },
        bridge_fee: {
          denom: denom,
          amount: fee,
        },
      },
    };

    const chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
    const chainInfo = chainStore.getChain(this.chainId);

    await this.base.sendMsgs(
      this.base.msgOpts.sendToEth.type,
      {
        aminoMsgs: [msg],
        protoMsgs: [
          {
            type_url: '/gravity.v1.MsgSendToEth',
            value: gravity.v1.MsgSendToEth.encode({
              sender: msg.value.sender,
              ethDest: msg.value.eth_dest,
              amount: msg.value.amount,
              bridgeFee: msg.value.bridge_fee,
            }).finish(),
          },
        ],
      },
      'memo',
      {
        amount: [],
        gas: this.base.msgOpts.sendToEth.gas.toString(),
      },
      undefined,
      {
        onBroadcasted: (txHash: Uint8Array) => {
          displayToast('Transferring', TToastType.TX_BROADCASTING);
        },
        onFulfill: (tx: any) => {
          if (!tx.code) {
            displayToast('Transaction Included in the Block', TToastType.TX_SUCCESSFUL, {
              customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
            });
            displayToast(
              'Bridging in Progress',
              TToastType.TX_BROADCASTING,
              {
                message: 'This process may take a minute',
              },
              { delay: 3000 }
            );
            onFulfill();
          }
        },
      }
    );
  }

  async cancelSendToEth(txId: number) {
    const msg = {
      type: this.base.msgOpts.cancelSendToEth.type,
      value: {
        sender: this.base.bech32Address.toLowerCase(),
        transaction_id: txId,
      },
    };

    const chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
    const chainInfo = chainStore.getChain(this.chainId);

    await this.base.sendMsgs(
      this.base.msgOpts.cancelSendToEth.type,
      {
        aminoMsgs: [msg],
        protoMsgs: [
          {
            type_url: '/gravity.v1.MsgCancelSendToEth',
            value: gravity.v1.MsgCancelSendToEth.encode({
              sender: msg.value.sender,
              transactionId: msg.value.transaction_id,
            }).finish(),
          },
        ],
      },
      'memo',
      {
        amount: [],
        gas: this.base.msgOpts.cancelSendToEth.gas.toString(),
      },
      undefined,
      {
        onFulfill: (tx: any) => {
          if (!tx.code) {
            displayToast('Transaction Included in the Block', TToastType.TX_SUCCESSFUL, {
              customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
            });
          }
        },
      }
    );
  }

  async lendToken(
    umeeAddress: string,
    amount: string,
    denom: string,
    usageAsCollateralEnabled: boolean,
    canUseAsCollateral: boolean,
    onFulfill: () => void
  ) {
    const msg = {
      type: 'umee/leverage/MsgLendAsset',
      value: {
        lender: umeeAddress,
        amount: {
          denom: denom,
          amount: amount,
        },
      },
    };
    const msgCollateral = {
      type: 'umee/leverage/MsgSetCollateral',
      value: {
        borrower: umeeAddress,
        denom: `u/${denom}`,
        enable: true,
      },
    };

    let aminoMsgs: any[] = [msg];
    let protoMsgs: any[] = [
      {
        type_url: '/umeenetwork.umee.leverage.v1beta1.MsgLendAsset',
        value: umeeLeverage.umee.leverage.v1beta1.MsgLendAsset.encode({
          lender: umeeAddress,
          amount: {
            denom: denom,
            amount: amount,
          },
        }).finish(),
      },
    ];

    const chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
    const chainInfo = chainStore.getChain(this.chainId);

    if (canUseAsCollateral) {
      if (!usageAsCollateralEnabled) {
        aminoMsgs.push(msgCollateral);
        protoMsgs.push({
          type_url: '/umeenetwork.umee.leverage.v1beta1.MsgSetCollateral',
          value: umeeLeverage.umee.leverage.v1beta1.MsgSetCollateral.encode({
            borrower: umeeAddress,
            denom: `u/${denom}`,
            enable: true,
          }).finish(),
        });
      }
    }

    await this.base.sendMsgs(
      'umee/leverage/MsgLendAsset',
      {
        aminoMsgs: aminoMsgs,
        protoMsgs: protoMsgs,
      },
      '',
      {
        amount: [],
        gas: this.base.msgOpts.lendToken.gas.toString(),
      },
      undefined,
      {
        onBroadcasted: (txHash: Uint8Array) => {
          displayToast('Supplying', TToastType.TX_BROADCASTING);
        },
        onFulfill: (tx) => {
          if (!tx.code) {
            displayToast('Supply Successful', TToastType.TX_SUCCESSFUL, {
              customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
            });
            onFulfill();
          }
        },
      }
    );
  }

  async withdrawToken(umeeAddress: string, amount: string, denom: string, onFulfill: () => void) {
    const msg = {
      type: 'umee/leverage/MsgWithdrawAsset',
      value: {
        lender: umeeAddress,
        amount: {
          denom: denom,
          amount: amount,
        },
      },
    };

    const chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
    const chainInfo = chainStore.getChain(this.chainId);

    await this.base.sendMsgs(
      'umee/leverage/MsgWithdrawAsset',
      {
        aminoMsgs: [msg],
        protoMsgs: [
          {
            type_url: '/umeenetwork.umee.leverage.v1beta1.MsgWithdrawAsset',
            value: umeeLeverage.umee.leverage.v1beta1.MsgWithdrawAsset.encode({
              lender: umeeAddress,
              amount: {
                denom: denom,
                amount: amount,
              },
            }).finish(),
          },
        ],
      },
      'memo',
      {
        amount: [],
        gas: this.base.msgOpts.withdrawToken.gas.toString(),
      },
      undefined,
      {
        onBroadcasted: (txHash: Uint8Array) => {
          displayToast('Withdrawing', TToastType.TX_BROADCASTING);
        },
        onFulfill: (tx) => {
          if (!tx.code) {
            displayToast('Withdraw Successful', TToastType.TX_SUCCESSFUL, {
              customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
            });
            onFulfill();
          }
        },
      }
    );
  }

  async setCollateral(umeeAddress: string, denom: string, enable: boolean, onFulfill: () => void) {
    const msg = {
      type: 'umee/leverage/MsgSetCollateral',
      value: {
        borrower: umeeAddress,
        denom: `u/${denom}`,
        enable: enable,
      },
    };

    const chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
    const chainInfo = chainStore.getChain(this.chainId);

    await this.base.sendMsgs(
      'umee/leverage/MsgSetCollateral',
      {
        aminoMsgs: [msg],
        protoMsgs: [
          {
            type_url: '/umeenetwork.umee.leverage.v1beta1.MsgSetCollateral',
            value: umeeLeverage.umee.leverage.v1beta1.MsgSetCollateral.encode({
              borrower: umeeAddress,
              denom: `u/${denom}`,
              enable: enable,
            }).finish(),
          },
        ],
      },
      'memo',
      {
        amount: [],
        gas: this.base.msgOpts.setCollateral.gas.toString(),
      },
      undefined,
      {
        onBroadcasted: (txHash: Uint8Array) => {
          displayToast(`${enable ? 'Enabling' : 'Disabling'} use of reserve as collateral`, TToastType.TX_BROADCASTING);
        },
        onFulfill: (tx) => {
          if (!tx.code) {
            displayToast(
              `${enable ? 'Enabling' : 'Disabling'} use of reserve as collateral`,
              TToastType.TX_SUCCESSFUL,
              {
                customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
              }
            );
            onFulfill();
          }
        },
      }
    );
  }

  async borrowToken(umeeAddress: string, amount: string, denom: string, onFulfill: () => void) {
    const msg = {
      type: 'umee/leverage/MsgBorrowAsset',
      value: {
        borrower: umeeAddress,
        amount: {
          denom: denom,
          amount: amount,
        },
      },
    };

    const chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
    const chainInfo = chainStore.getChain(this.chainId);

    await this.base.sendMsgs(
      'umee/leverage/MsgBorrowAsset',
      {
        aminoMsgs: [msg],
        protoMsgs: [
          {
            type_url: '/umeenetwork.umee.leverage.v1beta1.MsgBorrowAsset',
            value: umeeLeverage.umee.leverage.v1beta1.MsgBorrowAsset.encode({
              borrower: umeeAddress,
              amount: {
                denom: denom,
                amount: amount,
              },
            }).finish(),
          },
        ],
      },
      'memo',
      {
        amount: [],
        gas: this.base.msgOpts.borrowToken.gas.toString(),
      },
      undefined,
      {
        onBroadcasted: (txHash: Uint8Array) => {
          displayToast('Borrowing', TToastType.TX_BROADCASTING);
        },
        onFulfill: (tx) => {
          displayToast('Borrow Successful', TToastType.TX_SUCCESSFUL, {
            customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
          });
          if (!tx.code) {
            onFulfill();
          }
        },
      }
    );
  }

  async repayToken(umeeAddress: string, amount: string, denom: string, onFulfill: () => void) {
    const msg = {
      type: 'umee/leverage/MsgRepayAsset',
      value: {
        borrower: umeeAddress,
        amount: {
          denom: denom,
          amount: amount,
        },
      },
    };

    const chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
    const chainInfo = chainStore.getChain(this.chainId);

    await this.base.sendMsgs(
      'umee/leverage/MsgRepayAsset',
      {
        aminoMsgs: [msg],
        protoMsgs: [
          {
            type_url: '/umeenetwork.umee.leverage.v1beta1.MsgRepayAsset',
            value: umeeLeverage.umee.leverage.v1beta1.MsgRepayAsset.encode({
              borrower: umeeAddress,
              amount: {
                denom: denom,
                amount: amount,
              },
            }).finish(),
          },
        ],
      },
      'memo',
      {
        amount: [],
        gas: this.base.msgOpts.repayToken.gas.toString(),
      },
      undefined,
      {
        onBroadcasted: (txHash: Uint8Array) => {
          displayToast('Repaying', TToastType.TX_BROADCASTING);
        },
        onFulfill: (tx) => {
          if (!tx.code) {
            displayToast('Repay Successful', TToastType.TX_SUCCESSFUL, {
              customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
            });
            onFulfill();
          }
        },
      }
    );
  }

  protected get queries(): DeepReadonly<QueriesSetBase & HasUmeeQueries> {
    return this.queriesStore.get(this.chainId);
  }
  protected hasNoLegacyStdFeature(): boolean {
    const chainInfo = this.chainGetter.getChain(this.chainId);
    return chainInfo.features != null && chainInfo.features.includes('no-legacy-stdTx');
  }
}
