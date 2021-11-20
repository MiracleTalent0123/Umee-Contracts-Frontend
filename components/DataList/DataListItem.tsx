import { Box, BoxProps, Image, Text, TextProps } from 'grommet';
import * as React from 'react';

export type DataListItemType = 'token' | 'value' | 'button' | 'meter';

export interface TokenItemProps {
  textSize?: TextProps['size'];
  iconWidth?: BoxProps['width'];
  iconHeight?: BoxProps['height'];
  name: string;
}

export interface DataListItemProps {
  type: DataListItemType;
  props: TokenItemProps;
  children?: React.ReactElement | React.ReactElement[];
  justify?: BoxProps['justify'];
  align?: BoxProps['align'];
  direction?: BoxProps['direction'];
}

const DataListItem = ({ children, justify, align, direction, type }: DataListItemProps) => {
  return (
    <Box direction={direction || 'column'} justify={justify || 'center'} align={align || 'center'}>
      {children}
    </Box>
  );
};

export default DataListItem;
