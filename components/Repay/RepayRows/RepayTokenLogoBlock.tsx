import React from 'react';
import { Box, Text } from 'grommet';
import TokenLogo from '../../TokenLogo';
import { SMALL_SYMBOL_HW_PX } from 'lib/constants';
import { RepayRowProps } from 'components/Repay/RepayOverview';
import { bigNumberToString } from 'lib/number-utils';

export const RepayTokenLogoBlock = ({ forWallet, borrowData, repayAmount, selectedToken }: RepayRowProps) => {
  return (
    <Box direction="row" align="center" gap="xxsmall">
      {forWallet ? (
        <>
          <TokenLogo symbol={borrowData.symbol} width={SMALL_SYMBOL_HW_PX} height={SMALL_SYMBOL_HW_PX} />
          <Text size="small">
            <Text size="small" weight="bold">
              {bigNumberToString(repayAmount, borrowData.decimals) < '0.01' ? bigNumberToString(repayAmount, borrowData.decimals, 18) : bigNumberToString(repayAmount, borrowData.decimals)}
            </Text> {borrowData.symbol}
          </Text>
        </>
      ) : (
        <>
          {selectedToken && <TokenLogo symbol={selectedToken} width={SMALL_SYMBOL_HW_PX} height={SMALL_SYMBOL_HW_PX} />}
          <Text size="small">
            <Text size="small" weight="bold">{repayAmount}</Text> {selectedToken}
          </Text>
        </>
      )}
    </Box>
  );
};
