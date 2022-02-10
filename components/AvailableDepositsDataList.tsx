import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber } from 'ethers';
import { bigNumberToString, bigNumberToNumber, isZero } from 'lib/number-utils';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import CollateralModal from './Deposits/CollateralModal';
import DepositModal from './Deposits/DepositModal';
import { useData } from '../api/data';
import { useTransaction } from '../api/data/transactions';
import { ETxnSteps } from 'lib/types';
import { toast } from 'react-toastify';

export interface IAvailableDepositsData {
  address: string;
  symbol: string;
  color: string;
  tokenBalance?: BigNumber;
  usdBalance?: BigNumber;
  usdPriceDecimals?: number;
  apy?: BigNumber;
  decimals: number;
  usageAsCollateralEnabled?: boolean;
  isDepositEnabled?: boolean;
}

export interface AvailableDepositsDataListProps {
  columns: IDataListColumn[];
  userAssetsColumns: IDataListColumn[];
  data: IAvailableDepositsData[];
  loggedIn: boolean;
  selectedTokenAddress?: string;
  userDeposits: IAvailableDepositsData[];
}

const AvailableDepositsDataList = ({
  columns,
  userAssetsColumns,
  data,
  loggedIn,
  selectedTokenAddress,
  userDeposits,
}: AvailableDepositsDataListProps) => {
  const [token, setToken] = useState<any>('');
  const [tokenAddress, setTokenAddress] = useState<string>('');
  const [isModalShow, setIsModalShow] = useState<string>('');
  const [collateralSwitchChecked, setCollateralSwitchChecked] = useState<boolean>();
  const [collateralStep, setCollateralStep] = useState<ETxnSteps>(ETxnSteps.Input);

  useEffect(() => {
    if (selectedTokenAddress) {
      setTokenAddress(selectedTokenAddress);
      setIsModalShow('deposit');
    }
  }, [selectedTokenAddress]);

  const columnSizes = columns.map((col) => col.size);
  const aprDecimals = BigNumber.from(25);
  const setAssetModal = (token: any) => {
    setToken(token);
    setTokenAddress(token.address);
    setIsModalShow('deposit');
  };

  const setCollateralModal = (token: any, e: any) => {
    setToken(token);
    setTokenAddress(token.address);
    setIsModalShow('collateral');
    setCollateralSwitchChecked(e.target.checked);
    setCollateralStep(ETxnSteps.Input);
  };

  const {
    Contracts: { lendingPool },
  } = useData();
  const { contractCall } = useTransaction();

  const toggleCollateral = async () => {
    let balance = token && bigNumberToNumber(token.tokenBalance, token.decimals);
    if (isZero(balance)) {
      toast.error('Sorry, balance is not enough');
      setIsModalShow('');
      return;
    } else if (!userDeposits.find((e) => e.address == tokenAddress)) {
      toast.error('Asset must be supplied before enabling for collateral');
      setIsModalShow('');
      return;
    } else {
      setCollateralStep(ETxnSteps.PendingSubmit);
      if (collateralSwitchChecked === undefined || !lendingPool || !tokenAddress) {
        setCollateralStep(ETxnSteps.Failure);
        return;
      }
      const collateralGas = async () => {
        let gas = await lendingPool.estimateGas.setUserUseReserveAsCollateral(tokenAddress, collateralSwitchChecked);
        return gas.toNumber();
      };
      await contractCall(
        '',
        async () =>
          lendingPool.setUserUseReserveAsCollateral(tokenAddress, collateralSwitchChecked, {
            gasLimit: (await collateralGas()) * 3,
          }),
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral`,
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral failed`,
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral succeeded`,
        () => {
          setCollateralStep(ETxnSteps.Input);
          setTokenAddress('');
          setIsModalShow('');
        }
      );
    }
  };

  const enableCollateral = async () => {
    toggleCollateral();
  };

  if (loggedIn) {
    return (
      <>
        {tokenAddress && isModalShow == 'collateral' ? (
          <CollateralModal
            address={tokenAddress}
            token={token}
            steps={collateralStep}
            collateralSwitchChecked={collateralSwitchChecked}
            enabled={() => {
              enableCollateral();
            }}
            onClose={() => {
              setTokenAddress('');
              setIsModalShow('');
            }}
          />
        ) : null}
        {tokenAddress && isModalShow == 'deposit' ? (
          <DepositModal
            address={tokenAddress}
            onClose={() => {
              setTokenAddress('');
              setIsModalShow('');
            }}
          />
        ) : null}
        {userDeposits.length > 0 ? (
          <>
            <Box pad={{ bottom: 'medium' }}>
              <DataList columns={userAssetsColumns}>
                {userDeposits.map((row) => {
                  const { address, symbol, color, tokenBalance, usdBalance, apy, decimals, usageAsCollateralEnabled } =
                    row;
                  return (
                    <DataListRow columnSizes={columnSizes} key={`row-${symbol}`} tokenAddress={address}>
                      <TokenItem textSize="small" handleClick={() => setAssetModal(row)} name={symbol} />
                      <TextItem justify="start" handleClick={() => setAssetModal(row)}>
                        <PrimaryText size="small">
                          {tokenBalance && bigNumberToString(tokenBalance, decimals)}
                        </PrimaryText>
                      </TextItem>
                      <TextItem justify="start" handleClick={() => setAssetModal(row)}>
                        <PrimaryText size="small">{apy && bigNumberToString(apy, aprDecimals)}%</PrimaryText>
                      </TextItem>
                      <ToggleSwitch
                        handleClick={(event) => setCollateralModal(row, event)}
                        enabled={usageAsCollateralEnabled}
                        label={symbol}
                      />
                    </DataListRow>
                  );
                })}
              </DataList>
            </Box>
          </>
        ) : null}
        {data.length > 0 ? (
          <>
            <Box margin={{ top: userDeposits.length > 0 ? 'medium' : '' }}>
              <DataList columns={columns}>
                {data.map((row) => {
                  const { address, symbol, color, tokenBalance, usdBalance, apy, decimals, usageAsCollateralEnabled } =
                    row;
                  return (
                    <DataListRow columnSizes={columnSizes} key={`row-${symbol}`} tokenAddress={address}>
                      <TokenItem textSize="small" handleClick={() => setAssetModal(row)} name={symbol} />
                      <TextItem justify="start" handleClick={() => setAssetModal(row)}>
                        <PrimaryText size="small">
                          {tokenBalance && bigNumberToString(tokenBalance, decimals)}
                        </PrimaryText>
                      </TextItem>
                      <TextItem justify="start" handleClick={() => setAssetModal(row)}>
                        <PrimaryText size="small">{apy && bigNumberToString(apy, aprDecimals)}%</PrimaryText>
                      </TextItem>
                      <ToggleSwitch
                        handleClick={(event) => setCollateralModal(row, event)}
                        enabled={usageAsCollateralEnabled}
                        label={symbol}
                      />
                    </DataListRow>
                  );
                })}
              </DataList>
            </Box>
          </>
        ) : null}
      </>
    );
  } else {
    return (
      <DataList columns={columns}>
        {data &&
          data.map((row) => {
            const { symbol, apy } = row;
            return (
              <DataListRow columnSizes={columnSizes} key={`row-${symbol}`}>
                <TokenItem textSize="small" name={symbol} />
                <TextItem justify="start">
                  <PrimaryText size="small">–</PrimaryText>
                </TextItem>
                <TextItem justify="start">
                  <PrimaryText size="small">{apy && bigNumberToString(apy, aprDecimals)}%</PrimaryText>
                </TextItem>
                <ToggleSwitch handleClick={() => null} enabled={false} label={symbol} />
              </DataListRow>
            );
          })}
      </DataList>
    );
  }
};

export default AvailableDepositsDataList;
