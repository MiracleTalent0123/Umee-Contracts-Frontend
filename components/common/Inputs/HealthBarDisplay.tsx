import React from 'react';
import { BorrowRangeInput } from '../../Borrows/BorrowRangeInput';
import { Box, Text } from 'grommet';
import { TTxnAvailability } from 'lib/types';

export const HealthBarDisplay = ({
  txnAvailability,
  newHealthFactor,
  borrowAmount,
  setTxnAmount,
}: {
  txnAvailability: TTxnAvailability;
  newHealthFactor: string;
  borrowAmount: string;
  setTxnAmount: () => void;
}) => {
  const { availableAmount, tokenDecimals } = txnAvailability;

  return (
    <Box width="medium" alignSelf="center">
      <Box direction="row" justify="center">
        <Text size="small">New health factor{' '}</Text>
        <Text size="small" weight="bold">
          {newHealthFactor}
        </Text>
      </Box>
      <Box direction="row" justify="between">
        <Text size="small" color="status-ok">
          Safer
        </Text>
        <Text size="small" color="status-error">
          Riskier
        </Text>
      </Box>
      <BorrowRangeInput
        borrowAmount={borrowAmount}
        availableAmount={availableAmount}
        setBorrowAmount={setTxnAmount}
        decimals={tokenDecimals}
      />
    </Box>
  );
};
