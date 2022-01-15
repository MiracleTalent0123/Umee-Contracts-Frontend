import { BoxProps, Box, Stack } from 'grommet';
import React from 'react';

export interface InfoBarBodyProps {
  children: any;
  margin?: BoxProps['margin'];
  color?: string;
}

const InfoBarBody = ({ children, margin, color='white' }: InfoBarBodyProps) => {
  return (
    <Box gap="medium" direction="row" flex>
      {children}
    </Box>
  );
};

export default InfoBarBody;
