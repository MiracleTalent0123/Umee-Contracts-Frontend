import React from 'react';
import { Box, Text } from 'grommet';
import { BigNumber } from 'ethers';
import { bigNumberToString } from 'lib/number-utils';
import { InterestRateTypeEnums } from 'components/Borrows/BorrowInputRate';

export const BorrowAprTextBlock = ({
  txnRate,
  txnRateType,
}: {
  txnRate: BigNumber;
  txnRateType: InterestRateTypeEnums | undefined;
}) => {
  return (
    <>
      {/* Interest (APR) */}
      <Box direction="row" justify="between">
        <Text size="small">Interest (APR)</Text>
        <Text size="small" weight="bold">
          {txnRate && bigNumberToString(txnRate, BigNumber.from(23), 2)} %
        </Text>
      </Box>
      {/* Interest Rate Type */}
      <Box direction="row" justify="between">
        <Text size="small">Interest rate type</Text>
        <Text size="small" weight="bold">
          {txnRateType === 1 ? 'Stable' : 'Variable'}
        </Text>
      </Box>
    </>
  );
};
