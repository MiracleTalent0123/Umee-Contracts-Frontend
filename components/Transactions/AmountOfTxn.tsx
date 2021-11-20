import React from 'react';
import { Text } from 'grommet';

type Props = { 
  label: string;
}
export const AmountOfTxn: React.FC<Props> = ({
  label,
  children,
}) => {
  return (
    <>
      <Text size="small" color="accent-2" weight="bold">
        {label}
      </Text>
      <Text size="small">{children}</Text>
    </>
  );
};
