import React from 'react';
import { useHistory } from 'react-router-dom';
import { ETxnSteps } from 'lib/types';
import { TitleBlock } from 'components/common';
import _ from 'lodash';
import { TxnOverviewProcess } from './TxnOverviewProcess';
import { TxnOverviewBlock } from './TxnOverviewBlock';
import { TxnOverviewBlockProps } from './TxnOverviewBlock';
import { TxnOverviewProcessProps } from './TxnOverviewProcess';
import { TxnAmountContainer } from 'components/Borrows/BorrowInputAmount';
import { Box } from 'grommet';

export type TxnOverviewContainerProps = TxnOverviewBlockProps & TxnOverviewProcessProps;

const TxnOverviewContainer = ({
  token,
  txnStep,
  txnRate,
  txnRateType,
  txnAmount,
  currentHealthFactor,
  nextHealthFactor,
  newHealthFactor,
  setTxnStep,
  handleTxn,
  handle2ndTxn,
  txnHash,
  txnType,
  collateral
}: TxnOverviewProcessProps & TxnOverviewBlockProps) => {
  const history = useHistory();

  return (
    <TxnAmountContainer
      handleBackButton={() => history.push('/')}
      header={
        <TitleBlock
          title={`${_.capitalize(txnType)} overview`}
          desc="These are your transaction details. Make sure to check if this is correct before submitting."
        />
      }
    >
      <TxnOverviewBlock
        token={token}
        txnAmount={txnAmount}
        txnRate={txnRate}
        currentHealthFactor={currentHealthFactor}
        newHealthFactor={newHealthFactor}
        nextHealthFactor={nextHealthFactor}
        txnRateType={txnRateType}
        collateral={collateral}
      />
      <TxnOverviewProcess
        txnType={txnType}
        txnStep={txnStep}
        handleTxn={handleTxn}
        handle2ndTxn={handle2ndTxn}
        txnHash={txnHash}
        setTxnStep={setTxnStep}
      />
    </TxnAmountContainer>
  );
};

export default TxnOverviewContainer;
