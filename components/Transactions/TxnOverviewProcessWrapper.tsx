import { Box } from 'grommet';
import React from 'react';
import { TXN_PROCESS_BORDER_ROUND } from 'lib/constants';

export const TxnOverviewProcessWrapper: React.FC<{ borderColor: string }> = ({ children, borderColor }) => {
  return (
    <Box border={{ color: borderColor }} round={TXN_PROCESS_BORDER_ROUND}>
      {children}
    </Box>
  );
};
