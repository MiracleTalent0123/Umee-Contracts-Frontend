import { ChainGetter, QueriesWithCosmos } from '@keplr-wallet/stores';
import { KVStore } from '@keplr-wallet/common';

export class Queries extends QueriesWithCosmos {
  constructor(kvStore: KVStore, chainId: string, chainGetter: ChainGetter) {
	  super(kvStore, chainId, chainGetter);
  }
}
