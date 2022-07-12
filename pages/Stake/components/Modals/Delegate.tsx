import React, { useEffect, useState } from 'react'
import { Validator } from 'api/stake/data'
import { Box, Text } from 'grommet'
import ValidatorLogo from '../ValidatorLogo'
import Modal from 'components/common/Modals/Modal'
import { useStore } from 'api/cosmosStores'
import { observer } from 'mobx-react-lite'
import { BigNumber } from 'ethers'
import { TxnAmountInput } from 'components/Transactions/TxnAmountInput'
import { Currency } from '@keplr-wallet/types'
import { WalletStatus } from '@keplr-wallet/stores'
import { AvailableToTxnInformationRow, PrimaryBtn } from 'components/common'
import { displayToast, TToastType } from 'components/common/toasts'
import { useFakeFeeConfig } from 'lib/hooks/fake-fee-config'
import { ETxnSteps } from 'lib/types'
import { TxnConfirm } from 'components/Transactions'

interface DelegateProps {
  validator: Validator;
  onClose: () => void;
}

const tokenDecimals = BigNumber.from('6')

const Delegate = ({ validator, onClose }: DelegateProps) => {
  const [txnAmount, setTxnAmount] = useState<string>('')
  const { accountStore, chainStore, queriesStore } = useStore()
  const [step, setStep] = useState<ETxnSteps>(ETxnSteps.Input)
  // const account = accountStore.getAccount(chainStore.current.chainId);
  // const queries = queriesStore.get(chainStore.current.chainId);
  const queries = queriesStore.get('umee-1')
  const account = accountStore.getAccount('umee-1')
  const originCurrency = chainStore.current.currencies.find((cur) => cur.coinMinimalDenom === 'uumee') as Currency
  const feeConfig = useFakeFeeConfig(chainStore, 'umee-1', account.msgOpts.delegate.gas)
  
  useEffect(() => {
    if (account.walletStatus === WalletStatus.NotInit) account.init()
  }, [account])

  const walletBalance = BigNumber.from(
    queries.queryBalances.getQueryBech32Address(account.bech32Address).getBalanceFromCurrency(originCurrency).toCoin()
      .amount
  )

  const avaliableBalance = BigNumber.from(
    queries.queryBalances
      .getQueryBech32Address(account.bech32Address)
      .getBalanceFromCurrency(originCurrency)
      .sub(feeConfig.fee)
      .toCoin().amount
  )

  const delegate = async () => {
    if (!txnAmount) return
    setStep(ETxnSteps.Pending)

    try {
      await account.cosmos.sendDelegateMsg(txnAmount.toString(), validator.operator_address, '', undefined, undefined, {
        onBroadcasted: (txHash: Uint8Array) => {
          displayToast('Delegating', TToastType.TX_BROADCASTING)
        },
        onFulfill: (tx) => {
          if (!tx.code) {
            displayToast('Delegate Successful', TToastType.TX_SUCCESSFUL, {
              customLink: chainStore.getChain('umee-1').raw.explorerUrlToTx.replace('{txHash}', tx.hash.toUpperCase()),
            })
            setStep(ETxnSteps.Input)
          }
        },
      })
    } catch (e) {
      console.log(e)
    }

    onClose()
  }

  return (
    <Modal onClose={onClose} className="delegate-modal">
      <Box direction="row" justify="between">
        <ValidatorLogo
          title={validator.moniker}
          imgUrl={validator.img_url}
          width="45"
          height="45"
          fontFamily="Moret"
          textSize="24px"
          color="white"
        />
      </Box>
      <Box
        border={{ size: '1px', color: 'clrBoxBorder' }}
        margin={{ top: 'small' }}
        round="xsmall"
        background="clrBackground"
      >
        {step === ETxnSteps.Pending ? (
          <Box pad={{ vertical: 'medium' }}>
            <TxnConfirm wallet="Keplr" />
          </Box>
        ) : (
          <>
            <Box pad={{ vertical: 'small', horizontal: 'medium' }}>
              <Text size="xsmall" color={'clrTextAndDataListHeader'}>
                STAKING WILL LOCK YOUR FUNDS UP TO 14 DAYS
              </Text>
              <Text margin={{ top: 'small' }} size="small" color={'clrTextAndDataListHeader'}>
                <div style={{ lineHeight: '144.5%' }}>
                  Once you undelegate your stake UMEE, you will need to wait 14 days for your tokens to become liquid.
                </div>
              </Text>
            </Box>
            <Box
              pad={{ vertical: 'small', horizontal: 'medium' }}
              border={{ side: 'top', size: '1px', color: 'clrButtonBorderGrey' }}
            >
              <AvailableToTxnInformationRow
                symbol="UMEE"
                wallet={true}
                availableAmount={walletBalance}
                tokenDecimals={tokenDecimals}
              />
              <TxnAmountInput
                txnAmount={txnAmount}
                txnAvailability={{
                  tokenDecimals: tokenDecimals,
                  availableAmount: avaliableBalance,
                  token: { symbol: 'UMEE' },
                }}
                setTxnAmount={setTxnAmount}
                isRangeInput={false}
              />
              <PrimaryBtn
                text="Delegate"
                fullWidth
                pad={{ vertical: 'small' }}
                textSize="medium"
                round="large"
                margin={{ top: 'medium' }}
                disabled={Number(txnAmount) === 0}
                onClick={() => delegate()}
              />
            </Box>
          </>
        )}
      </Box>
    </Modal>
  )
}

export default observer(Delegate)
