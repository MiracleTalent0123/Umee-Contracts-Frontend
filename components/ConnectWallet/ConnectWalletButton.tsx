import * as React from 'react';
import { connect } from 'api/web3/providers';
import { useWeb3 } from 'api/web3';
import truncate from 'lib/truncate';
import { ConnectWalletBase } from './ConnectWalletBase';
import { Box } from 'grommet';
import { useStore } from '../../api/cosmosStores';
import { useAccountConnection } from '../../lib/hooks/account/useAccountConnection';
import './ConnectWallet.css';

export const ConnectWalletButton = () => {
  const { isAccountConnected } = useAccountConnection();
  const { accountStore, chainStore } = useStore();

  const web3 = useWeb3();
  // const displayNames: { [key: number]: string } = {
  //   0: 'Unsupported Network',
  //   1: 'Ethereum Mainnet',
  //   4: 'Rinkeby Test Network',
  //   42: 'Kovan Test Network',
  // };
  // const network = displayNames[web3.chainId || 0];
  const [isShowWallets, setIsShowWallets] = React.useState<boolean>(false);
  const [walletConnected, setWalletConnected] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (web3.account || (isAccountConnected && accountStore.getAccount(chainStore.current.chainId).bech32Address)) {
      setWalletConnected(true);
    } else setWalletConnected(false);
  }, [accountStore, chainStore, isAccountConnected, web3]);

  const connectWallet = () => {
    connect();
    accountStore.getAccount(chainStore.current.chainId).init();
  };

  const showConnectedWallets = () => {
    setIsShowWallets(true);
  };

  return (
    <>
      <Box className="con-wal" alignSelf="end">
        <ConnectWalletBase
          account={web3.account ? truncate(web3.account, 7, 4) : null}
          walletConnected={walletConnected}
          align="center"
          isShowWallets={isShowWallets}
          onClick={
            web3.account || (isAccountConnected && accountStore.getAccount(chainStore.current.chainId).bech32Address)
              ? showConnectedWallets
              : connectWallet
          }
          setIsShowWallets={(isShow: boolean) => setIsShowWallets(isShow)}
        />
      </Box>
    </>
  );
};
