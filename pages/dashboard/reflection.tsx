import React, { useState, useEffect, useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { IUserTxnDeposit, IUserTxnBorrow } from 'lib/types'
import { useData } from 'api/data'
import { useWeb3 } from 'api/web3'
import PageLoading from 'components/common/Loading/PageLoading'
import { BigNumber, utils } from 'ethers'
import { DepositsDataList, BorrowsDataList } from 'components'
import NoWalletConnectedBox from 'components/NoWalletConnectedBox'
import NoDepositsBox from 'components/NoDepositsBox'
import DashboardOverview from 'components/Dashboard/DashboardOverview'
import { IDataListColumn } from 'components/DataList/DataList'
import { bigNumberETHToString, bigNumberToNumber, isZero } from 'lib/number-utils'

export interface DashboardProps {
  depositsColumns: IDataListColumn[]
  borrowsColumns: IDataListColumn[]
  depositsMobileColumns: IDataListColumn[]
  borrowsMobileColumns: IDataListColumn[]
}

const Reflection = ({
  depositsColumns,
  depositsMobileColumns,
  borrowsColumns,
  borrowsMobileColumns,
}: DashboardProps) => {
  const size = useContext(ResponsiveContext)
  const [borrowData, setBorrowData] = useState<IUserTxnBorrow[]>([])
  const [depositData, setDepositData] = useState<IUserTxnDeposit[]>([])
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [myDepositsTotal, setMyDepositsTotal] = useState<number>(0)
  const [myBorrowsTotal, setMyBorrowsTotal] = useState<number>(0)
  const [averageAPY, setAverageAPY] = useState<number>(0)
  const [totalCollateral, setTotalCollateral] = useState<string>('0')
  const [borrowLimitUsed, setBorrowLimitUsed] = useState<string>('0')
  const [borrowLimit, setBorrowLimit] = useState<number>(0)
  const { UserAccountData, UserReserveData, ReserveConfigurationData, ReserveData, priceData } = useData()
  const web3 = useWeb3()
  const [ethPrice, setEthPrice] = useState<number>()

  useEffect(() => {
    if (priceData) {
      setEthPrice(priceData['WETH'].usd)
    }
  }, [priceData])

  useEffect(() => {
    if (UserAccountData && UserReserveData && ReserveData && ReserveConfigurationData) {
      setPageLoading(false)
    }

    if (!web3.account) {
      setPageLoading(false)
    }
  }, [
    ReserveConfigurationData,
    ReserveData,
    UserAccountData,
    UserReserveData,
    borrowData.length,
    depositData.length,
    web3.account,
  ])

  useEffect(() => {
    setBorrowData(
      UserReserveData.filter((d) => !d.currentVariableDebt.isZero()).map((reserve) => {
        return {
          symbol: reserve.symbol,
          address: reserve.address,
          decimals: reserve.decimals,
          usdPrice: ReserveData.find((r) => r.address.toLowerCase() === reserve.address.toLowerCase())?.usdPrice || 0,
          currentUTokenBalance: reserve.currentUTokenBalance,
          currentStableDebt: reserve.currentStableDebt,
          currentVariableDebt: reserve.currentVariableDebt,
          principalStableDebt: reserve.principalStableDebt,
          scaledVariableDebt: reserve.scaledVariableDebt,
          stableBorrowRate: reserve.stableBorrowRate,
          liquidityRate: reserve.liquidityRate,
          stableRateLastUpdated: reserve.stableRateLastUpdated,
          usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
          variableBorrowAPR:
            ReserveData.find((r) => r.address === reserve.address)?.variableBorrowRate || BigNumber.from(0),
          stableBorrowAPR:
            ReserveData.find((r) => r.address === reserve.address)?.stableBorrowRate || BigNumber.from(0),
        }
      }),
    )
  }, [ReserveData, UserReserveData])

  useEffect(() => {
    if (UserReserveData) {
      setDepositData(
        UserReserveData.filter((d) => d.currentUTokenBalance && !d.currentUTokenBalance.isZero()).map((reserve) => {
          return {
            symbol: reserve.symbol,
            address: reserve.address,
            decimals: reserve.decimals,
            currentUTokenBalance: reserve.currentUTokenBalance,
            currentStableDebt: reserve.currentStableDebt,
            currentVariableDebt: reserve.currentVariableDebt,
            principalStableDebt: reserve.principalStableDebt,
            scaledVariableDebt: reserve.scaledVariableDebt,
            stableBorrowRate: reserve.stableBorrowRate,
            liquidityRate: reserve.liquidityRate,
            stableRateLastUpdated: reserve.stableRateLastUpdated,
            usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
            usdPrice: ReserveData.find((r) => r.address.toLowerCase() === reserve.address.toLowerCase())?.usdPrice || 0,
          }
        }),
      )
    }
  }, [ReserveConfigurationData, ReserveData, UserReserveData])

  useEffect(() => {
    if (!priceData || !UserAccountData) return
    setMyDepositsTotal(
      UserReserveData.reduce((acc, reserve) => {
        const assetPrice = priceData[reserve.symbol].usd
        const tempReserve = parseFloat(utils.formatUnits(reserve.currentUTokenBalance, reserve.decimals))
        acc += tempReserve * assetPrice
        return acc
      }, 0),
    )
    setMyBorrowsTotal(
      UserReserveData.reduce((acc, reserve) => {
        const assetPrice = priceData[reserve.symbol].usd
        const tempReserve = parseFloat(
          utils.formatUnits(reserve.currentVariableDebt.add(reserve.currentStableDebt), reserve.decimals),
        )
        acc += tempReserve * assetPrice
        return acc
      }, 0),
    )

    const averageLoanApy = UserReserveData.reduce((acc, reserve) => {
      if (!reserve.currentUTokenBalance.isZero()) {
        const usd = priceData[reserve.symbol].usd
        const apy = bigNumberToNumber(reserve.liquidityRate, 25)
        const loaned = parseFloat(utils.formatUnits(reserve.currentUTokenBalance, reserve.decimals))
        const totalAmountLoaned = loaned * usd
        const netApy = (apy / 100) * totalAmountLoaned
        acc += netApy
      }
      return acc
    }, 0)
    const averageBorrowApy = UserReserveData.reduce((acc, reserve) => {
      if (!reserve.currentVariableDebt.isZero()) {
        const usd = priceData[reserve.symbol].usd
        const apy = bigNumberToNumber(
          ReserveData.find((r) => r.address === reserve.address)?.variableBorrowRate || 0,
          25,
        )
        const borrowed = parseFloat(utils.formatUnits(reserve.currentUTokenBalance, reserve.decimals))
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
    if (ethPrice) setTotalCollateral(bigNumberETHToString(UserAccountData.totalCollateralETH, ethPrice))
  }, [UserReserveData, priceData, UserAccountData, ethPrice, myDepositsTotal, ReserveData])

  useEffect(() => {
    if (UserAccountData && myDepositsTotal && myBorrowsTotal) {
      const maxLtv = UserAccountData.currentLiquidationThreshold.toString()
      const borrowLimit = (myDepositsTotal * parseFloat(maxLtv)) / 10000
      setBorrowLimitUsed(borrowLimit > 0 ? ((myBorrowsTotal / borrowLimit) * 100).toFixed(2) : '0')
      setBorrowLimit(borrowLimit)
    }
  }, [myBorrowsTotal, UserAccountData, myDepositsTotal])

  if (pageLoading) {
    return <PageLoading />
  }

  return (
    <>
      {!web3.account && <NoWalletConnectedBox />}
      {web3.account && UserAccountData && (
        <DashboardOverview
          myDepositsTotal={myDepositsTotal}
          myBorrowsTotal={myBorrowsTotal}
          totalCollateral={totalCollateral}
          borrowLimit={borrowLimit}
          averageAPY={averageAPY}
          borrowLimitUsed={parseFloat(borrowLimitUsed)}
        />
      )}
      {web3.account && (
        <Box
          margin={{ top: 'large' }}
          align={Number(UserAccountData?.totalDebtETH) === 0 && myDepositsTotal === 0 ? 'center' : undefined}
        >
          {Number(UserAccountData?.totalDebtETH) === 0 && myDepositsTotal === 0 ? (
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
      )}
    </>
  )
}

export default Reflection
