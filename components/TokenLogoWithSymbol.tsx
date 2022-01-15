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
      <Box direction="row" justify="center" style={{ position: 'relative' }}>
        <TokenLogo symbol={symbol} src={src} width={width} height={height} />
        <Box style={{ position: 'absolute', bottom: '-10px' }} direction="row" justify="center">
          <Text
            size="small"
            style={{
              color: 'black',
              padding: '2px 8px',
              borderRadius: '5px',
              background: 'linear-gradient(110.73deg, #FDA9FF -7.25%, #4DFFE5 105.72%)',
            }}
          >
            {symbol}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default TokenLogoWithSymbol;
