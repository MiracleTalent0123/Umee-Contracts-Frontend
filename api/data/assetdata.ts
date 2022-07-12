import { useState, useEffect } from 'react';
import { BigNumber, EventFilter } from 'ethers';
import { IAssetPrices } from 'api/data/pricedata';

import {
  UmeeProtocolDataProvider,
  LendingPool,
} from '../types';
import { IReserveData, IReserveConfigurationData } from 'lib/types';
import { useWeb3 } from 'api/web3';

const useAllReserveTokens = (umeeProtocolDataProvider?: UmeeProtocolDataProvider) => {
  const [reservesAddresses, setReservesAddresses] = useState<{ symbol: string; tokenAddress: string; }[]>([]);
  const {chainId} = useWeb3();
  useEffect(() => {
    if (!umeeProtocolDataProvider) {
      setReservesAddresses([]);
      return;
    }

    umeeProtocolDataProvider.getAllReservesTokens()
      .then(function(result){
        let atomCount = 0;
        let assets = [];
        //for Goerli
        if (chainId === 5) {
          for (let i = 0; i < result.length; i++) {
            if (
              result[i].tokenAddress == '0xad3Fd5A0fAf3818DF880c6f18AF4971d2F7F3bB2' || //uatom
              result[i].tokenAddress == '0x0747376a18185921fceafeab0d643067ce3ed505' || //uatom
              result[i].tokenAddress == '0x4884E2a214DC5040f52A41c3f21c765283170B6e' || //usdt
              result[i].tokenAddress == '0x4A55a3a00D3AfD19062dCad21B24c09d935f895A' || //dai
              result[i].tokenAddress == '0x3fC84A29104Cef50F360064BEF5Ed0175C2bb80f' || //usdc
              result[i].tokenAddress == '0x260eDFFa7648ddC398b91884D78485612fC6d246' //atom
            ) {
              atomCount++;
              // Do nothing. Need this separate check otherwise get USD undefined error, until we remove this old atom from contract
            } else {
              if (result[i].symbol == 'uatom' && atomCount == 0) {
                atomCount++;
                let build = ['ATOM', '0x7529eb0a200596f46ae5aca4206dbaf5a88c2a3e'];
                build.symbol = 'ATOM';
                build.tokenAddress = '0x7529eb0a200596f46ae5aca4206dbaf5a88c2a3e';
                assets.push(build);
              } else {
                if (result[i].symbol != 'uatom') {
                  assets.push(result[i]);
                }
              }
            }
            assets.sort(); // Puts Atom at top of asset list for all pages
          }
          //for Rinkeby
        } else if (chainId === 4) {
          for (let i = 0; i < result.length; i++) {
            if (result[i].symbol == '') {
              let build = ['ATOM', '0xA0944413193a94Da2BC6593204B5988f40870ed4'];
              build.symbol = 'ATOM';
              build.tokenAddress = '0xA0944413193a94Da2BC6593204B5988f40870ed4';
              assets.push(build);
            } else {
              assets.push(result[i]);
            }
          }
        } else if (chainId === 1) {
          for (let i = 0; i < result.length; i++) {
            if (result[i].symbol == 'uatom') {
              let build = ['ATOM', '0xEa5A82B35244d9e5E48781F00b11B14E627D2951'];
              build.symbol = 'ATOM';
              build.tokenAddress = '0xEa5A82B35244d9e5E48781F00b11B14E627D2951';
              assets.push(build);
            } else {
              assets.push(result[i]);
            }
          }
          assets.sort(); // Puts Atom at top of asset list for all pages
        } 

        //if you add another chain, add another elseif here
        /*
        TEMPLATE FOR NEW EXCEPTION
        else if (chainId === [put new chainId here]){
          for(let i = 0; i<result.length; i++){
            if(result[i].symbol == [put new chain symbol here]){
              let build = [[put matching mainnet symbol here], '[put new chain token address here]'];
              build.symbol = [put matching mainnet symbol here];
              build.tokenAddress = [put new chain token address here];
              assets.push(build);
            }else{
              assets.push(result[i]);
            }
          }
        }
        */

        return assets;
      })
      .then(setReservesAddresses)
      .catch(console.error);
  }, [chainId, umeeProtocolDataProvider]);

  return reservesAddresses;
};

