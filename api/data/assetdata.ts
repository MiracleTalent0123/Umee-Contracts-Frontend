import { useState, useEffect } from 'react';
import { BigNumber, EventFilter } from 'ethers';
import { IAssetPrices } from 'api/data/pricedata';

import {
  UmeeProtocolDataProvider,
  LendingPool,
} from '../types';
import { IReserveData, IReserveConfigurationData } from 'lib/types';
import { result } from 'lodash';

const useAllReserveTokens = (umeeProtocolDataProvider: UmeeProtocolDataProvider | undefined) => {
  let [reservesAddresses, setReservesAddresses] = useState<{ symbol: string; tokenAddress: string; }[]>([]);

  useEffect(() => {
    if (!umeeProtocolDataProvider) {
      setReservesAddresses([]);
      return;
    }

    umeeProtocolDataProvider.getAllReservesTokens()
      .then(function(result){
        let assets = [];
        for(let i = 0; i<result.length; i++){
          if(result[i].symbol == ''){
            let build = ['ATOM', '0xA0944413193a94Da2BC6593204B5988f40870ed4'];
            build.symbol = 'ATOM';
            build.tokenAddress = '0xA0944413193a94Da2BC6593204B5988f40870ed4';
            assets.push(build);
          }else{
            assets.push(result[i]);
          }
        }
        return assets;
      })
      .then(setReservesAddresses)
      .catch(console.error);
  }, [umeeProtocolDataProvider]);

  return reservesAddresses;
};

const useReserveConfigurationData = (umeeProtocolDataProvider: UmeeProtocolDataProvider | undefined, lendingPool: LendingPool | undefined, user: string | undefined, assets: { symbol: string; tokenAddress: string; }[] | undefined) => {
  const [reserveConfiguration, setReserveConfiguration] = useState<IReserveConfigurationData[]>([]);

  useEffect(() => {
    if (!umeeProtocolDataProvider || !lendingPool || !assets || !user) {
      setReserveConfiguration([]);
      return;
    }

    Promise.all(assets.map(asset => Promise.all([asset.symbol, asset.tokenAddress, umeeProtocolDataProvider.getReserveConfigurationData(asset.tokenAddress)])))
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

const useReserveData = (umeeProtocolDataProvider: UmeeProtocolDataProvider | undefined, lendingPool: LendingPool | undefined, assets: { symbol: string; tokenAddress: string; }[] | undefined, priceData: IAssetPrices | undefined) => {
  const [reserveData, setReserveData] = useState<IReserveData[]>([]);

  useEffect(() => {
    if (!umeeProtocolDataProvider || !lendingPool || !assets) {
      setReserveData([]);
      return;
    }

    Promise.all(assets.map(asset => Promise.all([asset.symbol, asset.tokenAddress, umeeProtocolDataProvider.getReserveData(asset.tokenAddress)])))
      .then(results => {
        setReserveData(results.map(([symbol, address, data]) => ({
          symbol: symbol,
          address: address,
          usdPrice: priceData? priceData[symbol].usd : 0,
          availableLiquidity: data.availableLiquidity,
          totalStableDebt: data.totalStableDebt,
          totalVariableDebt: data.totalVariableDebt,
          liquidityRate: data.liquidityRate,
          variableBorrowRate: data.variableBorrowRate,
          stableBorrowRate: data.stableBorrowRate,
          averageStableBorrowRate: data.averageStableBorrowRate,
          liquidityIndex: data.liquidityIndex,
          variableBorrowIndex: data.variableBorrowRate,
          lastUpdateTimestamp: data.lastUpdateTimestamp,
        })));
      })
      .catch(console.error);
    

    const updateReserveData = (reserve: string, liquidityRate: BigNumber, stableBorrowRate: BigNumber, variableBorrowRate: BigNumber, liquidityIndex: BigNumber, variableBorrowIndex: BigNumber) => {
      setReserveData(data => {
        const newData = [...data];

        const tokenIndex = newData.findIndex(d => d.address === reserve);
        if (tokenIndex === -1) {
          return newData;
        }

        newData[tokenIndex].liquidityRate = liquidityRate;
        newData[tokenIndex].stableBorrowRate = stableBorrowRate;
        newData[tokenIndex].variableBorrowRate = variableBorrowRate;
        newData[tokenIndex].liquidityIndex = liquidityIndex;
        newData[tokenIndex].variableBorrowIndex = variableBorrowIndex;

        return newData;
      });
    };

    const reserveDataUpdatedFilter = lendingPool.filters.ReserveDataUpdated(null, null, null, null, null, null);
    lendingPool.on(reserveDataUpdatedFilter, updateReserveData);

    return () => {
      lendingPool.removeListener(reserveDataUpdatedFilter, updateReserveData);
    };
  }, [assets, umeeProtocolDataProvider, priceData, lendingPool]);

  return reserveData;
};

export {
  useAllReserveTokens,
  useReserveConfigurationData,
  useReserveData
};
