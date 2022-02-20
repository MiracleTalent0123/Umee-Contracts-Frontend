import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfoWithExplorer } from './api/cosmosStores/chain';
import { DenomHelper } from '@keplr-wallet/common';
import { makeIBCMinimalDenom } from './utils/ibc';
import { Int } from '@keplr-wallet/unit';

const ibcDenom = makeIBCMinimalDenom('channel-0', 'uatom');

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
    counterpartyChainId: 'gaia-umeeverse-party-1',
    sourceChannelId: 'channel-0',
    destChannelId: 'channel-0',
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
    rpc: 'https://rpc.biplosion.umeeverse-party-1.network.umee.cc',
    rest: 'https://api.biplosion.umeeverse-party-1.network.umee.cc',
    chainId: 'umeeverse-party-1',
    chainName: 'Umee',
    stakeCurrency: {
      coinDenom: 'UMEE',
      coinMinimalDenom: 'uumee',
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
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
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
    explorerUrlToTx: 'https://explorer-umee.vercel.app/umeetest-beta/tx/{txHash}',
  },
  {
    rpc: 'https://rpc.sphaeralcea.gaia-umeeverse-party-1.network.umee.cc',
    rest: 'https://api.sphaeralcea.gaia-umeeverse-party-1.network.umee.cc',
    chainId: 'gaia-umeeverse-party-1',
    chainName: 'Atom',
    stakeCurrency: {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
      coinGeckoId: 'cosmos',
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
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
      },
    ],
    coinType: 118,
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
    explorerUrlToTx: 'https://explorer-umee.vercel.app/umeetest-beta/tx/{txHash}',
  },
];
