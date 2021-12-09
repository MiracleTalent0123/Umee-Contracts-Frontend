import React, { useEffect, useState } from 'react';
import { BaseModal } from 'components/common/BaseModal';
import BridgeDeposit from './bridgeDeposit';
import BridgeWithdraw from './bridgeWithdraw';
import { Box } from 'grommet';

const BridgeModal = ({ address: tokenAddress, onClose }: { address: string; onClose: (show: boolean) => void}) => {
  const [activeTab, setActiveTab] = useState('Deposit');

  return (
    <BaseModal onClose={onClose}>
      <Box width="320px">
        {activeTab === 'Deposit' ? (
          <BridgeDeposit 
            address={tokenAddress}
            setActiveTab={setActiveTab}
          />
        ) : (
          <BridgeWithdraw
            address={tokenAddress}
            setActiveTab={setActiveTab}
          />
        )}
      </Box>
    </BaseModal>
  );
};

export default BridgeModal;