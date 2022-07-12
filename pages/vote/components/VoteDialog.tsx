import React, { useEffect, useState } from 'react'
import { useStake } from 'api/stake'
import Modal from 'components/common/Modals/Modal'
import { ProposalData, VotedType, VoteResultStatus } from 'api/stake/data'
import { Box, Text } from 'grommet'
import { PrimaryBtn } from 'components/common'
import styled from '@emotion/styled'
import { useStore } from 'api/cosmosStores'
import { displayToast, TToastType } from 'components/common/toasts'
import { WalletStatus } from '@keplr-wallet/stores'
import { observer } from 'mobx-react-lite'
import { TxnConfirm } from 'components/Transactions'
import { ETxnSteps } from 'lib/types'

interface VoteDialogProps {
  proposal_id: string;
  onClose: () => void;
}

interface VoteOption {
  value: VotedType;
}

const RadioBox = styled.div`
  width: 15px;
  height: 15px;
  background: #a0a1ba;
  border: 4px solid #464869;
  border-radius: 50%;

  &.active {
    background: #e0b2ff;
    border: 4px solid #4effe5;
  }
`

const VoteDialog: React.FC<VoteDialogProps> = ({ proposal_id, onClose }) => {
  const { Proposals, updateProposals } = useStake()
  const [proposal, setProposal] = useState<ProposalData>()
  const options: VoteOption[] = [
    { value: VotedType.YES },
    { value: VotedType.NO },
    { value: VotedType.NOWITHVETO },
    { value: VotedType.ABSTAIN },
  ]
  const [selectedOption, setSelectedOption] = useState<VoteOption>()
  const [voteStep, setVoteStep] = useState<ETxnSteps>(ETxnSteps.Input)

  const { accountStore, chainStore } = useStore()
  const account = accountStore.getAccount('umee-1')

  useEffect(() => {
    if (account.walletStatus === WalletStatus.NotInit) account.init()
  }, [account])

  useEffect(() => {
    if (Proposals && proposal_id) {
      const proposal = Proposals.find((proposal) => proposal.proposal_id.toString() === proposal_id)
      if (proposal) {
        setProposal(proposal)
        if (proposal.voted) {
          setSelectedOption(options.find((option) => option.value == proposal.voted))
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Proposals, proposal_id])

  const vote = async () => {
    if (!proposal_id || !selectedOption || !selectedOption || !proposal) return
    setVoteStep(ETxnSteps.Pending)

    try {
      await account.cosmos.sendGovVoteMsg(
        proposal_id,
        VoteResultStatus[selectedOption.value] as any,
        '',
        undefined,
        undefined,
        {
          onBroadcasted: (txHash: Uint8Array) => {
            displayToast('Voting', TToastType.TX_BROADCASTING)
          },
          onFulfill: (tx) => {
            if (!tx.code) {
              displayToast('Vote Successful', TToastType.TX_SUCCESSFUL, {
                customLink: chainStore
                  .getChain(chainStore.current.chainId)
                  .raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
              })
              updateProposals(account.bech32Address, proposal.proposal_id, selectedOption.value)
            }
          },
        }
      )
    } catch (e) {
      console.log(e)
    }

    onClose()
  }

  return (
    <Modal onClose={onClose} className={`proposal-vote-modal ${voteStep === ETxnSteps.Pending ? 'pending' : ''}`}>
      {proposal && (
        <Box
          width={'100%'}
          border={{ size: '1px', color: 'clrSideNavBorder' }}
          round="10px"
          pad={voteStep === ETxnSteps.Pending ? '40px' : '20px'}
          background="clrBackground"
        >
          {voteStep === ETxnSteps.Pending && <TxnConfirm wallet={'Keplr'} />}
          {voteStep !== ETxnSteps.Pending && (
            <>
              <Text color="clrTextAndDataListHeader" size="xsmall">
                YOUR VOTE:
              </Text>
              <Text
                color="clrTextAndDataListHeader"
                size="24px"
                style={{ fontFamily: 'Moret' }}
                margin={{ top: 'xsmall' }}
              >
                #{proposal.proposal_id} {proposal.title}
              </Text>
              <Box border={{ size: '1px', color: 'clrSideNavBorder' }} round="10px" margin={{ top: 'small' }}>
                {options.map((option, index) => (
                  <Box
                    key={index}
                    pad={'20px'}
                    direction="row"
                    align="center"
                    border={index < 3 && { size: '1px', color: 'clrSideNavBorder', side: 'bottom' }}
                    focusIndicator={false}
                    onClick={() => {
                      setSelectedOption(option)
                    }}
                  >
                    <RadioBox className={selectedOption && selectedOption.value === option.value ? 'active' : ''} />
                    <Text color="clrTextAndDataListHeader" size="small" margin={{ left: 'small' }}>
                      {VoteResultStatus[option.value]}
                    </Text>
                  </Box>
                ))}
              </Box>
              <PrimaryBtn
                text="Vote"
                fullWidth
                pad={{ vertical: 'small' }}
                textSize="medium"
                round="large"
                margin={{ top: 'large' }}
                disabled={
                  selectedOption ? selectedOption.value == proposal.voted : !selectedOption
                }
                onClick={() => vote()}
              />
            </>
          )}
        </Box>
      )}
    </Modal>
  )
}

export default observer(VoteDialog)
