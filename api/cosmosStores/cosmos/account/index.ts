import {
  ChainGetter,
  QueriesStore,
  MsgOpt,
  AccountSetBase,
  CosmosMsgOpts,
  HasCosmosQueries,
  AccountWithCosmos,
  QueriesSetBase,
  AccountSetOpts,
  CosmosAccount,
} from '@keplr-wallet/stores';
import { DeepReadonly } from 'utility-types';

export class Account extends AccountSetBase<
	CosmosMsgOpts,
	HasCosmosQueries
> {
	public readonly cosmos: DeepReadonly<CosmosAccount>;

	static readonly defaultMsgOpts: CosmosMsgOpts;

	constructor(
		protected readonly eventListener: {
			addEventListener: (type: string, fn: () => unknown) => void;
			removeEventListener: (type: string, fn: () => unknown) => void;
		},
		protected readonly chainGetter: ChainGetter,
		protected readonly chainId: string,
		protected readonly queriesStore: QueriesStore<QueriesSetBase & HasCosmosQueries>,
		protected readonly opts: AccountSetOpts<CosmosMsgOpts>
	) {
	  super(eventListener, chainGetter, chainId, queriesStore, opts);

	  this.cosmos = new CosmosAccount(
			this as AccountSetBase<CosmosMsgOpts, HasCosmosQueries>,
			chainGetter,
			chainId,
			queriesStore
	  );
	}
}
