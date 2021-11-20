import React, {useRef, useEffect} from 'react';
import { Text, Box, BoxProps } from 'grommet';
import ConnectedWallets from './ConntedWallets';
import './ConnectWallet.css';

export const ConnectWalletBase = ({
  network,
  account,
  justify = 'center',
  align = 'end',
  isShowWallets,
  onClick,
  setIsShowWallets
}: {
  network: string;
  account?: string;
  justify?: BoxProps['justify'];
  align?: BoxProps['align'];
  isShowWallets?: Boolean,
  onClick: () => void;
  setIsShowWallets: (isShow: boolean) => void;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
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
      {network == 'Connect Wallet' ? (
        <Box
          align={align}
          justify={justify}
          className="connect-wallet-btn"
          onClick={onClick}
        > 
          {network == 'Connect Wallet' ?
            <Text className='net-text' size="normal">
              {network}
            </Text>:
            <Text className='connected-text' size="normal">
              {network}
            </Text>
          }
          <Text size="xsmall" color="clrConnectWalletText">
            {account}
          </Text>
        </Box>
      ) : (
        isShowWallets ? (
          <div ref={ref}>
            <ConnectedWallets 
              network={network}
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
