import React from 'react';
import { Box, Text, Image } from 'grommet';
import { BigNumber } from 'ethers';
import { bigNumberToString } from 'lib/number-utils';

/** TODO: ADK: Clean up these any types */
export const TxnInterestRateChoice = ({ label, onClick, icon, borrowRate }: { label: string, onClick: any, icon: any, borrowRate: BigNumber }) => {
  return (
    <Box
      pad={{ horizontal: 'medium', vertical: 'small' }}
      width={{ min: 'xsmall' }}
      height={{ min: 'xsmall' }}
      gap="small"
      elevation="small"
      align="center"
      justify="center"
      onClick={onClick}
    >
      <Image width="35px" height="35px" src={icon} alt={`${label} icon`}/>
      <Box align="center">
        <Text size="small">{label}</Text>
        <Text size="small">{borrowRate && bigNumberToString(borrowRate, BigNumber.from(23), 2)} %</Text>
      </Box>
    </Box>
  );
};
