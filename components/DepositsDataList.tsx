import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonItem, DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, utils } from 'ethers';
import { Box, GridSizeType, Text } from 'grommet';
import { IUserTxnDeposit } from 'lib/types';
import { safeBigNumberToStringTruncate } from 'lib/number-utils';

export interface DepositsDataListProps {
  columns: IDataListColumn[];
  data: IUserTxnDeposit[];
  total?: number;
}

const DepositsDataList = ({ columns, data, total }: DepositsDataListProps) => {
  return (
    <Box flex>
      {data?.length ? (
        <>
          <Text margin={{ bottom: 'small' }} size="small">
            Supply
          </Text>
          <DataList background="neutral-1" columns={columns}>
            {data.map((row) => (
              <Row key={row.address} columnSizes={columns.map((col) => col.size)} row={row} />
            ))}
          </DataList>
        </>
      ) : null}
    </Box>
  );
};

const Row = ({ columnSizes, row }: { columnSizes: GridSizeType[]; row: IUserTxnDeposit }) => {
  const { symbol, currentUTokenBalance, liquidityRate, address, decimals } = row;

  return (
    <DataListRow columnSizes={columnSizes} key={`row-${symbol}-3`}>
      {symbol && <TokenItem name={symbol} />}
      <TextItem>
        <PrimaryText>
          {currentUTokenBalance &&
            Number(safeBigNumberToStringTruncate(currentUTokenBalance, decimals)).toLocaleString()}
        </PrimaryText>
      </TextItem>
      <TextItem>
        <PrimaryText>
          {liquidityRate && parseFloat(utils.formatUnits(liquidityRate, BigNumber.from(25))).toFixed(2)}%
        </PrimaryText>
      </TextItem>
      {address && (
        <TextItem>
          <Link
            to={{
              pathname: '/deposit',
              state: { tokenAddress: address },
            }}
          >
            <ButtonItem textColor="white" background="#131A33" textSize="small" round="5px">
              Supply
            </ButtonItem>
          </Link>
        </TextItem>
      )}
    </DataListRow>
  );
};

export default DepositsDataList;
