import React from 'react';
import { Box, Text } from 'grommet';
import { ITokenData } from 'lib/types';

export const ZeroLiquidityDepositButton = ({
  onClick,
  token,
}: {
  onClick: React.MouseEventHandler;
  token: ITokenData;
}) => {
  return (
    <>
      <Text size="small" color="accent-2" weight="bold">
        No liquidity
      </Text>
      <Text size="small" color="accent-1">
        {`There is no ${token.symbol} available liquidity to borrow.`}
      </Text>
      <Box
        focusIndicator={false}
        onClick={onClick}
        align="center"
        justify="center"
        margin={{ vertical: 'medium' }}
        background="accent-2"
        pad="xsmall"
        width="xsmall"
        elevation="small"
        round="3px"
      >
        <Text size="xsmall">Deposit</Text>
      </Box>
    </>
  );
};
