import React, { useContext } from 'react'
import { Box, ResponsiveContext, Text } from 'grommet'
import InfoTooltip from 'components/common/InfoTooltip/InfoTooltip'
import abbreviateNumber from 'lib/abbreviate'

interface DashboardInfoPanelProps {
  borderColor?: string
  percentage?: boolean
  title: string
  value: string
  tooltip?: string
}

const DashboardInfoPanel: React.FC<DashboardInfoPanelProps> = ({ title, borderColor, value, percentage, tooltip }) => {
  const size = useContext(ResponsiveContext)

  return size === 'small' ? (
    <Box pad="small" align="center">
      <Text className="gradient-text" size="medium1">
        {percentage ? `${value}%` : `$${abbreviateNumber(parseFloat(value))}`}
      </Text>
      <Text color="clrDarkGreyOnNavy" size='small'>{title}</Text>
    </Box>
  ) : (
    <Box
      border={[
        { side: 'bottom', size: '1px', color: 'clrTextAndDataListHeader' },
        { side: 'top', size: '2px', color: borderColor || 'clrPrimary' },
      ]}
      pad={{ vertical: 'xsmall' }}
      flex
    >
      {tooltip ? (
        <InfoTooltip content={tooltip}>
          <Text color="clrTextAndDataListHeader" size="xsmall" style={{ textTransform: 'uppercase' }}>
            {title}
          </Text>
        </InfoTooltip>
      ) : (
        <Text color="clrTextAndDataListHeader" size="xsmall">
          {title}
        </Text>
      )}

      <Text color="clrTextAndDataListHeader" margin={{ top: 'medium' }} size={size === 'small' ? '32px' : 'large'}>
        {percentage ? `${value}%` : `$${value}`}
      </Text>
    </Box>
  )
}

export default DashboardInfoPanel
