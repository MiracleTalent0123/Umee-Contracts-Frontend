import React from 'react'
import { Box, BoxProps, Text } from 'grommet'
import GradientBox from '../GradientBox/GradientBox'

interface OverviewProps extends BoxProps {
  title: string
  value: string | React.ReactNode
  children?: React.ReactNode
  gradient?: boolean
  borderColor?: string
  color?: string
  unit?: string
  price?: boolean
}

const Content = ({
  title,
  value,
  color,
  children,
  unit,
  price,
}: {
  title: string
  value: string | React.ReactNode
  children?: React.ReactNode
  color?: string
  unit?: string
  price?: boolean
}) => {
  return (
    <>
      <Text size="small" color={'clrTextAndDataListHeader'}>
        {title}
      </Text>
      <Box direction="row" wrap>
        <Text margin={{ right: 'xsmall' }} weight={'bold'} size="medium1" color={color || 'clrTextAndDataListHeader'}>
          {price && '$'}
          {value}
        </Text>
        <Text weight={'bold'} size="medium1" color={color || 'clrTextAndDataListHeader'}>
          {unit}
        </Text>
      </Box>

      {children}
    </>
  )
}

const Overview = ({
  title,
  value,
  children,
  gradient = true,
  borderColor,
  color,
  unit,
  price,
  ...props
}: OverviewProps) => {
  return gradient ? (
    <GradientBox {...props}>
      <Content title={title} value={value} color={color} price={price} unit={unit}>
        {children}
      </Content>
    </GradientBox>
  ) : (
    <Box border={{ size: '1px', color: borderColor || 'clrBorder' }} round="5px" {...props}>
      <Content title={title} value={value} color={color} unit={unit} price={price}>
        {children}
      </Content>
    </Box>
  )
}

export default Overview
