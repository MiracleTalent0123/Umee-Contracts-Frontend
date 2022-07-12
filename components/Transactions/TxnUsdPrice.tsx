import React, { useMemo } from 'react'
import { useConvexityData } from 'api/convexity'
import { useData } from 'api/data'
import { Text } from 'grommet'
import { Chain, useChain } from 'lib/hooks/chain/context'

export const TxnUsdPrice = ({
  textSize,
  txnAmount,
  symbol,
  color,
}: {
  textSize?: string
  txnAmount: string
  symbol?: string
  color?: string
}) => {
  const { chainMode } = useChain()
  const { priceData } = useData()
  const { ConvexityPriceData } = useConvexityData()

  const usdPrice = useMemo(() => {
    if (txnAmount && symbol) {
      if (chainMode == Chain.ethereum) {
        if (priceData) return Number(txnAmount) * priceData[symbol].usd
        else return 0
      } else {
        const priceData = ConvexityPriceData?.find((price) => price.denom == symbol)
        if (priceData) return Number(txnAmount) * Number(priceData.amount)
        else return 0
      }
    } else {
      return 0
    }
  }, [priceData, symbol, txnAmount, chainMode, ConvexityPriceData])

  return (
    <Text size={textSize || 'xsmall'} style={{ letterSpacing: '0.1em' }} color={color || 'clrMidGreyOnNavy'}>
      ~${usdPrice ? usdPrice.toFixed(2) : '0.00'}
    </Text>
  )
}
