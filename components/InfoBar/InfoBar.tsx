import { Box } from 'grommet';
import React from 'react';
import { BoxProps } from 'grommet';

export interface InfoBarProps {
  children?: any;
  margin?: BoxProps['margin'];
  color?: string;
}

const InfoBar = ({ children, margin, color = undefined }: InfoBarProps) => {
  return (
    <Box margin={margin} color={color}>
      {children}
    </Box>
  );
};

export default InfoBar;
