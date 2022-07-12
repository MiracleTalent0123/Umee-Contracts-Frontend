import { Image } from 'grommet';
import { mainnet } from 'lib/tokenaddresses';
import * as React from 'react';
import cosmosLogo from '../public/images/cosmos-hub-logo.svg';
import TetherLogo from '../public/images/tether-logo.svg';
import UmeeLogo from '../public/images/Logo.svg';
import JunoLogo from '../public/images/juno.svg';
import OsmoLogo from '../public/images/osmosis.svg';
import TerraLogo from '../public/images/terra-wallet.png';
import LunaLogo from '../public/images/luna.png';
import USTLogo from '../public/images/ust.png';

interface ITokenLogo {
  symbol?: string;
  width?: string;
  height?: string;
  src?: string;
}

const TokenLogo = ({ symbol, width, height, src }: ITokenLogo) => {
  let chain, mainnetAddress;
  if (symbol === 'ATOM') {
    chain = 'smartchain';
    mainnetAddress = '0x0Eb3a705fc54725037CC9e008bDede697f62F335';
  } else {
    chain = 'ethereum';
    mainnetAddress = symbol && mainnet[symbol];
  }

  const iconUrl = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${chain}/assets/${mainnetAddress}/logo.png`;
  return (
    <>
      {symbol == 'ATOM' ? (
        <Image alt={symbol} src={cosmosLogo} width={width} height={height} />
      ) : symbol == 'USDT' ? (
        <Image alt={symbol} src={TetherLogo} width={width} height={height} />
      ) : symbol == 'UMEE' ? (
        <Image alt={symbol} src={UmeeLogo} width={width} height={height} />
      ) : symbol == 'OSMO' ? (
        <Image alt={symbol} src={OsmoLogo} width={width} height={height} />
      ) : symbol == 'JUNO' ? (
        <Image alt={symbol} src={JunoLogo} width={width} height={height} />
      ) : symbol == 'TERRA' ? (
        <Image alt={symbol} src={TerraLogo} width={width} height={height} />
      ) : symbol == 'LUNA' ? (
        <Image alt={symbol} src={LunaLogo} width={width} height={height} />
      ) : symbol == 'UST' ? (
        <Image alt={symbol} src={USTLogo} width={width} height={height} />
      ) : (
        <Image alt={symbol} src={src ? src : iconUrl} width={width} height={height} />
      )}
    </>
  );
};

export default TokenLogo;
