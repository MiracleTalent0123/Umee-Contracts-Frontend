import React, { useEffect, useState } from 'react'
import DepositToken from './DepositToken'
import { useConvexityData } from 'api/convexity'
import { ETxnType } from 'lib/types'

const DepositModal = ({
  address: tokenAddress,
  onClose,
  txnType
}: {
  address: string;
  onClose: () => void;
  txnType?: ETxnType
}) => {
  const { ConvexityAccountData } = useConvexityData()
  const [myDepositsTotal, setMyDepositsTotal] = useState<number>(0)
  const [myBorrowsUSDTotal, setMyBorrowsUSDTotal] = useState<number>(0)
  const [currentltv, setCurrentLtv] = useState<string>('0')
  const [initialBorrowLimit, setInitialBorrowLimit] = useState<number>(0)

  useEffect(() => {
    if (!ConvexityAccountData) return
    setMyDepositsTotal(Number(ConvexityAccountData.totalLoaned))
    setMyBorrowsUSDTotal(Number(ConvexityAccountData.totalBorrowed))
  }, [ConvexityAccountData])

  useEffect(() => {
    if (!ConvexityAccountData) return
    setInitialBorrowLimit(Number(ConvexityAccountData.borrowLimit))
  }, [ConvexityAccountData])

  useEffect(() => {
    if (myBorrowsUSDTotal && initialBorrowLimit) {
      setCurrentLtv(((myBorrowsUSDTotal / initialBorrowLimit) * 100).toFixed(2))
    }
  }, [myBorrowsUSDTotal, initialBorrowLimit])

  return (
    <DepositToken
      address={tokenAddress}
      currentLtv={currentltv}
      onClose={onClose}
      txnType={txnType}
    />
  )
}

export default DepositModal
