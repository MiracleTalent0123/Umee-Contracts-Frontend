import { useState, useEffect } from 'react';
import { BigNumber } from 'ethers';
import { UmeeProtocolDataProvider, LendingPool } from '../types';
import { IReserveConfigurationData, IUserReserveData } from 'lib/types';
import { MeterProps } from 'grommet';
import { bigNumberToNumber } from 'lib/number-utils';
import { IAssetPrices } from './pricedata';


export const useUserAccountData = (lendingPool: LendingPool | undefined, user: string | undefined) => {
  const [userAccountData, setUserAccountData] = useState<{
    totalCollateralETH: BigNumber;
    totalDebtETH: BigNumber;
    availableBorrowsETH: BigNumber;
    currentLiquidationThreshold: BigNumber;
    ltv: BigNumber;
    healthFactor: BigNumber;
  }>();

  useEffect(() => {
    if (!lendingPool || !user) {
      setUserAccountData(undefined);
      return;
    }

    const getData = () => {
      lendingPool.getUserAccountData(user)
        .then(setUserAccountData)
        .catch(console.error);
    };

    getData();

    const depositFilter = lendingPool.filters.Deposit(null, null, user, null, null);
    lendingPool.on(depositFilter, getData);

    const withdrawFilter = lendingPool.filters.Withdraw(null, user, null, null);
    lendingPool.on(withdrawFilter, getData);

    const borrowFilter = lendingPool.filters.Borrow(null, null, user, null, null, null, null);
    lendingPool.on(borrowFilter, getData);

    const repayFilter = lendingPool.filters.Repay(null, user, null, null);
    lendingPool.on(repayFilter, getData);

    return () => {
      lendingPool.removeListener(depositFilter, getData);
      lendingPool.removeListener(withdrawFilter, getData);
      lendingPool.removeListener(borrowFilter, getData);
      lendingPool.removeListener(repayFilter, getData);
    };

  }, [lendingPool, user]);

  return userAccountData;
};

export const useUserReserveData = (
  umeeProtocolDataProvider: UmeeProtocolDataProvider | undefined,
  assets: { symbol: string; tokenAddress: string }[] | undefined,
  reserveConfigurations: IReserveConfigurationData[] | undefined,
  user: string | undefined,
  lendingPool: LendingPool | undefined,
) => {
  const [userReserveData, setUserReserveData] = useState<IUserReserveData[]>([]);

  useEffect(() => {
    if (!umeeProtocolDataProvider || !assets || !user || !lendingPool) {
      setUserReserveData([]);
      return;
    }

    const getData = () => {
      Promise.all(
        assets.map((asset) =>
          Promise.all([
            asset.symbol,
            asset.tokenAddress,
            umeeProtocolDataProvider.getUserReserveData(asset.tokenAddress, user),
          ])
        )
      )
        .then((results) => {
          setUserReserveData(
            results.map(([symbol, address, data]) => ({
              symbol: symbol,
              address: address,
              decimals: reserveConfigurations?.find(tokenConfig => tokenConfig.address === address)?.decimals || BigNumber.from(18),
              currentUTokenBalance: data.currentUTokenBalance,
              currentStableDebt: data.currentStableDebt,
              currentVariableDebt: data.currentVariableDebt,
              principalStableDebt: data.principalStableDebt,
              scaledVariableDebt: data.scaledVariableDebt,
              stableBorrowRate: data.stableBorrowRate,
              liquidityRate: data.liquidityRate,
              stableRateLastUpdated: data.stableRateLastUpdated,
              usageAsCollateralEnabled: data.usageAsCollateralEnabled,
            }))
          );
        })
        .catch(console.error);
    };

    getData();

    const depositFilter = lendingPool.filters.Deposit(null, null, user, null, null);
    lendingPool.on(depositFilter, getData);

    const withdrawFilter = lendingPool.filters.Withdraw(null, user, null, null);
    lendingPool.on(withdrawFilter, getData);

    const borrowFilter = lendingPool.filters.Borrow(null, null, user, null, null, null, null);
    lendingPool.on(borrowFilter, getData);

    const repayFilter = lendingPool.filters.Repay(null, user, null, null);
    lendingPool.on(repayFilter, getData);

    return () => {
      lendingPool.removeListener(depositFilter, getData);
      lendingPool.removeListener(withdrawFilter, getData);
      lendingPool.removeListener(borrowFilter, getData);
      lendingPool.removeListener(repayFilter, getData);
    };
  }, [assets, umeeProtocolDataProvider, user, lendingPool, reserveConfigurations]);

  return userReserveData;
};

export interface IUserCollateralTotals {
  ETH: string;
  USD: string;
}

