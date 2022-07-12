import React from 'react';
import { Box, Image, Text } from 'grommet';
import GradientBox from 'components/common/GradientBox/GradientBox';
import Modal from 'components/common/Modals/Modal';
import KeplrLogo from '../public/images/keplr-icon.png';
import WalletConnectLogo from '../public/images/wallet-connect.png';

export interface Wallet {
  id: string;
  name: string;
  description: string;
  logoImgUrl: string;
}

interface ConnectWalletDialogProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSelectExtension: () => void;
  onSelectWalletConnect: () => void;
}

export const KeplrConnectionSelectModal = ({
  isOpen,
  onRequestClose,
  onSelectExtension,
  onSelectWalletConnect,
}: ConnectWalletDialogProps) => {
  return isOpen ? (
    <Modal onClose={onRequestClose}>
      <Box className="base-dialog-content">
        <Box background={'clrBackground'} pad="medium" round="5px" border={{ color: 'clrBoxBorder' }}>
          <Text weight="bold" size="medium" color={'clrTextAndDataListHeader'}>
            Connect Wallet
          </Text>
          <GradientBox
            onClick={() => {
              onSelectExtension();
            }}
            pad="20px"
            margin={{ vertical: 'small' }}
          >
            <Box direction="row" align="center">
              <Image src={KeplrLogo} alt="logo" width={'64px'} />
              <Box margin={{ left: 'medium' }}>
                <Text weight={'bold'} size="medium" color={'clrTextAndDataListHeader'}>
                  Keplr Wallet
                </Text>
                <Text size="small" margin={{ top: 'xsmall' }} color={'clrTextAndDataListHeader'}>
                  Keplr Browser Extension
                </Text>
              </Box>
            </Box>
          </GradientBox>
          <GradientBox
            onClick={() => {
              onSelectWalletConnect();
            }}
            pad="20px"
            margin={{ vertical: 'small' }}
          >
            <Box direction="row" align="center">
              <Image src={WalletConnectLogo} alt="logo" width={'64px'} />
              <Box margin={{ left: 'medium' }}>
                <Text weight={'bold'} size="medium" color={'clrTextAndDataListHeader'}>
                  WalletConnect
                </Text>
                <Text size="small" margin={{ top: 'xsmall' }} color={'clrTextAndDataListHeader'}>
                  Keplr Mobile
                </Text>
              </Box>
            </Box>
          </GradientBox>
        </Box>
      </Box>
    </Modal>
  ) : null;
};
