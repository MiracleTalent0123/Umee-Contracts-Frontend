import React, { useEffect, useMemo, useState } from 'react';
import { Box } from 'grommet';
import { ConnectType, useWallet, WalletStatus } from '@terra-money/wallet-provider';
import Metamask from '../../public/images/metamask-fox.svg';
import Keplr from '../../public/images/keplr-icon.png';
import { useStore } from '../../api/cosmosStores';
import { useAccountConnection } from '../../lib/hooks/account/useAccountConnection';
import { connect } from 'api/web3/providers';
import { useWeb3 } from 'api/web3';
import './ConnectWallet.css';
import Wallet from './ConnectedWallet';
import ConnectTerraWallet from './ConnectTerraWallet';
import { observer } from 'mobx-react-lite';

const ConnectedWalletList: React.FC<{}> = () => {
  const { isAccountConnected, isCosmosAccountConnected, connectAccount, disconnectAccount } = useAccountConnection();
  const terraWallet = useWallet();
  const { accountStore, chainStore } = useStore();

  const cosmosAccount = accountStore.getAccount('gaia-umeemania-1');
  const umeeAddress = accountStore.getAccount(chainStore.current.chainId).bech32Address;

  const terraKeplrAccount = accountStore.getAccount('terra-umeemania-1');
  const terraKeplrAddress = terraKeplrAccount.bech32Address;

  const osmoAccount = accountStore.getAccount('osmosis-umeemania-1');
  const osmoAddress = osmoAccount.bech32Address;

  const junoAccount = accountStore.getAccount('juno-umeemania-1');
  const junoAddress = junoAccount.bech32Address;

  const KeyConnectingWalletType = 'connecting_wallet_type';
  const web3 = useWeb3();
  const [open, setOpen] = useState<string>('');
  const [showTerraConnectModal, setShowTerraConnectModal] = useState<boolean>(false);

  const terraExtension = useMemo(() => {
    return terraWallet && terraWallet.availableConnectTypes.includes(ConnectType.EXTENSION) ? true : false;
  }, [terraWallet]);

  const terraStationAddress = useMemo(() => {
    return terraWallet && terraWallet.status === WalletStatus.WALLET_CONNECTED
      ? terraWallet.wallets[0].terraAddress
      : '';
  }, [terraWallet]);

  const terraConnected = useMemo(() => {
    if (terraKeplrAddress) return 'keplr';
    if (terraStationAddress) return 'terra';
  }, [terraStationAddress, terraKeplrAddress]);

  const terraKeplrConnect = () => {
    terraKeplrAccount.init();
    localStorage.setItem('terra_keplr_connected', 'connected');
  };

  const terraKeplrDisconnect = () => {
    terraKeplrAccount.disconnect();
    localStorage.removeItem('terra_keplr_connected');
  };

  return (
    <>
      {showTerraConnectModal ? (
        <ConnectTerraWallet
          onConnectKeplr={
            terraKeplrAccount
              ? () => {
                terraKeplrConnect();
                setShowTerraConnectModal(false);
              }
              : undefined
          }
          onConnectTerra={
            terraExtension
              ? () => {
                terraWallet.connect(ConnectType.EXTENSION);
                setShowTerraConnectModal(false);
              }
              : undefined
          }
          onClose={() => setShowTerraConnectModal(false)}
        />
      ) : null}
      <Box background="clrBackground" border={{ size: '1px', color: 'clrBoxBorder' }} className="connected-wallets">
        <Wallet
          connected={!!web3.account}
          chainName="Ethereum"
          symbol='WETH'
          walletName="Metamask"
          walletLogo={Metamask}
          walletAddress={web3.account || ''}
          onConnect={connect}
          open={open}
          handler={(chainName) => setOpen(chainName)}
          explorerLink={`https://${
            web3.chainId == 1
              ? 'etherscan.com'
              : web3.chainId == 4
                ? 'rinkeby.etherscan.io'
                : web3.chainId == 5
                  ? 'goerli.etherscan.io'
                  : 'kovan.etherscan.io'
          }/address`}
          disconnect={web3.disconnect}
        />
        <Wallet
          connected={!!(isAccountConnected && umeeAddress)}
          chainName={'Umee'}
          symbol={'UMEE'}
          walletName="Keplr"
          walletLogo={Keplr}
          walletAddress={umeeAddress}
          onConnect={() => {
            localStorage.setItem(KeyConnectingWalletType, 'extension');
            connectAccount();
          }}
          disconnect={() => disconnectAccount()}
          margin={{ top: 'small' }}
          open={open}
          handler={(chainName) => setOpen(chainName)}
          explorerLink="https://explorer.umeemania-1.network.umee.cc/umee/account"
        />
        <Wallet
          connected={!!(isCosmosAccountConnected && cosmosAccount.bech32Address)}
          chainName="Cosmoshub"
          symbol={'ATOM'}
          walletName="Keplr"
          walletLogo={Keplr}
          walletAddress={cosmosAccount.bech32Address}
          onConnect={() => {
            cosmosAccount.init();
            localStorage.setItem('cosmos_connected', 'connected');
          }}
          disconnect={() => {
            cosmosAccount.disconnect();
            localStorage.removeItem('cosmos_connected');
          }}
          margin={{ top: 'small' }}
          open={open}
          handler={(chainName) => setOpen(chainName)}
          explorerLink="https://explorer.umeemania-1.network.umee.cc/cosmos/account"
        />
        <Wallet
          connected={!!(osmoAddress)}
          chainName="Osmosis"
          symbol={'OSMO'}
          walletName="Keplr"
          walletLogo={Keplr}
          walletAddress={osmoAddress}
          onConnect={() => {
            localStorage.setItem('osmo_connected', 'connected');
            osmoAccount.init();
          }}
          disconnect={() => {
            osmoAccount.disconnect();
            localStorage.removeItem('osmo_connected');
          }}
          margin={{ top: 'small' }}
          open={open}
          handler={(chainName) => setOpen(chainName)}
          explorerLink="https://explorer.umeemania-1.network.umee.cc/osmosis/account"
        />
        <Wallet
          connected={!!(junoAddress)}
          chainName="Juno"
          symbol={'JUNO'}
          walletName="Keplr"
          walletLogo={Keplr}
          walletAddress={junoAddress}
          onConnect={() => {
            localStorage.setItem('juno_connected', 'connected');
            junoAccount.init();
          }}
          disconnect={() => {
            junoAccount.disconnect();
            localStorage.removeItem('juno_connected');
          }}
          margin={{ top: 'small' }}
          open={open}
          handler={(chainName) => setOpen(chainName)}
          explorerLink="https://explorer.umeemania-1.network.umee.cc/juno/account"
        />
      </Box>
    </>
  );
};

export default observer(ConnectedWalletList);
