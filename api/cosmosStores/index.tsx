import React, { FunctionComponent, useState } from 'react';
import { Observer } from 'mobx-react-lite';

import { RootStore } from './root';
import { useKeplr } from 'lib/hooks/useKeplr';
import { AccountInitManagement } from './account-init-management';

const storeContext = React.createContext<RootStore | null>(null);

export const StoreProvider: FunctionComponent = ({ children }) => {
  const { getKeplr } = useKeplr();
  const [rootStore] = useState(() => new RootStore(getKeplr));

  return (
    <storeContext.Provider value={rootStore}>
      <AccountInitManagement />
      {children}
    </storeContext.Provider>
  );
};

export const StoreConsumer: FunctionComponent<{
  children: (rootStore: RootStore) => React.ReactNode;
}> = ({ children }) => {
  return (
    <storeContext.Consumer>
      {(rootStore) => {
        if (!rootStore) {
          throw new Error('You have forgot to use StoreProvider');
        }

        return (
          <Observer>
            {() => {
              return children(rootStore) as any;
            }}
          </Observer>
        );
      }}
    </storeContext.Consumer>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('You have forgot to use StoreProvider');
  }
  return store;
};
