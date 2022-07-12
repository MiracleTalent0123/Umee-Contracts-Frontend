import React, { useContext, useEffect, useState } from 'react'
import { useConvexityData } from 'api/convexity'
import { useStore } from 'api/cosmosStores'
import { Box, ResponsiveContext } from 'grommet'
import { IUserTxnBorrow, IUserTxnDeposit } from 'lib/types'
import PageLoading from 'components/common/Loading/PageLoading'
import { DashboardProps } from './reflection'
import { BigNumber, utils } from 'ethers'
import NoWalletConnectedBox from 'components/NoWalletConnectedBox'
import DashboardOverview from 'components/Dashboard/DashboardOverview'
import { DepositsDataList, BorrowsDataList } from 'components'
import NoDepositsBox from 'components/NoDepositsBox'
import { observer } from 'mobx-react-lite'

const Convexity: React.FC<DashboardProps> = ({
  depositsColumns,
  depositsMobileColumns,
  borrowsColumns,
  borrowsMobileColumns,
}) => {
  const { accountStore, chainStore } = useStore()
  const { ConvexityAccountData, RegisteredTokens, getConvexityData } = useConvexityData()
  const account = accountStore.getAccount(chainStore.current.chainId)

  const size = useContext(ResponsiveContext)
  const [borrowData, setBorrowData] = useState<IUserTxnBorrow[]>([])
  const [depositData, setDepositData] = useState<IUserTxnDeposit[]>([])
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [myDepositsTotal, setMyDepositsTotal] = useState<number>(0)
  const [averageAPY, setAverageAPY] = useState<number>(0)
  const [myBorrowsTotal, setMyBorrowsTotal] = useState<number>(0)
  const [totalCollateral, setTotalCollateral] = useState<string>('0')
  const [borrowLimitUsed, setBorrowLimitUsed] = useState<number>(0)
  const [borrowLimit, setBorrowLimit] = useState<number>(0)

  // useEffect(() => {
  //   getConvexityData();
  // }, []);

  useEffect(() => {
    if (ConvexityAccountData && RegisteredTokens.length > 0) setPageLoading(false)

    if (!account.bech32Address) setPageLoading(false)
  }, [
    account,
    RegisteredTokens,
    ConvexityAccountData,
    myBorrowsTotal,
    myDepositsTotal,
    totalCollateral,
    borrowLimit,
    borrowLimitUsed,
  ])

  useEffect(() => {
    const deposits = RegisteredTokens.filter((d) => !d.loaned.isZero()).map((reserve) => {
      return {
        symbol: reserve.name,
        address: reserve.address,
        decimals: reserve.decimals,
        usdPrice: Number(reserve.usdPrice),
        currentUTokenBalance: reserve.loaned,
        currentStableDebt: BigNumber.from(0),
        currentVariableDebt: reserve.borrowed,
        principalStableDebt: BigNumber.from(0),
        scaledVariableDebt: BigNumber.from(0),
        stableBorrowRate: BigNumber.from(0),
        liquidityRate: reserve.depositAPY,
        usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
      }
    })

    const orderedDeposits = deposits.sort(
      (deposit1, deposit2) => deposit2.currentUTokenBalance.toNumber() - deposit1.currentUTokenBalance.toNumber(),
    )
    setDepositData(orderedDeposits)

    const borrows = RegisteredTokens.filter((d) => !d.borrowed.isZero()).map((reserve) => {
      return {
        symbol: reserve.name,
        address: reserve.address,
        decimals: reserve.decimals,
        usdPrice: Number(reserve.usdPrice),
        currentUTokenBalance: reserve.loaned,
        currentStableDebt: BigNumber.from(0),
        currentVariableDebt: reserve.borrowed,
        principalStableDebt: BigNumber.from(0),
        scaledVariableDebt: BigNumber.from(0),
        stableBorrowRate: BigNumber.from(0),
        liquidityRate: reserve.depositAPY,
        usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
        variableBorrowAPR: reserve.variableBorrowAPR,
        stableBorrowAPR: BigNumber.from(0),
      }
    })

    const orderedBorrows = borrows.sort(
      (deposit1, deposit2) => deposit2.currentVariableDebt.toNumber() - deposit1.currentVariableDebt.toNumber(),
    )
    setBorrowData(orderedBorrows)

    const averageLoanApy = RegisteredTokens.reduce((acc, reserve) => {
      if (!reserve.loaned.isZero()) {
        const loaned = parseFloat(utils.formatUnits(reserve.loaned, reserve.decimals))
        const usd = parseFloat(reserve.usdPrice)
        const apy = parseFloat(reserve.depositAPY)
        const totalAmountLoaned = loaned * usd
        const netApy = (apy / 100) * totalAmountLoaned
        acc += netApy
      }
      return acc
    }, 0)
    const averageBorrowApy = RegisteredTokens.reduce((acc, reserve) => {
      if (!reserve.borrowed.isZero()) {
        const borrowed = parseFloat(utils.formatUnits(reserve.borrowed, reserve.decimals))
        const usd = parseFloat(reserve.usdPrice)
        const apy = parseFloat(reserve.variableBorrowAPR)
        const totalAmountBorrowed = borrowed * usd
        const netApy = (apy / 100) * totalAmountBorrowed
        acc += netApy
      }
      return acc
    }, 0)
    if (myDepositsTotal > 0) {
      const apy = ((averageLoanApy - averageBorrowApy) / myDepositsTotal) * 100
      if (!isNaN(apy)) setAverageAPY(apy)
    }
  }, [RegisteredTokens, myDepositsTotal])

  useEffect(() => {
    if (ConvexityAccountData) {
      const totalBorrowedUsd = Number(ConvexityAccountData.totalBorrowed)
      const borrowLimitUsd = Number(ConvexityAccountData.borrowLimit)
      const totalLoanedUsd = ConvexityAccountData.totalLoaned
      setMyDepositsTotal(Number(totalLoanedUsd))
      setMyBorrowsTotal(totalBorrowedUsd)
      setTotalCollateral(ConvexityAccountData.totalCollateral)
      setBorrowLimit(borrowLimitUsd)
      setBorrowLimitUsed(borrowLimitUsd > 0 ? (totalBorrowedUsd / borrowLimitUsd) * 100 : 0)
    }
  }, [ConvexityAccountData])

  if (pageLoading) {
    return <PageLoading />
  }

  return (
    <>
      {!account.bech32Address ? (
        <NoWalletConnectedBox />
      ) : account.bech32Address && ConvexityAccountData ? (
        <DashboardOverview
          myDepositsTotal={myDepositsTotal}
          myBorrowsTotal={myBorrowsTotal}
          totalCollateral={totalCollateral}
          borrowLimit={borrowLimit}
          borrowLimitUsed={borrowLimitUsed}
          averageAPY={averageAPY}
        />
      ) : null}
      {account.bech32Address ? (
        <Box margin={{ top: 'large' }} align={myBorrowsTotal === 0 && myDepositsTotal === 0 ? 'center' : undefined}>
          {myBorrowsTotal === 0 && myDepositsTotal === 0 ? (
            <NoDepositsBox />
          ) : (
            <Box
              width="auto"
              direction={size === 'large' || size === 'medium' || size === 'small' ? 'column' : 'row'}
              gap={size === 'medium' || size === 'small' ? 'xlarge' : 'medium'}
            >
              <DepositsDataList
                columns={size === 'small' ? depositsMobileColumns : depositsColumns}
                data={depositData}
              />
              <BorrowsDataList columns={size === 'small' ? borrowsMobileColumns : borrowsColumns} data={borrowData} />
            </Box>
          )}
        </Box>
      ) : null}
    </>
  )
}

export default observer(Convexity)
