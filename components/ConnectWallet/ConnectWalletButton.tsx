import * as React from 'react';
import { connectKeplr } from '../utils/Keplr';
import { connect } from 'api/web3/providers';
import { useWeb3 } from 'api/web3';
import truncate from 'lib/truncate';
import { ConnectWalletBase } from './ConnectWalletBase';
import { Button } from 'grommet';
import './ConnectWallet.css';
import { ConnectToKeplr } from 'components/connectToKeplr';
import { useEffect } from 'react';

export const ConnectWalletButton = () => {
  const web3 = useWeb3();
  const displayNames: { [key: number]: string } = {
    0: 'Unsupported Network',
    1: 'Ethereum Mainnet',
    4: 'Rinkeby Test Network',
    42: 'Kovan Test Network',
  };
  const network = displayNames[web3.chainId || 0];
  const [isShowWallets, setIsShowWallets] = React.useState<boolean>(false);

  useEffect(() => {
    ConnectToKeplr();
  });
  
  const connectWallet = () => {
    connect();
    connectKeplr();
    ConnectToKeplr(); // Adds Atom test net token to keplr
  };

  const showConnectedWallets = () => {
    setIsShowWallets(true);
  };

  return (
    <>
      <Button className="con-wal" alignSelf="end">
        <ConnectWalletBase 
          account={web3.account ? truncate(web3.account, 7, 4) : null} 
          network={web3.account ? network : 'Connect Wallet'} 
          align='center' 
          isShowWallets={isShowWallets}
          onClick={web3.account ? showConnectedWallets : connectWallet}
          setIsShowWallets={(isShow: boolean) => setIsShowWallets(isShow)}
        />
      </Button>
    </>
  );
};
