import React from 'react'
import { ETxnType } from 'lib/types'
import { Chain, useChain } from 'lib/hooks/chain/context'
import DepositConvexityModal from './Convexity/index'
import DepositReflectionModal from './Reflection/index'

const DepositModal = ({
  address: tokenAddress,
  onClose,
  txnType,
}: {
  address: string
  onClose: () => void
  txnType?: ETxnType
}) => {
  const { chainMode } = useChain()

  return chainMode === Chain.cosmos ? (
    <DepositConvexityModal txnType={txnType} address={tokenAddress} onClose={onClose} />
  ) : (
    <DepositReflectionModal txnType={txnType} address={tokenAddress} onClose={onClose} />
  )
}

export default DepositModal
