import React, { useEffect, useState } from 'react'
import BorrowToken from './BorrowToken'
import { useData } from 'api/data'
import { utils } from 'ethers'
import { ETxnType } from 'lib/types'

const BorrowModal = ({
  address: tokenAddress,
  onClose,
  txnType
}: {
  address: string;
  onClose: () => void;
  txnType?: ETxnType
}) => {
  const { priceData, UserReserveData, UserAccountData, ReserveConfigurationData } = useData()
  const [myDepositsTotal, setMyDepositsTotal] = useState<number>(0)
  const [myBorrowsUSDTotal, setMyBorrowsUSDTotal] = useState<number>(0)
  const [currentltv, setCurrentLtv] = useState<string>('0')
  const [maxLtv, setMaxLtv] = useState<string>('0')
  const [initialBorrowLimit, setInitialBorrowLimit] = useState<string>('0.00')

  useEffect(() => {
    if (!priceData || !UserReserveData || !ReserveConfigurationData) return
    setMyDepositsTotal(
      UserReserveData.reduce((acc, reserve) => {
        const assetPrice = priceData[reserve.symbol].usd
        const tempReserve = parseFloat(utils.formatUnits(reserve.currentUTokenBalance, reserve.decimals))
        acc += tempReserve * assetPrice
        return acc
      }, 0)
    )
    setMyBorrowsUSDTotal(
      UserReserveData.reduce((acc, reserve) => {
        const assetPrice = priceData[reserve.symbol].usd
        const tempReserve = parseFloat(
          utils.formatUnits(reserve.currentVariableDebt.add(reserve.currentStableDebt), reserve.decimals)
        )
        acc += tempReserve * assetPrice
        return acc
      }, 0)
    )
  }, [priceData, UserReserveData, ReserveConfigurationData])

  useEffect(() => {
    if (UserAccountData?.ltv) {
      setMaxLtv(UserAccountData.currentLiquidationThreshold.toString())
    }
  }, [UserAccountData])

  useEffect(() => {
    setInitialBorrowLimit(((myDepositsTotal * parseFloat(maxLtv)) / 10000).toString())
  }, [myDepositsTotal, maxLtv])

  useEffect(() => {
    if (myBorrowsUSDTotal && initialBorrowLimit) {
      setCurrentLtv(((myBorrowsUSDTotal / parseFloat(initialBorrowLimit)) * 100).toFixed(2))
    }
  }, [myBorrowsUSDTotal, initialBorrowLimit, tokenAddress, priceData, UserReserveData])

  return (
    <BorrowToken
      address={tokenAddress}
      myBorrowsTotal={myBorrowsUSDTotal}
      currentLtv={currentltv}
      initialBorrowLimit={initialBorrowLimit}
      onClose={onClose}
      txnType={txnType}
    />
  )
}

export default BorrowModal
