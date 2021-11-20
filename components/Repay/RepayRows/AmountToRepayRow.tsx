import React from 'react';
import { Box, Text } from 'grommet';
import TokenLogo from '../../TokenLogo';
import { SMALL_SYMBOL_HW_PX } from 'lib/constants';
import { stringToUSDString, bigNumberToString } from 'lib/number-utils';
import { RepayToUsdText } from './RepayToUsdText';
import { RepayTokenLogoBlock } from './RepayTokenLogoBlock';
import { RepayRowProps }  from '../RepayOverview';
import { BigNumber } from '@ethersproject/bignumber';

export const AmountToRepayRow = ({ repayAmount, selectedToken, priceData, borrowData, forWallet }: RepayRowProps) => {
  return (
    <>
      <Box direction="row" justify="between">
        <Box>
          <Text size="small">Amount to repay</Text>
          <Text size="xsmall">in borrowed currency</Text>
        </Box>
        <Box align="end">
          <RepayTokenLogoBlock
            repayAmount={repayAmount}
            borrowData={borrowData}
            priceData={priceData}
            forWallet={forWallet}
          />
          <Text size="xsmall" color="neutral-2" weight="bold">
            {typeof repayAmount === 'string'
              ? stringToUSDString(repayAmount as string, priceData[selectedToken || '']?.usd || 0) === '0.00'
                ? '<$' + '0.01'
                : '$' + stringToUSDString(repayAmount as string, priceData[selectedToken || '']?.usd || 0)
              : stringToUSDString(
                bigNumberToString(repayAmount, borrowData.decimals),
                priceData[borrowData.symbol || '']?.usd || 0
              ) === '0.00'
                ? '<$' + '0.01'
                : '$' +
                stringToUSDString(
                  bigNumberToString(repayAmount, borrowData.decimals),
                  priceData[borrowData.symbol || '']?.usd || 0
                )}
          </Text>
        </Box>
      </Box>
    </>
  );
};
