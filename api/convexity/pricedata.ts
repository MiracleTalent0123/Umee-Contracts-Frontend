import { useCallback, useEffect, useState } from 'react';
import { ConvexityPriceData } from './data';

const usePriceData = () => {
  const [convexityPriceData, setConvexityPriceData] = useState<ConvexityPriceData[]>();

  const getPrices = useCallback(() => {
    Promise.all([
      fetch('https://api.alley.umeemania-1.network.umee.cc/umee/oracle/v1beta1/denoms/exchange_rates/'),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((res) => {
        setConvexityPriceData(res[0].exchange_rates);
      });
  }, []);

  useEffect(() => {
    getPrices();
    const interval = setInterval(getPrices, 60000);
    return () => clearInterval(interval);
  }, [getPrices]);

  return {
    convexityPriceData,
    getPriceData: () => {
      getPrices();
    },
  };
};

export { usePriceData };
