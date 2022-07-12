import React, { useEffect, useMemo, useState } from 'react'
import Layout from 'pages/Layout'
import { useStake } from 'api/stake'
import { IDataListColumn } from 'components/DataList/DataList'
import PageLoading from 'components/common/Loading/PageLoading'
import ValidatorList from './components/ValidatorList'
import DelegationList, { ActiveDelegation } from './components/DelegationList'
import { BigNumber } from 'ethers'
import { observer } from 'mobx-react-lite'
import CompoundReward from './components/CompoundReward'
import { useStore } from 'api/cosmosStores'
import { Grant } from 'api/stake/data'
import { buildGrants } from 'api/stake/grants'
import Overview from './components/StakeOverview'

const Container = () => {
  const {
    Validators,
    Delegations,
    Rewards,
    Grants,
    fetchValidators,
    fetchDelegations,
    fetchRewards,
    fetchOperators,
    fetchGrants,
  } = useStake()
  const [delegations, setDelegations] = useState<ActiveDelegation[]>()
  const [grants, setGrants] = useState<Grant>({})
  const { accountStore, chainStore } = useStore()
  const address = accountStore.getAccount('umee-1').bech32Address
  const chain = chainStore.getChain('umee-1')

  const loading = useMemo(() => {
    if (!Validators) return true
  }, [Validators])

  useEffect(() => {
    fetchValidators()
    fetchDelegations()
    fetchRewards()
    fetchOperators()
    fetchGrants()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const rewardsInterval = setInterval(() => {
      fetchRewards()
    }, 15_000)

    const delegationsInterval = setInterval(() => {
      fetchDelegations()
    }, 30_000)

    return () => {
      clearInterval(rewardsInterval)
      clearInterval(delegationsInterval)
    }
  }, [fetchDelegations, fetchRewards])

  const pendingReward = useMemo(() => {
    let reward = BigNumber.from(0)

    if (Rewards) {
      const total = Rewards.total
      if (total && total.length > 0) reward = BigNumber.from(Math.round(Number(total[0].amount)))
    }

    return reward
  }, [Rewards])

  useEffect(() => {
    if (!Grants || !Rewards) return

    const denom = chain.stakeCurrency.coinMinimalDenom
    const grants = Grants.reduce((sum, grants) => {
      const botAddress = grants.botAddress
      const operatorAddress = grants.operatorAddress
      const operatorGrant = buildGrants(grants, botAddress, address)
      const defaultGrant = {
        claimGrant: null,
        stakeGrant: null,
        validators: [],
        grantsValid: false,
        grantsExist: false,
      }
      const grant = operatorGrant || defaultGrant
      const rewardsArr = Rewards.rewards
      let reward = '0'

      if (rewardsArr) {
        const validatorReward = rewardsArr.find((reward) => reward.validator_address === operatorAddress)
        if (validatorReward && validatorReward.reward) {
          const rewardAmount = validatorReward.reward.find((el) => el.denom === denom)
          reward = rewardAmount ? rewardAmount.amount : '0'
        }
      }

      sum[operatorAddress] = {
        ...grant,
        grantsValid: !!(
          grant.stakeGrant &&
          (!grant.validators || grant.validators.includes(operatorAddress)) &&
          (grant.maxTokens === null || grant.maxTokens.gt(BigNumber.from(reward)))
        ),
        grantsExist: !!(grant.claimGrant || grant.stakeGrant),
      }

      return sum
    }, {})

    setGrants(grants)
  }, [Rewards, Grants, address, chain])

  useEffect(() => {
    if (Validators && Delegations) {
      let delegations = Delegations.sort((a, b) => {
        const firstBalance = typeof a.balance === 'string' ? a.balance : a.balance.amount
        const secondBalance = typeof b.balance === 'string' ? b.balance : b.balance.amount
        return Number(secondBalance) - Number(firstBalance)
      })

      setDelegations(
        delegations.map((delegation) => {
          const validator_address = delegation.validator_address
          const validator = Validators.find((validator) => validator.operator_address === validator_address)
          const balance = typeof delegation.balance === 'string' ? delegation.balance : delegation.balance.amount

          const activeDelegation: ActiveDelegation = {
            validator_address: validator_address,
            validator: validator,
            staked_amount: BigNumber.from(balance),
            reward_amount: BigNumber.from(0),
          }

          if (Rewards && Rewards.rewards) {
            const rewards = Rewards.rewards
            const rewardAmount = rewards.find((reward) => reward.validator_address === validator_address)
            if (rewardAmount && rewardAmount.reward)
              activeDelegation.reward_amount = BigNumber.from(Math.round(Number(rewardAmount.reward[0].amount)))
          }

          return activeDelegation
        }),
      )
    }
  }, [Validators, Delegations, Rewards])

  const validatorColumns: IDataListColumn[] = [
    { title: 'ACTIVE VALIDATORS', size: 'flex', sortLabel: 'moniker', sortable: true },
    { title: 'Annual APY', size: 'flex', jusitfy: 'end', sortLabel: '', sortable: true },
    { title: 'Voting Power', size: 'flex', jusitfy: 'end', sortLabel: 'tokens', sortable: true },
    { title: '', size: 'flex', jusitfy: 'center' },
  ]

  const delegationColumns: IDataListColumn[] = [
    { title: 'YOUR STAKED POSITIONS', size: 'flex' },
    { title: 'AMOUNT STAKED', size: 'flex', jusitfy: 'end' },
    { title: 'PENDING REWARD', size: 'flex', jusitfy: 'end' },
    { title: '', size: 'flex', jusitfy: 'center' },
  ]

  return (
    <Layout
      title="Stake"
      toggleChain={false}
      element={delegations && <CompoundReward pendingReward={pendingReward} delegations={delegations} />}
    >
      {loading ? (
        <PageLoading />
      ) : (
        <>
          <Overview margin={{ bottom: 'large' }} pendingReward={pendingReward} currentAPR="34.5" />
          {delegations && <DelegationList allGrants={grants} delegations={delegations} columns={delegationColumns} />}
          {Validators && <ValidatorList activeColumns={validatorColumns} activeValidators={Validators} />}
        </>
      )}
    </Layout>
  )
}

export default observer(Container)
