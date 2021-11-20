import { Box, Text, Spinner } from 'grommet';
import React, { useEffect, useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { ETxnSteps, ETxnType } from 'lib/types';
import { StdBtn } from 'components/common';
import * as TxnTabs from 'components/Transactions/TxnTabs';
import _ from 'lodash';
import { TxnStatusBar } from 'components/Transactions/TxnStatusBar';
import { TxnOverviewProcessWrapper } from 'components/Transactions/TxnOverviewProcessWrapper';
import { TxnBoldText } from '../TxnBoldText';
import { TXN_PROCESS_BORDER_ROUND } from 'lib/constants';

const initTabModes = {
  tab1Mode: 'active',
  tab2Mode: 'inactive',
  tab3Mode: 'inactive',
};

function reducer(_state: any, action: any) {
  switch (action.type) {
    case 'goToTab2':
      return { tab1Mode: 'inactive', tab2Mode: 'active', tab3Mode: 'inactive' };
    case 'final':
      return { tab1Mode: 'active', tab2Mode: 'final', tab3Mode: 'final' };
    default:
      return { tab1Mode: 'active', tab2Mode: 'inactive', tab3Mode: 'inactive' };
  }
}

export interface TxnOverviewProcessProps {
  txnStep: ETxnSteps;
  setTxnStep(step: ETxnSteps): void;
  handleTxn(): void;
  handle2ndTxn?(): void;
  txnHash?: string;
  txnType: ETxnType;
}

export const TxnOverviewProcess = ({ txnType, txnStep, handleTxn, handle2ndTxn, txnHash }: TxnOverviewProcessProps) => {
  const [borderColor, setBorderColor] = useState('clrBorder');
  const [state, dispatch] = useReducer(reducer, initTabModes);
  const [isPending, setIsPending] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [firstTabActive, setFirstTabActive] = useState(true);

  const threeTabs = txnType === ETxnType.deposit || txnType === ETxnType.repay;

  const tabText = {
    tab1: { withdraw: _.capitalize(txnType), borrow: 'Finished', deposit: 'Approve', repay: 'Approve' },
    tab2: { withdraw: 'Finished', borrow: 'Finished', deposit: 'Deposit', repay: 'Repay' },
  };
  const transactionText = {
    [ETxnSteps.Approve]: <Text size="xsmall">Please approve before {txnType}ing.</Text>,
    [ETxnSteps.PendingApprove]: <Text size="xsmall">Please wait for approval transaction.</Text>,
    [ETxnSteps.Submit]: <Text size="xsmall">Please submit to {txnType}.</Text>,
    [ETxnSteps.PendingSubmit]: <Text size="xsmall">Please wait for {txnType} transaction.</Text>,
  };

  const handleFirstTab = (e: any) => {
    e.preventDefault();
    handleTxn();
    setFirstTabActive(false);
  };

  const history = useHistory();

  useEffect(() => {
    if ((!firstTabActive && txnStep !== ETxnSteps.PendingApprove) || txnStep == ETxnSteps.Submit)
      dispatch({ type: 'goToTab2' });
    (txnStep === ETxnSteps.Success || txnStep === ETxnSteps.Failure) && dispatch({ type: 'final' });

    txnStep === ETxnSteps.Pending || txnStep === ETxnSteps.PendingApprove || txnStep === ETxnSteps.PendingSubmit
      ? setIsPending(true)
      : setIsPending(false);

    txnStep === ETxnSteps.Failure || txnStep === ETxnSteps.Success ? setIsFinal(true) : setIsFinal(false);
  }, [txnStep, firstTabActive]);

  return (
    <TxnOverviewProcessWrapper borderColor={borderColor}>
      <Box direction="row">
        <TxnTabs.BaseTab
          mode={state.tab1Mode}
          stepVal="1"
          label={tabText.tab1[txnType]}
          txnStep={txnStep}
          borderCB={(color: string) => setBorderColor(color)}
          round={{ size: TXN_PROCESS_BORDER_ROUND, corner: 'top-left' }}
        />
        <TxnTabs.BaseTab
          mode={state.tab2Mode}
          stepVal="2"
          label={tabText.tab2[txnType]}
          txnStep={txnStep}
          borderCB={(color: string) => setBorderColor(color)}
          round={
            !threeTabs && {
              size: TXN_PROCESS_BORDER_ROUND,
              corner: 'top-right',
            }
          } // these are the ones with only two steps.
        />
        {threeTabs && (
          <TxnTabs.BaseTab
            mode={state.tab3Mode}
            stepVal="3"
            label="Finished"
            txnStep={txnStep}
            borderCB={(color: string) => setBorderColor(color)}
            round={{ size: TXN_PROCESS_BORDER_ROUND, corner: 'top-right' }}
          />
        )}
      </Box>
      <Box direction="row" pad={{ horizontal: 'small', vertical: 'medium' }} gap="small" align="center" justify="between">
        {/** Content for the Text and state indicators*/}
        {(txnStep === ETxnSteps.Approve || txnStep === ETxnSteps.PendingApprove) && (
          <Box>
            <TxnBoldText text="1/3 Approve" />
            <Text size="xsmall">{transactionText[txnStep]}</Text>
          </Box>
        )}
        {txnStep === ETxnSteps.Overview && (
          <Box>
            <TxnBoldText text={`1/2 ${_.capitalize(txnType)}`} />
            <Text size="xsmall">Please submit to {txnType}.</Text>
          </Box>
        )}
        {txnStep === ETxnSteps.Pending && (
          <Box>
            <TxnBoldText text={`1/2 ${_.capitalize(txnType)}`} />
            <Text size="xsmall">Please submit to {txnType}.</Text>
          </Box>
        )}
        {txnStep === ETxnSteps.Failure && (
          <Text color="status-error" weight="bold" size="small">
            {!threeTabs ? '2/2' : '3/3'} Failure
          </Text>
        )}
        {txnStep === ETxnSteps.Success && (
          <Text color="status-ok" weight="bold" size="small">
            {!threeTabs ? '2/2' : '3/3'} Success!
          </Text>
        )}
        {(txnStep === ETxnSteps.Submit || txnStep === ETxnSteps.PendingSubmit) && (
          <Box>
            <TxnBoldText text={`2/3 ${_.capitalize(txnType)}`} />
            <Text size="xsmall">{transactionText[txnStep]}</Text>
          </Box>
        )}

        {/** Content for the buttons and such */}
        {isPending && <Spinner color="clrSpinnerSmall" size="xsmall" />}
        {isPending && <StdBtn text={'Pending'} disabled />}
        {txnStep === ETxnSteps.Overview && <StdBtn onClick={handleFirstTab} text={_.capitalize(txnType)} />}
        {txnStep === ETxnSteps.Approve && <StdBtn onClick={handleFirstTab} text="Approve" />}
        {txnStep === ETxnSteps.Submit && <StdBtn onClick={handle2ndTxn} text={_.capitalize(txnType)} />}
        {isFinal && <StdBtn onClick={() => history.push('/')} text="Dashboard" />}
      </Box>

      {isFinal && <TxnStatusBar text={_.capitalize(txnType)} txnHash={txnHash} status={txnStep} />}
    </TxnOverviewProcessWrapper>
  );
};
