import React from 'react';
import { Box, Text } from 'grommet';
import { TTxnAvailability, ETxnType } from 'lib/types';
import { BigNumber, BigNumberish } from 'ethers';
import { isZero, safeBigNumberToStringAllDecimals } from 'lib/number-utils';

export const AvailableToTxnInformationRow = ({
  txnType,
  userBalance = undefined, // this is for a repay condition.
  availableAmount,
  symbol,
  tokenDecimals
}: {
  txnType: ETxnType;
  userBalance?: BigNumber;
  availableAmount: BigNumber;
  symbol: string;
  tokenDecimals: BigNumberish;
}) => {
  return (
    <Box direction="row" justify="between">
      <Text size="small">{txnType} Amount</Text>
      <Text size="small" weight="bold">
        Balance:
        <Text
          size="small"
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
      </Text>
    </Box>
  );
};
