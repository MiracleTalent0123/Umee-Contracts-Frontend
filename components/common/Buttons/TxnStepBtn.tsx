import React from 'react';
import { Box, Text } from 'grommet';

export const TxnStepBtn = ({ onClick, text }: { onClick?: any; text: string }) => {
  return (
    <Box
      focusIndicator={false}
      align="center"
      justify="center"
      background={'clrBorrowDepositBg'}
      pad="xsmall"
      width="xsmall"
      round="xxsmall"
      onClick={onClick}
    >
      <Text size="xsmall" color="clrTextMedium">
        {text}
      </Text>
    </Box>
  );
};
