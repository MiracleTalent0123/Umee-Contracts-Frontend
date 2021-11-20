import React from 'react';
import { Box, Text } from 'grommet';
import { RepayRowProps } from '../RepayOverview';
import { RepayToUsdText } from './RepayToUsdText';
import { RepaySimpleText } from './RepaySimpleText';
import { SMALL_SYMBOL_HW_PX } from 'lib/constants';
import TokenLogo from 'components/TokenLogo';

export const RemainingToRepayRow = ({ borrowData, remainingRepayAmount, priceData }: RepayRowProps) => {
  return (
    <Box direction="row" justify="between">
      <Box>
        <Text size="small">Remaining to repay</Text>
      </Box>
      <Box align="end">
        <Box direction="row" align="center" gap="xxsmall">
          {borrowData.symbol ? (
            <TokenLogo symbol={borrowData.symbol} width={SMALL_SYMBOL_HW_PX} height={SMALL_SYMBOL_HW_PX} />
          ) : (
            <> </>
          )}

          <RepaySimpleText borrowData={borrowData} repayAmount={remainingRepayAmount} />
        </Box>

        <RepayToUsdText repayAmount={remainingRepayAmount} priceData={priceData} borrowData={borrowData} />
      </Box>
    </Box>
  );
};
