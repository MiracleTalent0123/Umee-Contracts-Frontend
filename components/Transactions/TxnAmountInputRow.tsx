import { Box } from 'grommet';
import React from 'react';
import { TxnAmountInput } from './TxnAmountInput';
import { TTxnAvailability } from '../../lib/types';

export const TxnAmountInputRow = ({
  txnAvailability,
  disabled = false,
  setTxnAmount,
  txnAmount,
}: {
  txnAvailability: TTxnAvailability;
  disabled?: boolean;
  setTxnAmount: (amount: string) => void;
  txnAmount: string;
}) => {
  return (
    <Box margin={{bottom: 'medium'}}>
      <TxnAmountInput
        txnAvailability={txnAvailability}
        disabled={disabled}
        setTxnAmount={setTxnAmount}
        txnAmount={txnAmount}
      />
    </Box>
  );
};
