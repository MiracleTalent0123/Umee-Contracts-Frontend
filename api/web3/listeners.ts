import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { supportedChains } from './chains';
import { displayToast, TToastType } from 'components/common/toasts';

const useListeners = (provider: ethers.providers.Provider | undefined, web3Modal: Web3Modal) => {
  const [myProvider, setMyProvider] = useState<ethers.providers.Web3Provider | null>(null);

  useEffect(() => {
    // subscribe to connect events
    const switchNetwork = async (provider: any) => {
      try {
        await provider
          .request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x' + Number(process.env.FALLBACK_CHAIN_ID).toString(16) }]
          })
          .then((value: any) => {
            const web3Provider = new ethers.providers.Web3Provider(provider);
            setMyProvider(web3Provider);
            displayToast('Connected', TToastType.TX_INFO, undefined, { toastId: 'connected' });
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
        displayToast('Connected', TToastType.TX_INFO, undefined, { toastId: 'connected' });
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
        displayToast('Switch to a supported network', TToastType.TX_INFO, undefined, {
          toastId: 'switchNetwork',
        });
        web3Modal.clearCachedProvider();
        setMyProvider(null);
      } else {
        displayToast('Network changed', TToastType.TX_INFO, undefined, { toastId: 'switchNetwork' });
        const web3Provider = new ethers.providers.Web3Provider(provider as any);
        setMyProvider(web3Provider);
      }
    });

    // subscribe to account change events
    provider.on('accountsChanged', (accounts: string[]) => {
      if (accounts.length === 0) {
        displayToast('Account disconnected', TToastType.TX_INFO, undefined, {
          toastId: 'disconnected',
        });
        web3Modal.clearCachedProvider();
        setMyProvider(null);
      } else {
        displayToast('Account changed', TToastType.TX_INFO, undefined, { toastId: 'connected' });
        web3Modal.connect();
      }
    });

    // subscribe to provider disconnection
    provider.on('disconnect', () => {
      displayToast('Account disconnected', TToastType.TX_INFO, undefined, {
        toastId: 'disconnected',
      });
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
