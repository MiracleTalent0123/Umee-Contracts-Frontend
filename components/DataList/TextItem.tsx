import { Box, BoxProps } from 'grommet';
import * as React from 'react';

export type TextValueType = 'decimal' | 'currency' | 'percent' | 'text';

export interface TextItemProps {
  children?: any | any[];
  direction?: BoxProps['direction'];
  justify?: BoxProps['justify'];
  align?: BoxProps['align'];
  handleClick?: React.Dispatch<any>;
}

const TextItem = ({ children, direction, justify, align, handleClick }: TextItemProps) => {
  return (
    <Box onClick={handleClick} direction={direction || 'column'} justify={justify || 'center'} align={align || 'center'}>
      {children}
    </Box>
  );
};

export default TextItem;
