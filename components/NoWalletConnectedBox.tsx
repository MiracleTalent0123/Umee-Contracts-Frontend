import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { Box, Text } from 'grommet';
import { InfoBarBody, InfoPanel } from '.';
import React from 'react';

const NoWalletConnectedBox = () => {
  return (
    <>
      <InfoBarBody>
        <InfoPanel title="Please connect your wallet" direction="column"></InfoPanel>
      </InfoBarBody>
      <Box direction="column" alignContent="center" alignSelf="center" pad="large" margin="xlarge" width="large">
        <Box justify="center" alignContent="center" alignSelf="center" pad="small">
          {/** TODO: ADK: This sort of code is all over and could be extracted to a TextBlock type component (which I've done already and will apply later) */}
          <Text color="clrMessageTitle" weight="bold">
            Please connect your wallet
          </Text>
        </Box>
        <Box justify="center" alignContent="center" alignSelf="center">
          To see your deposited / borrowed assets, you need to connect your wallet.
        </Box>
        {/** ^^^ Bottom of proposed "TextBlock" */}
        <Box justify="center" alignContent="center" alignSelf="center" pad="small">
          <ConnectWalletButton />
        </Box>
      </Box>
    </>
  );
};

export default NoWalletConnectedBox;
