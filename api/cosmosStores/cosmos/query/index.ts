import { ChainGetter, QueriesSetBase, QueriesWithCosmos } from '@keplr-wallet/stores';
import { KVStore } from '@keplr-wallet/common';
import { DeepReadonly } from 'grommet/utils';

export interface HasUmeeQueries {
	umee: UmeeQueries;
}

export class Queries extends QueriesWithCosmos {
  constructor(kvStore: KVStore, chainId: string, chainGetter: ChainGetter) {
	  super(kvStore, chainId, chainGetter);
  }
}
export class QueriesWithCosmosAndUmee extends QueriesWithCosmos implements HasUmeeQueries {
	public readonly umee: DeepReadonly<UmeeQueries>;

	constructor(kvStore: KVStore, chainId: string, chainGetter: ChainGetter) {
		super(kvStore, chainId, chainGetter);

		this.umee = new UmeeQueries(this, kvStore, chainId, chainGetter);
	}
}


export class UmeeQueries {
	constructor(queries: QueriesSetBase, kvStore: KVStore, chainId: string, chainGetter: ChainGetter) {
	}
}
