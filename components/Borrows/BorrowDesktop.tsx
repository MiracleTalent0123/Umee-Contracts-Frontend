import React from 'react'
import { BaseModal } from 'components/common/Modals/BaseModal'
import BorrowModal from '.'

const BorrowModalDesktop = ({
  address: tokenAddress,
  symbol,
  onClose,
}: {
  address: string
  symbol: string
  onClose: () => void
}) => {
  return (
    <BaseModal symbol={symbol} onClose={onClose}>
      <BorrowModal address={tokenAddress} onClose={onClose} />
    </BaseModal>
  )
}

export default BorrowModalDesktop
