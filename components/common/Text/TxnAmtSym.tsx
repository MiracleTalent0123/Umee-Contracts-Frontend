import React from 'react';
import { Box, Text } from 'grommet';
import TokenLogo from '../../TokenLogo';
import { ITokenData } from 'lib/types';

export const TxnAmtSym = ({ txnAmount, token }: { txnAmount: string; token: ITokenData }) => {
  return (
    <Box direction="row" align="center" gap="xxsmall">
      {/** TODO: ADK: The divs are quick hack to push the logo to a better looking position. */}
      <div>
        {token.symbol ? <TokenLogo symbol={token.symbol} width="15px" height="15px" /> : null}
      </div>
      <Text size="small" weight="bold">
        {txnAmount}
      </Text>
      &nbsp;<Text size="small">{token.symbol}</Text>
    </Box>
  );
};
