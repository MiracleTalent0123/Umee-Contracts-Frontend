import { Text, TextProps } from 'grommet';
import * as React from 'react';

export interface SubTextProps {
  children?: any | any[];
  color?: TextProps['color'];
  size?: TextProps['size'];
  weight?: TextProps['weight'];
}

const SubText = ({ children, color, size, weight }: SubTextProps) => {
  return (
    <Text size={size || 'xsmall'} color={color || 'clrHeaderText'} weight={weight || 'normal'}>
      {children}
    </Text>
  );
};

export default SubText;
