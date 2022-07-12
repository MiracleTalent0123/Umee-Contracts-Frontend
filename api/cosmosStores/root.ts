import { QueriesStore } from '@keplr-wallet/stores';
import { AccountStore } from '@keplr-wallet/stores';
import { DenomHelper, IndexedDBKVStore } from '@keplr-wallet/common';
import { ChainStore } from './chain';
import { ChainInfo, Keplr } from '@keplr-wallet/types';
import { EmbedChainInfos } from '../../config';
import { Queries, QueriesWithCosmosAndUmee } from './cosmos/query';
import { Account } from './cosmos/account';
import { displayToast, TToastType } from 'components/common/toasts';
import { isSlippageError } from '../../utils/tx';
import { prettifyTxError } from './prettify-tx-error';
import { KeplrWalletConnectV1 } from '@keplr-wallet/wc-client';
import { PoolIntermediatePriceStore } from './price';

export class RootStore {
  public readonly chainStore: ChainStore;
  public readonly accountStore: AccountStore<Account>;
  public readonly queriesStore: QueriesStore<QueriesWithCosmosAndUmee>;
  public readonly priceStore: PoolIntermediatePriceStore;

  constructor(getKeplr: () => Promise<Keplr | undefined> = () => Promise.resolve(undefined)) {
    this.chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);

    this.queriesStore = new QueriesStore(
      new IndexedDBKVStore('store_web_queries'),
      this.chainStore,
      getKeplr,
      QueriesWithCosmosAndUmee
    );

    this.accountStore = new AccountStore(window, Account, this.chainStore, this.queriesStore, {
      defaultOpts: {
        prefetching: false,
        suggestChain: true,
        autoInit: false,
        getKeplr,

        msgOpts: {
          ibcTransfer: {
            type: 'cosmos-sdk/MsgTransfer',
            gas: 1000000,
          },
        },

        suggestChainFn: async (keplr, chainInfo) => {
          if (keplr instanceof KeplrWalletConnectV1) {
            // Can't suggest the chain using wallet connect.
            return;
          }

          // Fetching the price from the pool's spot price is slightly hacky.
          // It is set on the custom coin gecko id start with "pool:"
          // and custom price store calculates the spot price from the pool
          // and calculates the actual price with multiplying the known price from the coingecko of the other currency.
          // But, this logic is not supported on the Keplr extension,
          // so, delivering this custom coingecko id doesn't work on the Keplr extension.
          const copied = JSON.parse(JSON.stringify(chainInfo.raw)) as ChainInfo;
          if (copied.stakeCurrency.coinGeckoId?.startsWith('pool:')) {
            // @ts-ignore
            delete copied.stakeCurrency.coinGeckoId;
          }
          for (const currency of copied.currencies) {
            if (currency.coinGeckoId?.startsWith('pool:')) {
              // @ts-ignore
              delete currency.coinGeckoId;
            }
          }
          for (const currency of copied.feeCurrencies) {
            if (currency.coinGeckoId?.startsWith('pool:')) {
              // @ts-ignore
              delete currency.coinGeckoId;
            }
          }

          await keplr.experimentalSuggestChain(copied);
        },
      },
      chainOpts: this.chainStore.chainInfos.map((chainInfo) => {
        return {
          chainId: chainInfo.chainId,
          preTxEvents: {
            onBroadcastFailed: (e?: Error) => {
              let message: string = 'Unknown error';
              if (e instanceof Error) {
                message = e.message;
              } else if (typeof e === 'string') {
                message = e;
              }

              try {
                message = prettifyTxError(message, chainInfo.currencies);
              } catch (e) {
                console.log(e);
              }

              displayToast('Transaction Failed', TToastType.TX_FAILED, {
                message,
              });
            },
            onFulfill: (tx: any) => {
              if (tx.code) {
                let message: string = tx.log;

                if (isSlippageError(tx)) {
                  message = 'Swap failed. Liquidity may not be sufficient. Try adjusting the allowed slippage.';
                } else {
                  try {
                    message = prettifyTxError(message, chainInfo.currencies);
                  } catch (e) {
                    console.log(e);
                  }
                }

                displayToast('Transaction Failed', TToastType.TX_FAILED, { message });
              }
            },
          },
        };
      }),
    });

    this.priceStore = new PoolIntermediatePriceStore(
      EmbedChainInfos[0].chainId,
      this.chainStore,
      new IndexedDBKVStore('store_web_prices'),
      {
        usd: {
          currency: 'usd',
          symbol: '$',
          maxDecimals: 2,
          locale: 'en-US',
        },
      },
      'usd'
    );
  }
}

export function createRootStore() {
  return new RootStore();
}
