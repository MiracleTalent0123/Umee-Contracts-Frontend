import React, { useMemo, MouseEvent, useState } from 'react'
import Modal from 'components/common/Modals/Modal'
import { Box, DropButton, Text } from 'grommet'
import ValidatorLogo from '../ValidatorLogo'
import { InfoPanelItem } from 'components'
import { InfoPanelItemStyles } from 'components/InfoBar/InfoPanelItem'
import truncate from 'lib/truncate'
import { bigNumberToNumber, bigNumberToString } from 'lib/number-utils'
import { BigNumber } from 'ethers'
import { ActiveDelegation, MenuItem } from '../DelegationList'
import { PrimaryBtn } from 'components/common'
import { DelegateType } from 'lib/types'
import { PrimaryBtnBox } from 'components/common/Buttons/PrimaryButtonBox'
import { OperatorGrant } from 'api/stake/data'
import { getTimePassed, getTimeRemaining } from 'lib/timeRemaining'

const tokenDecimals = BigNumber.from(6)

interface ValidatorDetailProps {
  delegation: ActiveDelegation
  restakePossible?: boolean
  grants?: OperatorGrant
  onClose: () => void
  onMenuClick: (menu: DelegateType, delegation: ActiveDelegation) => void
  claimRewards: (delegation: ActiveDelegation, compounding: boolean) => void
}

