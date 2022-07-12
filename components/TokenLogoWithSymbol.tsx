import React from 'react';
import { Box, Text } from 'grommet';
import TokenLogo from 'components/TokenLogo';

const TokenLogoWithSymbol = ({
  symbol,
  src,
  width,
  height,
}: {
  symbol: string;
  src?: string;
  width: string;
  height: string;
}) => {
  return (
    <>
      <Box direction="column" justify="center" align="center" style={{ position: 'relative', minHeight: 'unset' }}>
        <TokenLogo symbol={symbol} src={src} width={width} height={height} />
        <Text color="clrTextAndDataListHeader" margin={{ top: 'xsmall' }} size="xsmall">
          {symbol == 'WETH' ? 'ETH' : symbol}
        </Text>
      </Box>
    </>
  );
};

export default TokenLogoWithSymbol;
