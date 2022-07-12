import React from 'react'
import { Box, Text, Image } from 'grommet'
import { TxnAmountContainer } from 'components/Transactions'
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types'
import { AvailableToTxnInformationRow, TxnAmountInputRow } from 'components/Transactions'
import TokenLogo from 'components/TokenLogo'
import { bigNumberToString } from 'lib/number-utils'
import { BigNumber } from 'ethers'
import Arrow from '/public/images/arrow.png'
import _, { chain } from 'lodash'
import { BaseTab } from 'components/Transactions/TxnTabs'
import { TxnConfirm } from 'components/Transactions'
import { Chain, useChain } from 'lib/hooks/chain/context'
import { useWeb3 } from 'api/web3'

const aprDecimals = BigNumber.from(25)

export interface DepositProps {
  txnAvailability: TTxnAvailability;
  setTxnAmount(amount: string): void;
  handleContinue(e: React.MouseEvent): void;
  txnStep: ETxnSteps;
  setActiveTab(activeTab: string): void;
  currentLtv?: string;
  initialborrowBalance: number;
  ltv?: string;
  txnType: ETxnType;
  txnAmount: string;
  balance: BigNumber;
  handleFaucet?(e: React.MouseEvent): void;
}

const DepositInputAmount = ({
  txnAvailability,
  setTxnAmount,
  handleContinue,
  txnStep,
  setActiveTab,
  initialborrowBalance,
  currentLtv,
  ltv,
  txnType,
  txnAmount,
  balance,
  handleFaucet,
}: DepositProps) => {
  const { tokenDecimals, token } = txnAvailability
  const [isPending, setIsPending] = React.useState(false)
  const [isFinal, setIsFinal] = React.useState(false)
  const { chainMode } = useChain()
  const web3 = useWeb3()

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
              choiceA={ETxnType.deposit}
              choiceB={ETxnType.withdraw}
              defaultSelected={txnType === ETxnType.deposit}
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
              withdrawModal={false}
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
              {ETxnType.deposit} Rates
            </Text>
            <Box pad={{ vertical: 'small' }} width="100%" direction="row" justify="between" align="center">
              <Box direction="row" justify="start" align="center">
                {token?.symbol && <TokenLogo symbol={token?.symbol} width="36" height="36" />}
                <Text color="clrTextAndDataListHeader" margin={{ left: 'small' }} size="small">
                  {ETxnType.deposit} {chainMode === Chain.cosmos ? 'APR' : 'APY'}
                </Text>
              </Box>
              <Text color="clrTextAndDataListHeader" size="small">
                {token.liquidityRate && chainMode == Chain.ethereum
                  ? bigNumberToString(token.liquidityRate, aprDecimals)
                  : token.liquidityRate}
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
                  ${initialborrowBalance.toFixed(2)}
                </Text>
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
            <Box direction="row" justify="center">
              {web3.chainId === 5 && token.symbol == 'DAI' && chainMode === Chain.ethereum && (
                <Text
                  style={{ cursor: 'pointer' }}
                  margin={{ top: 'small' }}
                  onClick={handleFaucet}
                  size="medium"
                  color="clrTextAndDataListHeader"
                >
                  Faucet
                </Text>
              )}
            </Box>
          </Box>
        </>
      )}
      {isPending && <TxnConfirm wallet={chainMode == Chain.ethereum ? 'Metamask' : 'Keplr'} />}
    </TxnAmountContainer>
  )
}

export default DepositInputAmount
