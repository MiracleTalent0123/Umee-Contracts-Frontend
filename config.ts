import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfoWithExplorer } from './api/cosmosStores/chain';
import { DenomHelper } from '@keplr-wallet/common';
import { makeIBCMinimalDenom } from './utils/ibc';
import { Int } from '@keplr-wallet/unit';

const ibcDenom = makeIBCMinimalDenom('channel-1', 'uatom');

/**
 * Determine the channel info per the chain.
 * Guide users to use the same channel for convenience.
 */
export const IBCAssetInfos: {
  counterpartyChainId: string;
  // Souce channel id based on the Umee chain
  sourceChannelId: string;
  // Destination channel id from Umee chain
  destChannelId: string;
  counterpartyCoinMinimalDenom: string;
  coinMinimalDenom: string;
}[] = [
  {
    counterpartyChainId: 'cosmoshub-4',
    sourceChannelId: 'channel-1',
    destChannelId: 'channel-288',
    counterpartyCoinMinimalDenom: 'uatom',
    coinMinimalDenom: ibcDenom,
  },
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
  {
    rpc: 'https://rpc.aphrodite.main.network.umee.cc',
    rest: 'https://api.aphrodite.main.network.umee.cc',
    chainId: 'umee-1',
    chainName: 'Umee',
    stakeCurrency: {
      coinDenom: 'UMEE',
      coinMinimalDenom: 'uumee',
      coinDecimals: 6,
    },
    bip44: { coinType: 118 },
    bech32Config: Bech32Address.defaultBech32Config('umee'),
    currencies: [
      {
        coinDenom: 'UMEE',
        coinMinimalDenom: 'uumee',
        coinDecimals: 6,
      },
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: ibcDenom,
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'UMEE',
        coinMinimalDenom: 'uumee',
        coinDecimals: 6,
      },
    ],
    coinType: 118,
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    explorerUrlToTx: 'https://www.mintscan.io/umee/txs/{txHash}',
  },
  {
    rpc: 'https://rpc-cosmoshub.blockapsis.com',
    rest: 'https://lcd-cosmoshub.blockapsis.com',
    chainId: 'cosmoshub-4',
    chainName: 'Cosmos Hub',
    stakeCurrency: {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
      coinGeckoId: 'cosmos',
      coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config('cosmos'),
    currencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
        coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
        coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
      },
    ],
    coinType: 118,
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    explorerUrlToTx: 'https://www.mintscan.io/cosmos/txs/{txHash}',
  },
];
