import { BigNumber } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import { Operator } from './data'

export const buildGrants = (grants: any, grantee: string, granter: string) => {
  const { claimGrant, stakeGrant } = parseGrants(grants.grants, grantee, granter)
  let grantValidators: string[] = [],
    maxTokens
  if (stakeGrant) {
    grantValidators = stakeGrant.authorization.allow_list?.address
    maxTokens = stakeGrant.authorization.max_tokens
  }
  return {
    claimGrant: claimGrant,
    stakeGrant: stakeGrant,
    validators: grantValidators || [],
    maxTokens: maxTokens && BigNumber.from(maxTokens.amount),
  }
}

export const parseGrants = (grants: any[], grantee: string, granter: string) => {
  const claimGrant = grants.find((el) => {
    if (
      (!el.grantee || el.grantee === grantee) &&
      (!el.granter || el.granter === granter) &&
      el.authorization['@type'] === '/cosmos.authz.v1beta1.GenericAuthorization' &&
      el.authorization.msg === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'
    ) {
      return Date.parse(el.expiration) > Date.parse(new Date().toString())
    } else {
      return false
    }
  })
  const stakeGrant = grants.find((el) => {
    if (
      (!el.grantee || el.grantee === grantee) &&
      (!el.granter || el.granter === granter) &&
      (el.authorization['@type'] === '/cosmos.staking.v1beta1.StakeAuthorization' ||
        // Handle GenericAuthorization for Ledger
        (el.authorization['@type'] === '/cosmos.authz.v1beta1.GenericAuthorization' &&
          el.authorization.msg === '/cosmos.staking.v1beta1.MsgDelegate'))
    ) {
      return Date.parse(el.expiration) > Date.parse(new Date().toString())
    } else {
      return false
    }
  })
  return {
    claimGrant,
    stakeGrant,
  }
}

export const useGrants = (operators: Operator[] | undefined, address: string, denom: string) => {
  const [grants, setGrants] = useState<any[]>()

  const getGrants = async (operators: Operator[], address: string) => {
    const allGrants: any[] = []

    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i]
      const botAddress = operator.restake
      const operatorAddress = operator.address
      const grantReq = await fetch(
        `https://api.aphrodite.main.network.umee.cc/cosmos/authz/v1beta1/grants?grantee=${botAddress}&granter=${address}`
      )
      const grantRes = await grantReq.json()
      const grants = grantRes.grants
      allGrants.push({ grants, botAddress, operatorAddress })
    }

    setGrants(allGrants)
  }

  const fetchGrants = useCallback(() => {
    if (operators && address && denom) getGrants(operators, address)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operators, address, denom])

  useEffect(() => {
    fetchGrants()
  }, [fetchGrants])

  return { grants, fetchGrants }
}


export const useOperators = (chainName: string) => {
  const [operators, setOperators] = useState<Operator[]>()

  const getOperators = async (chainName: string) => {
    fetch('https://validators.cosmos.directory/')
      .then((res) => res.json())
      .then((res) => {
        const data = Array.isArray(res) ? res : res.validators
        const operators = data.reduce((sum: { [x: string]: { [x: string]: any } }, validator: { chains: any[] }) => {
          validator.chains.forEach((chain: Operator) => {
            sum[chain.name] = sum[chain.name] || []
            if (chain.restake) {
              sum[chain.name].push(chain)
            }
          }, {})

          return sum
        }, {})

        setOperators(operators[chainName.toLocaleLowerCase()])
      })
  }

  const fetchOperators = useCallback(() => {
    if(chainName) getOperators(chainName)
  }, [chainName])

  // useEffect(() => {
  //   fetchOperators();
  // }, [fetchOperators]);

  return { operators, fetchOperators }
}

