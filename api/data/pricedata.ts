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
    const atomAPICall = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=cosmos&vs_currencies=usd,eth');
    const atomPrice = await atomAPICall.json();
    const umeeAPICall = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=umee&vs_currencies=usd,eth');
    const umeePrice = await umeeAPICall.json();

    if(response && response.status == 200) {
      const pricesByAddress: IAssetPrices = await response.json();
      const symbolPriceMap = symbols.reduce((pMap, s) => {
        if(pricesByAddress[mainnet[s].toLowerCase()]) {
          pMap[s] = pricesByAddress[mainnet[s].toLowerCase()];
        }
        return pMap;
      }, {} as IAssetPrices);

      symbolPriceMap['ATOM'].usd = atomPrice['cosmos'].usd;
      symbolPriceMap['ATOM'].eth = atomPrice['cosmos'].eth;
      symbolPriceMap['UMEE'].usd = umeePrice['umee'].usd;
      symbolPriceMap['UMEE'].eth = umeePrice['umee'].eth;

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
