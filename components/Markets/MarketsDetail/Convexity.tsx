import React, { useEffect, useState } from 'react'
import { useConvexityData } from 'api/convexity'
import PageLoading from 'components/common/Loading/PageLoading'
import MarketsDetailPanel, { MarketsDetailPanelProps } from './MarketsDetail'
import { bigNumberToUSDNumber } from 'lib/number-utils'
import { BigNumber, utils } from 'ethers'
import { useStore } from 'api/cosmosStores'
import { Currency } from '@keplr-wallet/types'
import { ConvexityToken } from 'api/convexity/data'
import { observer } from 'mobx-react-lite'

interface MarketsConvexityDetailProps {
  address: string
}

const MarketsConvexityDetail: React.FC<MarketsConvexityDetailProps> = ({ address: tokenAddress }) => {
  const { accountStore, queriesStore, chainStore } = useStore()
  const { RegisteredTokens, ConvexityAccountData } = useConvexityData()
  const [loading, setLoading] = useState<boolean>(true)
  const [token, setToken] = useState<ConvexityToken>()
  const [marketsDetail, setMarketsDetail] = useState<MarketsDetailPanelProps>()

  const account = accountStore.getAccount(chainStore.current.chainId)
  const originCurrency = chainStore.current.currencies.find((cur) => cur.coinMinimalDenom == tokenAddress) as Currency

  const balance = BigNumber.from(
    queriesStore
      .get(chainStore.current.chainId)
      .queryBalances.getQueryBech32Address(account.bech32Address)
      .getBalanceFromCurrency(originCurrency)
      .toCoin().amount,
  )

  useEffect(() => {
    if (marketsDetail) setLoading(false)
  }, [marketsDetail])

  useEffect(() => {
    if (RegisteredTokens.length > 0) {
      const tokenData = RegisteredTokens.find((token) => token.address == tokenAddress)
      setToken(tokenData)
    }
  }, [RegisteredTokens, tokenAddress])

  useEffect(() => {
    if (token && ConvexityAccountData) {
      const usdPrice = Number(token.usdPrice)
      const marketSizeUsd = Number(token.marketSizeUsd)
      const availableLiquidityUsd = bigNumberToUSDNumber(token.availableLiquidity, token.decimals, usdPrice)

      const totalBorrowedUsd = marketSizeUsd - availableLiquidityUsd
      let totalBorrowedUsdNum = totalBorrowedUsd

      let borrowedPortion
      if (marketSizeUsd > 0) {
        if (totalBorrowedUsd < 0) totalBorrowedUsdNum = 0
        borrowedPortion = totalBorrowedUsdNum / marketSizeUsd
      } else {
        borrowedPortion = 0
      }

      const availableAmountUsd = Number(ConvexityAccountData.borrowLimit) - Number(ConvexityAccountData.totalBorrowed)
      const availableAmount =
        (availableAmountUsd > 0 && usdPrice > 0)
          ? utils.parseUnits(
            (availableAmountUsd / usdPrice).toFixed(token.decimals.toNumber()).toString(),
            token.decimals,
          )
          : BigNumber.from(0)
      const availableLiquidity = token.availableLiquidity

      const returnValue = {
        borrowedPortion: borrowedPortion,
        totalBorrowedUsd: totalBorrowedUsdNum.toFixed(2),
        availableLiquidityUsd: availableLiquidityUsd.toFixed(2),
        liquidationThreshold: token.liquidationThreshold,
        ltv: token.ltv,
        liquidationBonus: token.liquidationBonus,
        symbol: token.name,
        canUseAsCollateral: token.ltv.lt(0) ? false : true,
        balance: BigNumber.from(0),
        decimals: token.decimals,
        liquidityRate: token.depositAPY,
        variableBorrowRate: token.variableBorrowAPR,
        currentVariableDebt: token.borrowed,
        currentStableDebt: BigNumber.from(0),
        currentUTokenBalance: token.loaned,
        availableBorrowAmount: availableLiquidity.gt(availableAmount) ? availableAmount : availableLiquidity,
        tokenAddress: tokenAddress,
      }

      setMarketsDetail(returnValue)
    }
  }, [token, tokenAddress, ConvexityAccountData])

  useEffect(() => {
    if (marketsDetail) {
      let detail = marketsDetail
      detail.balance = balance
      setMarketsDetail(marketsDetail)
    }
  }, [balance, marketsDetail])

  if (loading) {
    return <PageLoading />
  }

  return <>{marketsDetail && <MarketsDetailPanel marketsDetail={marketsDetail} />}</>
}

export default observer(MarketsConvexityDetail)
