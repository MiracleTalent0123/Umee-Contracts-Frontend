import React, { createContext } from 'react'
import { useStore } from 'api/cosmosStores'
import { BigNumber } from 'ethers'
import { observer } from 'mobx-react-lite'
import { useConvexityAccountData, useConvexityAssetData, useRegisteredToken } from './assetData'
import { usePriceData } from './pricedata'

interface ISummaryData {
  base_denom: string;
  reserve_factor: string;
  collateral_weight: string;
  liquidation_threshold: string;
  base_borrow_rate: string;
  kink_borrow_rate: string;
  max_borrow_rate: string;
  kink_utilization_rate: string;
  liquidation_incentive: string;
  symbol_denom: string;
  exponent: number;
}

interface ITerraChainsData {
  chainID: string;
  lcd: string;
  mantle: string;
  name: string;
}

interface ITerraSchemaData {
  icon: string;
  identifier: string;
  name: string;
  urls: Array<{ browser: string; url: string }>;
}

export interface MiscData {
  dai_summary: ISummaryData;
  atom_summary: ISummaryData;
  osmo_summary: ISummaryData;
  juno_summary: ISummaryData;
  umee_summary: ISummaryData;
  terra_chains: {
    localterra: ITerraChainsData;
    mainnet: ITerraChainsData;
  };
  terra_schema: {
    $schema: string;
    whitelist: Array<ITerraSchemaData>;
  };
}

export interface MarketSummaryData {
  atom_available_borrow: string;
  atom_borrow_apy: string;
  atom_exchange_rate: string;
  atom_lend_apy: string;
  atom_market_size: string;
  juno_available_borrow: string;
  juno_borrow_apy: string;
  juno_exchange_rate: string;
  juno_lend_apy: string;
  juno_market_size: string;
  osmo_available_borrow: string;
  osmo_borrow_apy: string;
  osmo_exchange_rate: string;
  osmo_lend_apy: string;
  osmo_market_size: string;
  umee_available_borrow: string;
  umee_borrow_apy: string;
  umee_exchange_rate: string;
  umee_lend_apy: string;
  umee_market_size: string;
}

export interface UmeeUserInfo {
  borrow_limit: string;
  loaned_value: string;
  borrowed_value: string;
  collateral_value: string;
}

export interface UserData {
  borrowed: Array<any>;
  loaned: Array<any>;
  collateral_setting: boolean;
  collateral: Array<any>;
}

export interface RegisteredToken {
  base_denom: string;
  reserve_factor: string;
  collateral_weight: string;
  liquidation_threshold: string;
  base_borrow_rate: string;
  kink_borrow_rate: string;
  max_borrow_rate: string;
  kink_utilization_rate: string;
  liquidation_incentive: string;
  symbol_denom: string;
  exponent: number;
}

export interface ConvexityToken {
  name: string;
  address: string;
  marketSizeUsd: string;
  depositAPY: string;
  variableBorrowAPR: string;
  loaned: BigNumber;
  borrowed: BigNumber;
  availableLiquidity: BigNumber;
  decimals: BigNumber;
  usageAsCollateralEnabled: boolean;
  liquidationThreshold: BigNumber;
  ltv: BigNumber;
  liquidationBonus: BigNumber;
  collateral: BigNumber;
  usdPrice: string;
  chainName: string;
}

export interface ConvexityAccountData {
  totalLoaned: string;
  totalBorrowed: string;
  borrowLimit: string;
  totalCollateral: string;
}

export interface ConvexityPriceData {
  denom: string;
  amount: string;
}

export interface Data {
  RegisteredTokens: ConvexityToken[];
  ConvexityPriceData: ConvexityPriceData[] | undefined;
  ConvexityAccountData: ConvexityAccountData | undefined;
  getConvexityData: () => void;
}

export const ConvexityContext = createContext<Data | null>(null)

export default observer(({ children }) => {
  const { convexityPriceData, getPriceData } = usePriceData()
  const { accountStore, chainStore } = useStore()
  const accountAddress = accountStore.getAccount(chainStore.current.chainId).bech32Address

  const registeredTokens = useRegisteredToken()
  const { convexityData, getConvexityData } = useConvexityAssetData(accountAddress, registeredTokens)
  const { convexityAccountData, getConvexityAccountData } = useConvexityAccountData(accountAddress)

  const data: Data = {
    RegisteredTokens: convexityData,
    ConvexityPriceData: convexityPriceData,
    ConvexityAccountData: convexityAccountData,
    getConvexityData: () => {
      getConvexityAccountData()
      getConvexityData()
      getPriceData()
    },
  }

  return <ConvexityContext.Provider value={data}>{children}</ConvexityContext.Provider>
})
