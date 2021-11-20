import { useState, useEffect } from 'react';
import { mainnet } from 'lib/tokenaddresses';

export interface IAssetPrices {
    [address: string]: {
        'usd': number;
        'eth': number;
    }
}

/*
*   returns a { symbol: price } map
*/
const usePriceData = () => {
  const [priceData, setPriceData] = useState<IAssetPrices>();

  const getPrices = async () => {
    const symbols = Object.keys(mainnet);
    const addresses = symbols.map(s => mainnet[s]).join(',');
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${addresses}&vs_currencies=usd,eth`);
      
    if(response && response.status == 200) {
      const pricesByAddress: IAssetPrices = await response.json();
      const symbolPriceMap = symbols.reduce((pMap, s) => {
        if(pricesByAddress[mainnet[s].toLowerCase()]) {
          pMap[s] = pricesByAddress[mainnet[s].toLowerCase()];
        }
        return pMap;
      }, {} as IAssetPrices);
      setPriceData(symbolPriceMap);
    } else {
      console.error(response);
    }
  };

  useEffect(() => {
    getPrices();
    const interval = setInterval(getPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return priceData;
};

export {
  usePriceData
};
