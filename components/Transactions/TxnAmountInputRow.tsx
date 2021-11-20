import { Box } from 'grommet';
import React from 'react';
import { TxnAmountInput } from './TxnAmountInput';
import { TTxnAvailability } from '../../lib/types';

export const TxnAmountInputRow = ({
  txnAvailability,
  disabled = false,
  setTxnAmount,
}: {
  txnAvailability: TTxnAvailability;
  disabled?: boolean;
  setTxnAmount: (amount: string) => void;
}) => {
  return (
    <Box margin={{bottom: '20px'}}>
      <TxnAmountInput
        txnAvailability={txnAvailability}
        disabled={disabled}
        setTxnAmount={setTxnAmount}
      />
    </Box>
  );
};
