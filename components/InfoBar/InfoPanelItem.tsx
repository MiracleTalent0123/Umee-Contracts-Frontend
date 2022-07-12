import { Box, BoxProps, Text } from 'grommet'
import * as React from 'react'
import InfoTooltip from 'components/common/InfoTooltip/InfoTooltip'
import { BigNumber } from 'ethers'

export interface InfoPanelData {
  value?: string | BigNumber
  textSize?: string
  bold?: boolean
  color?: string
}

export enum InfoPanelItemStyles {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export interface InfoPanelItemProps {
  title: string
  data: InfoPanelData[]
  style?: InfoPanelItemStyles
  align?: BoxProps['align']
  justify?: BoxProps['justify']
  subTitle?: string
  textSize?: string
  titleBg?: string
  titleDirection?: BoxProps['direction']
  tooltip?: string
}

interface TitleProps {
  title: string
  textSize?: string
}

const Title: React.FC<TitleProps> = ({ title, textSize }) => (
  <Text color="clrTextAndDataListHeader" size={textSize || 'medium'}>
    {title}
  </Text>
)

const InfoPanelItem = ({
  data,
  title,
  justify,
  subTitle,
  textSize,
  align,
  titleBg,
  titleDirection,
  style = InfoPanelItemStyles.Vertical,
  tooltip,
}: InfoPanelItemProps) => {
  const VerticalItem = () => (
    <Box justify={justify ? justify : 'center'} pad={{ vertical: 'xsmall' }} align={align ? align : 'end'} flex>
      {titleBg ? (
        <Box align="center" direction={titleDirection}>
          <Box margin={{ horizontal: '2px' }} width="10px" height="10px" background={titleBg} />
          <Title title={title} textSize={textSize} />
        </Box>
      ) : (
        <Title title={title} textSize={textSize} />
      )}
      <Box direction="row" align={align ? align : 'end'}>
        {data &&
          data.map((datum) => (
            <Text
              color="clrTextAndDataListHeader"
              key={`${title}-${datum.value}`}
              size={datum.textSize || 'medium'}
              weight={datum.bold ? 'bold' : 'normal'}
              style={{ lineHeight: '22px' }}
            >
              {datum.value}
            </Text>
          ))}
      </Box>
    </Box>
  )

  const HorizontalItem = () => (
    <Box pad={{ vertical: 'xxsmall' }} direction="row" align="center" flex justify={justify ? justify : 'between'}>
      <Box justify="start">
        {titleBg ? (
          <Box align="center" direction={titleDirection}>
            <Box margin={{ horizontal: '2px' }} width="10px" height="10px" background={titleBg} />
            <Title title={title} textSize={textSize} />
          </Box>
        ) : (
          <Title title={title} textSize={textSize} />
        )}
        {!!subTitle && (
          <Text color="clrTextAndDataListHeader" size="xsmall">
            {subTitle}
          </Text>
        )}
      </Box>
      <Box direction="row" align="end" margin={{ left: 'xsmall' }}>
        {data &&
          data.map((datum, index) => (
            <Text
              color="clrTextAndDataListHeader"
              key={`${title}-${datum.value}`}
              size={datum.textSize || 'medium'}
              weight={datum.bold ? 'bold' : 'normal'}
              style={{ marginLeft: index > 0 ? '3px' : '' }}
            >
              {datum.value}
            </Text>
          ))}
      </Box>
    </Box>
  )

  return style === InfoPanelItemStyles.Vertical ? (
    <VerticalItem />
  ) : tooltip ? (
    <InfoTooltip content={tooltip}>
      <HorizontalItem />
    </InfoTooltip>
  ) : (
    <HorizontalItem />
  )
}

export default InfoPanelItem
