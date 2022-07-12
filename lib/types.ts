import { BigNumber, BigNumberish } from 'ethers';

export type TTokenConfig = {
  symbol: string;
  address: string;
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
};

export enum ETxnType {
  withdraw = 'Withdraw',
  repay = 'Repay',
  borrow = 'Borrow',
  deposit = 'Supply',
  markets = 'Markets',
  transfer = 'Transfer',
  ibcToUmee = 'IBC to Umee',
  ibcToCosmos = 'IBC to Cosmos',
  bridgeToUmee = 'Bridge to Umee',
  bridgeToEthereum = 'Bridge to Ethereum',
  mint = 'Mint'
}

export enum DelegateType {
  delegate = 'Delegate',
  redelegate = 'Redelegate',
  undelegate = 'Undelegate',
}

export enum TxnStatusType {
  initiated = 'initiated',
  inProgress = 'inProgress',
  complete = 'complete',
  cancelled = 'cancelled',
}

export interface IUserTxnCommon {
  symbol: string;
  address: string;
  decimals: BigNumber;
  currentUTokenBalance: BigNumber;
  currentStableDebt: BigNumber;
  currentVariableDebt: BigNumber;
  principalStableDebt: BigNumber;
  scaledVariableDebt: BigNumber;
  stableBorrowRate: BigNumber;
  liquidityRate: BigNumber | string;
  stableRateLastUpdated?: number;
  usageAsCollateralEnabled: boolean;
  usdPrice: number;
}
export interface IUserTxnBorrow extends IUserTxnCommon {
  variableBorrowAPR: BigNumber | string;
  stableBorrowAPR: BigNumber | string;
}
export interface IUserTxnDeposit extends IUserTxnCommon {
  // no extension.
}

export type TTxnNavHandlers = {
  handleBackButton(e: React.MouseEvent): void;
  handleContinue(e: React.MouseEvent): void;
};

export type TTxnAvailability = {
  availableAmount: BigNumber;
  tokenDecimals: BigNumberish;
  token: ITokenData;
};

export enum ETxnSteps {
  Failure,
  Success,
  Input,
  Overview,
  Pending,
  InputAmount,
  InputRate,
  Submit,
  PendingSubmit,
  PendingApprove,
  Approve,
  ChooseType,
}

export interface ITokenData {
  symbol?: string;
  address?: string;
  usdPrice?: number;
  availableLiquidity?: BigNumber;
  totalStableDebt?: BigNumber;
  totalVariableDebt?: BigNumber;
  liquidityRate?: BigNumber | string;
  variableBorrowRate?: BigNumber | string;
  stableBorrowRate?: BigNumber;
  averageStableBorrowRate?: BigNumber;
  liquidityIndex?: BigNumber;
  variableBorrowIndex?: BigNumber;
  ltv?: BigNumber;
}

export interface IReserveData {
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
}

export interface IReserveConfigurationData {
  symbol: string;
  address: string;
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
}

export interface IUserReserveData {
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
}

export interface IBorrowData {
  symbol?: string;
  address?: string;
  currentUTokenBalance?: BigNumber;
  currentStableDebt?: BigNumber;
  currentVariableDebt?: BigNumber;
  principalStableDebt?: BigNumber;
  scaledVariableDebt?: BigNumber;
  stableBorrowRate?: BigNumber;
  liquidityRate?: BigNumber | string;
  stableRateLastUpdated?: number;
  usageAsCollateralEnabled?: boolean;
  variableBorrowAPR: BigNumber | string;
  stableBorrowAPR: BigNumber | string;
  decimals: BigNumber;
  usdPrice?: number;
}
