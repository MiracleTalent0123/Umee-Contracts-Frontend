import React, { useEffect } from 'react';
import Cosmos from '../../public/images/cosmos-hub-logo.svg';
import Metamask from '../../public/images/metamask.png';
import Keplr from '../../public/images/keplr-icon.png';
import Eth from '../../public/images/eth-logo.png';
import { Box, Button, Image, Text } from 'grommet';
import './ConnectWallet.css';
import { cosmosAddress } from 'components/connectToKeplr';
import truncate from 'lib/truncate';

const ConnectedWallets = ({ account, network }: { account?: string; network?: string }) => {
  return (
    <Box background="white" pad="xsmall" round="5px">
      <Box
        className="connected-wallet"
        justify="between"
        align="center"
        direction="row"
        pad={{ horizontal: 'small', vertical: '9px' }}
      >
        <Box direction="row" align="center">
          <Box width="30px" direction="row" justify="center">
            <Image width="20px" src={Eth} alt="Eth logo" />
          </Box>
          <Box margin={{ left: 'small' }}>
            <Text weight="bold" size="small">
              Ethereum
            </Text>
            <Text margin={{ top: '-5px' }} size="small">
              Metamask
            </Text>
          </Box>
        </Box>
        <Box width="50%" margin={{ left: 'large' }} direction="row" align="center" justify="between">
          <Box width={{ min: 'unset' }} direction="row" justify="center">
            <Image width="30px" src={Metamask} alt="Metamask logo" />
          </Box>
          <Text size="small" color="#142A5B" style={{ width: '100%' }} textAlign="center" margin={{ left: 'xsmall' }}>
            {account}
          </Text>
        </Box>
      </Box>
      <Box
        className="connected-wallet"
        justify="between"
        align="center"
        direction="row"
        pad={{ horizontal: 'small', vertical: '9px' }}
        margin={{ top: 'xsmall' }}
      >
        <Box direction="row" align="center">
          <Box width="30px" direction="row" justify="center">
            <Image width="30px" src={Cosmos} alt="Eth logo" />
          </Box>
          <Box margin={{ left: 'small' }}>
            <Text weight="bold" size="small">
              Cosmoshub
            </Text>
            <Text margin={{ top: '-5px' }} size="small">
              Keplr
            </Text>
          </Box>
        </Box>
        <Box width="50%" margin={{ left: 'large' }} direction="row" align="center" justify="start">
          <Box direction="row" justify="start" width={{ min: 'unset' }}>
            <Image width="24px" src={Keplr} alt="Keplr logo" />
          </Box>
          <Text size="small" color="#142A5B" style={{ width: '100%' }} textAlign="center" margin={{ left: 'xsmall' }}>
            {truncate(cosmosAddress, 7, 4)}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectedWallets;
