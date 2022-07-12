import React from 'react'
import { Box, Text, Image } from 'grommet'
import { TxnAmountContainer } from 'components/Transactions'
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types'
import { AvailableToTxnInformationRow, TxnAmountInputRow } from 'components/Transactions'
import TokenLogo from 'components/TokenLogo'
import { BigNumber, utils } from 'ethers'
import Arrow from '/public/images/arrow.png'
import _ from 'lodash'
import { BaseTab } from 'components/Transactions/TxnTabs'
import { TxnConfirm } from 'components/Transactions'
import { Chain, useChain } from 'lib/hooks/chain/context'

const aprDecimals = BigNumber.from(25)

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
  const { availableAmount, tokenDecimals, token } = txnAvailability
  const [isPending, setIsPending] = React.useState(false)
  const [isFinal, setIsFinal] = React.useState(false)
  const { chainMode } = useChain()

  React.useEffect(() => {
    txnStep === ETxnSteps.Pending || txnStep === ETxnSteps.PendingApprove || txnStep === ETxnSteps.PendingSubmit
      ? setIsPending(true)
      : setIsPending(false)

    txnStep === ETxnSteps.Failure || txnStep === ETxnSteps.Success ? setIsFinal(true) : setIsFinal(false)
  }, [txnStep])

  return (
    <TxnAmountContainer
      handleContinue={handleContinue}
      txnType={txnType}
      isPending={isPending}
      isFinal={isFinal}
      buttonDisabled={Number(txnAmount) === 0}
      header={
        token.symbol && (
          !isPending && !isFinal && (
            <BaseTab
              choiceA={ETxnType.borrow}
              choiceB={ETxnType.repay}
              defaultSelected={txnType === ETxnType.borrow}
              handler={setActiveTab}
              margin={{ top: 'medium' }}
            />
          )
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
            <TxnAmountInputRow txnAmount={txnAmount} txnAvailability={txnAvailability} setTxnAmount={setTxnAmount} />
          </Box>
          <Box
            border={{ size: '1px', color: 'clrBorderGrey', side: 'top' }}
            pad={{ top: 'medium', horizontal: 'medium' }}
          >
            <Text color="clrTextAndDataListHeader" size="xsmall" className="upper-case letter-spacing">
              {ETxnType.borrow} Rates
            </Text>
            <Box pad={{ vertical: 'small' }} width="100%" direction="row" justify="between" align="center">
              <Box direction="row" justify="start" align="center">
                {token?.symbol && <TokenLogo symbol={token?.symbol} width="36" height="36" />}
                <Text color="clrTextAndDataListHeader" margin={{ left: 'small' }} size="small">
                  {ETxnType.borrow} {chainMode === Chain.cosmos ? 'APR' : 'APY'}
                </Text>
              </Box>
              <Text color="clrTextAndDataListHeader" size="small">
                {token.variableBorrowRate &&
                  (chainMode == Chain.ethereum
                    ? parseFloat(utils.formatUnits(token.variableBorrowRate, aprDecimals)).toFixed(2).toString()
                    : token.variableBorrowRate)}
                %
              </Text>
            </Box>
          </Box>
          <Box margin={{ top: 'small' }} pad={{ horizontal: 'medium' }}>
            <Text color="clrTextAndDataListHeader" size="xsmall" className="upper-case letter-spacing">
              {ETxnType.borrow} Information
            </Text>
            <Box pad={{ vertical: 'small' }} width="100%" direction="row" justify="between" align="center">
              <Text color="clrTextAndDataListHeader" size="small" margin={{ right: 'medium' }}>
                {ETxnType.borrow} Position
              </Text>
              <Box direction="row" align="center">
                <Text color="clrTextAndDataListHeader" size="small">
                  ${initialBorrowBalance.toFixed(2)}
                </Text>
                {borrowBalance && (
                  <>
                    <Image margin={{ horizontal: 'xsmall' }} src={Arrow} alt="arrow icon" />
                    <Text color="clrTextAndDataListHeader" size="small">
                      ${borrowBalance}
                    </Text>
                  </>
                )}
              </Box>
            </Box>
            <Box direction="row" justify="between" align="center">
              <Text color="clrTextAndDataListHeader" margin={{ right: 'medium' }} size="small">
                {ETxnType.borrow} Limit Used
              </Text>
              <Box direction="row" align="center">
                <Text color="clrTextAndDataListHeader" size="small">
                  {currentLtv}%
                </Text>
                {ltv && (
                  <>
                    <Image margin={{ horizontal: 'xsmall' }} src={Arrow} alt="arrow icon" />
                    <Text color="clrTextAndDataListHeader" size="small">
                      {ltv}%
                    </Text>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </>
      )}
      {isPending && <TxnConfirm wallet={chainMode == Chain.ethereum ? 'Metamask' : 'Keplr'} />}
    </TxnAmountContainer>
  )
}

export default BorrowInputAmount
