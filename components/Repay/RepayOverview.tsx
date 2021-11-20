// import React from 'react';
// import TxnOverviewContainer, { TxnOverviewContainerProps } from 'components/Transactions/TxnOverview/TxnOverviewContainer';
// import { ETxnType } from 'lib/types';

// /** ADK: I'm purposely creating this level of indirection so that the code is more readable and searchable. */
// const RepayOverview = (props: React.PropsWithChildren<TxnOverviewContainerProps>) => {
//   return <TxnOverviewContainer {...props} txnType={ETxnType.deposit} />;
// };

// export default RepayOverview;

import { TxnOverviewBlockWrapper } from 'components/Transactions/TxnOverviewBlockWrapper';

import { Box, Text } from 'grommet';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ETxnType, IUserReserveData } from 'lib/types';
import { bigNumberToString } from 'lib/number-utils';
import { IAssetPrices } from 'api/data/pricedata';
import { AmountToRepayRow } from './RepayRows/AmountToRepayRow';
import { MaxSlippageBlock } from './Collateral/MaxSlippageBlock';
import { RemainingToRepayRow } from './RepayRows/RemainingToRepayRow';
import { BigNumber, BigNumberish } from 'ethers';
import { TxnAmountContainer } from 'components/Transactions';
import { TitleBlock } from 'components/common';
import { ETxnSteps } from 'lib/types';
import { TxnOverviewProcess } from 'components/Transactions/TxnOverview/TxnOverviewProcess';
import { checkHealth } from 'lib/health-utils';

const { useEffect, useState } = React;

export type RepayRowProps = {
  forWallet?: boolean;
  repayAmount: BigNumber | string;
  selectedToken?: string;
  priceData: IAssetPrices;
  borrowData: IUserReserveData;
  remainingRepayAmount?: any;
};
export interface RepayOverviewProps {
  amountBorrowed: string | BigNumber;
  borrowData: IUserReserveData;
  currentHealthFactor: string;
  nextHealthFactor: string;
  priceData: IAssetPrices;
  repayAmount: string | BigNumber;
  repayStep: ETxnSteps;
  txnHash: string;
  setRepayStep(step: ETxnSteps): void;
  handleApprove(): void;
  handleRepay(): void;
  repayTxnType: 'collateral' | 'wallet';
  // only for collateral
  selectedToken?: string;
  feesAmount?: string;
  maxSlippage?: string;
  debtETH?: BigNumber;
}

const RepayOverview = ({
  amountBorrowed,
  borrowData,
  currentHealthFactor,
  feesAmount = '',
  maxSlippage = '',
  nextHealthFactor,
  priceData,
  repayAmount,
  repayStep,
  selectedToken,
  txnHash,
  setRepayStep,
  handleApprove,
  handleRepay,
  repayTxnType,
  debtETH,
}: RepayOverviewProps) => {
  const forCollateral = repayTxnType === 'collateral';
  const forWallet = repayTxnType === 'wallet';

  const [remainingRepayAmount, setRemainingRepayAmount] = useState<BigNumberish>('');

  useEffect(() => {
    if (amountBorrowed && repayAmount) {
      if (repayTxnType === 'collateral') {
        if (amountBorrowed && repayAmount) {
          setRemainingRepayAmount(
            (parseFloat(amountBorrowed as string) - parseFloat(repayAmount as string)).toString()
          );
        }
      } else {
        if (amountBorrowed && repayAmount && borrowData.decimals) {
          const remaining = amountBorrowed.sub(repayAmount);
          setRemainingRepayAmount(
            (remaining as BigNumber).lte(0) ? '0' : remaining
          );
        }
      }
    }
  }, [amountBorrowed, borrowData.decimals, repayAmount, repayTxnType]);

  return (
    <TxnAmountContainer
      handleBackButton={() => setRepayStep(ETxnSteps.Input)}
      header={
        <TitleBlock
          title="Repay overview"
          desc="These are your transaction details. Make sure to check if this is correct before submitting."
        />
      }
    >
      {/* Repay Overview */}
      {/**
       * @todo ADK: Repay has a lot of differences from the other three transactions types.
       * For now, we'll just keep the similar actions wrapped in the same UI elements.
       */}
      <TxnOverviewBlockWrapper>
        {/* Amount to Repay */}
        <AmountToRepayRow
          repayAmount={repayAmount}
          selectedToken={selectedToken}
          priceData={priceData}
          borrowData={borrowData}
          forWallet={forWallet}
        />
        {/* Remaining to Repay */}
        <AmountToRepayRow
          repayAmount={remainingRepayAmount as BigNumber}
          selectedToken={selectedToken}
          priceData={priceData}
          borrowData={borrowData}
          forWallet={forWallet}
        />
        {/* Current Health Factor */}
        <Box direction="row" justify="between">
          <Text size="small">Current Health Factor</Text>
          <Text size="small" color="status-ok" weight="bold">
            {checkHealth(currentHealthFactor, debtETH || BigNumber.from(0))}
          </Text>
        </Box>
        {/* Next Health Factor */}
        <Box direction="row" justify="between">
          <Text size="small">Next Health Factor</Text>
          <Text size="small" color="status-ok">
            {forWallet && <>{checkHealth(nextHealthFactor, debtETH || BigNumber.from(0))}</>}
            {forCollateral && <>{checkHealth(currentHealthFactor, debtETH || BigNumber.from(0))}</>}
          </Text>
        </Box>
        {forCollateral && <MaxSlippageBlock maxSlippage={maxSlippage} feesAmount={feesAmount} />}
      </TxnOverviewBlockWrapper>

      {/* Repay Status */}
      <TxnOverviewProcess
        txnStep={repayStep}
        txnHash={txnHash}
        handleTxn={handleApprove}
        handle2ndTxn={handleRepay}
        txnType={ETxnType.repay}
        setTxnStep={setRepayStep}
      />
    </TxnAmountContainer>
  );
};

export default RepayOverview;
