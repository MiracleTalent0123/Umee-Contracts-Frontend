import React from 'react';
import { Box, Text } from 'grommet';
import { bigNumberToString } from 'lib/number-utils';
import { BigNumberish } from '@ethersproject/bignumber';

export const BigNumberToString = ({ value }: { value: BigNumberish }) => {
  return (
    <Box>
      <Text size="xsmall" color="status-ok" weight="bold">
        {bigNumberToString(value, 18)}
      </Text>
    </Box>
  );
};
