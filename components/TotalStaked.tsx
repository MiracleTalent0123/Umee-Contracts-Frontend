import { useStake } from 'api/stake'
import React, { useMemo } from 'react'
import { BigNumber } from 'ethers'
import { bigNumberToNumber } from 'lib/number-utils'
import { Text } from 'grommet'
import Spinner from './common/Loading/Spinner'

const TotalStaked = ({ color, size }: { color?: string; size?: string }) => {
  const { Delegations } = useStake()

  let totalStaked = useMemo(() => {
    if (Delegations) {
      let total = 0
      let result = '0'

      if (Delegations.length > 0) {
        Delegations.map((delegation) => {
          total += Number(delegation.balance.amount)
        })
        result = bigNumberToNumber(BigNumber.from(total.toString()), 6).toLocaleString()
      }

      return result
    }
  }, [Delegations])

  return totalStaked ? (
    <Text size={size || 'small'} color={color || 'clrTextAndDataListHeader'}>
      {totalStaked} UMEE
    </Text>
  ) : (
    <Spinner margin={{ left: 'xsmall' }} />
  )
}

export default TotalStaked
