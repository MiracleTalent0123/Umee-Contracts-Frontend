import React, { useContext } from 'react'
import { BigNumber } from 'ethers'
import { ResponsiveContext } from 'grommet'
import MarketsDetailDesktop from './Desktop'
import MarketsDetailMobile from './Mobile'

export interface MarketsDetailPanelProps {
  borrowedPortion: number
  totalBorrowedUsd: string
  availableLiquidityUsd: string
  liquidationThreshold: BigNumber
  ltv: BigNumber
  liquidationBonus: BigNumber
  symbol: string
  canUseAsCollateral: boolean
  balance: BigNumber
  decimals: BigNumber
  liquidityRate: BigNumber | string
  variableBorrowRate: BigNumber | string
  currentVariableDebt: BigNumber
  currentStableDebt: BigNumber
  currentUTokenBalance: BigNumber
  availableBorrowAmount: BigNumber | string
  tokenAddress: string
}

const MarketsDetailPanel = ({ marketsDetail }: { marketsDetail: MarketsDetailPanelProps }) => {
  const size = useContext(ResponsiveContext)

  return (
    <>
      {size !== 'small' ? (
        <MarketsDetailDesktop marketsDetail={marketsDetail} />
      ) : (
        <MarketsDetailMobile marketsDetail={marketsDetail} />
      )}
    </>
  )
}

export default MarketsDetailPanel
