import React, { useMemo, useState, MouseEvent } from 'react'
import { Grant, OperatorGrant, Validator } from 'api/stake/data'
import DataList, { IDataListColumn } from 'components/DataList/DataList'
import { BigNumber } from 'ethers'
import { DataListRow, PrimaryText, TextItem } from 'components'
import ValidatorLogo from './ValidatorLogo'
import { bigNumberToNumber, truncateAfterDecimals } from 'lib/number-utils'
import { Box, BoxProps, DropButton, GridSizeType, Text } from 'grommet'
import { useTheme } from 'lib/hooks/theme/context'
import { SecondaryBtnBox } from 'components/common/Buttons/SecondaryButtonBox'
import { DelegateType } from 'lib/types'
import Delegate from './Modals/Delegate'
import { useFakeFeeConfig } from 'lib/hooks'
import { useStore } from 'api/cosmosStores'
import { displayToast, TToastType } from 'components/common/toasts'
import { useStake } from 'api/stake'
import UnDelegate from './Modals/Undelegate'
import ReDelegate from './Modals/Redelegate'
import ValidatorDetail from './Modals/Detail'

export interface ActiveDelegation {
  validator_address: string
  staked_amount: BigNumber
  reward_amount: BigNumber
  validator?: Validator
}

interface DelegationListProps {
  delegations: ActiveDelegation[]
  columns: IDataListColumn[]
  allGrants: Grant
}

const DelegationList = ({ delegations, columns, allGrants }: DelegationListProps) => {
  const columnSizes = columns.map((col) => col.size)
  const [open, setOpen] = useState<string>('')
  const [openModal, setOpenModal] = useState<DelegateType>()
  const [openValidatorModal, setOpenValidatorModal] = useState<boolean>()
  const [selectedValidator, setSelectedValidator] = useState<ActiveDelegation>()
  const [restakePossible, setRestakePossible] = useState<boolean>()
  const [grants, setGrants] = useState<OperatorGrant>()
  const { accountStore, chainStore } = useStore()
  const { Rewards, Operators } = useStake()

  const account = accountStore.getAccount('umee-1')
  const claimFeeConfig = useFakeFeeConfig(chainStore, 'umee-1', account.msgOpts.withdrawRewards.gas)
  const compoundFeeConfig = useFakeFeeConfig(chainStore, 'umee-1', account.msgOpts.delegate.gas)

  const totalReward = useMemo(() => {
    if (Rewards) {
      const total = Rewards.total
      if (total && total.length > 0) return Number(total[0].amount)
    }
  }, [Rewards])

  const onMenuClick = (menu: DelegateType, delegation: ActiveDelegation) => {
    setOpen('')
    setOpenModal(menu)
    setSelectedValidator(delegation)
  }

  const claimRewards = async (delegation: ActiveDelegation, compounding: boolean) => {
    setOpen('')
    if (!totalReward) return
    const reward = delegation.reward_amount.toNumber()
    const validator_address = delegation.validator_address
    const fee = !compounding
      ? Number(claimFeeConfig.fee.toCoin().amount)
      : Number(compoundFeeConfig.fee.toCoin().amount)
    const amount = reward - fee

    if (amount <= 0) {
      displayToast('Reward is too law!', TToastType.TX_FAILED)
      return
    }

    if (!compounding) {
      try {
        await account.cosmos.sendWithdrawDelegationRewardMsgs([validator_address], '', undefined, undefined, {
          onBroadcasted: (txHash: Uint8Array) => {
            displayToast('Claiming Rewards', TToastType.TX_BROADCASTING)
          },
          onFulfill: (tx) => {
            if (!tx.code) {
              displayToast('Claim Successful', TToastType.TX_SUCCESSFUL, {
                customLink: chainStore
                  .getChain('umee-1')
                  .raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
              })
            }
          },
        })
      } catch (e) {
        console.log(e)
      }
    } else {
      const decimals = Math.pow(10, 6)
      const compoundAmount = truncateAfterDecimals(amount, 6) / decimals

      try {
        await account.cosmos.sendDelegateMsg(compoundAmount.toString(), validator_address, '', undefined, undefined, {
          onBroadcasted: (txHash: Uint8Array) => {
            displayToast('Compounding Rewards', TToastType.TX_BROADCASTING)
          },
          onFulfill: (tx) => {
            if (!tx.code) {
              displayToast('Compound Successful', TToastType.TX_SUCCESSFUL, {
                customLink: chainStore
                  .getChain('umee-1')
                  .raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
              })
            }
          },
        })
      } catch (e) {
        console.log(e)
      }
    }
  }

  const operatorGrants = (operatorAddress: string) => {
    const grants = allGrants && allGrants[operatorAddress]
    return grants
  }

  const autoCompound = (delegation: ActiveDelegation, enable: boolean) => {
    console.log(delegation, enable)
    setSelectedValidator(delegation)
  }

  const closeModal = () => {
    setOpenModal(undefined)
  }

  return (
    <Box margin={{ bottom: delegations.length ? 'large' : '' }}>
      {selectedValidator?.validator && (
        <>
          {openModal === DelegateType.delegate && (
            <Delegate validator={selectedValidator.validator} onClose={closeModal} />
          )}
          {openModal === DelegateType.undelegate && <UnDelegate delegation={selectedValidator} onClose={closeModal} />}
          {openModal === DelegateType.redelegate && <ReDelegate delegation={selectedValidator} onClose={closeModal} />}
          {openValidatorModal && (
            <ValidatorDetail
              onMenuClick={onMenuClick}
              onClose={() => setOpenValidatorModal(false)}
              delegation={selectedValidator}
              claimRewards={claimRewards}
              restakePossible={restakePossible}
              grants={grants}
            />
          )}
        </>
      )}
      {delegations.length > 0 && (
        <DataList columns={columns}>
          {delegations.map((delegation, index) => (
            <Delegation
              key={index}
              delegation={delegation}
              grants={operatorGrants(delegation.validator_address)}
              columnSizes={columnSizes}
              claimRewards={claimRewards}
              onMenuClick={onMenuClick}
              menuOpen={open}
              setOpen={setOpen}
              reStakePossible={!!Operators?.find((operator) => operator.address === delegation.validator_address)}
              autoCompound={autoCompound}
              onRowClick={(delegation) => {
                setSelectedValidator(delegation)
                setOpenValidatorModal(true)
                setGrants(operatorGrants(delegation.validator_address))
                setRestakePossible(!!Operators?.find((operator) => operator.address === delegation.validator_address))
              }}
            />
          ))}
        </DataList>
      )}
    </Box>
  )
}

