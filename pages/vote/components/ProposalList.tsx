import React, { useState } from 'react'
import { ProposalData, ProposalDataStatus, VoteResultStatus } from 'api/stake/data'
import { DataList, DataListRow, PrimaryText, TextItem } from 'components/DataList'
import { IDataListColumn } from 'components/DataList/DataList'
import { SecondaryBtn } from 'components/common'
import ProposalDetail from './ProposalDetail'
import { Box } from 'grommet'
import VoteDialog from './VoteDialog'
import Spinner from 'components/common/Loading/Spinner'
import { VoteResultColor } from 'api/stake/data'
import { getTimeRemaining } from 'lib/timeRemaining'
import ShowMore from 'components/ShowMore'
import { usePaginate } from 'lib/hooks/usePaginate'
import { useSort } from 'lib/hooks/sort/useSort'
import { SortOption } from 'lib/hooks/sort/types'

interface ProposalListProps {
  passedProposals: ProposalData[];
  columns: IDataListColumn[];
  activeProposals: ProposalData[];
  activeColumns: IDataListColumn[];
}

const ProposalList: React.FC<ProposalListProps> = ({ passedProposals, columns, activeProposals, activeColumns }) => {
  const columnSizes = columns.map((col) => col.size)
  const [selectedProposal, setSelectedProposal] = useState<string>('')
  const [selectedVotingProposal, setSelectedVotingProposal] = useState<string>('')
  const { isShowMore, filter, goToNext } = usePaginate(passedProposals.length, 5, 1)
  const { sortedData, sortDirection, sortKey, handleSortChange } = useSort({
    data: passedProposals,
    sortOptions: columns,
  })

  return (
    <>
      {selectedProposal && (
        <ProposalDetail
          onVote={(id) => {
            setSelectedProposal('')
            setSelectedVotingProposal(id)
          }}
          proposal_id={selectedProposal}
          onClose={() => setSelectedProposal('')}
        />
      )}
      {selectedVotingProposal && (
        <VoteDialog proposal_id={selectedVotingProposal} onClose={() => setSelectedVotingProposal('')} />
      )}
      {activeProposals.length > 0 && (
        <Box margin={{ bottom: 'medium' }}>
          <DataList columns={activeColumns}>
            {activeProposals.map((proposal) => (
              <DataListRow
                key={`row-${proposal.proposal_id}`}
                columnSizes={columnSizes}
                select={() => setSelectedProposal(proposal.proposal_id.toString())}
              >
                <TextItem justify="start">
                  <PrimaryText color="clrTextAndDataListHeader" size="small">
                    {`#${proposal.proposal_id} ${proposal.title}`}
                  </PrimaryText>
                </TextItem>
                <TextItem justify="end">
                  <PrimaryText color="clrTextAndDataListHeader" size="small">
                    {getTimeRemaining(proposal.voting_end_time)}
                  </PrimaryText>
                </TextItem>
                <TextItem justify="end">
                  {proposal.voted ? (
                    <PrimaryText color={VoteResultColor[proposal.voted]} size="small">
                      {VoteResultStatus[proposal.voted]}
                    </PrimaryText>
                  ) : (
                    <Spinner />
                  )}
                </TextItem>
                <TextItem justify="center">
                  <SecondaryBtn
                    text="VOTE"
                    round="large"
                    pad={{ vertical: 'small', horizontal: 'small' }}
                    textSize="xsmall"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedVotingProposal(proposal.proposal_id.toString())
                    }}
                    disabled={!proposal.voted}
                  />
                </TextItem>
              </DataListRow>
            ))}
          </DataList>
        </Box>
      )}
      {sortedData.length > 0 && (
        <>
          <Box margin={{ top: activeProposals.length > 0 ? 'medium' : '' }}>
            <DataList<ProposalData>
              columns={columns}
              sortKey={sortKey}
              sortDirection={sortDirection}
              handleSortChange={(sort: string) => handleSortChange({ sortLabel: sort } as SortOption<ProposalData>)}
            >
              {sortedData.map(
                (proposal, index) =>
                  filter(index) && (
                    <DataListRow
                      key={`row-${proposal.proposal_id}`}
                      columnSizes={columnSizes}
                      select={() => setSelectedProposal(proposal.proposal_id.toString())}
                    >
                      <TextItem justify="start">
                        <PrimaryText color="clrTextAndDataListHeader" size="small">
                          {`#${proposal.proposal_id} ${proposal.title}`}
                        </PrimaryText>
                      </TextItem>
                      <TextItem justify="end">
                        <PrimaryText color="clrTextAndDataListHeader" size="small">
                          {ProposalDataStatus[proposal.status]}
                        </PrimaryText>
                      </TextItem>
                      <TextItem justify="end">
                        {proposal.voted ? (
                          <PrimaryText color={VoteResultColor[proposal.voted]} size="small">
                            {VoteResultStatus[proposal.voted]}
                          </PrimaryText>
                        ) : (
                          <Spinner />
                        )}
                      </TextItem>
                      <TextItem justify="center">
                        <SecondaryBtn
                          text="DETAILS"
                          round="large"
                          pad={{ vertical: 'small', horizontal: 'small' }}
                          textSize="xsmall"
                          onClick={() => setSelectedProposal(proposal.proposal_id.toString())}
                        />
                      </TextItem>
                    </DataListRow>
                  )
              )}
            </DataList>
          </Box>
          <Box margin={{ top: 'large' }}>
            <ShowMore isShow={isShowMore} onClick={() => goToNext()} />
          </Box>
        </>
      )}
    </>
  )
}

export default ProposalList
