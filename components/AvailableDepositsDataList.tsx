import React, {useEffect, useState} from 'react';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, constants } from 'ethers';
import { bigNumberToString, bigNumberToNumber, isZero } from 'lib/number-utils';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import CollateralModal from './TransactionModals/CollateralModal';
import DepositModal from './TransactionModals/DepositModal';
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
export interface IReserveData {
  symbol: string,
  address: string,
  usdPrice: number;
  availableLiquidity: BigNumber;
  totalStableDebt: BigNumber;
  totalVariableDebt: BigNumber;
  liquidityRate: BigNumber;
  variableBorrowRate: BigNumber;
  stableBorrowRate: BigNumber;
  averageStableBorrowRate: BigNumber;
  liquidityIndex: BigNumber;
  variableBorrowIndex: BigNumber;
  lastUpdateTimestamp: number;
}

export interface AvailableDepositsDataListProps {
  columns: IDataListColumn[];
  data: IAvailableDepositsData[];
  loggedIn: boolean;
  reserveData?: IReserveData[];
  enabledCollateral?: any;
  enabledAsset?: any;
  selectedTokenAddress?: string;
}

const AvailableDepositsDataList = ({ columns, data, loggedIn, selectedTokenAddress, reserveData, enabledCollateral, enabledAsset }: AvailableDepositsDataListProps) => {
  const [token, setToken] = useState<any>('');
  const [tokenAddress, setTokenAddress] = useState<string>('');
  const [isModalShow, setIsModalShow] = useState<string>('');
  const [collateralSwitchChecked, setCollateralSwitchChecked] = useState<boolean>();
  const [collateralStep, setCollateralStep] = useState<ETxnSteps>(ETxnSteps.Input);

  useEffect(() => {
    if(selectedTokenAddress) {
      setTokenAddress(selectedTokenAddress);
      setIsModalShow('deposit');
    }
  }, [selectedTokenAddress]);

  const columnSizes = columns.map((col) => col.size);
  const aprDecimals = BigNumber.from(23);
  const setAssetModal = (token: any) => {
    setToken(token);
    setTokenAddress(token.address);
    setIsModalShow('deposit'); 
  };

  const setCollateralModal = (token: any, e:any) => {
    setToken(token);
    setTokenAddress(token.address);
    setIsModalShow('collateral');
    setCollateralSwitchChecked(e.target.checked);
    setCollateralStep(ETxnSteps.Input);
  };

  const {
    Contracts: { lendingPool },
  } = useData();
  const { contractCall, pending } = useTransaction();

  const toggleCollateral = async () => {
    let balance = token && bigNumberToNumber(token.tokenBalance, token.decimals);
    if(isZero(balance)) {
      toast.error('Sorry, balance is not enough');
      setIsModalShow('');
      return;
    } else {
      setCollateralStep(ETxnSteps.PendingSubmit);
      if (collateralSwitchChecked === undefined || !lendingPool || !tokenAddress) {
        setCollateralStep(ETxnSteps.Failure);
        return;
      }

      await contractCall(
        () => lendingPool.setUserUseReserveAsCollateral(tokenAddress, collateralSwitchChecked),
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral`,
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral failed`,
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral succeeded`,
        () => setCollateralStep(ETxnSteps.Failure),
        () => setCollateralStep(ETxnSteps.Success),
      );
    }
  };

  const enableCollateral = async () => {
    toggleCollateral();
  };

  if(loggedIn){
    return (
      <>
        {tokenAddress && isModalShow == 'collateral' ? 
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
            }
            }
          /> : null
        }
        {tokenAddress && isModalShow == 'deposit' ? 
          <DepositModal
            address={tokenAddress}
            onClose={() => {
              setTokenAddress('');
              setIsModalShow('');
            }}
          /> : null
        }
        <DataList columns={columns}>
          {data &&
          data.map((row) => {
            const { address, symbol, color, tokenBalance, usdBalance, apy, decimals, usageAsCollateralEnabled } = row;
            return (
              <DataListRow columnSizes={columnSizes} key={`row-${symbol}`} tokenAddress={address}>
                <TokenItem handleClick={() => setAssetModal(row)} name={symbol} />
                <TextItem handleClick={() => setAssetModal(row)}>
                  <PrimaryText>{tokenBalance && bigNumberToString(tokenBalance, decimals)}</PrimaryText>
                </TextItem>
                <TextItem handleClick={() => setAssetModal(row)}>
                  <PrimaryText>{apy && bigNumberToString(apy, aprDecimals)}%</PrimaryText>
                </TextItem>
                <ToggleSwitch handleClick={(event) => setCollateralModal(row, event)} enabled={usageAsCollateralEnabled} label={symbol} />
              </DataListRow>
            );
          })}
        </DataList>
      </>
    );
  }else{
    return (
      <DataList columns={columns}>
        {data &&
          data.map((row) => {
            const { symbol, apy} = row;
            return (
              <DataListRow columnSizes={columnSizes} key={`row-${symbol}`}>
                <TokenItem name={symbol} />
                <TextItem>
                  <PrimaryText>-</PrimaryText>
                </TextItem>
                <TextItem>
                  <PrimaryText>{apy && bigNumberToString(apy, aprDecimals)}%</PrimaryText>
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
