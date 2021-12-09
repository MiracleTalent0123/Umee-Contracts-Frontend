import React, { useEffect, useState } from 'react';
import { BaseModal } from 'components/common/BaseModal';
import { Box } from 'grommet';
import DepositToken from './DepositToken';
import { useData } from 'api/data';
import { BigNumber, utils } from 'ethers';
import { bigNumberToUSDNumber, BN } from 'lib/number-utils';
import './modals.css';

const DepositModal = ({ address: tokenAddress, onClose }: { address: string; onClose: (show: boolean) => void }) => {
  const { priceData, UserReserveData, UserAccountData, ReserveConfigurationData } = useData();
  const [myDepositsTotal, setMyDepositsTotal] = useState<number>(0);
  const [myBorrowsUSDTotal, setMyBorrowsUSDTotal] = useState<number>(0);
  const [currentltv, setCurrentLtv] = useState<string>('0');
  const [maxLtv, setMaxLtv] = useState<string>('0');
  const [initialBorrowLimit, setInitialBorrowLimit] = useState<string>('0.00');

  useEffect(() => {
    if (!priceData || !UserReserveData || !ReserveConfigurationData) return;
    setMyDepositsTotal(
      UserReserveData.reduce((acc, reserve) => {
        const assetPrice = priceData[reserve.symbol].usd;
        const tempReserve = parseFloat(utils.formatUnits(reserve.currentUTokenBalance, reserve.decimals));
        acc += tempReserve * assetPrice;
        return acc;
      }, 0)
    );
    setMyBorrowsUSDTotal(
      UserReserveData.reduce((acc, reserve) => {
        const reserveConfig = ReserveConfigurationData.find((r) => r.address === reserve.address);
        const totalDebt = reserve.currentStableDebt.add(reserve.currentVariableDebt);

        const price = priceData[reserve.symbol] ? String(priceData[reserve.symbol].usd) : '0.00';
        const priceDecimals = price.indexOf('.') > 0 ? price.length - price.indexOf('.') - 1 : 0;
        const bigPrice = priceData ? utils.parseUnits(price, priceDecimals) : BigNumber.from(0);

        const bigDebt = totalDebt.mul(bigPrice);
        const debt = bigNumberToUSDNumber(
          bigDebt,
          reserveConfig?.decimals.add(priceDecimals) || BN(18),
          Number(price)
        );
        acc += debt;
        return acc;
      }, 0)
    );
  }, [priceData, UserReserveData, ReserveConfigurationData]);

  useEffect(() => {
    if (UserAccountData?.ltv) {
      setMaxLtv(UserAccountData.currentLiquidationThreshold.toString());
    }
  }, [UserAccountData]);

  useEffect(() => {
    setInitialBorrowLimit(((myDepositsTotal * parseFloat(maxLtv)) / 10000).toString());
  }, [myDepositsTotal, maxLtv]);

  useEffect(() => {
    if (myBorrowsUSDTotal && initialBorrowLimit) {
      setCurrentLtv(((myBorrowsUSDTotal / parseFloat(initialBorrowLimit)) * 100).toFixed(2));
    }
  }, [myBorrowsUSDTotal, initialBorrowLimit]);

  return (
    <BaseModal onClose={onClose}>
      <Box width="320px">
        <DepositToken
          address={tokenAddress}
          myDepositsTotal={myDepositsTotal}
          myBorrowsTotal={myBorrowsUSDTotal}
          maxLtv={maxLtv}
          initialBorrowLimit={initialBorrowLimit}
          currentLtv={currentltv}
        />
      </Box>
    </BaseModal>
  );
};

export default DepositModal;