export const useUserCollateralTotals = (
  priceData: IAssetPrices | undefined,
  userReserves: IUserReserveData[],
  toFixedETH = 5,
  toFixedUSD = 2
) => {
  const [collateralTotals, setCollateralTotals] = useState<IUserCollateralTotals>();

  useEffect(() => {
    if (!priceData || !userReserves.length) return;

    let totalETH = 0;
    let totalUSD = 0;

    for (let r = 0, rl = userReserves.length; r < rl; r += 1) {
      const reserveToken = userReserves[r];
      const tokenDecimals = reserveToken.decimals;
      const tokenCount = bigNumberToNumber(reserveToken.currentUTokenBalance, tokenDecimals || BigNumber.from(18));
      if (reserveToken.usageAsCollateralEnabled) {
        const usdPrice = tokenCount * priceData[reserveToken.symbol].usd;
        totalUSD += usdPrice;
        const ethPrice = tokenCount * priceData[reserveToken.symbol].eth;
        totalETH += ethPrice;
      }
    }

    setCollateralTotals({
      ETH: totalETH.toFixed(toFixedETH),
      USD: totalUSD.toFixed(toFixedUSD),
    });
  }, [priceData, userReserves, toFixedETH, toFixedUSD]);

  return collateralTotals;
};

export interface ITokenCollateralData {
  symbol: string;
  count: BigNumber;
  ethPrice: string;
  usdPrice: string;
}

export interface IUserCollateralData {
  [symbol: string]: ITokenCollateralData;
}

export const useUserCollateralData = (
  priceData: IAssetPrices | undefined,
  userReserves: IUserReserveData[],
  toFixedETH = 5,
  toFixedUSD = 2
) => {
  const [collateralData, setCollateralData] = useState<IUserCollateralData>();

  useEffect(() => {
    if (!priceData || !userReserves.length) return;

    const collateral: IUserCollateralData = {};

    for (let r = 0, rl = userReserves.length; r < rl; r += 1) {
      const reserveToken = userReserves[r];
      const tokenDecimals = reserveToken.decimals;
      const tokenCount = bigNumberToNumber(reserveToken.currentUTokenBalance, tokenDecimals || BigNumber.from(18));
      if (reserveToken.usageAsCollateralEnabled) {
        const usdPrice = tokenCount * priceData[reserveToken.symbol].usd;
        const ethPrice = tokenCount * priceData[reserveToken.symbol].eth;
        collateral[reserveToken.symbol] = {
          symbol: reserveToken.symbol,
          count: reserveToken.currentUTokenBalance,
          ethPrice: ethPrice.toFixed(toFixedETH),
          usdPrice: usdPrice.toFixed(toFixedUSD),
        };
      }
    }

    setCollateralData(collateral);
  }, [priceData, userReserves, toFixedETH, toFixedUSD]);

  return collateralData;
};

export const useUserCollateralChartData = (
  priceData: IAssetPrices | undefined,
  userReserves: IUserReserveData[],
) => {
  const [chartData, setChartData] = useState<MeterProps['values']>();
  const userCollateralTotals = useUserCollateralTotals(priceData, userReserves);

  useEffect(() => {
    const chartValues = [];
    if (!userCollateralTotals?.USD || !priceData || !userReserves.length) return;

    for (let r = 0, rl = userReserves.length; r < rl; r += 1) {
      const reserveToken = userReserves[r];
      if (reserveToken.usageAsCollateralEnabled) {
        const usdPrice = priceData[reserveToken.symbol].usd;
        const tokenDecimals = reserveToken.decimals;
        const tokenCount = bigNumberToNumber(reserveToken.currentUTokenBalance, tokenDecimals || BigNumber.from(18));
        chartValues.push({
          value: (tokenCount * usdPrice) / Number(userCollateralTotals.USD),
          label: reserveToken.symbol,
          highlight: true,
        });
      }
      else{
        chartValues.push({
          value: 0,
          label: '',
        });
      }
    }
    setChartData(chartValues);
  }, [userReserves, priceData, userCollateralTotals]);

  return chartData;
};

export const useUserDepositChartData = (
  priceData: IAssetPrices | undefined,
  userReserves: IUserReserveData[],
) => {
  const [chartData, setChartData] = useState<MeterProps['values']>();

  useEffect(() => {
    if (!priceData || !userReserves.length) return;
    const chartValues = [];
    const totalUsdValue = userReserves.reduce((acc, r) => {
      const usdPrice = priceData[r.symbol].usd;
      const tokenCount = bigNumberToNumber(r.currentUTokenBalance, r.decimals || BigNumber.from(18));
      return acc + tokenCount * usdPrice;
    }, 0);

    for (let r = 0, rl = userReserves.length; r < rl; r += 1) {
      const reserveToken = userReserves[r];
      const usdPrice = priceData[reserveToken.symbol].usd;
      const tokenDecimals = reserveToken.decimals;
      const tokenCount = bigNumberToNumber(reserveToken.currentUTokenBalance, tokenDecimals || BigNumber.from(18));
      chartValues.push({
        value: (tokenCount * usdPrice) / totalUsdValue,
        label: reserveToken.symbol,
      });
    }
    setChartData(chartValues);
  }, [userReserves, priceData]);

  return chartData;
};
