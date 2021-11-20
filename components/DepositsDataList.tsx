import React, { useState, useEffect } from 'react';
import { DataList, DataListRow, PrimaryText, SubText, SwitchItem, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';

import { TxnListBtn } from './common/Buttons/TxnListBtn';
import { BigNumber, utils } from 'ethers';
import { useHistory } from 'react-router-dom';
import { GridSizeType } from 'grommet';
import { bigNumberToUSDFormattedStringFull } from '../lib/number-utils';
import { useData } from '../api/data';
import { useTransaction } from '../api/data/transactions';
import { getMaxWithdraws } from 'lib/health-utils';
import { IUserTxnDeposit } from 'lib/types';
import { useUsageAsCollateral } from 'lib/hooks/useUsageAsCollateral';

export interface DepositsDataListProps {
  columns: IDataListColumn[];
  data: IUserTxnDeposit[];
  total: number;
}

const DepositsDataList = ({ columns, data, total }: DepositsDataListProps) => {
  if (total === 0) {
    return <></>;
  }

  return (
    <DataList background="neutral-1" columns={columns}>
      {data.map((row) => (
        <Row key={row.address} columnSizes={columns.map((col) => col.size)} row={row} />
      ))}
    </DataList>
  );
};

const Row = ({ columnSizes, row }: { columnSizes: GridSizeType[]; row: IUserTxnDeposit }) => {
  const { symbol, currentUTokenBalance, liquidityRate, address, decimals, usdPrice, usageAsCollateralEnabled } = row;

  const history = useHistory();

  const handleWithdrawToken = (e: any, tokenAddress: string) => {
    e.preventDefault();
    history.push(`/withdraw/${tokenAddress}`);
  };

  const handleDepositToken = (e: any, tokenAddress: string) => {
    e.preventDefault();
    history.push(`/deposit/${tokenAddress}`);
  };

  const [collateralFlipPending, setCollateralFlipPending] = useState<boolean>();

  const {
    Contracts: { lendingPool },
    UserAccountData,
    UserReserveData,
    priceData,
    ReserveConfigurationData,
  } = useData();
  const { contractCall, pending } = useTransaction();

  const [collateralSwitchChecked, setCollateralSwitchChecked] = useState<boolean>();
  useEffect(() => {
    if (collateralFlipPending === undefined) {
      setCollateralSwitchChecked(usageAsCollateralEnabled);
    } else {
      setCollateralSwitchChecked(collateralFlipPending);
    }
  }, [collateralFlipPending, usageAsCollateralEnabled]);

  const toggleCollateral = (asset: string | undefined, currentValue: boolean | undefined) => {
    return (enabled: boolean) => {
      if (currentValue === undefined || currentValue === enabled || !lendingPool || !asset) {
        return;
      }

      setCollateralFlipPending(enabled);

      contractCall(
        () => lendingPool.setUserUseReserveAsCollateral(asset, enabled),
        `${enabled ? 'Enabling' : 'Disabling'} use of reserve as collateral`,
        `${enabled ? 'Enabling' : 'Disabling'} use of reserve as collateral failed`,
        `${enabled ? 'Enabling' : 'Disabling'} use of reserve as collateral succeeded`,
        () => setCollateralFlipPending(undefined),
        () => setTimeout(() => setCollateralFlipPending(undefined), 5000)
      );
    };
  };

  const [noCollateralStillHealthy, setNoCollateralStillHealthy] = useState(false);
  useEffect(() => {
    if (!usageAsCollateralEnabled) {
      setNoCollateralStillHealthy(true);
      return;
    }

    if (!address) {
      setNoCollateralStillHealthy(false);
      return;
    }

    const userReserve = UserReserveData.find((r) => r.address.toLowerCase() === address.toLowerCase());
    if (!UserAccountData || !priceData || !symbol || !userReserve) {
      setNoCollateralStillHealthy(false);
      return;
    }

    const tokenDecimals = ReserveConfigurationData.find((r) => r.address === address)?.decimals || BigNumber.from(0);
    const MaxAvailableToWithdraw = getMaxWithdraws(
      UserAccountData,
      priceData[symbol].eth,
      symbol,
      tokenDecimals.toString()
    );

    if (UserAccountData.totalDebtETH.isZero()) {
      setNoCollateralStillHealthy(true);
    } else if (userReserve.currentUTokenBalance.lte(MaxAvailableToWithdraw)) {
      setNoCollateralStillHealthy(true);
    }
  }, [
    usageAsCollateralEnabled,
    ReserveConfigurationData,
    UserAccountData,
    UserReserveData,
    address,
    priceData,
    symbol,
  ]);

  const canUseAsCollateral = useUsageAsCollateral({address});
  
  return (
    <DataListRow columnSizes={columnSizes} key={`row-${symbol}-3`}>
      {symbol && <TokenItem name={symbol} />}

      <TextItem>
        <PrimaryText>
          {currentUTokenBalance && parseFloat(utils.formatUnits(currentUTokenBalance, decimals)).toFixed(2).toString()}
        </PrimaryText>
        <SubText>
          {usdPrice &&
            currentUTokenBalance &&
            decimals &&
            bigNumberToUSDFormattedStringFull(currentUTokenBalance, decimals, usdPrice)}{' '}
        </SubText>
      </TextItem>

      <TextItem>
        <PrimaryText>
          {liquidityRate &&
            parseFloat(utils.formatUnits(liquidityRate, BigNumber.from(23)))
              .toFixed(2)
              .toString()}
          %
        </PrimaryText>
      </TextItem>

      <SwitchItem
        type="collateral"
        checked={collateralSwitchChecked}
        handler={toggleCollateral(address, usageAsCollateralEnabled)}
        enabled={!pending && canUseAsCollateral && noCollateralStillHealthy}
      />

      {address && <TxnListBtn onClick={(e) => handleDepositToken(e, address)}>Deposit</TxnListBtn>}

      {address && <TxnListBtn onClick={(e) => handleWithdrawToken(e, address)}>Withdraw</TxnListBtn>}
    </DataListRow>
  );
};

export default DepositsDataList;
