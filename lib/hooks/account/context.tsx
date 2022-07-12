import React, { useCallback, useMemo } from 'react';
import { useStore } from '../../../api/cosmosStores';
import { WalletStatus } from '@keplr-wallet/stores';
import { observer } from 'mobx-react-lite';

export interface AccountConnection {
  isAccountConnected: boolean;
  disconnectAccount: () => Promise<void>;
  connectAccount: () => void;
}

export const AccountConnectionContext = React.createContext<AccountConnection | null>(null);

export default observer(({ children }) => {
  const { chainStore, accountStore } = useStore();

  const account = accountStore.getAccount(chainStore.current.chainId);
  // Even though the wallet is not loaded, if `shouldAutoConnectAccount` is true, set the `isAccountConnected` as true.
  // Because the initing the wallet is asyncronous, when users enter the site the wallet is seen as not loaded.
  // To reduce this problem, if the wallet is connected when users enter the site, just assume that the wallet is already connected.
  const isAccountConnected = account.walletStatus === WalletStatus.Loaded;

  const disconnectAccount = useCallback(async () => {
    account.disconnect();
  }, [account]);

  const connectAccount = useCallback(() => {
    account.init();
  }, [account]);

  return (
    <AccountConnectionContext.Provider
      value={useMemo(() => {
        return {
          isAccountConnected,
          disconnectAccount,
          connectAccount,
        };
      }, [connectAccount, disconnectAccount, isAccountConnected])}
    >
      {children}
    </AccountConnectionContext.Provider>
  );
});
