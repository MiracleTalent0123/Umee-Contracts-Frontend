import * as React from 'react';
import {
  DataList,
  DataListRow,
  PrimaryText,
  SubText,
  SwitchItem,
  TextItem,
  TokenItem,
} from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { TxnListBtn } from './common/Buttons/TxnListBtn';
import { BigNumber, utils } from 'ethers';
import { useHistory } from 'react-router-dom';
import { IBorrowData } from '../lib/types';
import {
  bigNumberToUSDFormattedStringFull,
  safeBigNumberToStringAllDecimals,
  safeBigNumberToStringTruncate,
  safeBigNumberToUSDStringTruncate,
} from '../lib/number-utils';
import { InterestRateTypeEnums } from '../components/Borrows/BorrowInputRate';

export interface BorrowsDataListProps {
  columns: IDataListColumn[];
  data: IBorrowData[];
  total: number;
}

const BorrowsDataList = ({ columns, data, total }: BorrowsDataListProps) => {
  const history = useHistory();
  const aprDecimals = BigNumber.from(25);
  const handleBorrowToken = (e: any, tokenAddress: string) => {
    e.preventDefault();
    history.push(`/borrow/${tokenAddress}`);
  };
  const handleRepayToken = (e: any, tokenAddress: string, interestRateType: InterestRateTypeEnums) => {
    e.preventDefault();
    history.push(`/repay/${tokenAddress}/${interestRateType}`);
  };
  
  const columnSizes = columns.map((col) => col.size);
  if(total === 0){
    return(
      <></>
    );
  }else{
    return (
      <DataList background="neutral-1" columns={columns}>
        {data &&
        data.map((row) => {
          const { symbol, currentStableDebt, stableBorrowAPR, decimals, address, usdPrice } = row;
          
          return (
            !currentStableDebt?.isZero() && (
              <DataListRow columnSizes={columnSizes} key={`row-${symbol}`}>
                {symbol && <TokenItem name={symbol} />}
                <TextItem>
                  <PrimaryText>
                    {currentStableDebt && safeBigNumberToStringTruncate(currentStableDebt, decimals)}
                  </PrimaryText>
                  <SubText>
                    {usdPrice &&
                      currentStableDebt &&
                      safeBigNumberToUSDStringTruncate(currentStableDebt, decimals, usdPrice)}{' '}
                  </SubText>
                </TextItem>
                <TextItem>
                  <PrimaryText>
                    {stableBorrowAPR &&
                      parseFloat(utils.formatUnits(stableBorrowAPR, aprDecimals)).toFixed(2).toString()}
                    % stable
                  </PrimaryText>
                </TextItem>
                {address && <TxnListBtn onClick={(e) => handleBorrowToken(e, address)}>Borrow</TxnListBtn>}
                {address && (
                  <TxnListBtn
                    onClick={(e) => handleRepayToken(e, address, InterestRateTypeEnums.Stable)}
                    hoverIndicator
                    pad={{ horizontal: 'xsmall', vertical: 'xsmall' }}
                  >
                    Repay
                  </TxnListBtn>
                )}
              </DataListRow>
            )
          );
        })}
        {data &&
        data.map((row) => {
          const { symbol, currentVariableDebt, variableBorrowAPR, decimals, address, usdPrice } = row;
          
          return(!currentVariableDebt?.isZero() &&
          
            <DataListRow columnSizes={columnSizes} key={`row-${symbol}-2`}>
              {symbol && <TokenItem name={symbol}/> }
              <TextItem>
                <PrimaryText>{currentVariableDebt && safeBigNumberToStringTruncate(currentVariableDebt, decimals)}</PrimaryText>
                <SubText>{usdPrice && currentVariableDebt && safeBigNumberToUSDStringTruncate(currentVariableDebt, decimals, usdPrice)} </SubText>

              </TextItem>
              <TextItem>
                <PrimaryText>{variableBorrowAPR && parseFloat(utils.formatUnits(variableBorrowAPR, aprDecimals)).toFixed(2).toString()}% variable</PrimaryText>
              </TextItem>
              {address && <TxnListBtn onClick={(e) => handleBorrowToken(e, address)}>
                Borrow
              </TxnListBtn> }
              {address && <TxnListBtn onClick={(e) => handleRepayToken(e, address, InterestRateTypeEnums.Variable)} hoverIndicator pad={{ horizontal: 'xsmall', vertical: 'xsmall' }}>
                Repay
              </TxnListBtn> }
            </DataListRow>
          );
        })}
      </DataList>
    );
  }
};

export default BorrowsDataList;