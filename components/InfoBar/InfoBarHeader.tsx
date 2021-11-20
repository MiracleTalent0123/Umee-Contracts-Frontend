import { Box, BoxProps } from 'grommet';
import * as React from 'react';

const { useEffect, useState } = React;

export interface InfoBarHeaderProps {
  margin?: BoxProps['margin'];
  children?: any;
}

const InfoBarHeader = ({ children, margin }: InfoBarHeaderProps) => {
  return (
    <Box background="clrHeaderBg">
      <Box direction="row" margin={margin || { horizontal: 'large', vertical: 'medium' }} >
        {children}
      </Box>
    </Box>
  );
};

export default InfoBarHeader;
