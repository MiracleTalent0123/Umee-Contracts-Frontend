import React, { useContext, useMemo } from 'react'
import { useStake } from 'api/stake'
import { BoxProps, ResponsiveContext } from 'grommet'
import Overview from 'components/common/Overview'
import { InfoBarBody } from 'components'
import { VotedType } from 'api/stake/data'
import TotalStaked from 'components/TotalStaked'

interface OverviewProps extends BoxProps {}

const VoteOverview = ({ ...props }: OverviewProps) => {
  const { Proposals } = useStake()
  const size = useContext(ResponsiveContext)
  const pendingProposals = useMemo(() => {
    let num = 0
    if (Proposals) {
      const pending = Proposals.filter((proposal) => proposal.status === 2)
      num = pending.length
    }
    return num
  }, [Proposals])

  const votedProposals = useMemo(() => {
    let num = 0
    if (Proposals) {
      const pending = Proposals.filter((proposal) => proposal.voted !== VotedType.NEVER)
      num = pending.length
    }
    return num
  }, [Proposals])

  return (
    <InfoBarBody
      gap={size === 'small' ? 'large' : 'medium'}
      direction={size === 'medium' || size === 'small' ? 'column' : 'row'}
      {...props}
    >
      <Overview
        pad={{ vertical: 'medium', horizontal: 'medium' }}
        title="Total Staked"
        value={<TotalStaked size='medium1' />}
        flex
      />
      <Overview
        pad={{ vertical: 'medium', horizontal: 'medium' }}
        title="Pending Votes"
        value={pendingProposals.toString()}
        flex
      />
      <Overview
        pad={{ vertical: 'medium', horizontal: 'medium' }}
        title="Voting Record"
        value={`${votedProposals}/${Proposals?.length}`}
        color="clrDanger"
        flex
      />
    </InfoBarBody>
  )
}

export default VoteOverview
