import { useCallback, useState } from 'react'
import { Validator } from './data'
import { CosmosQueries } from '@keplr-wallet/stores'

export const useDelegations = (address: string, queries: CosmosQueries) => {
  const data = queries.queryDelegations.getQueryBech32Address(address).delegations

  const delegations = data.filter((item) => {
    const balance = typeof item.balance === 'string' ? item.balance : item.balance.amount
    return Number(balance) > 0
  })

  return {
    delegations,
    fetchDelegations: useCallback(() => {
      if (address) queries.queryDelegations.getQueryBech32Address(address).fetch()
    }, [address, queries.queryDelegations]),
  }
}

export const useRewards = (address: string, queries: CosmosQueries) => {
  const res = queries.queryRewards.getQueryBech32Address(address).response

  return {
    rewards: res?.data.result,
    fetchRewards: useCallback(() => {
      if (address) queries.queryRewards.getQueryBech32Address(address).fetch()
    }, [address, queries.queryRewards]),
  }
}

export const useValidators = () => {
  const [validators, setValidators] = useState<Validator[]>()

  const getValidators = useCallback(async () => {
    const validatorsRes = await fetch('https://validators.cosmos.directory/chains/umee')
    const validatorsArr = await validatorsRes.json()
    let validators = []
    if (validatorsArr) validators = validatorsArr.validators

    const validatorArr = []

    for (let i = 0; i < validators.length; i++) {
      const validator = validators[i]

      const validatorData: Validator = {
        operator_address: validator.address,
        tokens: Number(validator.tokens),
        moniker: validator.description.moniker,
        commission_rates: validator.commission.commission_rates,
        last_commission_update: validator.commission.update_time,
        description: validator.description,
        status: validator.status,
        rank: validator.rank,
        img_url: validator.mintscan_image || validator.keybase_image || '',
      }

      if (validator.restake) validatorData.restake = validator.restake

      if (validator.status === 'BOND_STATUS_BONDED') validatorArr.push(validatorData)
    }

    setValidators(
      validatorArr.sort((a, b) => {
        return a.rank - b.rank
      })
    )
  }, [])

  // useEffect(() => {
  //   getValidators();
  // }, []);

  return {
    validators,
    getValidators: () => {
      getValidators()
    },
  }
}
