import React from 'react';
import { Box, Text } from 'grommet';
import ExplorerLink from 'components/ExplorerLink';
import { ETxnSteps } from 'lib/types';

export const TxnStatusBar = ({
  text,
  txnHash,
  status,
}: {
  text: string;
  txnHash?: any;
  status: ETxnSteps;
}) => {
  const statusColor = status === ETxnSteps.Failure ? 'status-error' : 'status-ok';
  const statusText = status === ETxnSteps.Failure ? 'Failure' : 'Success';
  return (
    <Box
      direction="row"
      border={{ side: 'top', color: 'clrBorrowDepositBg' }}
      pad={{ horizontal: 'small', vertical: 'medium' }}
      align="center"
      justify='between'
    >
      <Text size="small">{text}</Text>
      <Box direction="row" align="center" gap="xsmall">
        <Text size="small">{statusText}</Text>
        <Box round="100%" background={statusColor} width="10px" height="10px" />
      </Box>
    </Box>
  );
};
