import { Box } from 'grommet';
import * as React from 'react';
import { useEffect } from 'react';
import { ITokenData, ETxnSteps } from 'lib/types';
import { BigNumber } from 'ethers';
import StableIcon from '/public/images/stable-apr-icon.png';
import VariableIcon from '/public/images/variable-apr-icon.png';
import { TxnAmountContainer } from 'components/Transactions';
import { TitleBlock } from 'components/common';
import { TxnInterestRateChoice } from 'components/Transactions/TxnInterestRateChoice';
import { TXN_OVERVIEW_WIDTH_RATIO } from 'lib/constants';
const { useRef, useState } = React;

export interface BorrowInputRateProps {
  token: ITokenData;
  setRateType(type: InterestRateTypeEnums): void;
  setBorrowStep(step: ETxnSteps): void;
  stableEnabled: boolean;
  variableEnabled: boolean;
}

export enum InterestRateTypeEnums {
  Stable = 1,
  Variable = 2,
}

const BorrowInputRate = ({
  token,
  setRateType,
  setBorrowStep,
  stableEnabled,
  variableEnabled,
}: BorrowInputRateProps) => {
  const [borrowRateStable, setBorrowRateStable] = useState<BigNumber>(BigNumber.from(0));
  const [borrowRateVariable, setBorrowRateVariable] = useState<BigNumber>(BigNumber.from(0));

  useEffect(() => {
    if (token) {
      setBorrowRateStable(token.stableBorrowRate as BigNumber);
      setBorrowRateVariable(token.variableBorrowRate as BigNumber);
    }
  }, [token, token.stableBorrowRate, token.variableBorrowRate]);

  const selectRateType = (type: InterestRateTypeEnums) => {
    setRateType(type);
    setBorrowStep(ETxnSteps.Overview);
  };
  let backgroundStableColor = '';
  if (!stableEnabled) backgroundStableColor = 'clrInfoPanelBg';

  let backgroundVariableColor = '';
  if (!variableEnabled) backgroundVariableColor = 'clrInfoPanelBg';

  return (
    <TxnAmountContainer handleBackButton={() => setBorrowStep(ETxnSteps.InputAmount)}>
      <Box gap="medium" align="center" alignSelf="center" width={TXN_OVERVIEW_WIDTH_RATIO}>
        <TitleBlock
          title="Please select your interest rate"
          desc="Choose either stable or variable APR for your loan. Please click on the desired rate type and read the info
          box for more information on each option."
        />
        <Box direction="row" gap="small" justify="between">
          <TxnInterestRateChoice
            onClick={() => selectRateType(InterestRateTypeEnums.Stable)}
            icon={StableIcon}
            borrowRate={borrowRateStable}
            label="Stable APR"
          />
          <TxnInterestRateChoice
            onClick={() => selectRateType(InterestRateTypeEnums.Variable)}
            icon={VariableIcon}
            borrowRate={borrowRateVariable}
            label="Variable APR"
          />
        </Box>
      </Box>
    </TxnAmountContainer>
  );
};

export default BorrowInputRate;
