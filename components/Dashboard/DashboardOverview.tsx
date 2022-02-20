import React, { useContext } from 'react';
import { InfoBar, InfoBarBody, InfoPanelItem } from '..';
import { bigNumberETHToString } from 'lib/number-utils';
import ProgressBar from '../common/ProgressBar';
import { InfoPanelItemStyles } from '../InfoBar/InfoPanelItem';
import { BigNumber } from 'ethers';
import DashboardInfoPanel from './DashboardInfoPanel';
import { ResponsiveContext } from 'grommet';

export interface DashboardOverviewProps {
  myDepositsTotal: number;
  userData: {
    totalCollateralETH: BigNumber;
    totalDebtETH: BigNumber;
    availableBorrowsETH: BigNumber;
    currentLiquidationThreshold: BigNumber;
    ltv: BigNumber;
    healthFactor: BigNumber;
  };
  ethPrice?: number;
  myBorrowsTotal: number;
  borrowLimit: number;
  borrowLimitUsed: number;
}

const DashboardOverview = ({
  myDepositsTotal,
  userData,
  ethPrice,
  myBorrowsTotal,
  borrowLimit,
  borrowLimitUsed,
}: DashboardOverviewProps) => {
  const size = useContext(ResponsiveContext);

  return (
    <InfoBar>
      <InfoBarBody
        gap={size === 'small' ? 'large' : 'medium'}
        direction={size === 'medium' || size === 'small' ? 'column' : 'row'}
      >
        <DashboardInfoPanel
          title="TOTAL SUPPLIED"
          value={parseFloat(myDepositsTotal.toFixed(2)).toLocaleString()}
          borderColor="clrDetailBoxBorderTop1"
        />
        <DashboardInfoPanel
          title="TOTAL COLLATERAL"
          value={parseFloat(bigNumberETHToString(userData.totalCollateralETH, ethPrice)).toLocaleString()}
          borderColor="clrDetailBoxBorderTop2"
        />
        <DashboardInfoPanel
          title="TOTAL BORROWED"
          value={parseFloat(myBorrowsTotal.toFixed(2)).toLocaleString()}
          borderColor="clrDetailBoxBorderTop3"
        />
      </InfoBarBody>
      <InfoBar margin={{ top: size === 'small' ? 'xlarge' : 'large' }}>
        <InfoPanelItem
          title="Borrow Limit:"
          data={[
            { value: '$', textSize: size === 'small' ? 'small' : 'medium' },
            { value: Number(borrowLimit.toFixed(2)).toLocaleString(), textSize: size === 'small' ? 'small' : 'medium' },
          ]}
          textSize={'small' ? 'small' : 'medium'}
          style={InfoPanelItemStyles.Horizontal}
          justify="start"
        />
        <ProgressBar value={borrowLimitUsed} borrowTotal={myBorrowsTotal} />
      </InfoBar>
    </InfoBar>
  );
};

export default DashboardOverview;
