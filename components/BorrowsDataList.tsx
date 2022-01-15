import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonItem, DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, utils } from 'ethers';
import { IBorrowData } from '../lib/types';
import { safeBigNumberToStringTruncate } from '../lib/number-utils';
import { Box, Text } from 'grommet';

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
            <Text margin={{ bottom: 'small' }} size="small">
              Borrow
            </Text>
            <DataList columns={columns}>
              {data.map((row) => {
                const { symbol, currentVariableDebt, variableBorrowAPR, decimals, address } = row;

                return (
                  <DataListRow columnSizes={columnSizes} key={`row-${symbol}-2`}>
                    {symbol && <TokenItem name={symbol} />}
                    <TextItem>
                      <PrimaryText>
                        {currentVariableDebt &&
                          Number(safeBigNumberToStringTruncate(currentVariableDebt, decimals)).toLocaleString()}
                      </PrimaryText>
                    </TextItem>
                    <TextItem>
                      <PrimaryText>
                        {variableBorrowAPR && parseFloat(utils.formatUnits(variableBorrowAPR, aprDecimals)).toFixed(2)}%
                      </PrimaryText>
                    </TextItem>
                    {address && (
                      <TextItem>
                        <Link
                          to={{
                            pathname: '/borrow',
                            state: { tokenAddress: address },
                          }}
                        >
                          <ButtonItem textColor="white" background="#131A33" textSize="small" round="5px">
                            Borrow
                          </ButtonItem>
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
