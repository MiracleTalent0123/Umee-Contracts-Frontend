import React from 'react';
import { BigNumber } from 'ethers';
import { TextItem, PrimaryText } from './DataList';
import { bigNumberToString } from 'lib/number-utils';
import { TextProps } from 'grommet';

interface ITableItems {
  borrowingEnabled: boolean;
  variableAPR: BigNumber;
  aprDecimals: BigNumber;
  textSize?: TextProps['size'];
}

const TableItem = ({ borrowingEnabled, variableAPR, aprDecimals, textSize }: ITableItems) => {
  if (!borrowingEnabled) {
    return (
      <>
        <TextItem justify="start">
          <PrimaryText color="clrTextAndDataListHeader">-</PrimaryText>
        </TextItem>
      </>
    );
  } else {
    return (
      <>
        <TextItem justify="start">
          <PrimaryText color="clrTextAndDataListHeader" size={'small'}>
            {variableAPR && bigNumberToString(variableAPR, aprDecimals)}%
          </PrimaryText>
        </TextItem>
      </>
    );
  }
};

export default TableItem;
