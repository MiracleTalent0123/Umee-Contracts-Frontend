import React from 'react';
import { Box } from 'grommet';
import { BigNumber } from 'ethers';
import {
  ToggleSwitch,
  InfoPanel,
  InfoPanelItem,
  InfoBarBody,
  MarketsDataList,
} from 'components';
import { IDataListColumn } from 'components/DataList/DataList';
import { IMarketsData } from 'components/MarketsDataList';
import { useData } from 'api/data';
import { useState, useEffect } from 'react';
import PageLoading from 'components/PageLoading';
import { MainPageContainer } from 'pages/MainPageContainer';
import './Markets.css';
function Markets() {
  const [marketData, setMarketData] = useState<IMarketsData[]>([]);
  const [totalMarketSizeUsd, setTotalMarketSizeUsd] = useState(0);
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const marketColumns: IDataListColumn[] = [
    { title: 'Assets', size: 'flex' },
    { title: 'Market size', size: 'flex' },
    { title: 'Deposit APY', size: 'flex' },
    { title: 'Borrow APY', size: 'flex' },
    { title: 'Bridge', size: 'flex' },
  ];

  const { ReserveData, ReserveConfigurationData } = useData();
  const [displayUsd, setDisplayUsd] = useState(false);

  useEffect(() => {
    if (ReserveData && ReserveConfigurationData && marketData.length > 0) {
      setPageLoading(false);
    }
  }, [ReserveConfigurationData, ReserveData, marketData.length]);

  useEffect(() => {
    let localTotalMarketSizeUsd = 0;
    setMarketData(
      ReserveData.map((reserveData) => {
        const bigTen = BigNumber.from(10);
        const decimals = bigTen.pow(
          ReserveConfigurationData.find((rc) => rc.address === reserveData.address)?.decimals || BigNumber.from(18)
        ); // TODO find a better way to handle this

        const totalBorrowed = reserveData.totalStableDebt.add(reserveData.totalVariableDebt).div(decimals);
        const marketSize = reserveData.availableLiquidity.add(totalBorrowed.mul(decimals)).div(decimals);

        const totalBorrowedUsd = totalBorrowed.toNumber() * reserveData.usdPrice;
        const marketSizeUsd = marketSize.toNumber() * reserveData.usdPrice;

        const depositAPY = reserveData.liquidityRate;
        const variableBorrowAPR = reserveData.variableBorrowRate;
        const stableBorrowAPR = reserveData.stableBorrowRate;

        localTotalMarketSizeUsd += marketSizeUsd;

        return {
          name: reserveData.symbol,
          address: reserveData.address,
          color: 'clrReserveIndicatorSecondary',
          marketSize,
          marketSizeUsd,
          totalBorrowed,
          totalBorrowedUsd,
          depositAPY,
          variableBorrowAPR,
          stableBorrowAPR,
        };
      })
    );
    setTotalMarketSizeUsd(localTotalMarketSizeUsd);
  }, [ReserveConfigurationData, ReserveData, totalMarketSizeUsd]);

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <div>
      <div className="nav-title markets-container">
        <h1>Umee Assets</h1>
        <p>Markets available for cross-chain leverage</p>
      </div>
      <Box className="markets-container" direction="row" justify="center" gap="medium">
        <Box width="100%" style={{maxWidth: '1027px'}}>
          <Box direction="row" fill="horizontal" justify="center">
            <ToggleSwitch
              choiceA="USD"
              choiceB="Native"
              defaultSelected="Native"
              handler={(choice) => setDisplayUsd(choice === 'USD')}
            />
          </Box>
          <Box width='auto' pad={{vertical: 'small'}} direction="row" gap="medium">
            <MarketsDataList columns={marketColumns} data={marketData} showUsd={displayUsd} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Markets;
