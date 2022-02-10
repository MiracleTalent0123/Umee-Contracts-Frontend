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
import { gravity } from './bundle.js';
import { displayToast, TToastType } from 'components/common/toasts';
import { prettifyTxError } from 'api/cosmosStores/prettify-tx-error';
import { EmbedChainInfos } from '../../../../config';
import { ChainStore } from '../../chain';

export interface UmeeMsgOpts {
  readonly sendToEth: MsgOpt;
}

export interface HasUmeeAccount {
  umee: DeepReadonly<UmeeAccount>;
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

  async sendToEthereum(ethereumAddress: string, denom: string, amount: string, fee: string) {
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
