import React, { useContext, useEffect, useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { Box, ResponsiveContext, Text } from 'grommet'
import { bigNumberToNumber, bigNumberToString } from 'lib/number-utils'
import { useStake } from 'api/stake'
import { ProposalData, ProposalDataStatus, ProposalType, VotedType, VoteResultStatus } from 'api/stake/data'
import { InfoBarBody } from 'components'
import { PrimaryBtn } from 'components/common'
import Modal from 'components/common/Modals/Modal'
import { ProposalStatusColor, VoteResultColor } from 'api/stake/data'
import VoteChart from './VoteChart'
import VotePanel from './VotePanel'

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

interface ProposalDetailProps {
  onClose: () => void;
  proposal_id: string;
  onVote: (id: string) => void;
}

const ProposalDetail: React.FC<ProposalDetailProps> = ({ onClose, proposal_id, onVote }) => {
  const size = useContext(ResponsiveContext)
  const [proposal, setProposal] = useState<ProposalData>()
  const { Proposals, TotalBonded } = useStake()

  useEffect(() => {
    if (Proposals) {
      Proposals.map((proposal) => {
        if (proposal.proposal_id.toString() === proposal_id) setProposal(proposal)
      })
    }
  }, [Proposals, proposal_id])

  const turnout = useMemo(() => {
    let value = '0'
    if (proposal && proposal.total_vote) {
      if (!TotalBonded.isZero()) {
        const numTotalVote = bigNumberToNumber(proposal.total_vote, 6)
        const numTotalBonded = bigNumberToNumber(TotalBonded, 6)
        value = ((numTotalVote / numTotalBonded) * 100).toFixed(2)
      }
    }
    return value
  }, [TotalBonded, proposal])

  const urlify = (text: string) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g
    let str = text.replace(urlRegex, function (url) {
      return '<a target="_blank" href="' + url + '">' + url + '</a>'
    })

    return str.replace(/\n/g, '<br />')
  }

  return proposal ? (
    <Modal onClose={onClose} className="proposal-detail-modal">
      <Box>
        <Box
          width={'100%'}
          border={{ size: '1px', color: 'clrSideNavBorder' }}
          round="5px"
          pad={size === 'small' ? 'medium' : 'small'}
          background="clrBackground"
        >
          <Box
            direction={size === 'medium' || size === 'small' ? 'column' : 'row'}
            justify="between"
            align={size === 'medium' || size === 'small' ? 'start' : 'center'}
          >
            <Text
              color="clrTextAndDataListHeader"
              size="24px"
              margin={{ right: 'large' }}
              style={{ fontFamily: 'Moret' }}
            >
              #{proposal.proposal_id} {proposal.title}
            </Text>
            <Box>
              {proposal.status === ProposalType.VOTING_PERIOD ? (
                <PrimaryBtn
                  text="Vote"
                  pad={{ vertical: 'xsmall', horizontal: 'medium' }}
                  textSize="small"
                  round="large"
                  onClick={() => onVote(proposal.proposal_id.toString())}
                  disabled={!proposal.voted}
                />
              ) : (
                <Text
                  color="clrTextAndDataListHeader"
                  size="xsmall"
                  style={{ color: ProposalStatusColor[proposal.status] }}
                >
                  {proposal.voted && proposal.voted !== VotedType.NEVER ? 'Voted' : ProposalDataStatus[proposal.status]}
                </Text>
              )}
            </Box>
          </Box>
          <Text color="clrTextAndDataListHeader" margin={{ top: 'xsmall' }} size="xsmall">
            Submitted {dayjs(proposal.submit_time).format('MM/DD/YYYY h:mm:ss A')}
          </Text>
          <Box margin={{ top: 'medium' }}>
            <Text
              color="clrTextAndDataListHeader"
              size="small"
              dangerouslySetInnerHTML={{ __html: urlify(proposal.description) }}
            />
          </Box>
        </Box>
        <Box
          width={'100%'}
          border={{ size: '1px', color: 'clrSideNavBorder' }}
          round="5px"
          pad={size === 'small' ? 'medium' : 'small'}
          background="clrBackground"
          margin={{ top: size === 'small' || size === 'medium' ? 'medium' : 'small' }}
        >
          <Text color="clrTextAndDataListHeader" size="xsmall">
            VOTING
          </Text>
          <Box
            margin={{ top: 'medium' }}
            direction={size === 'small' || size === 'medium' ? 'column' : 'row'}
            flex
            wrap
          >
            <Box width={size === 'medium' || size === 'small' ? '100%' : '20%'}>
              <Text color="clrTextAndDataListHeader" size="xsmall">
                Total Votes
              </Text>
              <Text color="clrTextAndDataListHeader" size="small" margin={{ top: 'xsmall' }}>
                {bigNumberToNumber(proposal.total_vote, 6).toLocaleString()} ({turnout}%)
              </Text>
            </Box>
            <InfoBarBody
              gap={'medium'}
              margin={{ top: size === 'medium' || size === 'small' ? 'medium' : '' }}
              direction={size === 'medium' || size === 'small' ? 'column' : 'row'}
            >
              {proposal.final_tally_result.map((result, index) => (
                <VotePanel
                  key={index}
                  color={VoteResultColor[result.label]}
                  title={VoteResultStatus[result.label]}
                  value={result.value}
                />
              ))}
            </InfoBarBody>
          </Box>
          <Box margin={{ top: 'medium' }}>
            <VoteChart
              turnout={turnout}
              tally={proposal.final_tally_result}
              totalVoted={bigNumberToString(proposal.total_vote, 6)}
              totalBonded={bigNumberToString(TotalBonded, 6)}
            />
          </Box>
          <Box margin={{ top: 'medium' }}>
            <Text size="xsmall" color="clrTextAndDataListHeader">
              Voting End {dayjs(proposal.voting_end_time).format('MM/DD/YYYY h:mm:ss A')}
            </Text>
          </Box>
        </Box>
      </Box>
    </Modal>
  ) : null
}

export default ProposalDetail
