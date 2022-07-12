import { useEffect, useState, useMemo } from 'react';
import { ethers, getDefaultProvider } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { supportedChains } from './chains';
import { useListeners } from './listeners';

export interface Web3Custom {
  connected: boolean;
  provided: boolean;
  providerName: string;
  networkName?: string;
  account?: string;
  chainId?: number;
  provider?: ethers.providers.Provider;
  signerOrProvider?: ethers.providers.Provider | ethers.Signer;
  disconnect?: () => void;
}

interface ProviderApiKeys {
  infura?: string;
  alchemy?: string;
  etherscan?: string;
}

let web3Modal: Web3Modal;

if (window.navigator) {
  web3Modal = new Web3Modal({
    providerOptions: {
      // walletconnect: {
      //   package: WalletConnectProvider,
      //   options: {
      //     infuraId: process.env.INFURA_API_KEY,
      //   },
      // },
    },
    cacheProvider: true,
    theme: 'light',
  });
}

export const defaultWeb3: Web3Custom = {
  connected: false,
  provided: false,
  providerName: 'not connected',
};

const makeInjectedProvider = async (web3Provider: ethers.providers.Web3Provider) => {
  const local =
    process.env.LOCAL_CHAIN_ID &&
    (await web3Provider.getNetwork()).chainId === parseInt(process.env.LOCAL_CHAIN_ID, 10);

  const customProvider: Web3Custom = {
    connected: true,
    provided: true,
    providerName: 'injected provider',
    networkName: local ? 'localhost' : (await web3Provider.getNetwork()).name,
    account: await web3Provider.getSigner().getAddress(),
    chainId: (await web3Provider.getNetwork()).chainId,
    provider: web3Provider as ethers.providers.Provider,
    signerOrProvider: web3Provider.getSigner(),
  };

  return customProvider;
};

const getInjectedProvider = (web3Modal: Web3Modal) => {
  return new Promise<Web3Custom>((resolve, reject) => {
    web3Modal
      .connect()
      .then((userSuppliedProvider) => makeInjectedProvider(new ethers.providers.Web3Provider(userSuppliedProvider)))
      .then(resolve)
      .catch(reject);
  });
};

const getLocalProvider = () => {
  const localProvider = new ethers.providers.JsonRpcProvider(process.env.LOCAL_PROVIDER_URL);
  return new Promise<Web3Custom>((resolve, reject) => {
    localProvider
      .detectNetwork()
      .then((network) => {
        resolve({
          connected: true,
          provided: true,
          providerName: 'local provider',
          networkName: 'localhost',
          account: '',
          chainId: network.chainId,
          provider: localProvider,
          signerOrProvider: localProvider,
        });
      })
      .catch(reject);
  });
};

const getFallbackProvider = () => {
  const providerApiKeys: ProviderApiKeys = {};
  if (process.env.INFURA_API_KEY) providerApiKeys.infura = process.env.INFURA_API_KEY;
  if (process.env.ALCHEMY_API_KEY) providerApiKeys.alchemy = process.env.ALCHEMY_API_KEY;
  if (process.env.ETHERSCAN_API_KEY) providerApiKeys.etherscan = process.env.ETHERSCAN_API_KEY;

  const network = ethers.providers.getNetwork(parseInt(process.env.FALLBACK_CHAIN_ID || '0', 10));
  const defaultProvider = getDefaultProvider(network, providerApiKeys);

  const provider: Web3Custom = {
    connected: true,
    provided: false,
    providerName: 'fallback provider',
    networkName: defaultProvider.network.name,
    account: '',
    chainId: defaultProvider.network.chainId,
    provider: defaultProvider,
    signerOrProvider: defaultProvider,
  };

  return provider;
};

const useProvider = () => {
  const [web3Provider, setWeb3Provider] = useState(defaultWeb3);

  const provider = useMemo(() => {
    if (web3Provider.provider) {
      return (web3Provider.provider as ethers.providers.Web3Provider).provider as ethers.providers.Provider;
    } else {
      return web3Provider.provider;
    }
  }, [web3Provider.provider]);

  const reloadedProvider = useListeners(provider, web3Modal);

  useEffect(() => {
    if (!reloadedProvider) {
      setWeb3Provider(defaultWeb3);
    } else {
      makeInjectedProvider(reloadedProvider).then(setWeb3Provider).catch(console.error);
    }
  }, [reloadedProvider]);

  useEffect(() => {
    if (web3Provider.connected) return;

    if (web3Modal.cachedProvider && !web3Provider.provider) {
      getInjectedProvider(web3Modal).then(setWeb3Provider).catch(console.error);

      return;
    }

    if (web3Provider.provider) {
      web3Provider.provider
        .getNetwork()
        .then((network) => {
          if (supportedChains().includes(network.chainId)) {
            getInjectedProvider(web3Modal).then(setWeb3Provider).catch(console.error);

            return;
          }
        })
        .catch(console.error);
    }

    if (process.env.NODE_ENV === 'development') {
      getLocalProvider()
        .then(setWeb3Provider)
        .catch(() => setWeb3Provider(getFallbackProvider()));

      return;
    }

    setWeb3Provider(getFallbackProvider());
  }, [web3Provider.connected, web3Provider.provider]);

  
  const disconnect = () => {
    web3Modal.clearCachedProvider();
    setWeb3Provider(defaultWeb3);
  };

  return { ...web3Provider, disconnect };
};

const connect = () => {
  web3Modal.connect().catch(console.error);
};

export { useProvider, connect };
