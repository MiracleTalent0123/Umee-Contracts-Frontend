import { useState, useEffect } from 'react';

const supportedChains = () => {
  const dev = process.env.NODE_ENV !== 'production' ? [parseInt(process.env.LOCAL_CHAIN_ID || '0', 10)] : [];
  const supported = [...dev, ...(process.env.SUPPORTED_CHAIN_IDS || '').split(',').map(i => parseInt(i, 10))];
  return supported;
};

const useDataProviderAddress = (chainId: number | undefined) => {
  const [addresses, setAddresses] = useState('');

  useEffect(() => {
    if (!chainId) return;

    if (
      process.env.LOCAL_CHAIN_ID &&
      chainId === parseInt(process.env.LOCAL_CHAIN_ID, 10)
    ) {
      if (!process.env.LOCAL_DATA_PROVIDER_ADDRESS) {
        console.error('No local addresses have been set!');
        setAddresses('');
        return;
      }

      setAddresses(process.env.LOCAL_DATA_PROVIDER_ADDRESS);
    } else {
      if (!process.env.DATA_PROVIDER_ADDRESSES) {
        console.error('No addresses have been set!');
        setAddresses('');
        return;
      }

      const networksAddresses = JSON.parse(process.env.DATA_PROVIDER_ADDRESSES);
      const dataProviderAddress: string = networksAddresses[chainId];

      if (!dataProviderAddress) {
        console.error(`Data provider address for network ${chainId} is not set. Check settings or wallet network.`);
        setAddresses('');
        return;
      }

      setAddresses(dataProviderAddress);
    }
  }, [chainId]);

  return addresses;
};

const useLendingPoolAddress = (chainId: number | undefined) => {
  const [addresses, setAddresses] = useState('');

  useEffect(() => {
    if (!chainId) return;

    if (process.env.LOCAL_CHAIN_ID && chainId === parseInt(process.env.LOCAL_CHAIN_ID, 10)) {
      if (!process.env.LOCAL_LENDING_POOL_ADDRESS) {
        console.error('No local addresses have been set!');
        setAddresses('');
        return;
      }

      setAddresses(process.env.LOCAL_LENDING_POOL_ADDRESS);
    } else {
      if (!process.env.LENDING_POOL_ADDRESSES) {
        console.error('No addresses have been set!');
        setAddresses('');
        return;
      }

      const networksAddresses = JSON.parse(process.env.LENDING_POOL_ADDRESSES);
      const LendingPoolAddress: string = networksAddresses[chainId];

      if (!LendingPoolAddress) {
        console.error(`Lending pool address for network ${chainId} is not set. Check settings or wallet network.`);
        setAddresses('');
        return;
      }

      setAddresses(LendingPoolAddress);
    }
  }, [chainId]);

  return addresses;
};

export {
  supportedChains,
  useDataProviderAddress,
  useLendingPoolAddress,
};
