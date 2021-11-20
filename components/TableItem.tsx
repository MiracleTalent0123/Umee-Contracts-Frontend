import React from 'react';
import { BigNumber } from 'ethers';
import { TextItem, PrimaryText } from './DataList';
import { bigNumberToString } from 'lib/number-utils';

interface ITableItems {
  borrowingEnabled: boolean;
  variableAPR: BigNumber;
  aprDecimals: BigNumber;
}

const TableItem = ({borrowingEnabled, variableAPR, aprDecimals}: ITableItems) => {
  if(!borrowingEnabled){
    return(
      <>
        <TextItem>
          <PrimaryText>-</PrimaryText>
        </TextItem>
        <TextItem>
          <PrimaryText>-</PrimaryText>
        </TextItem>
      </>
    );
  }
  else{
    return(
      <>
        <TextItem>
          <PrimaryText>{variableAPR && bigNumberToString(variableAPR, aprDecimals)}%</PrimaryText>
        </TextItem>
      </>
    );
  }
};

export default TableItem;