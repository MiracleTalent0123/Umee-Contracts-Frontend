import React from 'react'
import { BaseModal } from 'components/common/Modals/BaseModal'
import DepositModal from '.'

const DepositModalDesktop = ({
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
      <DepositModal address={tokenAddress} onClose={onClose} />
    </BaseModal>
  )
}

export default DepositModalDesktop
