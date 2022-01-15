import React from 'react';
import { Box, Text } from 'grommet';
import { ETxnType } from 'lib/types';
import { BigNumber, BigNumberish } from 'ethers';
import { safeBigNumberToStringAllDecimals } from 'lib/number-utils';

interface AvailableToTxnInformationRowProps {
  txnType: ETxnType;
  userBalance?: BigNumber;
  availableAmount: BigNumber;
  symbol: string;
  tokenDecimals: BigNumberish;
}

export const AvailableToTxnInformationRow: React.FC<AvailableToTxnInformationRowProps> = ({
  txnType,
  userBalance,
  availableAmount,
  symbol,
  tokenDecimals
}) => (
  <Box direction="row" justify="between">      
    <Text size="small" weight="bold" textAlign="end" margin={{ left: 'auto' }}>
      Balance
    </Text>
    <Text
      size="small"
      weight="bold"
      margin={{ left: 'small' }}
      style={{
        background: 'linear-gradient(98.2deg, #FDA9FF -6.64%, #4DFFE5 106.64%)',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
      }}
    >
      {(userBalance || availableAmount) &&
        (Number(safeBigNumberToStringAllDecimals(availableAmount, tokenDecimals)) < 0
          ? '0'
          : Number(safeBigNumberToStringAllDecimals(availableAmount, tokenDecimals)).toFixed(2))}
      <span style={{ marginLeft: '3px' }}>{symbol}</span>
    </Text>
  </Box>
);
