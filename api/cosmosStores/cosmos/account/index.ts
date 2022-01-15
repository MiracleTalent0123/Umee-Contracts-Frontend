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


export interface UmeeMsgOpts {
  readonly sendToEth: MsgOpt;
}

export interface HasUmeeAccount {
  umee: DeepReadonly<UmeeAccount>;
}

export class Account
  extends AccountSetBase<CosmosMsgOpts & UmeeMsgOpts, HasCosmosQueries & HasUmeeQueries>
  implements HasCosmosAccount, HasUmeeAccount {
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
      tx => {
        console.log(tx);
      }
    );
  }

  protected get queries(): DeepReadonly<QueriesSetBase & HasUmeeQueries> {
    return this.queriesStore.get(this.chainId);
  }
  protected hasNoLegacyStdFeature(): boolean {
    const chainInfo = this.chainGetter.getChain(this.chainId);
    return (
      chainInfo.features != null &&
      chainInfo.features.includes('no-legacy-stdTx')
    );
  }
}