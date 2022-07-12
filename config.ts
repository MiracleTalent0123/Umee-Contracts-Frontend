import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfoWithExplorer } from './api/cosmosStores/chain';
import { makeIBCMinimalDenom } from './utils/ibc';

// const ibcDenom = 'IBC/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9'.toLowerCase(); // mainnet

interface Chains {
  [key: string]: string;
}

export const Chains: Chains = {
  'UMEE': 'umeemania-1',
  'ATOM': 'gaia-umeemania-1',
  'OSMO': 'osmosis-umeemania-1',
  'JUNO': 'juno-umeemania-1',
};

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
    counterpartyChainId: 'gaia-umeemania-1',
    sourceChannelId: 'channel-0',
    destChannelId: 'channel-0',
    counterpartyCoinMinimalDenom: 'uatom',
    coinMinimalDenom: makeIBCMinimalDenom('channel-0', 'uatom'),
  },
  {
    counterpartyChainId: 'juno-umeemania-1',
    sourceChannelId: 'channel-3',
    destChannelId: 'channel-0',
    counterpartyCoinMinimalDenom: 'ujuno',
    coinMinimalDenom: makeIBCMinimalDenom('channel-3', 'ujuno'),
  },
  {
    counterpartyChainId: 'osmosis-umeemania-1',
    sourceChannelId: 'channel-6',
    destChannelId: 'channel-0',
    counterpartyCoinMinimalDenom: 'uosmo',
    coinMinimalDenom: makeIBCMinimalDenom('channel-6', 'uosmo'),
  },
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
  {
    rpc: 'https://rpc.poke.umeemania-1.network.umee.cc/',
    rest: 'https://api.poke.umeemania-1.network.umee.cc/',
    chainId: 'umeemania-1',
    chainName: 'UMEE Umeemania',
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
        coinGeckoId: 'umee',
      },
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: makeIBCMinimalDenom('channel-0', 'uatom'),
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
      },
      {
        coinDenom: 'DAI',
        coinMinimalDenom: 'gravity0xd787Ec2b6C962f611300175603741Db8438674a0',
        coinDecimals: 18,
        coinGeckoId: 'dai',
      },
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: makeIBCMinimalDenom('channel-3', 'ujuno'),
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
      },
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: makeIBCMinimalDenom('channel-6', 'uosmo'),
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
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
    explorerUrlToTx: 'https://explorer.umeemania-1.network.umee.cc/umee/tx/{txHash}',
    explorerUrlToAccount: 'https://explorer.umeemania-1.network.umee.cc/umee/account',
  },
  {
    rpc: 'https://rpc.flash.gaia-umeemania-1.network.umee.cc',
    rest: 'https://api.flash.gaia-umeemania-1.network.umee.cc',
    chainId: 'gaia-umeemania-1',
    chainName: 'ATOM Umeemania',
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
    explorerUrlToTx: 'https://explorer.umeemania-1.network.umee.cc/cosmos/tx/{txHash}',
    explorerUrlToAccount: 'https://explorer.umeemania-1.network.umee.cc/cosmos/account',
  },
  {
    rpc: 'https://rpc.wall.osmosis-umeemania-1.network.umee.cc',
    rest: 'https://api.wall.osmosis-umeemania-1.network.umee.cc',
    chainId: 'osmosis-umeemania-1',
    chainName: 'OSMO Umeemania',
    stakeCurrency: {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coinGeckoId: 'osmosis',
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config('osmo'),
    currencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
      },
      {
        coinDenom: 'ION',
        coinMinimalDenom: 'uion',
        coinDecimals: 6,
        coinGeckoId: 'ion',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
      },
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
    explorerUrlToTx: 'https://explorer.umeemania-1.network.umee.cc/osmosis/tx/{txHash}',
    explorerUrlToAccount: 'https://explorer.umeemania-1.network.umee.cc/osmosis/account',
  },
  {
    rpc: 'https://rpc.section.juno-umeemania-1.network.umee.cc',
    rest: 'https://api.section.juno-umeemania-1.network.umee.cc',
    chainId: 'juno-umeemania-1',
    chainName: 'JUNO Umeemania',
    stakeCurrency: {
      coinDenom: 'JUNO',
      coinMinimalDenom: 'ujuno',
      coinDecimals: 6,
      coinGeckoId: 'juno-network',
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config('juno'),
    currencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
      },
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
    explorerUrlToTx: 'https://explorer.umeemania-1.network.umee.cc/juno/tx/{txHash}',
    explorerUrlToAccount: 'https://explorer.umeemania-1.network.umee.cc/juno/account',
  },
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
    explorerUrlToAccount: '',
  }
];
