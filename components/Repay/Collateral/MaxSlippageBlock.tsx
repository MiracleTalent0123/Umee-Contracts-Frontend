import React from 'react';
import { Box, Text } from 'grommet';

export const MaxSlippageBlock = ({maxSlippage, feesAmount}: {maxSlippage: string, feesAmount: string} ) => {
  return (
    <>
      <Box direction="row" justify="between">
        <Text size="small">Maximum slippage</Text>
        <Text size="small" weight="bold">
          {maxSlippage} %
        </Text>
      </Box>
      <Box direction="row" justify="between">
        <Text size="small">Fees</Text>
        <Text size="small" weight="bold">
          {feesAmount} %
        </Text>
      </Box>
    </>
  );
};
