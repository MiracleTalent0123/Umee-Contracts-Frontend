import * as React from 'react';
import { RangeInput } from 'grommet';
import { BigNumber, BigNumberish } from 'ethers';
import { bigNumberToNumber } from 'lib/number-utils';

export interface IBorrowRangeInputProps {
  borrowAmount: string;
  availableAmount: BigNumber;
  setBorrowAmount(amount: string): void;
  decimals: BigNumber | BigNumberish;
}

export const BorrowRangeInput = ({borrowAmount, availableAmount, setBorrowAmount, decimals}: IBorrowRangeInputProps) => {
  return (
    <RangeInput
      value={borrowAmount.toString()}
      max={bigNumberToNumber(availableAmount, decimals)}
      min={0.1}
      step={0.1}
      onChange={(e) => setBorrowAmount(e.target.value)}
    />
  );
};

export default BorrowRangeInput;