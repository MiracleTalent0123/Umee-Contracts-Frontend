import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text } from 'grommet';
import { AvailableDepositsDataList } from 'components';
import { IDataListColumn } from 'components/DataList/DataList';
import { DataListControls } from 'components/DataListControls/DataListControls';
import { IAvailableDepositsData } from 'components/AvailableDepositsDataList';
import { useData } from 'api/data';
import { useEffect, useState } from 'react';
import { BigNumber, utils } from 'ethers';
import PageLoading from 'components/common/Loading/PageLoading';
import { useUserBalances } from 'api/data/allowanceData';
import { useWeb3 } from 'api/web3';

export interface IMyDepositsData {
  name: string;
  color: string;
  value: BigNumber;
}

type stateType = {
  tokenAddress: string;
}

const Deposit = () => {
  const { state } = useLocation<stateType>();
  const [depositsData, setDepositsData] = useState<IAvailableDepositsData[]>([]);
  const [userDeposits, setUserDeposits] = useState<IAvailableDepositsData[]>([]);
  const [tokenAddresses, setTokenAddresses] = useState<string[]>([]);

  const [filteredData, setFilteredData] = useState<IAvailableDepositsData[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const { ReserveConfigurationData, ReserveData } = useData();
  const { UserReserveData, Addresses, priceData } = useData();
  const walletBalances = useUserBalances(tokenAddresses);
  const web3 = useWeb3();

  const availableTokensColumns: IDataListColumn[] = [
    { title: 'Asset', size: 'flex' },
    { title: 'Available', size: 'flex' },
    { title: 'APY', size: 'flex' },
    { title: 'Collateral', size: 'flex' },
  ];

  const userAssetsColums: IDataListColumn[] = [
    { title: 'Asset', size: 'flex' },
    { title: 'Balance', size: 'flex' },
    { title: 'APY', size: 'flex' },
    { title: 'Collateral', size: 'flex' },
  ];

  useEffect(() => {
    if (web3.account) {
      setLoggedIn(true);
    }
  }, [web3.account]);

  useEffect(() => {
    if (
      walletBalances &&
      UserReserveData &&
      Addresses &&
      ReserveConfigurationData &&
      priceData &&
      depositsData.length > 0 &&
      ReserveData
    ) {
      setPageLoading(false);
    }
    if (!web3.account && ReserveData) {
      setPageLoading(false);
    }
  }, [
    Addresses,
    ReserveConfigurationData,
    ReserveData,
    UserReserveData,
    depositsData.length,
    priceData,
    walletBalances,
    web3.account,
  ]);

  useEffect(() => {
    if (!Addresses.reserve?.length) return;
    setTokenAddresses(Addresses.reserve?.length ? Addresses.reserve.map((r) => r.tokenAddress) : []);
  }, [Addresses]);

  useEffect(() => {
    let depositReserves;
    if (UserReserveData && priceData && web3.account) {
      depositReserves = UserReserveData.reduce((acc, userReserve, i) => {
        if(userReserve.currentUTokenBalance?.isZero()) {
          const price = priceData[userReserve.symbol].usd ? String(priceData[userReserve.symbol].usd) : '0.00';
          const priceDecimals = price.indexOf('.') > 0 ? price.length - price.indexOf('.') - 1 : 0;
          const bigPrice = priceData ? utils.parseUnits(price, priceDecimals) : BigNumber.from(0);
          if(userReserve.symbol !== 'WETH') {
            acc.push({
              address: userReserve.address,
              symbol: userReserve.symbol,
              color: 'clrReserveIndicatorDefault',
              tokenBalance: walletBalances[i],
              usdBalance: walletBalances[i]?.mul(bigPrice),
              usdPriceDecimals: priceDecimals,
              apy: userReserve.liquidityRate,
              decimals: userReserve.decimals.toNumber(),
              usageAsCollateralEnabled: userReserve.usageAsCollateralEnabled
            });
          }
        }
        return acc;
      }, Array<IAvailableDepositsData>());
    } else if (!web3.account) {
      depositReserves = ReserveData.reduce((acc, userReserve) => {
        if(userReserve.symbol !== 'WETH') {
          acc.push({
            address: userReserve.address,
            symbol: userReserve.symbol,
            color: 'clrReserveIndicatorDefault',
            tokenBalance: BigNumber.from(0),
            usdBalance: BigNumber.from(0),
            usdPriceDecimals: 0,
            apy: userReserve.liquidityRate,
            decimals: 0,
          });
        }
        return acc;
      }, Array<IAvailableDepositsData>());
    } else return;
    setDepositsData(depositReserves);
    if (priceData) {
      const existingDeposits = UserReserveData.reduce((acc, reserve) => {
        if (!reserve.currentUTokenBalance?.isZero()) {
          const price = priceData[reserve.symbol]?.usd ? String(priceData[reserve.symbol].usd) : '0.00';
          const priceDecimals = price.indexOf('.') > 0 ? price.length - price.indexOf('.') - 1 : 0;
          const bigPrice = priceData ? utils.parseUnits(price, priceDecimals) : BigNumber.from(0);
          if(reserve.symbol !== 'WETH') {
            acc.push({
              address: reserve.address,
              symbol: reserve.symbol,
              color: 'clrReserveIndicatorDefault',
              tokenBalance: reserve.currentUTokenBalance,
              usdBalance: reserve.currentUTokenBalance.mul(bigPrice),
              usdPriceDecimals: priceDecimals,
              apy: reserve.liquidityRate,
              decimals: reserve.decimals.toNumber() || 18,
              usageAsCollateralEnabled: reserve.usageAsCollateralEnabled
            });
          }
        }
        return acc;
      }, Array<IAvailableDepositsData>());

      setUserDeposits(existingDeposits);
    }
  }, [UserReserveData, walletBalances, priceData, web3.account, ReserveData]);

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <div className="nav-title assets-container">
        <h1>Deposit</h1>
        <p>Lend assets and set collateral for borrowing.</p>
      </div>
      {/**
       * @todo: ADK: This section is nearly identical to the the on in borrow/index.tsx.
       * Prime candidate for refactoring, but I'm too tired right now to do it. :)  */}
      <Box direction="row" justify="center" gap="medium" className="assets-container">
        <Box width="100%" style={{maxWidth: '700px'}}>
          <DataListControls fullDataList={depositsData} setFilteredData={setFilteredData} />
          <Box pad={{vertical: 'small'}} direction="row" gap="medium">
            {web3.account && userDeposits.length > 0 ? (
              <AvailableDepositsDataList
                columns={userAssetsColums}
                data={userDeposits}
                loggedIn={loggedIn}
                reserveData={ReserveData}
              />
            ) : (
              <></>
            )}
          </Box>   
          <Box pad={{vertical: 'small'}}>
            <Text size="small" margin={{bottom: '10px'}}>Available Markets</Text>
            <Box direction="row" gap="medium">
              <AvailableDepositsDataList
                columns={availableTokensColumns}
                data={filteredData}
                loggedIn={loggedIn}
                reserveData={ReserveData}
                selectedTokenAddress={state && state.tokenAddress}
              />
            </Box>
          </Box>
        </Box>
      </Box> 
    </>
  );
};

export default Deposit;
