import React, { useState, useEffect, useContext } from 'react'
import { BigNumber } from 'ethers'
import { useData } from 'api/data'
import { bigNumberToUSDString, bigNumberToNumber } from 'lib/number-utils'
import PageLoading from 'components/common/Loading/PageLoading'
import { useUserBalances } from 'api/data/allowanceData'
import { TTokenConfig } from 'lib/types'
import { useUsageAsCollateral } from 'lib/hooks/useUsageAsCollateral'
import { getMaxBorrows } from 'lib/health-utils'
import { useWeb3 } from 'api/web3'
import MarketsDetailPanel from './MarketsDetail'
import { ResponsiveContext } from 'grommet'

const defaultDecimals = { ATOM: 6, DAI: 18, USDC: 6, USDT: 6, WETH: 18 }

const MarketsReflectionDetail = ({ address: tokenAddress }: { address: string }) => {
  const web3 = useWeb3()
  const { ReserveData, ReserveConfigurationData, UserReserveData, UserAccountData, priceData } = useData()
  const [loading, setLoading] = useState<boolean>(true)
  const [decimals, setDecimals] = useState<BigNumber>(BigNumber.from(18))
  const [marketsDetail, setMarketDetail] = useState<any>()
  const [token, setToken] = useState<{
    symbol: string
    address: string
    usdPrice: number
    availableLiquidity: BigNumber
    totalStableDebt: BigNumber
    totalVariableDebt: BigNumber
    liquidityRate: BigNumber
    variableBorrowRate: BigNumber
    stableBorrowRate: BigNumber
    averageStableBorrowRate: BigNumber
    liquidityIndex: BigNumber
    variableBorrowIndex: BigNumber
    lastUpdateTimestamp: number
  }>()
  const [tokenConfig, setTokenConfig] = useState<TTokenConfig>()
  const [userReserve, setUserReserve] = useState<{
    symbol: string
    address: string
    decimals: BigNumber
    currentUTokenBalance: BigNumber
    currentStableDebt: BigNumber
    currentVariableDebt: BigNumber
    principalStableDebt: BigNumber
    scaledVariableDebt: BigNumber
    stableBorrowRate: BigNumber
    liquidityRate: BigNumber
    stableRateLastUpdated: number
    usageAsCollateralEnabled: boolean
  }>()
  const [tokenAddresses, setTokenAddresses] = useState<string[]>([])
  const walletBalances = useUserBalances(tokenAddresses)
  const [availableBorrowAmount, setAvailableBorrowAmount] = useState<BigNumber>(BigNumber.from(0))

  const canUseAsCollateral = useUsageAsCollateral({ address: tokenAddress })

  const size = useContext(ResponsiveContext)

  useEffect(() => {
    if (ReserveData && ReserveConfigurationData && tokenAddress) {
      setLoading(false)
    }
  }, [ReserveData, ReserveConfigurationData, tokenAddress])

  useEffect(() => {
    const address = tokenAddress as string
    const t = ReserveData.find((r) => r.address.toLowerCase() === address.toLowerCase())

    const reserveConfig = ReserveConfigurationData.find((r) => r.address === tokenAddress)
    setTokenConfig(reserveConfig)
    setUserReserve(UserReserveData.find((r) => r.address === tokenAddress))
    setToken(t)

    const addresses = []
    if (tokenAddress) {
      addresses.push(tokenAddress)
    }
    setTokenAddresses(addresses)

    let decimals
    if (web3.account) {
      decimals = reserveConfig?.decimals || BigNumber.from(18)
    } else {
      const symbol = t?.symbol
      decimals = BigNumber.from(defaultDecimals[symbol as keyof typeof defaultDecimals])
    }
    setDecimals(decimals)

    if (UserAccountData && token && priceData && token.symbol && t) {
      // Maximum a user can Borrow to keep health in good standing
      const MaxAvailable = getMaxBorrows(
        UserAccountData,
        priceData[token.symbol].eth,
        token.symbol,
        decimals.toString(),
      )

      if (t.availableLiquidity.lt(MaxAvailable)) {
        setAvailableBorrowAmount(t.availableLiquidity)
      } else {
        setAvailableBorrowAmount(MaxAvailable)
      }
    }
  }, [
    ReserveConfigurationData,
    ReserveData,
    UserAccountData,
    tokenAddress,
    token,
    priceData,
    UserReserveData,
    web3.account,
  ])

  useEffect(() => {
    if (token) {
      const totalBorrowed = token.totalStableDebt.add(token.totalVariableDebt) || BigNumber.from(0)
      const totalBorrowedUsd = bigNumberToUSDString(totalBorrowed, decimals, token.usdPrice)
      const totalLiquidity = token.availableLiquidity.add(totalBorrowed || 0) || BigNumber.from(0)
      const totalLiquidityUsd = bigNumberToUSDString(totalLiquidity || 0, decimals, token.usdPrice)
      let borrowedPortion
      if (!totalLiquidity.isZero()) {
        const numberBorrowed = bigNumberToNumber(totalBorrowed, decimals)
        const numberLiquid = bigNumberToNumber(totalLiquidity, decimals)
        borrowedPortion = numberBorrowed / numberLiquid
      } else {
        borrowedPortion = 0
      }
      const availableLiquidity = token.availableLiquidity || BigNumber.from(0)
      const availableLiquidityUsd = bigNumberToUSDString(availableLiquidity, decimals, token.usdPrice)

      const returnValue = {
        totalBorrowed: totalBorrowed,
        totalLiquidity: totalLiquidity,
        borrowedPortion: borrowedPortion,
        totalBorrowedUsd: totalBorrowedUsd,
        availableLiquidity: availableLiquidity,
        availableLiquidityUsd: availableLiquidityUsd,
        totalLiquidityUsd: totalLiquidityUsd,
        liquidationThreshold: tokenConfig?.liquidationThreshold,
        ltv: tokenConfig?.ltv,
        liquidationBonus: tokenConfig?.liquidationBonus,
        symbol: token.symbol,
        canUseAsCollateral: canUseAsCollateral,
        balance: walletBalances[0],
        decimals: decimals,
        liquidityRate: token.liquidityRate,
        variableBorrowRate: token.variableBorrowRate,
        currentVariableDebt: userReserve?.currentVariableDebt,
        currentStableDebt: userReserve?.currentStableDebt,
        currentUTokenBalance: userReserve?.currentUTokenBalance,
        availableBorrowAmount: availableBorrowAmount,
        tokenAddress: tokenAddress,
      }

      setMarketDetail(returnValue)
    }
  }, [
    tokenConfig,
    token,
    userReserve,
    decimals,
    availableBorrowAmount,
    canUseAsCollateral,
    walletBalances,
    tokenAddress,
  ])

  if (loading) {
    return <PageLoading />
  }

  return <>{marketsDetail && <MarketsDetailPanel marketsDetail={marketsDetail} />}</>
}

export default MarketsReflectionDetail
