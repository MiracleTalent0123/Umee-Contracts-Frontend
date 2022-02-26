import React from 'react';
import { Box, Text } from 'grommet';
import { BigNumber, BigNumberish, utils } from 'ethers';
import { TTxnAvailability } from 'lib/types';

export const MaxBtn = ({
  txnAvailability,
  onClickCb,
}: {
  txnAvailability?: TTxnAvailability;
  onClickCb: (value: string) => void;
}) => {
  let _availableAmount: BigNumber | undefined, _tokenDecimals: BigNumber | BigNumberish | undefined;
  _availableAmount = txnAvailability?.availableAmount;
  _tokenDecimals = txnAvailability?.tokenDecimals;
  const handleOnClick = () => {
    _availableAmount && _tokenDecimals && onClickCb(utils.formatUnits(_availableAmount, _tokenDecimals));
  };
  return (
    <Box align="center" onClick={handleOnClick}>
      <Text color="clrMidGreyOnNavy" size="xsmall" className="letter-spacing">
        MAX
      </Text>
    </Box>
  );
};
