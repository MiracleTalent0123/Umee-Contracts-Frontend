import React from 'react';
import { Box, Text } from 'grommet';
import { BigNumber } from 'ethers';
import { bigNumberToNumber, bigNumberToString } from 'lib/number-utils';
import { InfoWindowTableItem, infoWinTblItemStyle } from 'components/InfoWindow';

export const HealthFactorTableItem = ({healthFactor, currentUserDebt, vert}: { healthFactor: string, currentUserDebt: BigNumber, vert?:string}) => {
  if(currentUserDebt &&  bigNumberToNumber(currentUserDebt, 18) < 0.00001){
    healthFactor = '-';
  }
  return (
    vert?
      <InfoWindowTableItem
        vert
        centered
        title="Health factor"
        data={[{ value: healthFactor, ...infoWinTblItemStyle, color: 'clrHealthOk' }]}
      />
      :
      <InfoWindowTableItem 
        centered
        title="Health factor"
        data={[{ value: healthFactor, ...infoWinTblItemStyle, color: 'clrHealthOk' }]}
      />

  );
};
