import React, { useContext } from 'react'
import { AvailableDepositsDataList } from 'components'
import { IDataListColumn } from 'components/DataList/DataList'
import { IAvailableDepositsData } from 'components/AvailableDepositsDataList'
import { useData } from 'api/data'
import { useEffect, useState } from 'react'
import { BigNumber, utils } from 'ethers'
import PageLoading from 'components/common/Loading/PageLoading'
import { useUserBalances } from 'api/data/allowanceData'
import { useWeb3 } from 'api/web3'
import { ResponsiveContext } from 'grommet'
import { stateType } from '.'
import { bigNumberToString } from 'lib/number-utils'

export interface SupplyPageProps {
  availableTokensColumns: IDataListColumn[];
  userAssetsColumns: IDataListColumn[];
  availableTokensMobileColumns: IDataListColumn[];
  userAssetsMobileColumns: IDataListColumn[];
  state: stateType;
}

const aprDecimals = BigNumber.from(25)

const Reflection = ({
  availableTokensColumns,
  userAssetsColumns,
  availableTokensMobileColumns,
  userAssetsMobileColumns,
  state,
}: SupplyPageProps) => {
  const size = useContext(ResponsiveContext)
  const [depositsData, setDepositsData] = useState<IAvailableDepositsData[]>([])
  const [userDeposits, setUserDeposits] = useState<IAvailableDepositsData[]>([])
  const [tokenAddresses, setTokenAddresses] = useState<string[]>([])
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  const { ReserveConfigurationData, ReserveData } = useData()
  const { UserReserveData, Addresses, priceData } = useData()
  const walletBalances = useUserBalances(tokenAddresses)
  const web3 = useWeb3()

  useEffect(() => {
    if (web3.account) {
      setLoggedIn(true)
    } else setLoggedIn(false)
  }, [web3.account])

  useEffect(() => {
    if (walletBalances && UserReserveData && Addresses && ReserveConfigurationData && priceData && ReserveData) {
      setPageLoading(false)
    }
    if (!web3.account && ReserveData) {
      setPageLoading(false)
    }
  }, [
    Addresses,
    ReserveConfigurationData,
    ReserveData,
    UserReserveData,
    depositsData.length,
    priceData,
    walletBalances,
    web3.account,
  ])

  useEffect(() => {
    if (!Addresses.reserve?.length) return
    setTokenAddresses(Addresses.reserve?.length ? Addresses.reserve.map((r) => r.tokenAddress) : [])
  }, [Addresses])

  useEffect(() => {
    let depositReserves
    if (UserReserveData && priceData && web3.account) {
      depositReserves = UserReserveData.reduce((acc, userReserve, i) => {
        if (userReserve.currentUTokenBalance?.isZero()) {
          const price = priceData[userReserve.symbol].usd ? String(priceData[userReserve.symbol].usd) : '0.00'
          const priceDecimals = price.indexOf('.') > 0 ? price.length - price.indexOf('.') - 1 : 0
          const bigPrice = priceData ? utils.parseUnits(price, priceDecimals) : BigNumber.from(0)
          acc.push({
            address: userReserve.address,
            symbol: userReserve.symbol,
            color: 'clrReserveIndicatorDefault',
            tokenBalance: walletBalances[i],
            usdBalance: walletBalances[i]?.mul(bigPrice),
            usdPriceDecimals: priceDecimals,
            apy: bigNumberToString(userReserve.liquidityRate, aprDecimals),
            decimals: userReserve.decimals.toNumber(),
            usageAsCollateralEnabled: userReserve.usageAsCollateralEnabled,
          })
        }
        return acc
      }, Array<IAvailableDepositsData>())
    } else if (!web3.account) {
      depositReserves = ReserveData.reduce((acc, userReserve) => {
        acc.push({
          address: userReserve.address,
          symbol: userReserve.symbol,
          color: 'clrReserveIndicatorDefault',
          tokenBalance: BigNumber.from(0),
          usdBalance: BigNumber.from(0),
          usdPriceDecimals: 0,
          apy: bigNumberToString(userReserve.liquidityRate, aprDecimals),
          decimals: 0,
        })
        return acc
      }, Array<IAvailableDepositsData>())
    } else return
    setDepositsData(depositReserves)
    if (priceData) {
      const existingDeposits = UserReserveData.reduce((acc, reserve) => {
        if (!reserve.currentUTokenBalance?.isZero()) {
          const price = priceData[reserve.symbol]?.usd ? String(priceData[reserve.symbol].usd) : '0.00'
          const priceDecimals = price.indexOf('.') > 0 ? price.length - price.indexOf('.') - 1 : 0
          const bigPrice = priceData ? utils.parseUnits(price, priceDecimals) : BigNumber.from(0)
          acc.push({
            address: reserve.address,
            symbol: reserve.symbol,
            color: 'clrReserveIndicatorDefault',
            tokenBalance: reserve.currentUTokenBalance,
            usdBalance: reserve.currentUTokenBalance.mul(bigPrice),
            usdPriceDecimals: priceDecimals,
            apy: bigNumberToString(reserve.liquidityRate, aprDecimals),
            decimals: reserve.decimals.toNumber(),
            usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
          })
        }
        return acc
      }, Array<IAvailableDepositsData>())
      setUserDeposits(existingDeposits)
    }
  }, [UserReserveData, walletBalances, priceData, web3.account, ReserveData])

  if (pageLoading) {
    return <PageLoading />
  }

  return (
    <AvailableDepositsDataList
      columns={size === 'small' ? availableTokensMobileColumns : availableTokensColumns}
      userAssetsColumns={size === 'small' ? userAssetsMobileColumns : userAssetsColumns}
      data={depositsData}
      userDeposits={userDeposits}
      loggedIn={loggedIn}
      selectedTokenAddress={state && state.tokenAddress}
    />
  )
}

export default Reflection
