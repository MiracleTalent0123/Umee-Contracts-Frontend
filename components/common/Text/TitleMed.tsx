import React from 'react';
import { Text } from 'grommet';

export const TitleMed = ({ text }: { text: string }) => {
  return (
    <Text size="medium" color="clrSubtitle" weight="bold">
      {text}
    </Text>
  );
};