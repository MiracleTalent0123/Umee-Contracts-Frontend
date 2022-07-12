import React, { useContext } from 'react'
import { InfoBar, InfoBarBody, InfoPanelItem } from '..'
import ProgressBar from '../common/ProgressBar'
import { InfoPanelItemStyles } from '../InfoBar/InfoPanelItem'
import DashboardInfoPanel from './DashboardInfoPanel'
import { Box, ResponsiveContext, Text } from 'grommet'
import GradientBox from '../common/GradientBox/GradientBox'
import Overview from 'components/common/Overview'

export interface DashboardOverviewProps {
  averageAPY: number
  borrowLimit: number
  borrowLimitUsed: number
  myBorrowsTotal: number
  myDepositsTotal: number
  totalCollateral: string
}

const DashboardOverview = ({
  averageAPY,
  borrowLimit,
  borrowLimitUsed,
  myBorrowsTotal,
  myDepositsTotal,
  totalCollateral,
}: DashboardOverviewProps) => {
  const size = useContext(ResponsiveContext)
  return (
    <InfoBar>
      {size === 'small' ? (
        <GradientBox align="center" pad={'medium'}>
          <DashboardInfoPanel
            title="Total Collateral"
            value={Number(totalCollateral).toFixed(2)}
            borderColor="clrDetailBoxBorderTop1"
          />
          <DashboardInfoPanel
            title="Total Borrowed"
            value={myBorrowsTotal.toFixed(2)}
            borderColor="clrDetailBoxBorderTop2"
          />
          <DashboardInfoPanel
            title="Net APY"
            value={averageAPY.toFixed(2)}
            percentage
            borderColor="clrDetailBoxBorderTop3"
            tooltip="Net APY is the result of all supply and borrow positions that you have. It is possible to have a negative net APY if your debt APY is higher than your supply APY. "
          />
        </GradientBox>
      ) : (
        <InfoBarBody
          gap={size === 'small' ? 'large' : 'medium'}
          direction={size === 'medium' || size === 'small' ? 'column' : 'row'}
        >
          <Overview
            title="TOTAL COLLATERAL"
            value={parseFloat(Number(totalCollateral).toFixed(2)).toLocaleString()}
            pad="medium"
            color="clrFullPurple"
            gradient
            price
            flex
          />
          <Overview
            title="TOTAL BORROWED"
            value={parseFloat(myBorrowsTotal.toFixed(2)).toLocaleString()}
            color="clrFullGreen"
            pad="medium"
            gradient
            price
            flex
          />
          <Overview
            flex
            title="NET APY"
            value={parseFloat(averageAPY.toFixed(2)).toLocaleString()}
            pad="medium"
            gradient
            unit='%'
          />
        </InfoBarBody>
      )}

      <InfoBar margin={{ top: size === 'small' ? 'xlarge' : 'large' }}>
        <ProgressBar value={borrowLimitUsed} borrowTotal={myBorrowsTotal} />
      </InfoBar>
    </InfoBar>
  )
}

export default DashboardOverview
