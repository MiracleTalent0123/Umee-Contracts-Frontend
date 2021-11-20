import React from 'react';
import { Box, Text } from 'grommet';
import { BigNumber } from 'ethers';
import { bigNumberToNumber } from 'lib/number-utils';

export const HealthFactorText = ({label, healthFactor, currentUserDebt}: {label:string, healthFactor: string, currentUserDebt?: BigNumber}) => {
  if(currentUserDebt &&  bigNumberToNumber(currentUserDebt, 18) < 0.00001){
    healthFactor = '-';
  }
  return (
    <Box direction="row" justify="between">
      <Text size="small">{label} Health Factor</Text>
      <Text size="small" color="status-ok" weight="bold">
        {healthFactor}
      </Text>
    </Box>
  );
};
