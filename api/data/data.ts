import { BigNumber } from 'ethers';
import { useWeb3 } from '../web3';

import {
  UmeeProtocolDataProvider,
  LendingPool,
  Gravity
} from '../types';

import {
  useUmeeProtocolDataProviderContract,
  useLendingPoolContract,
  useGravityContract
} from './contracts';

import {
  useAllReserveTokens,
  useReserveConfigurationData,
  useReserveData
} from './assetdata';

import {
  useUserAccountData,
  useUserReserveData,
} from './userdata';

import {
  IAssetPrices,
  usePriceData,
} from './pricedata';
export interface Data {
  Contracts: {
    dataProvider?: UmeeProtocolDataProvider,
    lendingPool?: LendingPool,
    gravity?: Gravity
  },
  Addresses: {
    addressProvider?: string,
    reserve?: { symbol: string; tokenAddress: string }[],
  },
  ReserveConfigurationData: {
    symbol: string,
    address: string,
    decimals: BigNumber;
    ltv: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
    reserveFactor: BigNumber;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    isActive: boolean;
    isFrozen: boolean;
  }[],
  ReserveData: {
    symbol: string,
    address: string,
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
  }[],
  UserAccountData?: {
    totalCollateralETH: BigNumber;
    totalDebtETH: BigNumber;
    availableBorrowsETH: BigNumber;
    currentLiquidationThreshold: BigNumber;
    ltv: BigNumber;
    healthFactor: BigNumber;
  },
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
  }[],

  priceData: IAssetPrices | undefined,
};

function useSystemData() {
  const { account } = useWeb3();

  const UmeeProtocolDataProviderContract = useUmeeProtocolDataProviderContract();
  const LendingPoolContract = useLendingPoolContract();
  const GravityContract = useGravityContract();

  // price data
  const priceData = usePriceData();

  // Asset Data Access
  const returnAssetData = useAllReserveTokens(UmeeProtocolDataProviderContract);
  const returnReserveConfigurationData = useReserveConfigurationData(UmeeProtocolDataProviderContract, LendingPoolContract, account, returnAssetData);
  const returnReserveData = useReserveData(UmeeProtocolDataProviderContract, LendingPoolContract, returnAssetData, priceData);

  // User Data Access
  const returnUserAccountData = useUserAccountData(LendingPoolContract, account);
  const returnUserReserveData = useUserReserveData(UmeeProtocolDataProviderContract, returnAssetData, returnReserveConfigurationData, account, LendingPoolContract);
  
  const data: Data = {
    Contracts: {
      dataProvider: UmeeProtocolDataProviderContract,
      lendingPool: LendingPoolContract,
      gravity: GravityContract
    },
    Addresses: {
      reserve: returnAssetData,
    },
    ReserveConfigurationData: returnReserveConfigurationData,
    ReserveData: returnReserveData,
    UserAccountData: returnUserAccountData,
    UserReserveData: returnUserReserveData,

    priceData,
  };

  return data;
}

export { useSystemData };
