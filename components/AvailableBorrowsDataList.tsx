import * as React from 'react';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, utils } from 'ethers';
import { bigNumberToString, bigNumberToUSDString } from 'lib/number-utils';
import TableItem from './TableItem';
import BorrowModal from './TransactionModals/BorrowModal';
import { Box, Text } from 'grommet';

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
  userAssetsColumns: IDataListColumn[];
  myBorrowsData?: IAvailableBorrowsData[];
  data: IAvailableBorrowsData[];
  loggedIn: boolean;
  selectedTokenAddress?: string;
}

const AvailableBorrowsDataList = ({
  columns,
  data,
  loggedIn,
  selectedTokenAddress,
  userAssetsColumns,
  myBorrowsData,
}: AvailableBorrowsDataListProps) => {
  const columnSizes = columns.map((col) => col.size);
  const aprDecimals = BigNumber.from(25);
  const [tokenAddress, setTokenAddress] = React.useState<string>('');

  React.useEffect(() => {
    if (selectedTokenAddress) {
      setTokenAddress(selectedTokenAddress);
    }
  }, [selectedTokenAddress]);

  if (loggedIn) {
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
        {myBorrowsData && myBorrowsData.length > 0 ? (
          <>
            <Text size="small" margin={{ bottom: '10px' }}>
              Your Positions
            </Text>
            <Box pad={{ bottom: 'medium' }}>
              <DataList columns={userAssetsColumns}>
                {myBorrowsData.map((row) => {
                  const { balance, address, symbol, tokensAvailable, variableAPR, decimals, borrowingEnabled } = row;
                  return (
                    <DataListRow
                      columnSizes={columnSizes}
                      key={`row-${symbol}`}
                      tokenAddress={address}
                      setTokenAddress={setTokenAddress}
                    >
                      <TokenItem name={symbol} />
                      <TextItem>
                        <PrimaryText>
                          {balance && balance.toFixed(2)}
                        </PrimaryText>
                      </TextItem>
                      <TableItem
                        borrowingEnabled={borrowingEnabled}
                        variableAPR={variableAPR}
                        aprDecimals={aprDecimals}
                      />
                    </DataListRow>
                  );
                })}
              </DataList>
            </Box>
          </>
        ) : null}
        {data && data.length > 0 ? (
          <>
            <Text size="small" margin={{ bottom: '10px' }}>
              Available Markets
            </Text>
            <Box>
              <DataList columns={columns}>
                {data.map((row) => {
                  const { balance, address, symbol, tokensAvailable, variableAPR, decimals, borrowingEnabled } = row;
                  return (
                    <DataListRow
                      columnSizes={columnSizes}
                      key={`row-${symbol}`}
                      tokenAddress={address}
                      setTokenAddress={setTokenAddress}
                    >
                      <TokenItem name={symbol} />
                      <TextItem>
                        <PrimaryText>
                          {tokensAvailable && bigNumberToString(tokensAvailable, decimals)}
                        </PrimaryText>
                      </TextItem>
                      <TableItem
                        borrowingEnabled={borrowingEnabled}
                        variableAPR={variableAPR}
                        aprDecimals={aprDecimals}
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
      <>
        <Text size="small" margin={{ bottom: '10px' }}>
          Available Markets
        </Text>
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
      </>
    );
  }
};

export default AvailableBorrowsDataList;
