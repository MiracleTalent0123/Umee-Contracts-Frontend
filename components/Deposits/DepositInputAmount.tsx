import React from 'react';
import { Box, Text, Image } from 'grommet';
import { TxnAmountContainer } from 'components/Transactions';
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types';
import { AvailableToTxnInformationRow, TxnAmountInputRow } from 'components/Transactions';
import TokenLogo from 'components/TokenLogo';
import { bigNumberToString, BN } from 'lib/number-utils';
import { BigNumber } from 'ethers';
import Arrow from '/public/images/arrow.png';
import _ from 'lodash';
import TokenLogoWithSymbol from 'components/TokenLogoWithSymbol';
import { BaseTab } from 'components/Transactions/TxnTabs';
import { TxnConfirm } from 'components/Transactions';

const aprDecimals = BigNumber.from(25);
const maxMantissa = 6;

export interface DepositProps {
  txnAvailability: TTxnAvailability;
  setTxnAmount(amount: string): void;
  handleContinue(e: React.MouseEvent): void;
  handleFaucet(e: React.MouseEvent): void;
  txnStep: ETxnSteps;
  setActiveTab(activeTab: string): void;
  currentLtv: string;
  initialborrowBalance: number;
  ltv: string;
  txnType: ETxnType;
  txnAmount: string;
  balance: BigNumber;
}

const DepositInputAmount = ({
  txnAvailability,
  setTxnAmount,
  handleContinue,
  handleFaucet,
  txnStep,
  setActiveTab,
  initialborrowBalance,
  currentLtv,
  ltv,
  txnType,
  txnAmount,
  balance,
}: DepositProps) => {
  const { tokenDecimals, token } = txnAvailability;
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
      buttonDisabled={Number(txnAmount) === 0}
      header={
        token.symbol && (
          <>
            <TokenLogoWithSymbol width="60" height="60" symbol={token.symbol} />
            {!isPending && !isFinal && (
              <BaseTab
                choiceA={ETxnType.deposit}
                choiceB={ETxnType.withdraw}
                defaultSelected={txnType === ETxnType.deposit}
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
              withdrawModal={false}
              symbol={token.symbol ? token.symbol : ''}
              availableAmount={balance}
              tokenDecimals={tokenDecimals}
            />
            <TxnAmountInputRow txnAmount={txnAmount} txnAvailability={txnAvailability} setTxnAmount={setTxnAmount} />
          </Box>
          <Box
            border={{ size: '1px', color: 'clrButtonBorderGrey', side: 'top' }}
            pad={{ top: 'medium', horizontal: 'medium' }}
          >
            <Text size="xsmall" className="upper-case letter-spacing">
              {ETxnType.deposit} Rates
            </Text>
            <Box pad={{ vertical: 'small' }} width="100%" direction="row" justify="between" align="center">
              <Box direction="row" justify="start" align="center">
                {token?.symbol && <TokenLogo symbol={token?.symbol} width="36" height="36" />}
                <Text margin={{ left: 'small' }} size="small">
                  Supply APY
                </Text>
              </Box>
              <Text size="small">{token?.liquidityRate && bigNumberToString(token?.liquidityRate, aprDecimals)}%</Text>
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
                <Text size="small">${initialborrowBalance.toFixed(2)}</Text>
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
            <Box direction="row" justify="center">
              {(token.symbol == 'DAI' || token.symbol == 'USDC' || token.symbol == 'USDT') && (
                <Text style={{ cursor: 'pointer' }} margin={{ top: 'small' }} onClick={handleFaucet} size="medium">
                  Faucet
                </Text>
              )}
            </Box>
          </Box>
        </>
      )}
      {isPending && <TxnConfirm wallet="Metamask" />}
    </TxnAmountContainer>
  );
};

export default DepositInputAmount;
