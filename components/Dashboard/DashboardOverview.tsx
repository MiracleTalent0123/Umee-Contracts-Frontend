import React from 'react';
import { InfoPanel, InfoBar, InfoBarBody, InfoPanelItem } from '..';
import { bigNumberETHToString } from 'lib/number-utils';
import InfoPanelDashboardItem from '../InfoBar/InfoPanelDashboardItem';
import borrowIcon from '../../public/images/borrow-icon.svg';
import depositIcon from '../../public/images/deposit-icon.svg';
import ProgressBar from '../common/ProgressBar';
import { InfoPanelItemStyles } from '../InfoBar/InfoPanelItem';
import { BigNumber } from 'ethers';

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
  return (
    <InfoBar>
      <InfoBarBody>
        <InfoPanel title="Total Supplied">
          <InfoPanelDashboardItem
            link="/deposit"
            icon={depositIcon}
            value={parseFloat(myDepositsTotal.toFixed(2)).toLocaleString()}
          />
        </InfoPanel>
        <InfoPanel title="Total Collateral">
          <InfoPanelDashboardItem
            link="/deposit"
            icon={depositIcon}
            value={parseFloat(bigNumberETHToString(userData.totalCollateralETH, ethPrice)).toLocaleString()}
          />
        </InfoPanel>
        <InfoPanel title="Total Borrowed" direction="row">
          <InfoPanelDashboardItem
            link="/borrow"
            icon={borrowIcon}
            value={parseFloat(myBorrowsTotal.toFixed(2)).toLocaleString()}
          />
        </InfoPanel>
      </InfoBarBody>
      <InfoBar margin={{ top: 'medium' }}>
        <InfoPanel direction="column">
          <ProgressBar value={borrowLimitUsed} />
          <InfoPanelItem
            title="Borrow Limit: "
            data={[
              { value: '$', textSize: 'small' },
              { value: Number(borrowLimit.toFixed(2)).toLocaleString(), textSize: 'small' },
            ]}
            textSize="small"
            style={InfoPanelItemStyles.Horizontal}
            justify="end"
          />
        </InfoPanel>
      </InfoBar>
    </InfoBar>
  );
};

export default DashboardOverview;
