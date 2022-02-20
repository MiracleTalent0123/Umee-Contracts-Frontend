import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, utils } from 'ethers';
import { Box, GridSizeType, ResponsiveContext, Text } from 'grommet';
import { IUserTxnDeposit } from 'lib/types';
import { bigNumberToString } from 'lib/number-utils';
import { SecondaryBtn } from './common';

export interface DepositsDataListProps {
  columns: IDataListColumn[];
  data: IUserTxnDeposit[];
  total?: number;
}

const DepositsDataList = ({ columns, data, total }: DepositsDataListProps) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box flex>
      {data?.length ? (
        <>
          <Box pad={{ vertical: 'small' }} className="border-gradient-bottom">
            <Text size={size === 'small' ? 'small' : 'medium'}>Supply</Text>
          </Box>
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
  const size = useContext(ResponsiveContext);
  const { symbol, currentUTokenBalance, liquidityRate, address, decimals } = row;

  return (
    <DataListRow columnSizes={columnSizes} key={`row-${symbol}-3`}>
      {symbol && <TokenItem textSize="small" name={symbol} />}
      <TextItem justify="start">
        <PrimaryText size="small">
          {currentUTokenBalance && Number(bigNumberToString(currentUTokenBalance, decimals)).toLocaleString()}
        </PrimaryText>
      </TextItem>
      {size !== 'small' && (
        <TextItem justify="start">
          <PrimaryText size="small">
            {liquidityRate && parseFloat(utils.formatUnits(liquidityRate, BigNumber.from(25))).toFixed(2)}%
          </PrimaryText>
        </TextItem>
      )}
      {address && (
        <TextItem justify="end">
          <Link
            to={{
              pathname: '/supply',
              state: { tokenAddress: address },
            }}
          >
            <SecondaryBtn
              textSize="xsmall"
              round="large"
              text="SUPPLY"
              pad={{ vertical: 'small', horizontal: 'small' }}
            />
          </Link>
        </TextItem>
      )}
    </DataListRow>
  );
};

export default DepositsDataList;
