import React, { useState, useEffect } from 'react';
import { Box } from 'grommet';
import { bigNumberToString } from 'lib/number-utils';
import { InfoPanel, InfoPanelItem, InfoPanelMeter } from 'components';
import { ethers, utils } from 'ethers';
import InfoDetailPopUp from 'components/InfoBar/InfoDetailPopUp';
import { IInfoDetailPopUp } from 'components/InfoBar/InfoDetailPopUp';
import { usePriceData } from '../../api/data/pricedata';

interface BorrowPanelProps {
  infoDetailProps: IInfoDetailPopUp;
  meter: any;
  userChart: any;
}
export const BorrowPanel = ({
  meter: borrowMeter,
  infoDetailProps,
  userChart: userCollateralChartData,
}: BorrowPanelProps) => {
  const { userData, show, setShow, showButton } = infoDetailProps;
  const [ethPrice, setEthPrice] = useState<number>(0);
  const priceData = usePriceData();

  useEffect(() => {
    if (priceData) {
      setEthPrice(priceData['WETH'].usd);
    }
  }, [priceData]);

  return (
    <InfoPanel title="Borrow Information" direction="row">
      <Box direction="row" gap="medium" justify="start">
        <Box direction="column">
          <InfoPanelItem
            title="You borrowed"
            centered
            data={[
              {
                value: (parseFloat(utils.formatEther(userData.totalDebtETH)) * ethPrice).toFixed(2).toString(),
                bold: true,
              },
              { value: 'USD' },
            ]}
          />
          <InfoPanelMeter title="Borrow Composition" values={borrowMeter} />
        </Box>
        <Box direction="column">
          <InfoPanelItem
            title="Your collateral"
            centered
            data={[
              {
                value: (parseFloat(utils.formatEther(userData.totalCollateralETH)) * ethPrice).toFixed(2).toString(),
                bold: true,
              },
              { value: 'USD' },
            ]}
          />
          <InfoPanelMeter title="Collateral Composition" values={userCollateralChartData} />
        </Box>
      </Box>

      <Box direction="column" justify="start">
        <InfoPanelItem centered title="Current LTV" data={[{ value: bigNumberToString((userData.totalDebtETH.mul(ethers.constants.WeiPerEther).div(userData.totalCollateralETH).mul(100)), 18), bold: true }, { value: '%' }]} />
        <InfoDetailPopUp userData={userData} show={show} setShow={setShow} showButton={showButton} />
      </Box>
    </InfoPanel>
  );
};
