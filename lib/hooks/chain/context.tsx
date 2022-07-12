import React, { createContext, useContext, useState } from 'react';

export enum Chain {
  ethereum = 'ethereum',
  cosmos = 'cosmos',
}

export type ChainContextType = {
  chainMode: Chain;
  setChainMode: (Chain: Chain) => void;
};

export const ChainContext = createContext<ChainContextType | null>(null);

export const ChainProvider = ({ children }: { children: React.ReactNode }) => {
  const [chainMode, setChainMode] = useState<Chain>(Chain.cosmos);

  return <ChainContext.Provider value={{ chainMode, setChainMode }}>{children}</ChainContext.Provider>;
};

export const useChain = () => {
  const context = useContext(ChainContext);

  if (!context) {
    throw new Error('You forgot to use ChainProvider');
  }

  return context;
};
