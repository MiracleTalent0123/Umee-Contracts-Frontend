import React from 'react'
import GradientBox from '../common/GradientBox/GradientBox'
import { Box, Text } from 'grommet'
import { PrimaryText, TokenItem } from '../DataList'
import { BigNumber } from 'ethers'

interface Props {
  symbol: string
  noGradient: boolean
  chainName?: string
  values: { label: string; value: string | number | BigNumber }[]
  onClick?: () => void
}

export const AssetCard = ({ symbol, noGradient, onClick, values, chainName }: Props) => (
  <GradientBox pad="medium" noGradient={noGradient} onClick={onClick}>
    <Box direction="row" align="center">
      <Box flex="grow">{symbol && <TokenItem textSize="small" name={symbol} />}</Box>
      <Box align="end">
        {values.map((value, index) => (
          <Box direction="row" align="center" key={index}>
            <PrimaryText color="clrTextAndDataListHeader" size="small">
              {value.value}
            </PrimaryText>
            <Text color="clrTextGrey" margin={{ left: 'small' }} size="small">
              {value.label}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  </GradientBox>
)

AssetCard.defaultProps = {
  noGradient: true,
}
