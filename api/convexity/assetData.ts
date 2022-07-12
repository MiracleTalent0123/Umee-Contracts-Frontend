import { useStore } from 'api/cosmosStores';
import { Chains } from '../../config';
import { BigNumber } from 'ethers';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ConvexityAccountData,
  ConvexityToken,
  RegisteredToken,
  MiscData,
  UmeeUserInfo,
  UserData,
} from './data';

const API_URL = process.env.API_ENDPOINT || 'http://127.0.0.1:3001';

export const useRegisteredToken = () => {
  const [registeredTokens, setRegisteredTokens] = useState<RegisteredToken[]>([]);

  useEffect(() => {
    fetch(API_URL + '/misc')
      .then((res) => res.json())
      .then((result: MiscData) => {
        setRegisteredTokens(
          result
            ? [result.atom_summary, result.juno_summary, result.osmo_summary, result.umee_summary]
            : ([] as RegisteredToken[])
        );
      });
  }, []);

  return registeredTokens;
};

export const useConvexityAssetData = (address: string, tokens: RegisteredToken[]) => {
  const [convexityData, setConvexityData] = useState<ConvexityToken[]>([]);
  const [assetdata, setAssetData] = useState<ConvexityToken[]>([]);
  const [marketSummary, setMarketSummary] = useState<any>();
  const { chainStore } = useStore();

  const tokenLength = useMemo(() => {
    return tokens.length;
  }, [tokens]);

  const getChainName = useCallback(
    (symbol: string) => {
      const chainId = Chains[symbol];
      return chainStore.getChain(chainId).chainName;
    },
    [chainStore]
  );

  const getConvexityData = useCallback(
    (tokens: RegisteredToken[], address: string) => {
      if (address) {
        Promise.all(
          tokens.map((token: any) => {
            fetch(API_URL + `/user/?address=${address}&denom=${token.base_denom}`)
              .then((result) => result.json())
              .then((userData: UserData) => {
                const lend_apy_key = `${token.symbol_denom.toLowerCase()}_lend_apy`;
                const borrow_apy_key = `${token.symbol_denom.toLowerCase()}_borrow_apy`;
                const market_size_key = `${token.symbol_denom.toLowerCase()}_market_size`;
                const available_liquidity_key = `${token.symbol_denom.toLowerCase()}_available_borrow`;
                const exchange_rates_key = `${token.symbol_denom.toLowerCase()}_exchange_rate`;

                const lend_apy = marketSummary ? marketSummary[lend_apy_key] : 0;
                const borrow_apy = marketSummary ? marketSummary[borrow_apy_key] : 0;
                const market_size = marketSummary ? marketSummary[market_size_key] : 0;
                const available_liquidity = marketSummary ? marketSummary[available_liquidity_key] : 0;
                const loanedValue = userData.loaned;
                const borrowedValue = userData.borrowed;
                const collateralAmount = userData.collateral;
                const exchange_rates = marketSummary ? marketSummary[exchange_rates_key] : 0;

                const data = {
                  name: token.symbol_denom,
                  address: token.base_denom,
                  marketSizeUsd: market_size,
                  depositAPY: (lend_apy * 100).toFixed(2),
                  variableBorrowAPR: (borrow_apy * 100).toFixed(2),
                  loaned: loanedValue.length > 0 ? BigNumber.from(loanedValue[0]['amount']) : BigNumber.from(0),
                  borrowed: borrowedValue.length > 0 ? BigNumber.from(borrowedValue[0]['amount']) : BigNumber.from(0),
                  availableLiquidity: BigNumber.from(available_liquidity),
                  decimals: BigNumber.from(token.exponent),
                  usageAsCollateralEnabled: userData.collateral_setting,
                  liquidationThreshold: BigNumber.from(token.liquidation_threshold * 10000),
                  ltv: BigNumber.from(token.collateral_weight * 10000),
                  liquidationBonus: BigNumber.from(token.liquidation_incentive * 10000),
                  collateral:
                    collateralAmount.length > 0 ? BigNumber.from(collateralAmount[0]['amount']) : BigNumber.from(0),
                  usdPrice: exchange_rates > 0 ? exchange_rates : '0',
                  chainName: getChainName(token.symbol_denom),
                };

                setAssetData((assetData) => [...assetData, data]);
              });
          })
        );
      } else {
        Promise.all(
          tokens.map((token: any) => {
            const lend_apy_key = `${token.symbol_denom.toLowerCase()}_lend_apy`;
            const borrow_apy_key = `${token.symbol_denom.toLowerCase()}_borrow_apy`;
            const market_size_key = `${token.symbol_denom.toLowerCase()}_market_size`;
            const available_liquidity_key = `${token.symbol_denom.toLowerCase()}_available_borrow`;
            const exchange_rates_key = `${token.symbol_denom.toLowerCase()}_exchange_rate`;

            const lend_apy = marketSummary ? marketSummary[lend_apy_key] : 0;
            const borrow_apy = marketSummary ? marketSummary[borrow_apy_key] : 0;
            const market_size = marketSummary ? marketSummary[market_size_key] : 0;
            const available_liquidity = marketSummary ? marketSummary[available_liquidity_key] : 0;
            const exchange_rates = marketSummary ? marketSummary[exchange_rates_key] : 0;

            const data = {
              name: token.symbol_denom,
              address: token.base_denom,
              marketSizeUsd: market_size,
              depositAPY: (lend_apy * 100).toFixed(2),
              variableBorrowAPR: (borrow_apy * 100).toFixed(2),
              loaned: BigNumber.from(0),
              borrowed: BigNumber.from(0),
              availableLiquidity: BigNumber.from(available_liquidity),
              decimals: BigNumber.from(token.exponent),
              usageAsCollateralEnabled: false,
              liquidationThreshold: BigNumber.from(token.liquidation_threshold * 10000),
              ltv: BigNumber.from(token.collateral_weight * 10000),
              liquidationBonus: BigNumber.from(token.liquidation_incentive * 10000),
              collateral: BigNumber.from(0),
              usdPrice: exchange_rates > 0 ? exchange_rates : '0',
              chainName: getChainName(token.symbol_denom),
            };

            setAssetData((assetData) => [...assetData, data]);
          })
        );
      }
    },
    [getChainName, marketSummary]
  );

  const getData = useCallback(() => {
    if (tokens.length > 0 && marketSummary) {
      getConvexityData(tokens, address);
    }
  }, [address, getConvexityData, tokens, marketSummary]);

  useEffect(() => {
    if (tokenLength == assetdata.length) {
      const orderedList = assetdata.sort(
        (asset1, asset2) => Number(asset2.marketSizeUsd) - Number(asset1.marketSizeUsd)
      );
      setConvexityData(orderedList);
    }
  }, [tokenLength, assetdata]);

  useEffect(() => {
    setAssetData([]);
  }, [address]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    fetch(API_URL + '/convexity_market_summary')
      .then((result) => result.json())
      .then(setMarketSummary);
  }, []);

  return {
    convexityData,
    getConvexityData: () => {
      getData();
      setAssetData([]);
    },
  };
};

export const useConvexityAccountData = (address: string) => {
  const [convexityAccountData, setConvexityAccountData] = useState<ConvexityAccountData>();

  const getAccountData = useCallback((address: string) => {
    if (address) {
      fetch(API_URL + `/umee_stats_user/${address}`)
        .then((res) => res.json())
        .then((result: UmeeUserInfo) => {
          const data = {
            totalLoaned: result?.loaned_value,
            totalBorrowed: result?.borrowed_value,
            borrowLimit: result?.borrow_limit,
            totalCollateral: result?.collateral_value,
          };

          setConvexityAccountData(data);
        });
    } else {
      setConvexityAccountData({
        totalLoaned: '0',
        totalBorrowed: '0',
        borrowLimit: '0',
        totalCollateral: '0',
      });
    }
  }, []);

  const getData = useCallback(() => {
    getAccountData(address);
  }, [address, getAccountData]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    convexityAccountData,
    getConvexityAccountData: () => {
      getData();
    },
  };
};
