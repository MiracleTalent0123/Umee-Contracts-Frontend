import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { ETxnType } from 'lib/types'
import { Box } from 'grommet'
import { TokenItem } from 'components/DataList'
import { MarketsDetail } from 'components/Markets/MarketsDetail'
import BottomSheet from 'components/common/BottomSheet/BottomSheet'
import DepositModal from 'components/Deposits'
import TransactionHeader from './Header'
import BridgeDialog from 'dialogs/Bridge'
import BottomMenus from 'components/common/BottomMenu/BottomMenus'
import BorrowModal from 'components/Borrows'
import { TransferDialog } from 'dialogs/Transfer'
import { Chain, useChain } from 'lib/hooks/chain/context'
import { useUmeeTokenAddress } from 'api/web3/chains'
import { useWeb3 } from 'api/web3'
import { useData } from 'api/data'
import { Chains } from '../../config'


interface ModalContentProps {
  txnType: ETxnType
  tokenAddress: string
  onClose: () => void
  chainMode: Chain
  symbol: string
  transferDirection: ETxnType.withdraw | ETxnType.deposit
}

const ModalContent = ({
  txnType,
  tokenAddress,
  chainMode,
  symbol,
  transferDirection,
  onClose
}: ModalContentProps) => {
  const { chainId } = useWeb3()

  const { ReserveData } = useData()

  const umeeTokenAddr = useUmeeTokenAddress(chainId)

  const tokenAddr = useMemo(
    () => {
      const result: any = { UMEE: umeeTokenAddr }
      ReserveData.forEach(acc => {
        result[acc.symbol] = acc.address
      })
      return result
    },
    [umeeTokenAddr, ReserveData]
  )

  switch (txnType) {
    case ETxnType.markets:
      return <MarketsDetail address={tokenAddress} />

    case ETxnType.deposit:
    case ETxnType.withdraw:
      return <DepositModal address={tokenAddress} onClose={onClose} txnType={txnType} />

    case ETxnType.borrow:
    case ETxnType.repay:
      return <BorrowModal address={tokenAddress} onClose={onClose} txnType={txnType} />

    case ETxnType.transfer:
      if (chainMode === Chain.cosmos && !['UMEE', 'DAI'].includes(symbol)) {
        return (
          <TransferDialog
            isMobileView={true}
            onClose={onClose}
            chainId={Chains[symbol]}
            coinMinimalDenom={tokenAddress}
            direction={transferDirection === ETxnType.withdraw}
          />
        )
      } else {
        return (
          <BridgeDialog
            address={
              (chainMode === Chain.cosmos && ['UMEE', 'DAI'].includes(symbol))
                ? tokenAddr[symbol]
                : tokenAddress
            }
            direction={transferDirection}
            tokenName={symbol}
            onClose={onClose}
          />
        )
      }

    default:
      return null
  }
}

interface TransactionModalProps {
  txnType?: ETxnType
  onClose: () => void
  tokenAddress: string
  symbol: string
}

const transferDirectionMenu = (chain: Chain, symbol: string) => {
  if (
    chain === Chain.cosmos &&
    !['UMEE', 'DAI'].includes(symbol)
  ) {
    return [
      ETxnType.ibcToUmee,
      ETxnType.ibcToCosmos,
    ]
  } else {
    return [
      ETxnType.bridgeToUmee,
      ETxnType.bridgeToEthereum,
    ]
  }
}

const defaultDirection = (chainMode: Chain) => chainMode === Chain.cosmos ? ETxnType.withdraw : ETxnType.deposit

const TransactionModal = ({
  txnType,
  onClose,
  tokenAddress,
  symbol
}: TransactionModalProps) => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const { chainMode } = useChain()

  const [transferDirection, setTransferDirection] = useState<ETxnType.withdraw | ETxnType.deposit>(
    () => defaultDirection(chainMode)
  )

  const handleSwitchDirection = useCallback(
    (txnType: ETxnType) => {
      setMenuOpen(false)
      setTransferDirection(() => {
        if (txnType === ETxnType.bridgeToEthereum || txnType === ETxnType.ibcToCosmos) {
          return ETxnType.deposit
        } else if (txnType === ETxnType.bridgeToUmee || txnType === ETxnType.ibcToUmee) {
          return ETxnType.withdraw
        } else {
          return ETxnType.withdraw
        }
      })
    }, []
  )

  useEffect(() => {
    if (!txnType) {
      setTransferDirection(() => defaultDirection(chainMode))
    }
  }, [txnType, chainMode])

  return (
    <BottomSheet
      onDismiss={onClose}
      open={!!txnType}
      header={
        txnType === ETxnType.markets ? (
          <Box direction="row" justify="between">
            <TokenItem name={symbol} textSize="24px" fontFamily="Moret" />
          </Box>
        ) : (
          <TransactionHeader
            symbol={symbol}
            txnType={txnType}
            openMenu={txnType === ETxnType.transfer ? () => setMenuOpen(true) : undefined}
          />
        )
      }
    >
      {tokenAddress && txnType && (
        <ModalContent
          txnType={txnType}
          tokenAddress={tokenAddress}
          chainMode={chainMode}
          symbol={symbol}
          transferDirection={transferDirection}
          onClose={onClose}
        />
      )}

      {txnType === ETxnType.transfer && (
        <BottomMenus
          open={menuOpen}
          setOpenSheet={setMenuOpen}
          symbol={symbol}
          setSelectedMenu={handleSwitchDirection}
          items={transferDirectionMenu(chainMode, symbol)}
        />
      )}
    </BottomSheet>
  )
}

export default TransactionModal
