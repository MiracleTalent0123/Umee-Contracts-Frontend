import React from 'react';
import { Text } from 'grommet';

export const DisplayBasicAmount = ({ amount }: { amount: string }) => {
  return (
    <Text size="xsmall" color="clrTextMedium" weight="bold">
      $ {amount}
    </Text>
  );
};
