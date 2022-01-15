import React from 'react';
import { Box } from 'grommet';
import { BigNumber } from 'ethers';
import { ToggleSwitch, MarketsDataList } from 'components';
import { IDataListColumn } from 'components/DataList/DataList';
import { IMarketsData } from 'components/MarketsDataList';
import { useData } from 'api/data';
import { useState, useEffect } from 'react';
import PageLoading from 'components/common/Loading/PageLoading';
import './Markets.css';
import { bigNumberToUSDString, bigNumberToString } from 'lib/number-utils';

function Markets() {
  const [marketData, setMarketData] = useState<IMarketsData[]>([]);
  const [totalMarketSizeUsd, setTotalMarketSizeUsd] = useState(0);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [usdDecimals, setUsdDecimals] = useState<BigNumber>(BigNumber.from(18));

  const marketColumns: IDataListColumn[] = [
    { title: 'Assets', size: 'flex' },
    { title: 'Market size', size: 'flex' },
    { title: 'Supply APY', size: 'flex' },
    { title: 'Borrow APY', size: 'flex' },
    { title: 'Bridge', size: 'flex' },
    { title: 'IBC', size: 'flex' },
  ];

  const { ReserveData, ReserveConfigurationData, UserReserveData } = useData();
  const [displayUsd, setDisplayUsd] = useState(false);

  useEffect(() => {
    if (ReserveData && ReserveConfigurationData && marketData.length > 0) {
      setPageLoading(false);
    }
  }, [ReserveConfigurationData, ReserveData, marketData.length]);

  useEffect(() => {
    let localTotalMarketSizeUsd = 0;
    let marketsData = ReserveData.reduce((acc, reserveData, index) => {
      let tokenConfig = ReserveConfigurationData.find((rc) => rc.address === reserveData.address);
      let decimals = tokenConfig?.decimals || BigNumber.from(18);
      setUsdDecimals(decimals);
      let totalBorrowed = reserveData.totalStableDebt.add(reserveData.totalVariableDebt);

      const marketSize = bigNumberToString(reserveData.availableLiquidity.add(totalBorrowed), decimals);
      const totalBorrowedUsd = bigNumberToUSDString(totalBorrowed, decimals, reserveData.usdPrice);
      const marketSizeUsd = bigNumberToUSDString(
        reserveData.availableLiquidity.add(totalBorrowed),
        decimals,
        reserveData.usdPrice
      );

      const depositAPY = reserveData.liquidityRate;
      const variableBorrowAPR = reserveData.variableBorrowRate;
      const stableBorrowAPR = reserveData.stableBorrowRate;
      localTotalMarketSizeUsd += parseFloat(marketSizeUsd);

      if (reserveData.symbol !== 'WETH') {
        acc.push({
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
        });
      }

      return acc;
    }, Array<IMarketsData>());
    setMarketData(marketsData);
    setTotalMarketSizeUsd(localTotalMarketSizeUsd);
  }, [ReserveConfigurationData, ReserveData, totalMarketSizeUsd, UserReserveData]);

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <div>
      <div className="nav-title markets-container">
        <h1>Umee Markets</h1>
        <p>Markets available for cross-chain leverage</p>
      </div>
      <Box className="markets-container" direction="row" justify="center" gap="medium">
        <Box width="100%" style={{ maxWidth: '1027px' }}>
          <Box direction="row" fill="horizontal" justify="center">
            <ToggleSwitch
              choiceA="USD"
              choiceB="Native"
              defaultSelected="Native"
              handler={(choice) => setDisplayUsd(choice === 'USD')}
            />
          </Box>
          <Box width="auto" pad={{ vertical: 'small' }} direction="row" gap="medium">
            <MarketsDataList columns={marketColumns} data={marketData} showUsd={displayUsd} decimals={usdDecimals} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Markets;
