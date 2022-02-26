import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AvailableDepositsDataList } from 'components';
import { IDataListColumn } from 'components/DataList/DataList';
import { IAvailableDepositsData } from 'components/AvailableDepositsDataList';
import { useData } from 'api/data';
import { useEffect, useState } from 'react';
import { BigNumber, utils } from 'ethers';
import PageLoading from 'components/common/Loading/PageLoading';
import { useUserBalances } from 'api/data/allowanceData';
import { useWeb3 } from 'api/web3';
import Layout from 'pages/Layout';
import { ResponsiveContext } from 'grommet';
import { bigNumberToUSDString } from 'lib/number-utils';
import { IMarketsData } from 'components/MarketsDataList';

export interface IMyDepositsData {
  name: string;
  color: string;
  value: BigNumber;
}

type stateType = {
  tokenAddress: string;
};

export interface IAssetCap {
  [address: string]: boolean;
} 

const capMap: IAssetCap = {};

const Deposit = () => {
  const size = useContext(ResponsiveContext);
  const { state } = useLocation<stateType>();
  const [depositsData, setDepositsData] = useState<IAvailableDepositsData[]>([]);
  const [userDeposits, setUserDeposits] = useState<IAvailableDepositsData[]>([]);
  const [tokenAddresses, setTokenAddresses] = useState<string[]>([]);
  const [assetCap, setAssetCap] = useState<{}>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const { ReserveConfigurationData, ReserveData } = useData();
  const { UserReserveData, Addresses, priceData } = useData();
  const walletBalances = useUserBalances(tokenAddresses);
  const web3 = useWeb3();

  const availableTokensColumns: IDataListColumn[] = [
    { title: 'AVAILABLE ASSETS', size: 'flex' },
    { title: 'AVAILABLE', size: 'flex' },
    { title: 'SUPPLY APY', size: 'flex' },
    { title: 'COLLATERAL', size: 'flex' },
  ];

  const userAssetsColumns: IDataListColumn[] = [
    { title: 'YOUR POSITIONS', size: 'flex' },
    { title: 'SUPPLIED', size: 'flex' },
    { title: 'SUPPLY APY', size: 'flex' },
    { title: 'COLLATERAL', size: 'flex' },
  ];

  const availableTokensMobileColumns: IDataListColumn[] = [
    { title: 'AVAILABLE ASSETS', size: 'flex' },
    { title: 'AVAILABLE', size: 'flex' },
    { title: 'COLLATERAL', size: 'xsmall' },
  ];

  const userAssetsMobileColumns: IDataListColumn[] = [
    { title: 'YOUR POSITIONS', size: 'flex' },
    { title: 'SUPPLIED', size: 'flex' },
    { title: 'COLLATERAL', size: 'xsmall' },
  ];

  useEffect(() => {
    if (web3.account) {
      setLoggedIn(true);
    } else setLoggedIn(false);
  }, [web3.account]);

  useEffect(() => {
    if (walletBalances && UserReserveData && Addresses && ReserveConfigurationData && priceData && ReserveData) {
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
    ReserveData.reduce((acc, reserveData) => {
      const tokenConfig = ReserveConfigurationData.find((rc) => rc.address === reserveData.address);
      const decimals = tokenConfig?.decimals || BigNumber.from(18);
      const totalBorrowed = reserveData.totalStableDebt.add(reserveData.totalVariableDebt);
      const marketSizeUsd = bigNumberToUSDString(
        reserveData.availableLiquidity.add(totalBorrowed),
        decimals,
        reserveData.usdPrice
      );

      if (parseFloat(marketSizeUsd) >= 1000000) {
        capMap[reserveData.address] = true; // Cap limit reached for asset
        setAssetCap(capMap);
      } else {
        capMap[reserveData.address] = false; // Cap limit not reached for asset
        setAssetCap(capMap);
      }
      return acc;
    }, Array<IMarketsData>());
  }, [ReserveConfigurationData, ReserveData, UserReserveData]);
  
  useEffect(() => {
    if (!Addresses.reserve?.length) return;
    setTokenAddresses(Addresses.reserve?.length ? Addresses.reserve.map((r) => r.tokenAddress) : []);
  }, [Addresses]);

  useEffect(() => {
    let depositReserves;
    if (UserReserveData && priceData && web3.account) {
      depositReserves = UserReserveData.reduce((acc, userReserve, i) => {
        if (userReserve.currentUTokenBalance?.isZero()) {
          const price = priceData[userReserve.symbol].usd ? String(priceData[userReserve.symbol].usd) : '0.00';
          const priceDecimals = price.indexOf('.') > 0 ? price.length - price.indexOf('.') - 1 : 0;
          const bigPrice = priceData ? utils.parseUnits(price, priceDecimals) : BigNumber.from(0);
          acc.push({
            address: userReserve.address,
            symbol: userReserve.symbol,
            color: 'clrReserveIndicatorDefault',
            tokenBalance: walletBalances[i],
            usdBalance: walletBalances[i]?.mul(bigPrice),
            usdPriceDecimals: priceDecimals,
            apy: userReserve.liquidityRate,
            decimals: userReserve.decimals.toNumber(),
            usageAsCollateralEnabled: userReserve.usageAsCollateralEnabled,
          });
          
        }
        return acc;
      }, Array<IAvailableDepositsData>());
    } else if (!web3.account) {
      depositReserves = ReserveData.reduce((acc, userReserve) => {
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
          acc.push({
            address: reserve.address,
            symbol: reserve.symbol,
            color: 'clrReserveIndicatorDefault',
            tokenBalance: reserve.currentUTokenBalance,
            usdBalance: reserve.currentUTokenBalance.mul(bigPrice),
            usdPriceDecimals: priceDecimals,
            apy: reserve.liquidityRate,
            decimals: reserve.decimals.toNumber(),
            usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
          });
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
      <Layout title="Supply" subtitle="Supply assets and set collateral for borrowing">
        {loggedIn && (
          <AvailableDepositsDataList
            capMap={assetCap}
            columns={size === 'small' ? availableTokensMobileColumns : availableTokensColumns}
            userAssetsColumns={size === 'small' ? userAssetsMobileColumns : userAssetsColumns}
            data={depositsData}
            userDeposits={userDeposits}
            loggedIn={loggedIn}
            selectedTokenAddress={state && state.tokenAddress}
          />
        )}
      </Layout>
    </>
  );
};

export default Deposit;
