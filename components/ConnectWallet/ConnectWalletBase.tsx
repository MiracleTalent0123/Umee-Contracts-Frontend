import React, {useRef, useEffect} from 'react';
import { Text, Box, BoxProps } from 'grommet';
import ConnectedWallets from './ConnectedWallets';
import './ConnectWallet.css';

export const ConnectWalletBase = ({
  walletConnected,
  account,
  justify = 'center',
  align = 'end',
  isShowWallets,
  onClick,
  setIsShowWallets
}: {
  walletConnected: boolean;
  account?: string;
  justify?: BoxProps['justify'];
  align?: BoxProps['align'];
  isShowWallets?: Boolean,
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
        <Box
          align={align}
          justify={justify}
          className="connect-wallet-btn"
          onClick={onClick}
        > 
          <Text className='net-text' size="normal">
            Connect Wallet
          </Text>
        </Box>
      ) : (
        isShowWallets ? (
          <div ref={ref}>
            <ConnectedWallets 
              account={account}
            />
          </div>
        ) : (
          <Box
            align={align}
            justify={justify}
            className="connect-wallet-btn"
            onClick={onClick}
          > 
            <Text className="net-text" size='normal'>Connected Wallets</Text>
          </Box>
        )
      )}
    </>
  );
};
