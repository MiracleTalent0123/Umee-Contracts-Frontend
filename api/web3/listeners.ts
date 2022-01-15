import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import Web3Modal from 'web3modal';
import { supportedChains } from './chains';

const defaultOptions = {
  hideProgressBar: true,
};

const useListeners = (provider: ethers.providers.Provider | undefined, web3Modal: Web3Modal) => {
  const [myProvider, setMyProvider] = useState<ethers.providers.Web3Provider | null>(null);

  useEffect(() => {
    // subscribe to connect events
    const switchNetwork = async (provider: any) => {
      try {
        await provider
          .request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x5' }] })
          .then((value: any) => {
            const web3Provider = new ethers.providers.Web3Provider(provider);
            setMyProvider(web3Provider);
            toast('Connected', { ...defaultOptions, toastId: 'connected' });
          });
      } catch (error) {
        web3Modal.clearCachedProvider();
        setMyProvider(null);
        console.error(error);
      }
    };

    web3Modal.on('connect', (provider) => {
      if (!supportedChains().includes(parseInt(provider.chainId))) {
        switchNetwork(provider);
      } else {
        const web3Provider = new ethers.providers.Web3Provider(provider);
        setMyProvider(web3Provider);
        toast('Connected', { ...defaultOptions, toastId: 'connected' });
      }
    });

    return () => {
      web3Modal.off('connect');
    };
  }, [web3Modal]);

  useEffect(() => {
    if (!provider) return;

    // subscribe to Network events
    provider.on('chainChanged', (chainId: string) => {
      if (!supportedChains().includes(parseInt(chainId))) {
        toast('Switch to a supported network', { ...defaultOptions, toastId: 'switchNetwork' });
        web3Modal.clearCachedProvider();
        setMyProvider(null);
      }
      // else {
      //   toast('Network changed', { toastId: 'switchNetwork' });
      //   const web3Provider = new ethers.providers.Web3Provider(provider as any);
      //   setMyProvider(web3Provider);
      // }
    });

    // subscribe to account change events
    provider.on('accountsChanged', (accounts: string[]) => {
      if (accounts.length === 0) {
        toast('Account disconnected', { ...defaultOptions, toastId: 'disconnected' });
        web3Modal.clearCachedProvider();
        setMyProvider(null);
      } else {
        toast('Account changed', { ...defaultOptions, toastId: 'connected' });
        web3Modal.connect();
      }
    });

    // subscribe to provider disconnection
    provider.on('disconnect', () => {
      toast('Account disconnected', { ...defaultOptions, toastId: 'disconnected' });
      web3Modal.clearCachedProvider();
      setMyProvider(null);
    });

    // unsubscribe
    return () => {
      provider.removeAllListeners();
    };
  }, [provider, web3Modal]);

  return myProvider;
};

export { useListeners };
