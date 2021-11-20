import { Box, Text, Button } from 'grommet';
import * as Icons from 'grommet-icons';
import React from 'react';
export const BackBtn = ({ onClick }: { onClick?(e: React.MouseEvent): void }) => {
  return (
    <Button onClick={onClick} alignSelf="start">
      <Box
        focusIndicator={false}
        onClick={onClick}
        justify="center"
        pad={{ horizontal: 'xsmall', vertical: 'xxsmall' }}
        gap="xxsmall"
        direction="row"
        border={{ color: 'clrBackButtonTextAndBoxBorder', size: 'small' }}
      >
        <Icons.FormPrevious color="clrBackButtonTextAndBoxBorder" />
        <Text size="small" color="clrBackButtonTextAndBoxBorder" margin={{top: '4px'}}>
          Back
        </Text>
      </Box>
    </Button>
  );
};