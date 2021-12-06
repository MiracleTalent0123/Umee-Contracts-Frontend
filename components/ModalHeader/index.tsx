import React from 'react';
import { Box, Text } from 'grommet';
import TokenLogo from 'components/TokenLogo';

const ModalHeader = ({symbol, src}: {symbol: string, src?: string;}) => {
  return (
    <>
      <Box margin="-65px 0 0" direction="row" justify="center">
        <TokenLogo 
          symbol={symbol} 
          src={src}
          width="70"
          height="70"
        />
      </Box>
      <Box margin="-10px 0 20px" direction="row" justify="center">
        <Text size="small" style={{color: 'black', padding: '2px 8px', borderRadius: '5px', background: 'linear-gradient(110.73deg, #FDA9FF -7.25%, #4DFFE5 105.72%)'}}>
          {symbol}
        </Text>
      </Box>
    </>
  );
};

export default ModalHeader;
