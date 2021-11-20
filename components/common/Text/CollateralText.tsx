import React from 'react';
import { Box, Text } from 'grommet';

export const CollateralText = ({collateral}: {collateral: string}) => {
  return (
    <Box direction="row" justify="between">
      <Text size="small">Collateral Usage</Text>
      <Text size="small" color={collateral==='Yes' ? 'status-ok' : 'status-error'} weight="bold">
        {collateral}
      </Text>
    </Box>
  );
};
