import React from 'react';
import { Box, Image, Text } from 'grommet';
import TokenLogoWithSymbol from 'components/TokenLogoWithSymbol';
import TerraWallet from '../../public/images/terra-wallet.png';
import Terra from '../../public/images/terra-luna.png';
import Keplr from '../../public/images/keplr-icon.png';
import { BaseModal } from 'components/common';

interface ConnectTerraWalletProps {
  onClose: () => void;
  onConnectTerra?: () => void;
  onConnectKeplr?: () => void;
}

interface WalletProps {
  img: any;
  symbol: string;
  onClick?: () => void;
}

const Wallet: React.FC<WalletProps> = ({ img, symbol, onClick }) => (
  <Box direction="column" justify="center" align="center" onClick={onClick}>
    <Image height="70px" src={img} alt="wallet" />
    <Text margin={{ top: 'xsmall' }} size="xsmall">
      {symbol}
    </Text>
  </Box>
);

const ConnectTerraWallet: React.FC<ConnectTerraWalletProps> = ({ onClose, onConnectKeplr, onConnectTerra }) => {
  return (
    <BaseModal symbol="TERRA" onClose={onClose}>
      <Box width={{ min: '350px' }}>
        <Box pad={{ top: 'medium' }} direction="row" justify="around" flex>
          <Wallet img={Terra} symbol="TERRA STATION" onClick={onConnectTerra} />
          <Wallet img={Keplr} symbol="KEPLR" onClick={onConnectKeplr} />
        </Box>
      </Box>
    </BaseModal>
  );
};

export default ConnectTerraWallet;
