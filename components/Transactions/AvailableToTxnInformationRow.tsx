import React from 'react';
import { Box, Text } from 'grommet';
import { ETxnType } from 'lib/types';
import { BigNumber, BigNumberish } from 'ethers';
import { safeBigNumberToStringAllDecimals } from 'lib/number-utils';

interface AvailableToTxnInformationRowProps {
  txnType: ETxnType;
  withdrawModal?: boolean;
  userBalance?: BigNumber;
  availableAmount: BigNumber;
  symbol: string;
  tokenDecimals: BigNumberish;
  bridge?: boolean;
}

export const AvailableToTxnInformationRow: React.FC<AvailableToTxnInformationRowProps> = ({
  txnType,
  userBalance,
  withdrawModal,
  availableAmount,
  symbol,
  tokenDecimals,
  bridge,
}) => (
  <Box direction="row" style={{ letterSpacing: '0.1em' }}>
    <Text color="clrTextAndDataListHeader" size="xsmall" className="upper-case">
      {bridge
        ? 'Wallet'
        : txnType == ETxnType.deposit
          ? 'Wallet'
          : withdrawModal
            ? txnType == ETxnType.repay
              ? 'Wallet'
              : 'Borrowed'
            : 'Supplied'}
      {':'}
    </Text>
    <Text color="clrTextAndDataListHeader" size="xsmall" margin={{ left: 'xsmall' }}>
      {(userBalance || availableAmount) &&
        (Number(safeBigNumberToStringAllDecimals(availableAmount, tokenDecimals)) < 0
          ? '0'
          : Number(safeBigNumberToStringAllDecimals(availableAmount, tokenDecimals)).toFixed(2))}
      <span style={{ marginLeft: '3px' }}>{symbol}</span>
    </Text>
  </Box>
);
