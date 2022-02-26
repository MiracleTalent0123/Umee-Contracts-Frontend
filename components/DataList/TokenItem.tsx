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
    <Box onClick={handleClick} direction="row" align="center">
      <Box>
        <TokenLogo width="36" height="36" symbol={name} />
      </Box>
      <Box margin={{ left: 'small' }}>
        {name == 'WETH' ? (
          <Text size={textSize || 'small'} color="clrTextAndDataListHeader">
            {'ETH'}
          </Text>
        ) : (
        <Text size={textSize || 'small'} color="clrTextAndDataListHeader">
            {name}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default TokenItem;
