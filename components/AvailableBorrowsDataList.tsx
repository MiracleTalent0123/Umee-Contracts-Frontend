import * as React from 'react';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, utils } from 'ethers';
import { bigNumberToString, bigNumberToUSDString } from 'lib/number-utils';
import TableItem from './TableItem';
import BorrowModal from './TransactionModals/BorrowModal';

export interface IAvailableBorrowsData {
  address: string;
  symbol: string;
  color: string;
  tokensAvailable?: BigNumber;
  usdAvailable?: number;
  variableAPR: BigNumber;
  stableAPR?: BigNumber;
  decimals: number;
  borrowingEnabled: boolean;
  balance?: number;
}

export interface AvailableBorrowsDataListProps {
  columns: IDataListColumn[];
  data: IAvailableBorrowsData[];
  loggedIn: boolean;
  selectedTokenAddress?: string;
}

const AvailableBorrowsDataList = ({ columns, data, loggedIn, selectedTokenAddress }: AvailableBorrowsDataListProps) => {
  const columnSizes = columns.map((col) => col.size);
  const aprDecimals = BigNumber.from(23);
  const [tokenAddress, setTokenAddress] = React.useState<string>('');

  React.useEffect(() => {
    if(selectedTokenAddress) {
      setTokenAddress(selectedTokenAddress);
    }
  }, [selectedTokenAddress]);

  if(loggedIn){
    return (
      <>
        {tokenAddress && (
          <BorrowModal
            address={tokenAddress}
            onClose={() => {
              setTokenAddress('');
            }}
          />
        )}
        <DataList columns={columns}>
          {data &&
            data.map((row) => {
              const { balance, address, symbol, color, tokensAvailable, usdAvailable, variableAPR, decimals, borrowingEnabled } = row;
              return (
                <DataListRow columnSizes={columnSizes} key={`row-${symbol}`} tokenAddress={address} setTokenAddress={setTokenAddress}>
                  <TokenItem name={symbol} />
                  <TextItem>
                    <PrimaryText>
                      {tokensAvailable && bigNumberToString(tokensAvailable, decimals)}
                      {balance && balance.toFixed(2)}
                    </PrimaryText>
                  </TextItem>
                  <TableItem borrowingEnabled={borrowingEnabled} variableAPR={variableAPR} aprDecimals={aprDecimals} />
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
            const { address, symbol, color, borrowingEnabled, variableAPR } = row;
            return (
              <DataListRow columnSizes={columnSizes} key={`row-${symbol}`}>
                <TokenItem name={symbol} />
                <TextItem>
                  <PrimaryText>0 {symbol}</PrimaryText>
                </TextItem>
                <TextItem>
                  <PrimaryText>0.00%</PrimaryText>
                </TextItem>
              </DataListRow>
            );
          })}
      </DataList>
    );
  }
};

export default AvailableBorrowsDataList;
