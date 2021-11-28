import {
  isAndroid as checkIsAndroid,
  isMobile as checkIsMobile,
} from '@walletconnect/browser-utils';

import { action, makeObservable, observable } from 'mobx';
import { Keplr } from '@keplr-wallet/types';
import WalletConnect from '@walletconnect/client';
import { AccountStore, getKeplrFromWindow, WalletStatus } from '@keplr-wallet/stores';
import { ChainStore } from 'api/cosmosStores/chain';
import { Account } from 'api/cosmosStores/cosmos/account';
import { IJsonRpcRequest } from '@walletconnect/types';

export type WalletType = 'true' | 'extension' | 'wallet-connect' | null;
export const KeyConnectingWalletType = 'connecting_wallet_type';
export const KeyAutoConnectingWalletType = 'account_auto_connect';

export class ConnectWalletManager {
	// We should set the wallet connector when the `getKeplr()` method should return the `Keplr` for wallet connect.
	// But, account store request the `getKeplr()` method whenever that needs the `Keplr` api.
	// Thus, we should return the `Keplr` api persistently if the wallet connect is connected.
	// And, when the wallet is disconnected, we should clear this field.
	// In fact, `WalletConnect` itself is persistent.
	// But, in some cases, it acts inproperly.
	// So, handle that in the store logic too.
	protected walletConnector: WalletConnect | undefined;

	@observable
	autoConnectingWalletType: WalletType;

	constructor(
		protected readonly chainStore: ChainStore,
		protected accountStore?: AccountStore<Account>
	) {
	  this.autoConnectingWalletType = localStorage?.getItem(KeyAutoConnectingWalletType) as WalletType;
	  makeObservable(this);
	}

	// The account store needs to reference the `getKeplr()` method this on the constructor.
	// But, this store also needs to reference the account store.
	// To solve this problem, just set the account store field lazily.
	setAccountStore(accountStore: AccountStore<Account>) {
	  this.accountStore = accountStore;
	}

	protected onBeforeSendRequest = (request: Partial<IJsonRpcRequest>): void => {
	  if (!checkIsMobile()) {
	    return;
	  }

	  const deepLink = checkIsAndroid()
	    ? 'intent://wcV1#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;'
	    : 'keplrwallet://wcV1';

	  switch (request.method) {
	    case 'keplr_enable_wallet_connect_v1':
	      // Keplr mobile requests another per-chain permission for each wallet connect session.
	      // By the current logic, `enable()` is requested immediately after wallet connect is connected.
	      // However, in this case, two requests are made consecutively.
	      // So in ios, the deep link modal pops up twice and confuses the user.
	      // To solve this problem, enable on the osmosis chain does not open deep links.
	      if (request.params && request.params.length === 1 && request.params[0] === this.chainStore.current.chainId) {
	        break;
	      }
	      window.location.href = deepLink;
	      break;
	    case 'keplr_sign_amino_wallet_connect_v1':
	      window.location.href = deepLink;
	      break;
	  }

	  return;
	};

	getKeplr = (): Promise<Keplr | undefined> => {
	  const connectingWalletType =
			localStorage?.getItem(KeyAutoConnectingWalletType) || localStorage?.getItem(KeyConnectingWalletType);

	    localStorage?.removeItem(KeyConnectingWalletType);
	    localStorage?.setItem(KeyAutoConnectingWalletType, 'extension');
	    this.autoConnectingWalletType = 'extension';

	    return getKeplrFromWindow();
	};

	onWalletConnectDisconnected = (error: Error | null) => {
	  if (error) {
	    console.log(error);
	  } else {
	    this.disableAutoConnect();
	    this.disconnect();
	  }
	};

	/**
	 * Disconnect the wallet regardless of wallet type (extension, wallet connect)
	 */
	disconnect() {
	  if (this.walletConnector) {
	    if (this.walletConnector.connected) {
	      this.walletConnector.killSession();
	    }
	    this.walletConnector = undefined;
	  }

	  if (this.accountStore) {
	    for (const chainInfo of this.chainStore.chainInfos) {
	      const account = this.accountStore.getAccount(chainInfo.chainId);
	      // Clear all account.
	      if (account.walletStatus !== WalletStatus.NotInit) {
	        account.disconnect();
	      }
	    }
	  }
	}

	@action
	disableAutoConnect() {
	  localStorage?.removeItem(KeyAutoConnectingWalletType);
	  this.autoConnectingWalletType = null;
	}
}
