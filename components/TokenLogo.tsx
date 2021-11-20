import { Image } from 'grommet';
import { mainnet } from 'lib/tokenaddresses';
import * as React from 'react';
import cosmosLogo from '../public/images/cosmos-hub-logo.svg';

interface ITokenLogo {
    symbol: string;
    width?: string;
    height?: string;
}

const TokenLogo = ({symbol, width, height}: ITokenLogo) => {
  //silly stopgap
  let chain, mainnetAddress;
  if(symbol === 'ATOM'){
    chain = 'smartchain';
    mainnetAddress = '0x0Eb3a705fc54725037CC9e008bDede697f62F335';
  } else {
    chain = 'ethereum';
    mainnetAddress = mainnet[symbol];
  }
    
  const iconUrl = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${chain}/assets/${mainnetAddress}/logo.png`;
  return (
    <>
      {symbol == 'ATOM' ?
        <Image alt={symbol} src={cosmosLogo} width={width} height={height} />
        : 
        <Image alt={symbol} src={iconUrl} width={width} height={height} />
      }
    </>
  )
};

export default TokenLogo;
