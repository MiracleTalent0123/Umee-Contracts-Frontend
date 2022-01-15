import React, { createContext, useContext } from 'react';
import { Web3Custom, useProvider, defaultWeb3 } from './providers';

interface Web3RootProps {
  children: React.ReactNode
}

const createWeb3Root = (context: React.Context<Web3Custom>) => {
  const Web3Root: React.FC<Web3RootProps> = ({ children }) => {
    const web3Provider = useProvider();

    return (
      <context.Provider value={web3Provider}>
        {children}
      </context.Provider>
    );
  };

  return Web3Root;
};

const web3Context = createContext(defaultWeb3);

const Web3Provider = createWeb3Root(web3Context);

const useWeb3 = () => {
  return useContext(web3Context);
};

export { Web3Provider, useWeb3 };
