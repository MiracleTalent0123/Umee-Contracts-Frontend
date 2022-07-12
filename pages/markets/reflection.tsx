import React from 'react'
import { BigNumber } from 'ethers'
import { MarketsDataList } from 'components'
import { IDataListColumn } from 'components/DataList/DataList'
import { IMarketsData } from 'components/MarketsDataList'
import { useData } from 'api/data'
import { useState, useEffect } from 'react'
import PageLoading from 'components/common/Loading/PageLoading'
import { bigNumberToUSDString, bigNumberToString } from 'lib/number-utils'
import { useUmeeTokenAddress } from 'api/web3/chains'
import { useWeb3 } from 'api/web3'

const defaultDecimals = { ATOM: 6, DAI: 18, USDC: 6, USDT: 6, WETH: 18 }

interface ReflectionProps {
  size: string;
  chain: string;
  marketColumns: IDataListColumn[];
  marketMobileColumns: IDataListColumn[];
}

const aprDecimals = BigNumber.from(25)

const Reflection: React.FC<ReflectionProps> = ({ size, chain, marketColumns, marketMobileColumns }) => {
  const [marketData, setMarketData] = useState<IMarketsData[]>([])
  const [totalMarketSizeUsd, setTotalMarketSizeUsd] = useState(0)
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [usdDecimals, setUsdDecimals] = useState<BigNumber>(BigNumber.from(18))
  const { account: etherAddr, chainId } = useWeb3()

  const umeeTokenAddr = useUmeeTokenAddress(chainId)

  const { ReserveData, ReserveConfigurationData, UserReserveData } = useData()

  useEffect(() => {
    if (ReserveData && ReserveConfigurationData && marketData.length > 0) {
      setPageLoading(false)
    }
  }, [ReserveConfigurationData, ReserveData, marketData.length])

  useEffect(() => {
    let localTotalMarketSizeUsd = 0
    const marketsData = ReserveData.reduce((acc, reserveData, index) => {
      const tokenConfig = ReserveConfigurationData.find((rc) => rc.address === reserveData.address)
      let decimals
      if (etherAddr) {
        decimals = tokenConfig?.decimals || BigNumber.from(18)
      } else {
        const symbol = reserveData.symbol
        decimals = BigNumber.from(defaultDecimals[symbol as keyof typeof defaultDecimals])
      }
      setUsdDecimals(decimals)
      const totalBorrowed = reserveData.totalStableDebt.add(reserveData.totalVariableDebt)

      const marketSize = bigNumberToString(reserveData.availableLiquidity.add(totalBorrowed), decimals)
      const totalBorrowedUsd = bigNumberToUSDString(totalBorrowed, decimals, reserveData.usdPrice)
      const marketSizeUsd = bigNumberToUSDString(
        reserveData.availableLiquidity.add(totalBorrowed),
        decimals,
        reserveData.usdPrice
      )

      const depositAPY = bigNumberToString(reserveData.liquidityRate, aprDecimals)
      const variableBorrowAPR = reserveData.variableBorrowRate
      localTotalMarketSizeUsd += parseFloat(marketSizeUsd)

      acc.push({
        name: reserveData.symbol,
        address: reserveData.address,
        marketSize,
        marketSizeUsd,
        totalBorrowed,
        totalBorrowedUsd,
        depositAPY,
        variableBorrowAPR,
      })

      return acc
    }, [] as IMarketsData[])

    const umee = {
      name: 'UMEE',
      address: umeeTokenAddr,
      marketSize: '0',
      totalBorrowed: BigNumber.from(0),
      marketSizeUsd: '0.00',
      totalBorrowedUsd: '0',
      depositAPY: '0',
      variableBorrowAPR: BigNumber.from(0),
    } as IMarketsData

    marketsData.splice(1, 0, umee)

    setMarketData(marketsData)
    setTotalMarketSizeUsd(localTotalMarketSizeUsd)
  }, [ReserveConfigurationData, ReserveData, totalMarketSizeUsd, UserReserveData, umeeTokenAddr, etherAddr])

  if (pageLoading) {
    return <PageLoading />
  }

  return (
    <MarketsDataList
      columns={size === 'small' || size === 'medium' ? marketMobileColumns : marketColumns}
      data={marketData}
      decimals={usdDecimals}
      chainType={chain}
    />
  )
}

export default Reflection
