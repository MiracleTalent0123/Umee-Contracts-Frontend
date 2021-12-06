import { QueriesStore } from '@keplr-wallet/stores';
import { AccountStore } from '@keplr-wallet/stores';
import { IndexedDBKVStore } from '@keplr-wallet/common';
import { ChainStore } from './chain';
import { ChainInfo } from '@keplr-wallet/types';
import { EmbedChainInfos } from '../../config';
import { Queries } from './cosmos/query';
import { Account } from './cosmos/account';
import { displayToast, TToastType } from 'components/common/toasts';
import { isSlippageError } from '../../utils/tx';
import { prettifyTxError } from './prettify-tx-error';
import { KeplrWalletConnectV1 } from '@keplr-wallet/wc-client';
import { ConnectWalletManager } from '../../dialogs/connect-wallet';

export class RootStore {
	public readonly chainStore: ChainStore;
	public readonly accountStore: AccountStore<Account>;
	public readonly queriesStore: QueriesStore<Queries>;
	public readonly connectWalletManager: ConnectWalletManager;

	constructor() {
	  this.chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
	  this.connectWalletManager = new ConnectWalletManager(this.chainStore);

	  this.queriesStore = new QueriesStore(
	    new IndexedDBKVStore('store_web_queries'),
	    this.chainStore,
	    this.connectWalletManager.getKeplr,
	    Queries
	  );

	  this.accountStore = new AccountStore(window, Account, this.chainStore, this.queriesStore, {
	    defaultOpts: {
	      prefetching: false,
	      suggestChain: true,
	      autoInit: false,
	      getKeplr: this.connectWalletManager.getKeplr,

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
	    chainOpts: this.chainStore.chainInfos.map(chainInfo => {
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

	            displayToast(TToastType.TX_FAILED, {
	              message,
	            });
	          },
	          onBroadcasted: (txHash: Uint8Array) => {
	            displayToast(TToastType.TX_BROADCASTING);
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

	              displayToast(TToastType.TX_FAILED, { message });
	            } else {
	              displayToast(TToastType.TX_SUCCESSFUL, {
	                customLink: chainInfo.raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
	              });
	            }
	          },
	        },
	      };
	    }),
	  });
	  // this.connectWalletManager.setAccountStore(this.accountStore);
	}
}

export function createRootStore() {
  return new RootStore();
}