const ValidatorDetail = ({
  delegation,
  onClose,
  onMenuClick,
  claimRewards,
  restakePossible,
  grants,
}: ValidatorDetailProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>()

  const commissionRate = (value: string) => {
    return (Number(value) * 100).toFixed(2)
  }

  const blocks = useMemo(() => {
    let blocks = []
    for (let i = 0; i < 100; i++) {
      blocks.push(i)
    }

    return blocks
  }, [])

  return (
    <Modal onClose={onClose} className="validator-modal">
      {delegation.validator && (
        <>
          <Box direction="row" justify="between">
            <ValidatorLogo
              title={delegation.validator.moniker}
              imgUrl={delegation.validator.img_url}
              width="45"
              height="45"
              fontFamily="Moret"
              textSize="24px"
              color="white"
            />
          </Box>
          <Box direction="row" flex gap="small" margin={{ top: 'small' }}>
            <Box width={'60%'}>
              <Box
                border={{ size: '1px', color: 'clrBoxBorder' }}
                round="xsmall"
                background="clrBackground"
                pad={'small'}
              >
                <Box direction="row" justify="between">
                  <Text size="small" color={'clrTextAndDataListHeader'}>
                    UPTIME
                  </Text>
                  <Text size="small" color={'clrTextAndDataListHeader'}>
                    Last 100 Blocks
                  </Text>
                </Box>
                <Box direction="row" justify="center">
                  <Box pad={'medium'} className="block-container">
                    {blocks.map((block, index) => (
                      <Box className="block" key={index} />
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box flex direction="row" margin={{ top: 'small' }} gap="small">
                <Box
                  flex
                  border={{ size: '1px', color: 'clrBoxBorder' }}
                  round="xsmall"
                  background="clrBackground"
                  pad={'small'}
                >
                  <Text margin={{ bottom: 'small' }} size="xsmall" color={'clrTextAndDataListHeader'}>
                    STAKE INFORMATION
                  </Text>
                  <InfoPanelItem
                    title="Staked Amount"
                    textSize="xsmall"
                    justify="between"
                    style={InfoPanelItemStyles.Horizontal}
                    data={[{ value: bigNumberToString(delegation.staked_amount, tokenDecimals), textSize: 'xsmall' }]}
                  />
                  <InfoPanelItem
                    title="Current Rewards"
                    textSize="xsmall"
                    justify="between"
                    style={InfoPanelItemStyles.Horizontal}
                    data={[{ value: bigNumberToString(delegation.reward_amount, tokenDecimals), textSize: 'xsmall' }]}
                  />
                  <DropButton
                    className="stake-manage"
                    dropAlign={{ top: 'bottom', left: 'left' }}
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                    label={
                      <PrimaryBtnBox
                        margin={{ top: 'small' }}
                        pad={'xsmall'}
                        round="large"
                        text="Manage"
                        textSize="small"
                        onClick={() => setOpenMenu(true)}
                      />
                    }
                    dropContent={
                      <Box border={{ color: 'clrButtonBorderGrey', size: '1px' }} background="clrBackground">
                        <MenuItem onClick={() => claimRewards(delegation, false)} title="Claim Rewards" />
                        <MenuItem onClick={() => claimRewards(delegation, true)} title="Compound Rewards" />
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
                              setOpenMenu(false)
                              onMenuClick(DelegateType[key], delegation)
                            }}
                            title={DelegateType[key]}
                          />
                        ))}
                      </Box>
                    }
                  />
                </Box>
                <Box
                  flex
                  border={{ size: '1px', color: 'clrBoxBorder' }}
                  round="xsmall"
                  background="clrBackground"
                  pad={'small'}
                >
                  <Text margin={{ bottom: 'small' }} size="xsmall" color={'clrTextAndDataListHeader'}>
                    COMPOUND OPTIONS
                  </Text>
                  <InfoPanelItem
                    title="Manual APY"
                    textSize="xsmall"
                    justify="between"
                    style={InfoPanelItemStyles.Horizontal}
                    data={[{ value: '20.00%', textSize: 'xsmall' }]}
                  />
                  <InfoPanelItem
                    title="Auto APY"
                    textSize="xsmall"
                    justify="between"
                    style={InfoPanelItemStyles.Horizontal}
                    data={[{ value: '20.00%', textSize: 'xsmall' }]}
                  />
                  <PrimaryBtn
                    margin={{ top: 'small' }}
                    pad={'xsmall'}
                    round="large"
                    text={grants ? (grants.grantsExist ? 'Disable Auto-compound' : 'Auto-compound') : 'Auto-compound'}
                    textSize={grants && grants.grantsExist ? 'xsmall' : 'small'}
                    disabled={!restakePossible}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              border={{ size: '1px', color: 'clrBoxBorder' }}
              round="xsmall"
              background="clrBackground"
              pad={'small'}
              width={'40%'}
            >
              <Text margin={{ bottom: 'small' }} size="small" color={'clrTextAndDataListHeader'}>
                VALIDATOR DETAILS
              </Text>
              <InfoPanelItem
                title="Website"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[{ value: delegation.validator.description.website, textSize: 'xsmall' }]}
              />
              <InfoPanelItem
                title="Address"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[{ value: truncate(delegation.validator.operator_address, 12, 6), textSize: 'xsmall' }]}
              />
              <InfoPanelItem
                title="Total Staked"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[
                  {
                    value: Number(
                      Math.round(bigNumberToNumber(BigNumber.from(delegation.validator.tokens), tokenDecimals)),
                    ).toLocaleString(),
                    textSize: 'xsmall',
                  },
                ]}
              />
              <InfoPanelItem
                title="Voting Participation"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[{ value: '', textSize: 'xsmall' }]}
              />
              <InfoPanelItem
                title="Validator Since"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[{ value: '', textSize: 'xsmall' }]}
              />
              <InfoPanelItem
                title="Commission Rate"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[{ value: `${commissionRate(delegation.validator.commission_rates.rate)}%`, textSize: 'xsmall' }]}
              />
              <InfoPanelItem
                title="Max Commission Rate"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[
                  { value: `${commissionRate(delegation.validator.commission_rates.max_rate)}%`, textSize: 'xsmall' },
                ]}
              />
              <InfoPanelItem
                title="Max Commission Change"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[
                  {
                    value: `${commissionRate(delegation.validator.commission_rates.max_change_rate)}%`,
                    textSize: 'xsmall',
                  },
                ]}
              />
              <InfoPanelItem
                title="Last Commission Change"
                textSize="xsmall"
                justify="between"
                style={InfoPanelItemStyles.Horizontal}
                data={[{ value: getTimePassed(delegation.validator.last_commission_update), textSize: 'xsmall' }]}
              />
            </Box>
          </Box>
        </>
      )}
    </Modal>
  )
}

export default ValidatorDetail
