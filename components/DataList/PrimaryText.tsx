import { Text, TextProps } from 'grommet';
import * as React from 'react';

export interface PrimaryTextProps {
  children?: any | any[];
  color?: TextProps['color'];
  size?: TextProps['size'];
  weight?: TextProps['weight'];
}

const PrimaryText = ({ children, color, size, weight }: PrimaryTextProps) => {
  return (
    <Text color={color} size={size || 'small'} weight={weight || 'normal'}>
      {children}
    </Text>
  );
};

export default PrimaryText;
