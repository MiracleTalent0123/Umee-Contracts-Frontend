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
      <Box margin="-55px 0 0" direction="column" justify="center" align='center'>
        <TokenLogo symbol={symbol} src={src} width={width} height={height} />
        <Text margin={{top: 'xsmall'}} size="xsmall">{symbol}</Text>
      </Box>
    </>
  );
};

export default TokenLogoWithSymbol;
