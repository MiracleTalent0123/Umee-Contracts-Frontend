import { Box } from 'grommet';
import React from 'react';

export const TxnOverviewBlockWrapper: React.FC = ({ children }) => {
  return (
    <Box width="75%" gap="medium" alignSelf="center" margin={{ bottom: '1rem' }}>
      <Box border={{ color: 'clrTabBorder' }} round="xsmall" pad="small" gap="small">
        {children}
      </Box>
    </Box>
  );
};
