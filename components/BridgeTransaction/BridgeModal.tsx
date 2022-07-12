import React from 'react';
import { Box } from 'grommet';
import { BaseModal } from 'components/common/Modals/BaseModal';
import BridgeDialog from 'dialogs/Bridge';
import { ETxnType } from 'lib/types'

interface BridgeModalProps {
  address: string
  tokenName: string
  direction: ETxnType.deposit | ETxnType.withdraw
  onClose: () => void
}

const BridgeModal: React.FC<BridgeModalProps> = ({
  address: tokenAddress,
  tokenName,
  onClose,
  direction
}) => (
  <BaseModal symbol={tokenName} onClose={onClose}>
    <Box className="modal-width">
      <BridgeDialog
        address={tokenAddress}
        tokenName={tokenName}
        onClose={onClose}
        direction={direction}
      />
    </Box>
  </BaseModal>
)

export default BridgeModal
