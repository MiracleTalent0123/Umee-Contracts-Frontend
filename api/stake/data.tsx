import React, { createContext } from 'react'
import { useStore } from 'api/cosmosStores'
import { BigNumber } from 'ethers'
import { observer } from 'mobx-react-lite'
import { useProposals, useTotalBonded } from './proposals'
import { useDelegations, useRewards, useValidators } from './staking'
import { Delegation, Rewards } from '@keplr-wallet/stores/build/query/cosmos/staking/types'
import { useGrants, useOperators } from './grants'

export enum VotedType {
  YES = '1',
  ABSTAIN = '2',
  NO = '3',
  NOWITHVETO = '4',
  NEVER = '5',
}

export enum PassedProposalVotedType {
  YES = 'VOTE_OPTION_YES',
  ABSTAIN = 'VOTE_OPTION_ABSTAIN',
  NO = 'VOTE_OPTION_NO',
  NOWITHVETO = 'VOTE_OPTION_NO_WITH_VETO',
}

export type VotedResult = {
  [key in VotedType]: string
}

export const VoteResultStatus: VotedResult = {
  1: 'Yes',
  2: 'Abstain',
  3: 'No',
  4: 'NoWithVeto',
  5: 'Didn\'t Vote',
}

export const VoteResultColor: VotedResult = {
  1: '#4EFFE5',
  2: '#A0A1BA',
  3: '#DFB2FF',
  4: '#FF0000',
  5: '#A0A1BA',
}

export enum ProposalType {
  DEPOSIT_PERIOD = 1,
  VOTING_PERIOD = 2,
  PASSED = 3,
  REJECTED = 4,
  FAILED = 5,
}

type Proposal = {
  [key in ProposalType]: string
}

export const ProposalDataStatus: Proposal = {
  1: 'Deposit',
  2: 'Voting',
  3: 'Passed',
  4: 'Rejected',
  5: 'Failed',
}

export const ProposalStatusColor: Proposal = {
  1: '',
  2: '',
  3: '#4EFFE5',
  4: '#FF0000',
  5: '#FF0000',
}

export interface TallyResult {
  label: VotedType
  value: string
}

export interface TallyType {
  [key: string]: string
}

export interface ProposalData {
  proposal_id: number
  title: string
  description: string
  status: ProposalType
  final_tally_result: TallyResult[]
  total_vote: BigNumber
  submit_time: string
  deposit_end_time: string
  total_deposit: BigNumber
  voting_start_time: string
  voting_end_time: string
  voted?: VotedType
}

export interface Validator {
  operator_address: string
  tokens: number
  moniker: string
  commission_rates: {
    rate: string
    max_rate: string
    max_change_rate: string
  }
  last_commission_update: string
  description: {
    moniker: string
    identity?: string
    website?: string
    details?: string
  }
  status: number
  img_url?: string
  rank: number
  restake?: {
    address: string
    run_time: string
    minimum_reward: number
  }
}

export interface Operator {
  name: string;
  address: string;
  restake: string;
}

export interface OperatorGrant {
  claimGrant: any;
  stakeGrant: any;
  validators: any;
  maxTokens?: BigNumber;
  grantsValid?: boolean;
  grantsExist?: boolean;
}

export interface Grant {
  [operatorAddress: string]: OperatorGrant
}

export enum BondStatus {
  Unbonded = 'Unbonded',
  Unbonding = 'Unbonding',
  Bonded = 'Bonded',
}

export interface Data {
  Proposals: ProposalData[] | undefined
  fetchProposals: (address: string) => void
  updateProposals: (address: string, id: number, voted: VotedType) => void
  TotalBonded: BigNumber
  Delegations: Delegation[] | undefined
  Validators: Validator[] | undefined
  Rewards: Rewards['result'] | undefined
  Operators: Operator[] | undefined;
  Grants: any[] | undefined;
  fetchValidators: () => void
  fetchRewards: () => void
  fetchDelegations: () => void
  fetchOperators: () => void;
  fetchGrants: () => void;
}

export const StakeContext = createContext<Data | null>(null)

export default observer(({ children }) => {
  const { accountStore, chainStore, queriesStore } = useStore()
  const accountAddress = accountStore.getAccount(chainStore.current.chainId).bech32Address
  const queries = queriesStore.get('umee-1').cosmos
  const chain = chainStore.getChain('umee-1')
  const chainName = chain.chainName
  const coinDenom = chain.stakeCurrency.coinMinimalDenom

  const { totalBonded } = useTotalBonded(queries)
  const { delegations, fetchDelegations } = useDelegations(accountAddress, queries)
  const { validators, getValidators } = useValidators()
  const { proposals, fetchProposals, updateProposals } = useProposals()
  const { rewards, fetchRewards } = useRewards(accountAddress, queries)
  const { operators, fetchOperators } = useOperators(chainName)
  const { grants, fetchGrants } = useGrants(operators, accountAddress, coinDenom)

  const data: Data = {
    Proposals: proposals,
    fetchProposals,
    updateProposals,
    TotalBonded: totalBonded,
    Delegations: delegations,
    Validators: validators,
    Rewards: rewards,
    Operators: operators,
    Grants: grants,
    fetchValidators: () => {
      getValidators()
    },
    fetchRewards: () => {
      fetchRewards()
    },
    fetchDelegations: () => {
      fetchDelegations()
    },
    fetchOperators: () => {
      fetchOperators()
    },
    fetchGrants: () => {
      fetchGrants()
    },
  }

  return <StakeContext.Provider value={data}>{children}</StakeContext.Provider>
})
