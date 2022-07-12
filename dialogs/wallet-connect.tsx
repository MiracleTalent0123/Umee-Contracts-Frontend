import React, { useMemo, useState } from 'react';
import { Box, Text } from 'grommet';
import QRCode from 'qrcode.react';
import Modal from 'components/common/Modals/Modal';
import { isMobile as isMobileWC, isAndroid, saveMobileLinkInfo } from '@walletconnect/browser-utils';
import { PrimaryBtn } from 'components/common';

interface Props {
  onRequestClose: () => void;
  uri: string;
  isOpen: boolean;
}

export const KeplrWalletConnectQRModal = ({ onRequestClose, uri, isOpen }: Props) => {
  const [checkMobile] = useState(() => isMobileWC());
  const [checkAndroid] = useState(() => isAndroid());

  const navigateToAppURL = useMemo(() => {
    if (!uri) {
      return;
    }

    if (checkMobile) {
      if (checkAndroid) {
        // Save the mobile link.
        saveMobileLinkInfo({
          name: 'Keplr',
          href: 'intent://wcV1#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;',
        });

        return `intent://wcV1?${uri}#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;`;
      } else {
        // Save the mobile link.
        saveMobileLinkInfo({
          name: 'Keplr',
          href: 'keplrwallet://wcV1',
        });

        return `keplrwallet://wcV1?${uri}`;
      }
    }
  }, [checkAndroid, checkMobile, uri]);

  return isOpen ? (
    <Modal onClose={onRequestClose}>
      <Box className="base-dialog-content-qr">
        <Box background={'clrBackground'} pad="medium" round="5px" border={{ color: 'clrBoxBorder' }}>
          <Text margin={{ bottom: 'medium' }} size="medium" weight={'bold'} color={'clrTextAndDataListHeader'}>
            {checkMobile ? 'Open App' : 'Scan QR code'}
          </Text>
          {uri ? (
            !checkMobile ? (
              <QRCode style={{ width: '100%', height: '100%' }} size={500} value={uri} />
            ) : (
              <PrimaryBtn
                fullWidth
                round="xlarge"
                pad={{ vertical: 'medium' }}
                onClick={() => {
                  if (navigateToAppURL) {
                    window.location.href = navigateToAppURL;
                  }
                }}
                text="Open App"
                textSize="small"
              />
            )
          ) : undefined}
        </Box>
      </Box>
    </Modal>
  ) : null;
};
