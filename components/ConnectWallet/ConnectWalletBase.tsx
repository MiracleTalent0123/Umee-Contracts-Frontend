import React, { useRef, useEffect } from 'react';
import { Text, Box, BoxProps } from 'grommet';
import ConnectedWallets from './ConnectedWallets';
import './ConnectWallet.css';
import { PrimaryBtn } from 'components/common';

export const ConnectWalletBase = ({
  walletConnected,
  account,
  justify = 'center',
  align = 'end',
  isShowWallets,
  onClick,
  setIsShowWallets,
}: {
  walletConnected: boolean;
  account?: string;
  justify?: BoxProps['justify'];
  align?: BoxProps['align'];
  isShowWallets?: Boolean;
  onClick: () => void;
  setIsShowWallets: (isShow: boolean) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isShowWallets && ref.current && !ref.current.contains(e.target)) {
        setIsShowWallets(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isShowWallets, setIsShowWallets]);

  return (
    <>
      {!walletConnected ? (
        <PrimaryBtn
          pad={{ vertical: 'small', horizontal: 'medium' }}
          textSize="medium"
          round="large"
          text="Connect Wallet"
          className="connect-wallet"
          onClick={onClick}
        />
      ) : isShowWallets ? (
        <div ref={ref}>
          <ConnectedWallets account={account} />
        </div>
      ) : (
        <PrimaryBtn
          pad={{ vertical: 'small', horizontal: 'medium' }}
          textSize="medium"
          round="large"
          text="Connected Wallets"
          className="connect-wallet"
          onClick={() => setIsShowWallets(true)}
        />
      )}
    </>
  );
};
