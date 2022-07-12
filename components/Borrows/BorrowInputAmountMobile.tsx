import React from 'react'
import { Box } from 'grommet'
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types'
import { bigNumberToString } from 'lib/number-utils'
import { BigNumber } from 'ethers'
import _ from 'lodash'
import { Chain, useChain } from 'lib/hooks/chain/context'
import { useWeb3 } from 'api/web3'
import TransactionContainer from 'components/TransactionsMobile/TransactionContainer'
import { InfoPanelItem } from 'components/InfoBar'
import { InfoPanelItemStyles } from 'components/InfoBar/InfoPanelItem'

const aprDecimals = BigNumber.from(25)

export interface DepositProps {
  txnAvailability: TTxnAvailability
  setTxnAmount(amount: string): void
  handleContinue(e: React.MouseEvent): void
  txnStep: ETxnSteps
  currentLtv?: string
  initialborrowBalance: number
  ltv?: string
  txnType: ETxnType
  txnAmount: string
  balance: BigNumber
  handleFaucet?(e: React.MouseEvent): void
  borrowLimit?: number
  usageAsCollateralEnabled?: boolean
  borrowBalance?: string
  isPreview: boolean
  setIsPreview(isPreview: boolean): void
}

const BorrowInputAmountMobile = ({
  txnAvailability,
  setTxnAmount,
  handleContinue,
  txnStep,
  initialborrowBalance,
  currentLtv,
  ltv,
  txnType,
  txnAmount,
  balance,
  handleFaucet,
  borrowLimit,
  usageAsCollateralEnabled,
  isPreview,
  setIsPreview,
  borrowBalance,
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
    <TransactionContainer
      onClose={() => {}}
      symbol={token.symbol}
      txnType={txnType}
      withdrawModal={true}
      availableAmount={balance}
      tokenDecimals={tokenDecimals}
      txnAmount={txnAmount}
      txnAvailability={txnAvailability}
      setTxnAmount={setTxnAmount}
      setIsPreview={setIsPreview}
      isPreview={isPreview}
      handleContinue={handleContinue}
      isPending={isPending}
      isFinal={isFinal}
    >
      {isPreview && (
        <Box>
          <InfoPanelItem
            align="center"
            textSize="small"
            title="New Borrow Position"
            data={[
              { value: '$', textSize: 'small' },
              { value: borrowBalance ? Number(borrowBalance).toLocaleString() : '0.00', textSize: 'small' },
            ]}
            justify="between"
            style={InfoPanelItemStyles.Horizontal}
          />
          <Box margin={{ top: 'medium' }}>
            <InfoPanelItem
              align="center"
              textSize="small"
              title="Borrow Limit"
              data={[
                { value: '$', textSize: 'small' },
                { value: borrowLimit ? borrowLimit.toLocaleString() : '0.00', textSize: 'small' },
              ]}
              justify="between"
              style={InfoPanelItemStyles.Horizontal}
            />
          </Box>
          <Box margin={{ top: 'medium' }}>
            <InfoPanelItem
              align="center"
              textSize="small"
              title="Borrow Limit Usage"
              data={[
                { value: ltv, textSize: 'small' },
                { value: '%', textSize: 'small' },
              ]}
              justify="between"
              style={InfoPanelItemStyles.Horizontal}
            />
          </Box>
          <Box margin={{ top: 'medium' }}>
            <InfoPanelItem
              align="center"
              textSize="small"
              title={`${ETxnType.borrow} ${chainMode === Chain.cosmos ? 'APR' : 'APY'}`}
              data={[
                {
                  value:
                    token.variableBorrowRate && chainMode == Chain.ethereum
                      ? bigNumberToString(token.variableBorrowRate, aprDecimals)
                      : token.variableBorrowRate,
                  textSize: 'small',
                },
                { value: '%', textSize: 'small' },
              ]}
              justify="between"
              style={InfoPanelItemStyles.Horizontal}
            />
          </Box>
        </Box>
      )}
    </TransactionContainer>
  )
}

export default BorrowInputAmountMobile
