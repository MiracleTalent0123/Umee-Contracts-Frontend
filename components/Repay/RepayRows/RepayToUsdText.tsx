import React from 'react';
import { Text } from 'grommet';
import { stringToUSDString } from 'lib/number-utils';
import { RepayRowProps } from '../RepayOverview';
import { bigNumberToString } from 'lib/number-utils';
import { BigNumber } from 'ethers';

export const RepayToUsdText = ({
  repayAmount,
  borrowData,
  priceData,
  forWallet = false,
}: RepayRowProps) => {
  let amount = repayAmount;
  if(!repayAmount){
    amount = BigNumber.from(0);
  }
  return (
    <Text size="xsmall" color="neutral-2" weight="bold">
      ${' '}
      {forWallet
        ? stringToUSDString(bigNumberToString(amount, borrowData.decimals), priceData[borrowData.symbol || '']?.usd || 0)
        : stringToUSDString(amount as string, priceData[borrowData.symbol].usd)}
    </Text>
  );
};
