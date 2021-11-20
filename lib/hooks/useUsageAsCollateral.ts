import { useState, useEffect } from 'react';
import { useData } from 'api/data';
import { TTokenConfig } from 'lib/types';

export const useUsageAsCollateral = ({ address }: { address: string }) => {
  const [canUseAsCollateral, setCanUseAsCollateral] = useState<boolean>();
  const { ReserveConfigurationData } = useData();
  useEffect(() => {
    if (address) {
      /** @todo ADK: Make this more succinct.
       * Keeping as is for debugging purposes at the moment.
       * UMEE-319
       */
      let _canUseAsCollateral;
      let _reserveConfig = ReserveConfigurationData.find(
        (r) => r.address.toLowerCase() === address.toLowerCase());
      if (_reserveConfig) {
        _canUseAsCollateral = _reserveConfig.usageAsCollateralEnabled;
      }
      setCanUseAsCollateral(_canUseAsCollateral);
    }
  }, [ReserveConfigurationData, address]);

  return canUseAsCollateral;
};
