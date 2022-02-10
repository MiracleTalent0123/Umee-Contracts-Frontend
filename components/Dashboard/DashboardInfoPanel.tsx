import React from 'react';
import { Box, Text } from 'grommet';

interface DashboardInfoPanelProps {
  title: string;
  borderColor?: string;
  value: string;
}

const DashboardInfoPanel: React.FC<DashboardInfoPanelProps> = ({ title, borderColor, value }) => {
  return (
    <Box
      border={[
        { side: 'bottom', size: '1px', color: 'clrPrimary' },
        { side: 'top', size: '2px', color: borderColor || 'clrPrimary' },
      ]}
      pad={{ vertical: 'xsmall' }}
      flex
    >
      <Text size="xsmall">{title}</Text>
      <Text margin={{top: 'medium'}} size="large">${value}</Text>
    </Box>
  );
};

export default DashboardInfoPanel;