const useReserveConfigurationData = (
  umeeProtocolDataProvider?: UmeeProtocolDataProvider,
  lendingPool?: LendingPool,
  user?: string,
  assets?: { symbol: string; tokenAddress: string; }[]
) => {
  const [reserveConfiguration, setReserveConfiguration] = useState<IReserveConfigurationData[]>([]);

  useEffect(() => {
    if (!umeeProtocolDataProvider || !lendingPool || !assets || !user) {
      setReserveConfiguration([]);
      return;
    }

    Promise.all(assets.map(asset => Promise.all([
      asset.symbol,
      asset.tokenAddress,
      umeeProtocolDataProvider.getReserveConfigurationData(asset.tokenAddress)
    ])))
      .then(results => {
        setReserveConfiguration(results.map(([symbol, address, data]) => ({
          symbol: symbol,
          address: address,
          decimals: data.decimals,
          ltv: data.ltv,
          liquidationThreshold: data.liquidationThreshold,
          liquidationBonus: data.liquidationBonus,
          reserveFactor: data.reserveFactor,
          usageAsCollateralEnabled: data.usageAsCollateralEnabled,
          borrowingEnabled: data.borrowingEnabled,
          stableBorrowRateEnabled: data.stableBorrowRateEnabled,
          isActive: data.isActive,
          isFrozen: data.isFrozen,
        })));
      })
      .catch(console.error);
    
    interface TypedEventFilter<_EventArgsArray, _EventArgsObject> extends EventFilter {}
    interface FilterListener {
      filter: TypedEventFilter<[], {}>,
      callback: (() => void),
    }
    const filterListeners: FilterListener[] = [];

    const enableReserveAsCollateral = (reserve: string, enabled: boolean) => () => {
      setReserveConfiguration(reserveConfiguration => {
        const newReserveConfiguration = [...reserveConfiguration];

        const tokenIndex = newReserveConfiguration.findIndex(d => d.address === reserve);
        if (tokenIndex === -1) {
          return newReserveConfiguration;
        }


        return newReserveConfiguration;
      });
    };

    assets.forEach((asset) => {
      const reserveUseAsCollateralDisabledFilter = lendingPool.filters.ReserveUsedAsCollateralDisabled(asset.tokenAddress, user);
      const reserveUseAsCollateralDisabledListener = enableReserveAsCollateral(asset.tokenAddress, false);
      lendingPool.on(reserveUseAsCollateralDisabledFilter, reserveUseAsCollateralDisabledListener);
      filterListeners.push({ filter: reserveUseAsCollateralDisabledFilter, callback: reserveUseAsCollateralDisabledListener });

      const reserveUseAsCollateralEnabledFilter = lendingPool.filters.ReserveUsedAsCollateralEnabled(asset.tokenAddress, user);
      const reserveUseAsCollateralEnabledListener = enableReserveAsCollateral(asset.tokenAddress, true);
      lendingPool.on(reserveUseAsCollateralEnabledFilter, reserveUseAsCollateralEnabledListener);
      filterListeners.push({ filter: reserveUseAsCollateralEnabledFilter, callback: reserveUseAsCollateralEnabledListener });
    });

    return () => {
      filterListeners.forEach(listener => {
        lendingPool.removeListener(listener.filter, listener.callback);
      });
    };

  }, [umeeProtocolDataProvider, lendingPool, assets, user]);

  return reserveConfiguration;
};

const API_URL = process.env.API_ENDPOINT || 'http://127.0.0.1:3001'

type EthAssetData = Array<
  [
    string, // token name
    string, // token address
    {
      availableLiquidity: any,
      totalStableDebt: any,
      totalVariableDebt: any,
      liquidityRate: any,
      variableBorrowRate: any,
      stableBorrowRate: any,
      averageStableBorrowRate: any,
      liquidityIndex: any,
      variableBorrowIndex: any,
      lastUpdateTimestamp: number
    } // token data
  ]
>

const useReserveData = (lendingPool?: LendingPool, priceData?: IAssetPrices) => {
  const [reserveData, setReserveData] = useState<IReserveData[]>([]);

  useEffect(() => {
    if (!priceData) {
      return
    }

    fetch(API_URL + '/eth_asset_data')
      .then(res => res.json())
      .then(
        (assets: EthAssetData) => setReserveData(assets.map(
          ([symbol, address, data]) => ({
            symbol,
            address,
            usdPrice: priceData ? priceData[symbol].usd : 0,
            availableLiquidity: BigNumber.from(data.availableLiquidity.hex),
            totalStableDebt: BigNumber.from(data.totalStableDebt.hex),
            totalVariableDebt: BigNumber.from(data.totalVariableDebt.hex),
            liquidityRate: BigNumber.from(data.liquidityRate.hex),
            variableBorrowRate: BigNumber.from(data.variableBorrowRate.hex),
            stableBorrowRate: BigNumber.from(data.stableBorrowRate.hex),
            averageStableBorrowRate: BigNumber.from(data.averageStableBorrowRate.hex),
            liquidityIndex: BigNumber.from(data.liquidityIndex.hex),
            variableBorrowIndex: BigNumber.from(data.variableBorrowIndex.hex),
            lastUpdateTimestamp: data.lastUpdateTimestamp,
          }), {}
        ))
      )
      .catch(console.error)
  }, [priceData])

  useEffect(() => {
    const updateReserveData = (
      reserve: string,
      liquidityRate: BigNumber,
      stableBorrowRate: BigNumber,
      variableBorrowRate: BigNumber,
      liquidityIndex: BigNumber,
      variableBorrowIndex: BigNumber
    ) => {
      const tokenIndex = reserveData.findIndex(d => d.address === reserve)
      if (tokenIndex >= 0) {
        setReserveData(data => data.map((item, key) => key === tokenIndex ? {
          ...item,
          liquidityRate: liquidityRate,
          stableBorrowRate: stableBorrowRate,
          variableBorrowRate: variableBorrowRate,
          liquidityIndex: liquidityIndex,
          variableBorrowIndex: variableBorrowIndex
        } : item))
      }
    }

    if (!lendingPool) {
      return
    }

    const reserveDataUpdatedFilter = lendingPool.filters.ReserveDataUpdated(null, null, null, null, null, null);
    lendingPool.on(reserveDataUpdatedFilter, updateReserveData);

    return () => {
      lendingPool.removeListener(reserveDataUpdatedFilter, updateReserveData);
    };
  }, [reserveData, lendingPool])

  return reserveData;
};

export {
  useAllReserveTokens,
  useReserveConfigurationData,
  useReserveData
};
