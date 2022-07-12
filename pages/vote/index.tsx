import { ProposalData, ProposalType } from 'api/stake/data'
import PageLoading from 'components/common/Loading/PageLoading'
import { IDataListColumn } from 'components/DataList/DataList'
import React, { useEffect, useState } from 'react'
import ProposalList from './components/ProposalList'
import { useStake } from 'api/stake'
import Layout from 'pages/Layout'
import TotalStaked from 'components/TotalStaked'
import { observer } from 'mobx-react-lite'
import { useStore } from 'api/cosmosStores'
import VoteOverview from './components/VoteOverview'

const Container = () => {
  const { Proposals, fetchProposals } = useStake()
  const [activeProposals, setActiveProposals] = useState<ProposalData[]>([])
  const [passedProposals, setPassedProposals] = useState<ProposalData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { accountStore, chainStore } = useStore()
  const account = accountStore.getAccount(chainStore.current.chainId).bech32Address

  useEffect(() => {
    fetchProposals(account)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  useEffect(() => {
    if (Proposals) {
      setLoading(false)
      setPassedProposals(
        Proposals.filter(
          (proposal) =>
            proposal.status === ProposalType.FAILED ||
            proposal.status === ProposalType.PASSED ||
            proposal.status === ProposalType.REJECTED,
        ),
      )
      setActiveProposals(Proposals.filter((proposal) => proposal.status === ProposalType.VOTING_PERIOD))
    }
  }, [Proposals])

  const voteColumns: IDataListColumn[] = [
    { title: 'PAST PROPOSALS', size: '40%', sortable: true, sortLabel: 'proposal_id' },
    { title: 'STATUS', size: '20%', jusitfy: 'end', sortable: true, sortLabel: 'status' },
    { title: 'YOUR VOTE', size: '15%', jusitfy: 'end', sortable: true, sortLabel: 'voted' },
    { title: '', size: '25%', jusitfy: 'center' },
  ]

  const activeVoteColumns: IDataListColumn[] = [
    { title: 'ACTIVE PROPOSALS', size: '40%' },
    { title: 'TIME LEFT TO VOTE', size: '20%', jusitfy: 'end' },
    { title: 'YOUR VOTE', size: '15%', jusitfy: 'end' },
    { title: '', size: '25%', jusitfy: 'center' },
  ]

  return (
    <Layout title="Vote" subtitle={<TotalStaked />} toggleChain={false}>
      {loading ? (
        <PageLoading />
      ) : (
        <>
          <VoteOverview margin={{bottom: 'large'}} />
          <ProposalList
            columns={voteColumns}
            passedProposals={passedProposals}
            activeProposals={activeProposals}
            activeColumns={activeVoteColumns}
          />
        </>
      )}
    </Layout>
  )
}

export default observer(Container)
