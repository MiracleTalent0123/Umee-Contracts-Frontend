import { Box } from 'grommet';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RepayTypeEnums } from 'pages/repay/repayToken';
import { ETxnSteps } from 'lib/types';
import { TxnAmountContainer } from 'components/Transactions/TxnAmountContainer';
import { StdBtn, TitleBlock } from 'components/common';
import { UniswapModal } from './Collateral/UniswapModal';
export interface RepayChooseTypeProps {
  setRepayType(type: RepayTypeEnums): void;
  setRepayStep(step: ETxnSteps): void;
}

const RepayChooseType = ({ setRepayType, setRepayStep }: RepayChooseTypeProps) => {
  const history = useHistory();
  const [showUniswapModal, setShowUniswapModal] = useState<boolean>(false);

  const handleChooseType = (type: RepayTypeEnums) => {
    setRepayType(type);
    setRepayStep(ETxnSteps.Input);
  };

  return (
    <TxnAmountContainer
      handleBackButton={()=>history.push('/')}
      header={<TitleBlock title="Repay" desc="How do you want to repay?" />}
    >
      <Box direction="row" gap="small" width="75%" justify="center" alignSelf="center">
        <StdBtn onClick={() => setShowUniswapModal(true)} text="With your current collateral" width='medium' />
        <StdBtn onClick={() => handleChooseType(RepayTypeEnums.Wallet)} text="From your wallet balance" width='medium' />
        {showUniswapModal && <UniswapModal onClose={() => setShowUniswapModal(false)} />}
      </Box>
    </TxnAmountContainer>
  );
};

export default RepayChooseType;
