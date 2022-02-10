import * as React from 'react';
import { Link } from 'react-router-dom';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, utils } from 'ethers';
import { IBorrowData } from '../lib/types';
import { bigNumberToString } from '../lib/number-utils';
import { Box, Text } from 'grommet';
import { SecondaryBtn } from './common';

export interface BorrowsDataListProps {
  columns: IDataListColumn[];
  data: IBorrowData[];
  total: number;
}

const BorrowsDataList = ({ columns, data, total }: BorrowsDataListProps) => {
  const aprDecimals = BigNumber.from(25);
  const columnSizes = columns.map((col) => col.size);

  if (total === 0) {
    return <></>;
  } else {
    return (
      <Box flex>
        {data.length > 0 && (
          <>
            <Box pad={{ vertical: 'small' }} className="border-gradient-bottom">
              <Text size="medium">Borrow</Text>
            </Box>
            <DataList columns={columns}>
              {data.map((row) => {
                const { symbol, currentVariableDebt, variableBorrowAPR, decimals, address } = row;

                return (
                  <DataListRow columnSizes={columnSizes} key={`row-${symbol}-2`}>
                    {symbol && <TokenItem textSize="small" name={symbol} />}
                    <TextItem justify="start">
                      <PrimaryText size="small">
                        {currentVariableDebt &&
                          Number(bigNumberToString(currentVariableDebt, decimals)).toLocaleString()}
                      </PrimaryText>
                    </TextItem>
                    <TextItem justify="start">
                      <PrimaryText size="small">
                        {variableBorrowAPR && parseFloat(utils.formatUnits(variableBorrowAPR, aprDecimals)).toFixed(2)}%
                      </PrimaryText>
                    </TextItem>
                    {address && (
                      <TextItem justify="end">
                        <Link
                          to={{
                            pathname: '/borrow',
                            state: { tokenAddress: address },
                          }}
                        >
                          <SecondaryBtn
                            round="large"
                            text="BORROW"
                            pad={{ vertical: 'small', horizontal: 'medium' }}
                            textSize="xsmall"
                          />
                        </Link>
                      </TextItem>
                    )}
                  </DataListRow>
                );
              })}
            </DataList>
          </>
        )}
      </Box>
    );
  }
};

export default BorrowsDataList;
