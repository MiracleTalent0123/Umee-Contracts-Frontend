import React, { useState } from 'react';
import { Image, Text } from 'grommet';
import ConnectedWallets from './ConnectedWallets';
import './ConnectWallet.css';
import { PrimaryBtn, WalletsModal } from 'components/common';
import WalletIcon from '../../public/images/wallet-icon.png';

interface WalletsButtonProps {
  handler: () => void;
}

interface ConnectWalletBaseProps {
  walletConnected: boolean;
  isShowWallets?: Boolean;
  onClick?: () => void;
  setIsShowWallets?: (isShow: boolean) => void;
}

const WalletsButton: React.FC<WalletsButtonProps> = ({ handler }) => (
  <PrimaryBtn
    fullWidth
    height="36px"
    textSize="xsmall"
    round="large"
    className={'connect-wallet'}
    onClick={() => handler()}
    width="90px"
  >
    <Image src={WalletIcon} alt="wallet icon" />
    <Text size="xsmall" margin={{ left: '10px' }}>
      Wallets
    </Text>
  </PrimaryBtn>
);

export const ConnectWalletBase: React.FC<ConnectWalletBaseProps> = ({
  walletConnected,
  isShowWallets,
  onClick,
  setIsShowWallets,
}) => {
  const [walletsShow, setWalletsShow] = useState<Boolean>(false);

  return (
    <>
      <WalletsButton handler={() => setWalletsShow(true)} />
      {walletsShow && (
        <WalletsModal onClose={() => setWalletsShow(false)}>
          <ConnectedWallets />
        </WalletsModal>
      )}
    </>
  );
};
