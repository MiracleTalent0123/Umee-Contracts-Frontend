import { BoxProps, Box, Stack } from 'grommet';
import React from 'react';

export interface InfoBarBodyProps {
  children: any;
  margin?: BoxProps['margin'];
  color?: string;
  gap?: BoxProps['gap'];
  direction?: BoxProps['direction'];
}

const InfoBarBody = ({ children, margin, color = 'white', gap, direction }: InfoBarBodyProps) => {
  return (
    <Box gap={gap || 'medium'} direction={direction || 'row'} flex wrap>
      {children}
    </Box>
  );
};

export default InfoBarBody;
