import React from 'react';
import { Text } from 'grommet';
import { IUserReserveData } from 'lib/types';
import { BigNumber } from 'ethers';

export const RepaySimpleText = ({ repayAmount, borrowData }: { repayAmount: string | BigNumber; borrowData: IUserReserveData }) => {
  console.log('repayAmount: ' + repayAmount);
  return (
    <Text size="small">
      {repayAmount ? 
        <><Text weight='bold'>{repayAmount}</Text> {borrowData.symbol} </>
        :
        <><Text weight='bold'>0</Text> {borrowData.symbol}</>
      }
      
    </Text>
  );
};
