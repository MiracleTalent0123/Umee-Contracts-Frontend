import React, { useEffect, useState } from 'react';
import { BaseModal } from 'components/common/BaseModal';
import BridgeDeposit from 'pages/deposit/bridgeDeposit';
import BridgeWithdraw from 'pages/withdraw/bridgeWithdraw';
import { Box } from 'grommet';

const MarketModal = ({ address: tokenAddress, onClose }: { address: string; onClose: (show: boolean) => void}) => {
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

export default MarketModal;