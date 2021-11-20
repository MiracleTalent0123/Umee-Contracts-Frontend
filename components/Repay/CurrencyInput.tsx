import { MaxBtn } from 'components/common';
import { Box, MaskedInput } from 'grommet';
import * as React from 'react';

export interface CurrencyInputProps {
  amount: string;
  maxAmount: string;
  hasMaxButton?: boolean;
  setAmount(amount: string): void;
}

const CurrencyInput = ({ maxAmount, amount, setAmount, hasMaxButton = true }: CurrencyInputProps) => {
  const handleChangeAmount = (newAmount: string) => {
    if (parseFloat(newAmount) > parseFloat(maxAmount)) {
      setAmount(maxAmount);
    } else {
      setAmount(newAmount);
    }
  };

  const handleMaxBtnClick = (_value: string) => {
    handleChangeAmount(maxAmount); 
  };

  return (
    <Box direction="row" background="neutral-1" border={{ color: 'neutral-2' }} round="3px" focusIndicator={true}>
      <MaskedInput
        width="75%"
        style={{ border: 'none' }}
        onChange={(e: any) => handleChangeAmount(e.target.value)}
        value={amount}
        placeholder="0"
        type="number"
      />
      {hasMaxButton && <MaxBtn onClickCb={handleMaxBtnClick} />}
    </Box>
  );
};

export default CurrencyInput;
