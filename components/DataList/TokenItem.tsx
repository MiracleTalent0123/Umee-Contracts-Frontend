import { Box, BoxProps, Image, Text, TextProps } from 'grommet';
import TokenLogo from '../TokenLogo';
import * as React from 'react';

export interface TokenItemProps {
  gap?: BoxProps['gap'];
  textSize?: TextProps['size'];
  iconWidth?: BoxProps['width'];
  iconHeight?: BoxProps['height'];
  name: string;
  handleClick?: React.Dispatch<any>;
}

const TokenItem = ({ gap, iconHeight, iconWidth, name, textSize, handleClick }: TokenItemProps) => {
  return (
    <Box onClick={handleClick} direction="row" align="center" gap={gap || 'small'} margin={{left: '-2px'}}>
      <Box height={iconHeight || '2.5rem'} width={iconWidth || '2.5rem'}>
        <TokenLogo width="40" height="40" symbol={name} />
      </Box>
      <Box>
        <Text size={textSize || 'small'}>{name}</Text>
      </Box>
    </Box>
  );
};

export default TokenItem;
