import { BigNumber } from 'ethers';
import { useWeb3 } from '../web3';

import { UmeeProtocolDataProvider, LendingPool, Gravity } from '../types';

import { useUmeeProtocolDataProviderContract, useLendingPoolContract, useGravityContract } from './contracts';

import { useAllReserveTokens, useReserveConfigurationData, useReserveData } from './assetdata';

import { GetBridgeHistoryFn, getBridgeHistory, useUserAccountData, useUserReserveData } from './userdata';

import { IAssetPrices, usePriceData } from './pricedata';
import { IReserveConfigurationData } from 'lib/types';
export interface Data {
  Contracts: {
    dataProvider?: UmeeProtocolDataProvider;
    lendingPool?: LendingPool;
    gravity?: Gravity;
  };
  Addresses: {
    addressProvider?: string;
    reserve?: { symbol: string; tokenAddress: string }[];
  };
  ReserveConfigurationData: IReserveConfigurationData[];
  ReserveData: {
    symbol: string;
    address: string;
    usdPrice: number;
    availableLiquidity: BigNumber;
    totalStableDebt: BigNumber;
    totalVariableDebt: BigNumber;
    liquidityRate: BigNumber;
    variableBorrowRate: BigNumber;
    stableBorrowRate: BigNumber;
    averageStableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
    lastUpdateTimestamp: number;
  }[];
  UserAccountData?: {
    totalCollateralETH: BigNumber;
    totalDebtETH: BigNumber;
    availableBorrowsETH: BigNumber;
    currentLiquidationThreshold: BigNumber;
    ltv: BigNumber;
    healthFactor: BigNumber;
  };
  UserReserveData: {
    symbol: string;
    address: string;
    decimals: BigNumber;
    currentUTokenBalance: BigNumber;
    currentStableDebt: BigNumber;
    currentVariableDebt: BigNumber;
    principalStableDebt: BigNumber;
    scaledVariableDebt: BigNumber;
    stableBorrowRate: BigNumber;
    liquidityRate: BigNumber;
    stableRateLastUpdated: number;
    usageAsCollateralEnabled: boolean;
  }[];
  getBridgeHistory: GetBridgeHistoryFn;
  priceData: IAssetPrices | undefined;
}

function useSystemData() {
  const { account } = useWeb3();

  const UmeeProtocolDataProviderContract = useUmeeProtocolDataProviderContract();
  const LendingPoolContract = useLendingPoolContract();
  const GravityContract = useGravityContract();

  // price data
  const priceData = usePriceData();

  // Asset Data Access
  const returnAssetData = useAllReserveTokens(UmeeProtocolDataProviderContract);
  let returnReserveConfigurationData = useReserveConfigurationData(
    UmeeProtocolDataProviderContract,
    LendingPoolContract,
    account,
    returnAssetData
  );
  const returnReserveData = useReserveData(LendingPoolContract, priceData)

  // User Data Access
  const returnUserAccountData = useUserAccountData(LendingPoolContract, account);
  const returnUserReserveData = useUserReserveData(
    UmeeProtocolDataProviderContract,
    returnAssetData,
    returnReserveConfigurationData,
    account,
    LendingPoolContract
  );
  returnReserveConfigurationData = returnReserveConfigurationData.reduce((acc, token) => {
    if (token.symbol === 'ATOM') {
      token.decimals = BigNumber.from(6);
    }
    acc.push(token);
    return acc;
  }, Array());

  const data: Data = {
    Contracts: {
      dataProvider: UmeeProtocolDataProviderContract,
      lendingPool: LendingPoolContract,
      gravity: GravityContract,
    },
    Addresses: {
      reserve: returnAssetData,
    },
    ReserveConfigurationData: returnReserveConfigurationData.filter(
      (token) => token.symbol === 'ATOM' || token.symbol === 'UMEE'
    ),
    ReserveData: returnReserveData.filter((token) => token.symbol === 'ATOM' || token.symbol === 'UMEE'),
    UserAccountData: returnUserAccountData,
    UserReserveData: returnUserReserveData.filter((token) => token.symbol === 'ATOM' || token.symbol === 'UMEE'),
    getBridgeHistory,
    priceData,
  };

  return data;
}

export { useSystemData };
