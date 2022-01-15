import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { Box, Text } from 'grommet';
import React from 'react';

const NoWalletConnectedBox = () => {
  return (
    <>
      <Box direction="column" alignContent="center" alignSelf="center" pad="large" width="large">
        <Box justify="center" alignContent="center" alignSelf="center" pad="small">
          <Text color="clrMessageTitle" weight="bold">
            Please connect your wallet
          </Text>
        </Box>
        <Box justify="center" alignContent="center" alignSelf="center">
          To see your deposited / borrowed assets, you need to connect your wallet.
        </Box>
        <Box justify="center" alignContent="center" alignSelf="center" pad="small">
          <ConnectWalletButton />
        </Box>
      </Box>
    </>
  );
};

export default NoWalletConnectedBox;
