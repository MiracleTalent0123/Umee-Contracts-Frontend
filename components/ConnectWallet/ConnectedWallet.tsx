import React from 'react';
import truncate from 'lib/truncate';
import { Box, BoxExtendedProps, DropButton, Text, Image } from 'grommet';
import { FormNext } from 'grommet-icons';
import ExternalLinkIcon from '../../public/images/external-link-white.png';
import DisconnectIcon from '../../public/images/disconnect.png';
import TokenLogo from 'components/TokenLogo';

interface WalletProps extends BoxExtendedProps {
  connected: boolean;
  chainName: string;
  symbol: string;
  walletName: string;
  walletLogo: string;
  walletAddress: string;
  onConnect?: () => void;
  disconnect?: () => void;
  explorerLink?: string;
  open: string;
  handler: (chainName: string) => void;
  terraConnected?: string;
  walletChangeLogo?: any;
  walletChange?: () => void;
}

const ConnectedWallet: React.FC<WalletProps> = ({
  connected,
  chainName,
  symbol,
  walletName,
  walletLogo,
  walletAddress,
  onConnect,
  disconnect,
  explorerLink,
  open,
  handler,
  terraConnected,
  walletChangeLogo,
  walletChange,
  ...props
}) => {
  return (
    <Box
      className={`${connected ? 'connected-wallet' : ''} wallet`}
      justify="between"
      align="center"
      direction="row"
      {...props}
    >
      <Box width="45%" direction="row" align="center">
        <Box width="25px" direction="row" justify="center">
          <TokenLogo
            width={'25px'}
            symbol={symbol}
          />
        </Box>
        <Box margin={{ left: '10px' }}>
          <Text color="clrTextAndDataListHeader" weight="bold" size="12px">
            {chainName}
          </Text>
          <Text color="clrTextAndDataListHeader" size="12px">
            {walletName}
          </Text>
        </Box>
      </Box>
      <Box width="55%" direction="row" align="center" justify="between">
        <Box width={{ min: 'unset' }} direction="row" justify="center">
          {walletLogo && <Image width="25px" src={walletLogo} alt="wallet logo" />}
        </Box>
        <Box>
          {connected ? (
            <DropButton
              open={!!(chainName === open)}
              onClick={() => handler(chainName)}
              onClose={() => handler('')}
              label={
                <Text
                  title={walletAddress}
                  color="clrTextAndDataListHeader"
                  size="12px"
                  style={{ textTransform: 'lowercase' }}
                >
                  {walletAddress.length < 15 ? walletAddress : truncate(walletAddress, 7, 4)}
                </Text>
              }
              icon={
                <FormNext
                  className={`wallet-open ${open === chainName ? 'active' : ''}`}
                  size="20px"
                  color="clrTextAndDataListHeader"
                />
              }
              dropAlign={{ top: 'bottom', right: 'right' }}
              className="wallet-dropdown"
              reverse
              gap="5px"
              dropContent={
                <Box className="wallet-dropdown-content" direction="column" align="end">
                  {chainName == 'Terra' && (
                    <Box direction="row" align="center" onClick={walletChange}>
                      <Text color="clrWhite" size="12px">
                        Use {terraConnected == 'terra' ? 'Keplr' : 'Terra Station'}
                      </Text>
                      {walletChangeLogo && (
                        <Image
                          src={walletChangeLogo}
                          alt="wallet change"
                          margin={{ horizontal: '4px' }}
                          width={'11px'}
                        />
                      )}
                    </Box>
                  )}

                  <a href={`${explorerLink}/${walletAddress}`} target="_blank" rel="noreferrer">
                    <Box onClick={() => handler('')} direction="row" align="center">
                      <Text size="12px" color="clrWhite">
                        Block Explorer
                      </Text>
                      <Image src={ExternalLinkIcon} alt="external link" />
                    </Box>
                  </a>
                  <Box
                    direction="row"
                    align="center"
                    onClick={() => {
                      disconnect && disconnect();
                      handler('');
                    }}
                  >
                    <Text size="12px" color="clrWhite">
                      Disconnect
                    </Text>
                    <Image style={{ padding: '0 2px' }} src={DisconnectIcon} alt="disconnect wallet" />
                  </Box>
                </Box>
              }
            />
          ) : (
            <Box onClick={onConnect} direction="row" justify="between" align="center" pad={{ right: '12px' }}>
              <Text color={'clrTextAndDataListHeader'} size="12px" margin={{ right: 'xsmall' }}>
                Connect
              </Text>
              <FormNext size="20px" color="clrTextAndDataListHeader" />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectedWallet;
