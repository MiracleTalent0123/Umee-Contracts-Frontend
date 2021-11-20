import { BoxProps, Box, Stack } from 'grommet';
import React from 'react';

export interface InfoBarBodyProps {
  children: any;
  margin?: BoxProps['margin'];
  color?: string;
}

const InfoBarBody = ({ children, margin, color='clrDefaultBg' }: InfoBarBodyProps) => {
  return (
    <Box margin={margin} background={color} flex>
      <Stack guidingChild={1}>
        <Box background="brand" height="xxsmall" />
        <Box margin={{ horizontal: 'large' }} gap="medium" direction="row">
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

export default InfoBarBody;
