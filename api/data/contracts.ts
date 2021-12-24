import { useState, useEffect } from 'react';
import { useWeb3 } from '../web3';
import { useDataProviderAddress, useLendingPoolAddress } from '../web3/chains';
import {
  UmeeProtocolDataProvider,
  UmeeProtocolDataProviderFactory,
  LendingPool,
  LendingPoolFactory,
  ERC20,
  ERC20Factory,
  MockDAI,
  MockDAIFactory,
  MockUSDC,
  MockUSDCFactory
} from '../types';

const useUmeeProtocolDataProviderContract = () => {
  const { chainId, signerOrProvider } = useWeb3();
  const dataProviderAddress = useDataProviderAddress(chainId);
  const [UmeeProtocolDataProviderContract, setUmeeProtocolDataProviderContract] = useState<UmeeProtocolDataProvider>();

  useEffect(() => {
    if (!chainId || !dataProviderAddress || !signerOrProvider) {
      setUmeeProtocolDataProviderContract(undefined);
      return;
    }

    setUmeeProtocolDataProviderContract(UmeeProtocolDataProviderFactory.connect(dataProviderAddress, signerOrProvider));
  }, [chainId, dataProviderAddress, signerOrProvider]);

  return UmeeProtocolDataProviderContract;
};

const useLendingPoolContract = () => {
  const { chainId, signerOrProvider } = useWeb3();
  const lendingPoolAddress = useLendingPoolAddress(chainId);
  const [LendingPoolContract, setLendingPoolContract] = useState<LendingPool>();

  useEffect(() => {
    if (!chainId || !lendingPoolAddress || !signerOrProvider) {
      setLendingPoolContract(undefined);
      return;
    }

    setLendingPoolContract(LendingPoolFactory.connect(lendingPoolAddress, signerOrProvider));
  }, [chainId, lendingPoolAddress, signerOrProvider]);

  return LendingPoolContract;
};

const useErc20DetailedContract = ( asset: string) => {
  const { chainId, signerOrProvider } = useWeb3();
  const Erc20DetailedAddress = asset;

  const [Erc20DetailedAddressContract, setErc20DetailedAddressContract] = useState<ERC20>();

  useEffect(() => {
    if (!chainId || !Erc20DetailedAddress || !signerOrProvider) {
      setErc20DetailedAddressContract(undefined);
      return;
    }

    setErc20DetailedAddressContract(ERC20Factory.connect(Erc20DetailedAddress, signerOrProvider));
  }, [chainId, Erc20DetailedAddress, signerOrProvider]);

  return Erc20DetailedAddressContract;
};

const useErc20MintContract = (asset: string) => {
  const { chainId, signerOrProvider } = useWeb3();
  const Erc20DetailedAddress = asset;

  const [Erc20DetailedAddressContract, setErc20DetailedAddressContract] = useState<MockDAI>();

  useEffect(() => {
    if (!chainId || !Erc20DetailedAddress || !signerOrProvider) {
      setErc20DetailedAddressContract(undefined);
      return;
    }

    setErc20DetailedAddressContract(MockDAIFactory.connect(Erc20DetailedAddress, signerOrProvider));
  }, [chainId, Erc20DetailedAddress, signerOrProvider]);

  return Erc20DetailedAddressContract;
};

const useErc20DetailedContracts = (assets: string[]) => {
  const { chainId, signerOrProvider } = useWeb3();
  const Erc20DetailedAddresses = assets;
  const [Erc20DetailedAddressContracts, setErc20DetailedAddressContracts] = useState<ERC20[]>();
  
  useEffect(() => {
    if (!chainId || !Erc20DetailedAddresses?.length || !signerOrProvider) {
      setErc20DetailedAddressContracts(undefined);
      return;
    }
    const erc20s = Erc20DetailedAddresses.map(Erc20DetailedAddress => {
      return ERC20Factory.connect(Erc20DetailedAddress, signerOrProvider);
    });
    setErc20DetailedAddressContracts(erc20s);
  }, [chainId, Erc20DetailedAddresses, signerOrProvider]);
  
  return Erc20DetailedAddressContracts;
};

export { 
  useUmeeProtocolDataProviderContract,
  useLendingPoolContract,
  useErc20DetailedContract,
  useErc20DetailedContracts,
  useErc20MintContract
};