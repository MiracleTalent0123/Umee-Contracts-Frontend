import React from 'react';
import { Box, Text, Image } from 'grommet';
import { TxnAmountContainer } from 'components/Transactions';
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types';
import { AvailableToTxnInformationRow, TxnAmountInputRow } from 'components/Transactions';
import TokenLogo from 'components/TokenLogo';
import { BigNumber, utils } from 'ethers';
import Arrow from '/public/images/arrow.png';
import _ from 'lodash';
import { bigNumberToString, BN } from 'lib/number-utils';
import TokenLogoWithSymbol from 'components/TokenLogoWithSymbol';
import { BaseTab } from 'components/Transactions/TxnTabs';
import { TxnConfirm } from 'components/Transactions';

const aprDecimals = BigNumber.from(25);
const maxMantissa = 6;

export interface DepositProps {
  txnAvailability: TTxnAvailability;
  setTxnAmount(amount: string): void;
  handleContinue(e: React.MouseEvent): void;
  txnStep: ETxnSteps;
  setActiveTab(activeTab: string): void;
  currentLtv: string;
  ltv: string;
  initialBorrowBalance: number;
  borrowBalance: string;
  txnType: ETxnType;
  balance: BigNumber;
  txnAmount: string;
}

const BorrowInputAmount = ({
  txnAvailability,
  setTxnAmount,
  handleContinue,
  txnStep,
  setActiveTab,
  currentLtv,
  ltv,
  initialBorrowBalance,
  borrowBalance,
  txnType,
  balance,
  txnAmount,
}: DepositProps) => {
  const { availableAmount, tokenDecimals, token } = txnAvailability;
  const [isPending, setIsPending] = React.useState(false);
  const [isFinal, setIsFinal] = React.useState(false);
  const [newTxnAvail, setNewTxnAvail] = React.useState(txnAvailability);

  React.useEffect(() => {
    // this function will generate a string with the proper length; then will need to convert back to a BN.
    const wrkNum: string = bigNumberToString(availableAmount, tokenDecimals, maxMantissa);
    const theMantissa: string = wrkNum.split('.')[1];

    // recombine without the decimal place in order to create the BigNumber.
    const adjustedAvailAmt: BigNumber = BN(wrkNum.split('.')[0] + theMantissa);
    const tmpDecimals = tokenDecimals as BigNumber;
    const decimalAdjust = tmpDecimals.toNumber() - maxMantissa;
    const adjustedDecimals = tmpDecimals.sub(decimalAdjust);
    setNewTxnAvail({ ...txnAvailability, availableAmount: adjustedAvailAmt, tokenDecimals: adjustedDecimals });
  }, [availableAmount, tokenDecimals, txnAvailability, txnType]);

  React.useEffect(() => {
    txnStep === ETxnSteps.Pending || txnStep === ETxnSteps.PendingApprove || txnStep === ETxnSteps.PendingSubmit
      ? setIsPending(true)
      : setIsPending(false);

    txnStep === ETxnSteps.Failure || txnStep === ETxnSteps.Success ? setIsFinal(true) : setIsFinal(false);
  }, [txnStep]);

  return (
    <TxnAmountContainer
      handleContinue={handleContinue}
      txnType={txnType}
      isPending={isPending}
      isFinal={isFinal}
      buttonDisabled={Number(txnAmount) === 0}
      header={
        token.symbol && (
          <>
            <TokenLogoWithSymbol width="60" height="60" symbol={token.symbol} />
            {!isPending && !isFinal && (
              <BaseTab
                choiceA={ETxnType.borrow}
                choiceB={ETxnType.repay}
                defaultSelected={txnType === ETxnType.borrow}
                handler={setActiveTab}
                margin={{ top: 'medium' }}
              />
            )}
          </>
        )
      }
    >
      {!isPending && !isFinal && (
        <>
          <Box pad={{ horizontal: 'medium' }}>
            <AvailableToTxnInformationRow
              txnType={txnType}
              withdrawModal={true}
              symbol={token.symbol ? token.symbol : ''}
              availableAmount={balance}
              tokenDecimals={tokenDecimals}
            />
            <TxnAmountInputRow txnAmount={txnAmount} txnAvailability={newTxnAvail} setTxnAmount={setTxnAmount} />
          </Box>
          <Box
            border={{ size: '1px', color: 'clrButtonBorderGrey', side: 'top' }}
            pad={{ top: 'medium', horizontal: 'medium' }}
          >
            <Text size="xsmall" className="upper-case letter-spacing">
              {ETxnType.borrow} Rates
            </Text>
            <Box pad={{ vertical: 'small' }} width="100%" direction="row" justify="between" align="center">
              <Box direction="row" justify="start" align="center">
                {token?.symbol && <TokenLogo symbol={token?.symbol} width="36" height="36" />}
                <Text margin={{ left: 'small' }} size="small">
                  Borrow APY
                </Text>
              </Box>
              <Text size="small">
                {token.variableBorrowRate &&
                  parseFloat(utils.formatUnits(token.variableBorrowRate, aprDecimals)).toFixed(2).toString()}
                %
              </Text>
            </Box>
          </Box>
          <Box margin={{ top: 'small' }} pad={{ horizontal: 'medium' }}>
            <Text size="xsmall" className="upper-case letter-spacing">
              Borrow Information
            </Text>
            <Box pad={{ vertical: 'small' }} width="100%" direction="row" justify="between" align="center">
              <Text size="small" margin={{ right: 'medium' }}>
                Borrow Position
              </Text>
              <Box direction="row" align="center">
                <Text size="small">${initialBorrowBalance.toFixed(2)}</Text>
                {borrowBalance && (
                  <>
                    <Image margin={{ horizontal: 'xsmall' }} src={Arrow} alt="arrow icon" />
                    <Text size="small">${borrowBalance}</Text>
                  </>
                )}
              </Box>
            </Box>
            <Box direction="row" justify="between" align="center">
              <Text margin={{ right: 'medium' }} size="small">
                Borrow Limit Used
              </Text>
              <Box direction="row" align="center">
                <Text size="small">{currentLtv}%</Text>
                {ltv && (
                  <>
                    <Image margin={{ horizontal: 'xsmall' }} src={Arrow} alt="arrow icon" />
                    <Text size="small">{ltv}%</Text>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </>
      )}
      {isPending && <TxnConfirm wallet="Metamask" />}
    </TxnAmountContainer>
  );
};

export default BorrowInputAmount;
