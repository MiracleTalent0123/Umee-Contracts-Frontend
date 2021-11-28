import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfoWithExplorer } from './api/cosmosStores/chain';
import { DenomHelper } from '@keplr-wallet/common';
import { Int } from '@keplr-wallet/unit';

export const HideCreateNewPool: boolean = false;
export const HideLBPPoolFromPage: boolean = false;
export const HidePoolFromPage: {
	[poolId: string]: boolean | undefined;
} = {
  /*
	'16': window.location.hostname.startsWith('app.'),
	 */
};

export const LockupAbledPoolIds: {
	[poolId: string]: boolean | undefined;
} = {
  '1': true,
  '2': true,
  '3': true,
  '4': true,
  '5': true,
  '6': true,
  '7': true,
  '8': true,
  '9': true,
  '10': true,
  '13': true,
  '15': true,
  '461': true,
  '482': true,
  '497': true,
  '498': true,
  '557': true,
  '558': true,
  '548': true,
};

export const PromotedLBPPoolIds: {
	poolId: string;
	name: string;
	baseDenom: string;
	destDenom: string;
}[] = [
  /*
		{
			poolId: '21',
			name: 'Regen Network',
			baseDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-8' }], 'uregen'),
			destDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-0' }], 'uatom'),
		},
		 */
];
export const HideAddLiquidityPoolIds: {
	[poolId: string]: boolean;
} = {
  /*
	'21': window.location.hostname.startsWith('app.'),
	 */
};
export const PreferHeaderShowTokenPricePoolIds: {
	[poolId: string]:
		| {
				baseDenom: string;
		  }
		| undefined;
} = {
  /*
	'21': {
		baseDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-8' }], 'uregen'),
	},
	 */
};
export const ExtraGaugeInPool: {
	[poolId: string]:
		| {
				gaugeId: string;
				denom: string;
				extraRewardAmount?: Int;
		  }
		| {
				gaugeId: string;
				denom: string;
				extraRewardAmount?: Int;
		  }[];
} = {
  '497': [
    {
      gaugeId: '1679',
      denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
    },
    {
      gaugeId: '1680',
      denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
    },
    {
      gaugeId: '1681',
      denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
    },
  ],
  '498': [
    {
      gaugeId: '1682',
      denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
    },
    {
      gaugeId: '1683',
      denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
    },
    {
      gaugeId: '1684',
      denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
    },
  ],
  '548': [
    {
      gaugeId: '1676',
      denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
    },
    {
      gaugeId: '1677',
      denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
    },
    {
      gaugeId: '1678',
      denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
    },
  ],
  '557': [
    {
      gaugeId: '1736',
      denom: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
    },
  ],
  '558': [
    {
      gaugeId: '1737',
      denom: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
    },
  ],
};

export const PoolsPerPage = 10;
export const RewardEpochIdentifier = 'day';

/**
 * Determine the channel info per the chain.
 * Guide users to use the same channel for convenience.
 */
export const IBCAssetInfos: {
	counterpartyChainId: string;
	// Souce channel id based on the Osmosis chain
	sourceChannelId: string;
	// Destination channel id from Osmosis chain
	destChannelId: string;
	coinMinimalDenom: string;
}[] = [
  {
    counterpartyChainId: 'cosmoshub-4',
    sourceChannelId: 'channel-0',
    destChannelId: 'channel-141',
    coinMinimalDenom: 'uatom',
  },
  {
    counterpartyChainId: 'akashnet-2',
    sourceChannelId: 'channel-1',
    destChannelId: 'channel-9',
    coinMinimalDenom: 'uakt',
  },
  {
    counterpartyChainId: 'regen-1',
    sourceChannelId: 'channel-8',
    destChannelId: 'channel-1',
    coinMinimalDenom: 'uregen',
  },
  {
    counterpartyChainId: 'sentinelhub-2',
    sourceChannelId: 'channel-2',
    destChannelId: 'channel-0',
    coinMinimalDenom: 'udvpn',
  },
  {
    counterpartyChainId: 'core-1',
    sourceChannelId: 'channel-4',
    destChannelId: 'channel-6',
    coinMinimalDenom: 'uxprt',
  },
  {
    counterpartyChainId: 'irishub-1',
    sourceChannelId: 'channel-6',
    destChannelId: 'channel-3',
    coinMinimalDenom: 'uiris',
  },
  {
    counterpartyChainId: 'crypto-org-chain-mainnet-1',
    sourceChannelId: 'channel-5',
    destChannelId: 'channel-10',
    coinMinimalDenom: 'basecro',
  },
  {
    counterpartyChainId: 'iov-mainnet-ibc',
    sourceChannelId: 'channel-15',
    destChannelId: 'channel-2',
    coinMinimalDenom: 'uiov',
  },
  {
    counterpartyChainId: 'emoney-3',
    sourceChannelId: 'channel-37',
    destChannelId: 'channel-0',
    coinMinimalDenom: 'ungm',
  },
  {
    counterpartyChainId: 'emoney-3',
    sourceChannelId: 'channel-37',
    destChannelId: 'channel-0',
    coinMinimalDenom: 'eeur',
  },
  {
    counterpartyChainId: 'juno-1',
    sourceChannelId: 'channel-42',
    destChannelId: 'channel-0',
    coinMinimalDenom: 'ujuno',
  },
  {
    counterpartyChainId: 'microtick-1',
    sourceChannelId: 'channel-39',
    destChannelId: 'channel-16',
    coinMinimalDenom: 'utick',
  },
  {
    counterpartyChainId: 'likecoin-mainnet-2',
    sourceChannelId: 'channel-53',
    destChannelId: 'channel-3',
    coinMinimalDenom: 'nanolike',
  },
  {
    counterpartyChainId: 'impacthub-3',
    sourceChannelId: 'channel-38',
    destChannelId: 'channel-4',
    coinMinimalDenom: 'uixo',
  },
  {
    counterpartyChainId: 'columbus-5',
    sourceChannelId: 'channel-72',
    destChannelId: 'channel-1',
    coinMinimalDenom: 'uluna',
  },
  {
    counterpartyChainId: 'columbus-5',
    sourceChannelId: 'channel-72',
    destChannelId: 'channel-1',
    coinMinimalDenom: 'uusd',
  },
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
  {
    rpc: 'http://143.244.148.47:26657',
    rest: 'http://143.244.148.47:1317',
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
    features: ['stargate', 'ibc-transfer'],
    explorerUrlToTx: 'https://www.mintscan.io/cosmos/txs/{txHash}',
  },
];
