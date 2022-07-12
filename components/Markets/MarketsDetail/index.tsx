import React from 'react'
import { Chain, useChain } from 'lib/hooks/chain/context'
import MarketsReflectionDetail from './Reflection'
import MarketsConvexityDetail from './Convexity'

export const MarketsDetail = ({ address }: { address: string }) => {
  const { chainMode } = useChain()

  return chainMode === Chain.cosmos ? (
    <MarketsConvexityDetail address={address} />
  ) : (
    <MarketsReflectionDetail address={address} />
  )
}
