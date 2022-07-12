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
  isPreview: boolean
  setIsPreview(isPreview: boolean): void
}

const DepositInputAmountMobile = ({
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
      withdrawModal={false}
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
            title="New Borrow Limit"
            data={[
              { value: '$', textSize: 'small' },
              { value: borrowLimit ? Number(borrowLimit.toFixed(2)).toLocaleString() : '0.00', textSize: 'small' },
            ]}
            justify="between"
            style={InfoPanelItemStyles.Horizontal}
          />
          <Box margin={{ top: 'medium' }}>
            <InfoPanelItem
              align="center"
              textSize="small"
              title="Borrow Limit Usage"
              data={[
                { value: currentLtv, textSize: 'small' },
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
              title={`${ETxnType.deposit} ${chainMode === Chain.cosmos ? 'APR' : 'APY'}`}
              data={[
                {
                  value:
                    token.liquidityRate && chainMode == Chain.ethereum
                      ? bigNumberToString(token.liquidityRate, aprDecimals)
                      : token.liquidityRate,
                  textSize: 'small',
                },
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
              title="Can be used as collateral?"
              data={[{ value: usageAsCollateralEnabled ? 'Yes' : 'No', textSize: 'small' }]}
              justify="between"
              style={InfoPanelItemStyles.Horizontal}
            />
          </Box>
        </Box>
      )}
    </TransactionContainer>
  )
}

export default DepositInputAmountMobile
