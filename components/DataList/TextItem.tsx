import { Box, BoxProps } from 'grommet';
import * as React from 'react';

export type TextValueType = 'decimal' | 'currency' | 'percent' | 'text';

export interface TextItemProps {
  children?: React.ReactNode;
  direction?: BoxProps['direction'];
  justify?: BoxProps['justify'];
  align?: BoxProps['align'];
  handleClick?: React.Dispatch<any>;
}

const TextItem: React.FC<TextItemProps> = ({
  children,
  direction,
  justify,
  align,
  handleClick
}) => (
  <Box
    onClick={handleClick}
    direction={direction}
    justify={justify}
    align={align}
  >
    {children}
  </Box>
);

TextItem.defaultProps = {
  direction: 'row',
  justify: 'center',
  align: 'center'
};

export default TextItem;