const Delegation = ({
  delegation,
  grants,
  columnSizes,
  menuOpen,
  setOpen,
  claimRewards,
  onMenuClick,
  onRowClick,
  autoCompound,
  reStakePossible,
}: {
  delegation: ActiveDelegation
  grants: OperatorGrant
  columnSizes: GridSizeType[]
  menuOpen: string
  setOpen: (address: string) => void
  claimRewards: (delegation: ActiveDelegation, compounding: boolean) => void
  onMenuClick: (menu: DelegateType, delegation: ActiveDelegation) => void
  onRowClick: (delegation: ActiveDelegation) => void
  reStakePossible: boolean
  autoCompound: (delegation: ActiveDelegation, autoCompound: boolean) => void
}) => {
  return (
    <DataListRow columnSizes={columnSizes} select={() => onRowClick(delegation)}>
      <TextItem justify="start">
        {delegation.validator && (
          <ValidatorLogo title={delegation.validator.moniker} imgUrl={delegation.validator.img_url} />
        )}
      </TextItem>
      <TextItem justify="end">
        <PrimaryText color="clrTextAndDataListHeader">
          {delegation.staked_amount ? bigNumberToNumber(delegation.staked_amount, 6) : 0} UMEE
        </PrimaryText>
      </TextItem>
      <TextItem justify="end">
        <PrimaryText color="clrTextAndDataListHeader">
          {delegation.reward_amount ? bigNumberToNumber(delegation.reward_amount, 6) : 0} UMEE
        </PrimaryText>
      </TextItem>
      <TextItem justify="center">
        <DropButton
          open={!!(delegation.validator_address === menuOpen)}
          onClose={() => setOpen('')}
          className="stake-manage"
          dropAlign={{ top: 'bottom', right: 'right' }}
          label={
            <SecondaryBtnBox
              pad={{ vertical: 'small', horizontal: 'small' }}
              round="xlarge"
              text="MANAGE"
              textSize="xsmall"
              onClick={(e: MouseEvent) => {
                e.stopPropagation()
                setOpen(delegation.validator_address)
              }}
            />
          }
          dropContent={
            <Box border={{ color: 'clrButtonBorderGrey', size: '1px' }} background="clrBackground">
              <MenuItem
                onClick={(e: MouseEvent) => {
                  e.stopPropagation()
                  claimRewards(delegation, false)
                }}
                title="Claim Rewards"
              />
              <MenuItem
                onClick={(e: MouseEvent) => {
                  e.stopPropagation()
                  claimRewards(delegation, true)
                }}
                title="Compound Rewards"
              />
              {(Object.keys(DelegateType) as Array<keyof typeof DelegateType>).map((key) => (
                <MenuItem
                  key={key}
                  border={
                    key === 'delegate' && {
                      color: 'clrButtonBorderGrey',
                      side: 'top',
                      size: '1px',
                    }
                  }
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation()
                    onMenuClick(DelegateType[key], delegation)
                  }}
                  title={DelegateType[key]}
                />
              ))}
              {reStakePossible && grants && (
                <>
                  <MenuItem
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation()
                      autoCompound(delegation, true)
                    }}
                    border={{
                      color: 'clrButtonBorderGrey',
                      side: 'top',
                      size: '1px',
                    }}
                    title="Auto-compound"
                  />
                  {grants.grantsExist && (
                    <MenuItem
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation()
                        autoCompound(delegation, false)
                      }}
                      title="Disable Auto-compound"
                    />
                  )}
                </>
              )}
            </Box>
          }
        />
      </TextItem>
    </DataListRow>
  )
}

export const MenuItem = ({
  border,
  title,
  onClick,
  menu,
}: {
  border?: BoxProps['border']
  title?: string
  onClick: (e: MouseEvent) => void
  menu?: React.ReactNode
}) => {
  const { themeMode } = useTheme()

  return (
    <Box
      onClick={(e) => onClick(e)}
      pad={{ horizontal: 'small', vertical: 'xsmall' }}
      className={`row-container row-container-${themeMode}`}
      border={border}
    >
      {menu ? (
        menu
      ) : (
        <Text size="small" color={'clrTextAndDataListHeader'}>
          {title}
        </Text>
      )}
    </Box>
  )
}

export default DelegationList
