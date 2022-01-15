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
    counterpartyChainId: 'gaia-internal-testnet-1',
    sourceChannelId: 'channel-0',
    destChannelId: 'channel-0',
    counterpartyCoinMinimalDenom: 'uatom',
    coinMinimalDenom: ibcDenom,
  },
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
  {
    rpc: 'https://internal-umee-rpc.umee.cc',
    rest: 'https://internal-umee-api.umee.cc',
    chainId: 'umee-internal-gravity-1',
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
    explorerUrlToTx: 'https://www.mintscan.io/cosmos/txs/{txHash}',
  },
  {
    rpc: 'https://internal-gaia-rpc.umee.cc',
    rest: 'https://internal-gaia-api.umee.cc',
    chainId: 'gaia-internal-testnet-1',
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
    explorerUrlToTx: 'https://www.mintscan.io/cosmos/txs/{txHash}',
  },
];
