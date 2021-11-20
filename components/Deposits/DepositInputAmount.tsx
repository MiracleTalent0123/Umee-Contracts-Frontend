import React from 'react';
import { Box, Text, Image, Spinner } from 'grommet';
import { TxnAmountContainer, ITxnAmount } from 'components/Transactions';
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types';
import { AvailableToTxnInformationRow, TxnAmountInputRow } from 'components/Transactions';
import TokenLogo from 'components/TokenLogo';
import { bigNumberToString, isZero } from 'lib/number-utils';
import { BigNumber, constants } from 'ethers';
import ModalHeader from 'components/ModalHeader';
import UmeeLogo from '/public/images/Umee_logo_name_Icon_only.png';
import Arrow from '/public/images/arrow.png';
import { TxnStatusBar } from 'components/Transactions/TxnStatusBar';
import _ from 'lodash';

const aprDecimals = BigNumber.from(23);

export interface DepositProps {
  txnAvailability: TTxnAvailability;
  setTxnAmount(amount: string): void;
  handleContinue(e: React.MouseEvent): void;
  txnStep: ETxnSteps;
  setActiveTab(activeTab: string): void;
  currentLtv: string;
  initialborrowLimit: string;
  ltv: string;
  borrowLimit: string;
  txnType: ETxnType;
}

const DepositInputAmount = ({
  txnAvailability,
  setTxnAmount,
  handleContinue,
  txnStep,
  setActiveTab,
  initialborrowLimit,
  currentLtv,
  ltv,
  borrowLimit,
  txnType,
}: DepositProps) => {
  const { availableAmount, tokenDecimals, token } = txnAvailability;
  const [isPending, setIsPending] = React.useState(false);
  const [isFinal, setIsFinal] = React.useState(false);

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
      header={
        token.symbol && (
          <>
            <ModalHeader symbol={token.symbol} />
            {!isPending && !isFinal && (
              <>
                <Box margin="-40px 0 0" direction="row" justify="between">
                  <Box>
                    <Text
                      size="medium"
                      style={{
                        background: 'linear-gradient(98.2deg, #FDA9FF -6.64%, #4DFFE5 106.64%)',
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                      }}
                    >
                      Deposit
                    </Text>
                  </Box>
                  <Box onClick={() => setActiveTab('Withdraw')}>
                    <Text size="medium" color="#133A33">
                      Withdraw
                    </Text>
                  </Box>
                </Box>
                <Box direction="row" margin="10px 0 10px 0">
                  <Box className="modal-tab modal-tab1 active"></Box>
                  <Box className="modal-tab modal-tab2"></Box>
                </Box>
              </>
            )}
          </>
        )
      }
    >
      {!isPending && !isFinal && (
        <>
          <AvailableToTxnInformationRow
            txnType={txnType}
            symbol={token.symbol ? token.symbol : ''}
            availableAmount={availableAmount}
            tokenDecimals={tokenDecimals}
          />
          <TxnAmountInputRow txnAvailability={txnAvailability} setTxnAmount={setTxnAmount} />
          <Box>
            <Text size="xsmall" weight="bold" color="black">
              {ETxnType.deposit} Rates
            </Text>
            <Box pad="10px 0" width="100%" direction="row" justify="between" align="center">
              <Box direction="row" justify="start" align="center">
                {token?.symbol && <TokenLogo symbol={token?.symbol} width="40" height="40" />}
                <Text margin="0 0 0 10px" size="small">
                  Deposit APY
                </Text>
              </Box>
              <Text weight="bold" size="small">
                {token?.liquidityRate && bigNumberToString(token?.liquidityRate, aprDecimals)}%
              </Text>
            </Box>
            <Box
              style={{ borderColor: '#E1F0FF' }}
              border="top"
              pad="10px 0 30px"
              width="100%"
              direction="row"
              justify="between"
              align="center"
            >
              <Box direction="row" justify="start" align="center">
                <Image alt="icon" width="115" height="40" src={UmeeLogo} />
                <Text margin="0 0 0 -66px" size="small">
                  Umee APY
                </Text>
              </Box>
              <Text weight="bold" size="small">
                X.XX%
              </Text>
            </Box>
          </Box>
          <Box margin="5px 0 10px 0">
            <Text size="xsmall" weight="bold" color="black">
              Borrow Limit
            </Text>
            <Box pad="10px 0" width="100%" direction="row" justify="between" align="center">
              <Text size="small">Borrow Limit</Text>
              <Box direction="row" align="center">
                <Text weight="bold" size="small">
                  ${parseFloat(initialborrowLimit).toFixed(2)}
                </Text>
                {borrowLimit && (
                  <>
                    <Image margin={{ horizontal: 'xsmall' }} src={Arrow} alt="arrow icon" />
                    <Text weight="bold" size="small">
                      ${borrowLimit}
                    </Text>
                  </>
                )}
              </Box>
            </Box>
            <Box
              pad="10px 0"
              width="100%"
              direction="row"
              justify="between"
              align="center"
              border="top"
              style={{ borderColor: '#E1F0FF' }}
            >
              <Text size="small">Borrow Limit Used</Text>
              <Box direction="row" align="center">
                <Text weight="bold" size="small">
                  {currentLtv}%
                </Text>
                {ltv && (
                  <>
                    <Image margin={{ horizontal: 'xsmall' }} src={Arrow} alt="arrow icon" />
                    <Text weight="bold" size="small">
                      {ltv}%
                    </Text>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </>
      )}
      {isPending && (
        <>
          <Box pad="20px 0" width="100%" direction="row" justify="center">
            <Spinner size="large" color="clrSpinnerLarge" />
          </Box>
          <Box margin="0 0 30px" width="100%" direction="row" justify="center">
            <Text size="small">Confirm transaction in Metamask wallet</Text>
          </Box>
        </>
      )}
      {isFinal && <TxnStatusBar text={_.capitalize(txnType)} status={txnStep} />}
    </TxnAmountContainer>
  );
};

export default DepositInputAmount;
