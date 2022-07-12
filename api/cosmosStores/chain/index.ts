import { computed, makeObservable, observable } from 'mobx';

import { ChainStore as BaseChainStore } from '@keplr-wallet/stores';

import { ChainInfo } from '@keplr-wallet/types';

export interface ChainInfoWithExplorer extends ChainInfo {
	// Formed as "https://explorer.com/{txHash}"
	explorerUrlToTx: string;
	explorerUrlToAccount: string;
}

export class ChainStore extends BaseChainStore<ChainInfoWithExplorer> {
	@observable
	protected readonly cosmosChainId: string;

	constructor(embedChainInfos: ChainInfoWithExplorer[], cosmosChainId: string) {
	  super(embedChainInfos);

	  this.cosmosChainId = cosmosChainId;

	  makeObservable(this);
	}

	@computed
	get current(): ChainInfoWithExplorer {
	  if (this.hasChain(this.cosmosChainId)) {
	    return this.getChain(this.cosmosChainId).raw;
	  }

	  throw new Error('cosmos chain not set');
	}

	@computed
	get currentFluent() {
	  if (this.hasChain(this.cosmosChainId)) {
	    return this.getChain(this.cosmosChainId);
	  }

	  throw new Error('cosmos chain not set');
	}
}
