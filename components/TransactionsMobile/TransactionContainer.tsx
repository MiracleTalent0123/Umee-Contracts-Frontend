import React, { useState } from 'react'
import BottomSheet from 'components/common/BottomSheet/BottomSheet'
import TransactionHeader from './Header'
import { Box, Text } from 'grommet'
import { BigNumber, BigNumberish } from 'ethers'
import { ETxnType, TTxnAvailability } from 'lib/types'
import { AvailableToTxnInformationRow } from '../Transactions/AvailableToTxnInformationRow'
import TxnAmountInput from './TxnAmountInput'
import { PrimaryBtn } from 'components/common/Buttons/PrimaryButton'
import { TxnUsdPrice } from 'components/Transactions/TxnUsdPrice'
import { TxnConfirm } from 'components/Transactions/TxnConfirm'
import { Chain, useChain } from 'lib/hooks/chain/context'

interface Props {
  onClose: () => void
  symbol?: string
  txnType: ETxnType
  txnItems?: ETxnType[]
  children: React.ReactNode
  withdrawModal?: boolean
  userBalance?: BigNumber
  availableAmount: BigNumber
  tokenDecimals: BigNumberish
  bridge?: boolean
  txnAmount: string
  setTxnAmount(amount: string): void
  txnAvailability: TTxnAvailability
  setIsPreview: (isPreview: boolean) => void
  isPreview: boolean
  handleContinue: (e: React.MouseEvent) => void
  isPending?: boolean
  isFinal?: boolean
  disableSubmitButton?: boolean
}

const TransactionContainer = ({
  onClose,
  symbol,
  txnType,
  txnItems,
  withdrawModal,
  userBalance,
  availableAmount,
  tokenDecimals,
  bridge,
  txnAmount,
  txnAvailability,
  setTxnAmount,
  setIsPreview,
  isPreview,
  children,
  handleContinue,
  isPending,
  isFinal,
  disableSubmitButton
}: Props) => {
  const { chainMode } = useChain()

  return (
    <Box pad={'large'}>
      <AvailableToTxnInformationRow
        txnType={txnType}
        withdrawModal={withdrawModal}
        symbol={symbol || ''}
        availableAmount={availableAmount}
        tokenDecimals={tokenDecimals}
        bridge={bridge}
      />
      <TxnAmountInput
        setIsPreview={() => setIsPreview(true)}
        txnAmount={txnAmount}
        txnAvailability={txnAvailability}
        setTxnAmount={setTxnAmount}
      />
      <BottomSheet
        open={isPreview}
        onDismiss={() => setIsPreview(false)}
        header={
          <TransactionHeader
            setIsPreview={() => setIsPreview(false)}
            isPreview={isPreview}
            symbol={symbol}
            txnType={txnType}
          />
        }
      >
        <Box pad={{ vertical: 'xlarge', horizontal: 'large' }} border={{ side: 'bottom', color: 'clrBorderGrey' }}>
          <Box style={{ overflowX: 'auto', textAlign: 'center', display: 'block' }} align="end">
            <Text color="clrTextAndDataListHeader" size="large">
              {txnAmount}
            </Text>
            <Text
              color="clrTextAndDataListHeader"
              size="small"
              margin={{ left: 'xsmall' }}
              style={{ paddingBottom: '7px' }}
            >
              {symbol}
            </Text>
          </Box>
          <Box margin={{ top: 'small' }} direction="row" justify="center">
            <TxnUsdPrice symbol={symbol} txnAmount={txnAmount} />
          </Box>
        </Box>
        <Box style={{ position: 'relative' }} pad={{ horizontal: 'large' }}>
          <Box style={{ visibility: !isPending && !isFinal ? 'visible' : 'hidden' }}>
            <Box pad={{ vertical: 'xlarge' }}>{children}</Box>
            <PrimaryBtn
              onClick={handleContinue}
              textSize="small"
              round="xlarge"
              text={txnType}
              disabled={disableSubmitButton}
              fullWidth
              margin={{ bottom: 'large' }}
            />
          </Box>
          {isPending && (
            <Box className="centered">
              <TxnConfirm wallet={chainMode === Chain.ethereum ? 'Metamask' : 'Keplr'} />
            </Box>
          )}
        </Box>
      </BottomSheet>
    </Box>
  )
}

export default TransactionContainer
