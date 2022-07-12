import React from 'react'
import { ETxnType } from 'lib/types'
import { Chain, useChain } from 'lib/hooks/chain/context'
import BorrowConvexityModal from './Convexity/index'
import BorrowReflectionModal from './Reflection/index'

const BorrowModal = ({
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
    <BorrowConvexityModal txnType={txnType} address={tokenAddress} onClose={onClose} />
  ) : (
    <BorrowReflectionModal txnType={txnType} address={tokenAddress} onClose={onClose} />
  )
}

export default BorrowModal
