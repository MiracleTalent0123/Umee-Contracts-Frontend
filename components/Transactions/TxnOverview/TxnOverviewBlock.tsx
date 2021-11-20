import { Box, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { TxnAmtSym, DisplayBasicAmount, HealthFactorText, BorrowAprTextBlock } from 'components/common';
import { InterestRateTypeEnums } from 'components/Borrows/BorrowInputRate';
import { BigNumber } from 'ethers';
import { ITokenData } from 'lib/types';
import { TxnOverviewBlockWrapper } from '../TxnOverviewBlockWrapper';
import { CollateralText } from 'components/common/Text/CollateralText';

export type TxnOverviewBlockProps = {
  token: ITokenData;
  txnRate?: BigNumber;
  txnRateType?: InterestRateTypeEnums | undefined;
  txnAmount: string;
  currentHealthFactor?: string;
  nextHealthFactor?: string;
  newHealthFactor?: string;
  collateral?: string;
};

export const TxnOverviewBlock = ({
  token,
  txnAmount,
  txnRate,
  currentHealthFactor,
  newHealthFactor,
  nextHealthFactor,
  txnRateType,
  collateral
}: TxnOverviewBlockProps) => {
  const [usdPrice, setUsdPrice] = useState<string>();

  useEffect(() => {
    if (token.usdPrice) {
      setUsdPrice((parseFloat(txnAmount) * token?.usdPrice).toFixed(2));
    }
  }, [token.usdPrice, txnAmount]);

  return (
    <TxnOverviewBlockWrapper>
      <Box direction="row" justify="between">
        <Text size="small">Amount</Text>
        <Box align="end">
          <TxnAmtSym token={token} txnAmount={txnAmount} />
          <DisplayBasicAmount amount={usdPrice || ''} />
        </Box>
      </Box>
      {txnRate && <BorrowAprTextBlock txnRate={txnRate} txnRateType={txnRateType} />}
      {currentHealthFactor && <HealthFactorText label="Current" healthFactor={currentHealthFactor} />}
      {nextHealthFactor && <HealthFactorText label="Next" healthFactor={nextHealthFactor} />}
      {newHealthFactor && <HealthFactorText label="New" healthFactor={newHealthFactor} />}
      {collateral && <CollateralText collateral={collateral} />}
    </TxnOverviewBlockWrapper>
  );
};
