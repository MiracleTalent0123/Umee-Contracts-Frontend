import React from 'react';
import { Text } from 'grommet';
import { ColorType } from 'grommet/utils';

export const TxnBoldText = ({ text, color='clrSubtitle' }: { text: string; color?: ColorType}) => {
  return (
    <Text color={color} weight="bold" size="small">
      {text}
    </Text>
  );
};
