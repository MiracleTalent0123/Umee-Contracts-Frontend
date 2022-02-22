import React, { FunctionComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { WalletType } from '../../../dialogs';
import { useStore } from '../../../api/cosmosStores';
import { WalletStatus } from '@keplr-wallet/stores';
import { observer } from 'mobx-react-lite';

export interface AccountConnection {
  isCosmosAccountConnected: boolean;
  isAccountConnected: true | WalletType;
  disconnectAccount: () => Promise<void>;
  connectAccount: () => void;
}

export const AccountConnectionContext = React.createContext<AccountConnection | null>(null);

export const AccountConnectionProvider: FunctionComponent = observer(({ children }) => {
  const { chainStore, accountStore, connectWalletManager } = useStore();
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const account = accountStore.getAccount(chainStore.current.chainId);
  const counterPartyAccount = accountStore.getAccount('cosmoshub-4');

  // Even though the wallet is not loaded, if `shouldAutoConnectAccount` is true, set the `isAccountConnected` as true.
  // Because the initing the wallet is asyncronous, when users enter the site the wallet is seen as not loaded.
  // To reduce this problem, if the wallet is connected when users enter the site, just assume that the wallet is already connected.
  const isAccountConnected =
    account.walletStatus === WalletStatus.Loaded || connectWalletManager.autoConnectingWalletType;

  const isCosmosAccountConnected =
    counterPartyAccount.walletStatus === WalletStatus.Loaded;

  const disconnectAccount = useCallback(async () => {
    connectWalletManager.disableAutoConnect();
    connectWalletManager.disconnect();
  }, [connectWalletManager]);

  const openDialog = useCallback(() => setIsOpenDialog(true), []);
  const closeDialog = useCallback(() => setIsOpenDialog(false), []);

  const connectAccount = useCallback(() => {
    account.init();
  }, [account]);

  useEffect(() => {
    if (!!connectWalletManager.autoConnectingWalletType && account.walletStatus === WalletStatus.NotInit) {
      account.init();
    }
  }, [account, connectWalletManager.autoConnectingWalletType]);

  useEffect(() => {
    if (counterPartyAccount.walletStatus === WalletStatus.NotInit) {
      counterPartyAccount.init();
    }
  }, [counterPartyAccount]);

  /*
	    Disconnect the accounts if the wallet doesn't exist or the connection rejected.
	    Belows look somewhat strange in React philosophy.
	    But, is is hard to use the `useEffect` hook because the references of the chain store and account store is persistent.
	    Even though belows will be executed on rerendering of this component,
	    it is likely this component will not be rerendered frequently becaouse this component only handle the connection of account.
	    If the some account's wallet status changed, the observer makes this component be rerendered.
	 */
  for (const chainInfo of chainStore.chainInfos) {
    const account = accountStore.getAccount(chainInfo.chainId);
    if (account.walletStatus === WalletStatus.NotExist || account.walletStatus === WalletStatus.Rejected) {
      if (chainInfo.chainId === chainStore.current.chainId) {
        connectWalletManager.disableAutoConnect();
        connectWalletManager.disconnect();
      } else {
        account.disconnect();
      }
    }
  }

  // temp code
  const ref = useRef(null);

  return (
    <AccountConnectionContext.Provider
      value={useMemo(() => {
        return {
          isCosmosAccountConnected,
          isAccountConnected,
          disconnectAccount,
          connectAccount,
        };
      }, [connectAccount, disconnectAccount, isAccountConnected, isCosmosAccountConnected])}
    >
      {children}
    </AccountConnectionContext.Provider>
  );
});
