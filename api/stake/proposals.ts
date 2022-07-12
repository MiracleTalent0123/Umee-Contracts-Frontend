import { useCallback, useEffect, useState } from 'react'
import { BigNumber } from 'ethers'
import { ProposalData, VotedType, TallyType, ProposalType, PassedProposalVotedType } from './data'
import { CosmosQueries } from '@keplr-wallet/stores'

export const useTotalBonded = (queries: CosmosQueries) => {
  const res = queries.queryPool.response

  const fetchPool = (queries: CosmosQueries) => {
    queries.queryPool.fetch()
  }

  useEffect(() => {
    const timer = setInterval(() => {
      fetchPool(queries)
    }, 60000)

    return () => clearInterval(timer)
  }, [queries])

  return { totalBonded: BigNumber.from(res?.data.result.bonded_tokens || '0') }
}

export const useProposals = () => {
  const [proposals, setProposals] = useState<ProposalData[]>()
  // const api = 'https://api.poke.umeemania-1.network.umee.cc';
  const api = 'https://api.aphrodite.main.network.umee.cc'

  const fetchProposals = useCallback(async (address: string) => {
    const result = await fetch(`${api}/gov/proposals?limit=1000`)
    const res = await result.json()
    let proposalsArr: ProposalData[] = []

    if (res.result) {
      const proposals = res.result

      for (let i = 0; i < proposals.length; i++) {
        const proposal = proposals[i]
        let voteResult: TallyType = {}

        if (proposal.status === 2) {
          const res = await fetch(`${api}/gov/proposals/${proposal.id}/tally`)
          const result = await res.json()
          voteResult = result.result
        } else if (proposal.status !== 1 || proposal.status !== 2) {
          voteResult = proposal.final_tally_result
        }

        let totalVote = 0

        Object.keys(voteResult).forEach((key) => {
          totalVote += Number(voteResult[key])
        })

        if (totalVote > 0)
          Object.keys(voteResult).forEach((key) => {
            voteResult[key] = ((Number(voteResult[key]) / totalVote) * 100).toFixed(2)
          })

        const content = proposal.content.title ? proposal.content : proposal.content.value

        const proposalInfo: ProposalData = {
          proposal_id: Number(proposal.id),
          title: content.title,
          description: content.description,
          status: proposal.status,
          final_tally_result: [
            { label: VotedType.YES, value: voteResult['yes'] },
            { label: VotedType.ABSTAIN, value: voteResult['abstain'] },
            { label: VotedType.NO, value: voteResult['no'] },
            { label: VotedType.NOWITHVETO, value: voteResult['no_with_veto'] },
          ],
          submit_time: proposal.submit_time,
          deposit_end_time: proposal.deposit_end_time,
          total_deposit: BigNumber.from(proposal.total_deposit.length > 0 ? proposal.total_deposit[0]['amount'] : '0'),
          voting_start_time: proposal.voting_start_time,
          voting_end_time: proposal.voting_end_time,
          total_vote: BigNumber.from(totalVote),
        }

        if (address) {
          const votedRes = await fetch(`${api}/gov/proposals/${proposal.id}/votes/${address}`)
          const result = await votedRes.json()
          if (!result.error) {
            if (proposalInfo.status === ProposalType.VOTING_PERIOD) {
              proposalInfo.voted = result.result.option
            } else {
              const voted_options = result.result.options
              const voted_option = voted_options[0]['option']
              let option = ''
              switch (voted_option) {
                case PassedProposalVotedType.YES:
                  option = VotedType.YES
                  break
                case PassedProposalVotedType.NO:
                  option = VotedType.NO
                  break
                case PassedProposalVotedType.NOWITHVETO:
                  option = VotedType.NOWITHVETO
                  break
                case PassedProposalVotedType.ABSTAIN:
                  option = VotedType.ABSTAIN
              }
              proposalInfo.voted = option as VotedType
            }
          } else proposalInfo.voted = VotedType.NEVER
        }

        proposalsArr.push(proposalInfo)
      }

      proposalsArr = proposalsArr.sort((a, b) => {
        return Number(b.proposal_id) - Number(a.proposal_id)
      })

      setProposals(proposalsArr)
    }
  }, [])

  const updateProposals = useCallback(
    async (address: string, id: number, voted: VotedType) => {
      if (address && id) {
        const res = await fetch(`${api}/gov/proposals/${id}/tally`)
        const result = await res.json()
        const voteResult: TallyType = result.result
        let totalVote = 0

        Object.keys(voteResult).forEach((key) => {
          totalVote += Number(voteResult[key])
        })

        if (totalVote > 0)
          Object.keys(voteResult).forEach((key) => {
            voteResult[key] = ((Number(voteResult[key]) / totalVote) * 100).toFixed(2)
          })

        if (proposals) {
          let proposalsArr = [...proposals]
          proposalsArr.forEach((proposal) => {
            if (proposal.proposal_id === id) {
              proposal.total_vote = BigNumber.from(totalVote)
              proposal.voted = voted
              proposal.final_tally_result = [
                { label: VotedType.YES, value: voteResult['yes'] },
                { label: VotedType.ABSTAIN, value: voteResult['abstain'] },
                { label: VotedType.NO, value: voteResult['no'] },
                { label: VotedType.NOWITHVETO, value: voteResult['no_with_veto'] },
              ]
            }
          })

          setProposals(proposalsArr)
        }
      }
    },
    [proposals],
  )

  return {
    proposals,
    fetchProposals,
    updateProposals,
  }
}
