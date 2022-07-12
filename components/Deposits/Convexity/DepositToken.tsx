import { utils } from 'ethers'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import DepositInputAmount from 'components/Deposits/DepositInputAmount'
import { BigNumber } from 'ethers'
import { ETxnType, ITokenData } from 'lib/types'
import PageLoading from 'components/common/Loading/PageLoading'
import { ETxnSteps } from 'lib/types'
import { Box, ResponsiveContext } from 'grommet'
import { displayToast, TToastType } from 'components/common/toasts'
import { useConvexityData } from 'api/convexity'
import { useStore } from 'api/cosmosStores'
import { Currency } from '@keplr-wallet/types'
import { ConvexityToken } from 'api/convexity/data'
import { bigNumberToNumber } from 'lib/number-utils'
import { observer } from 'mobx-react-lite'
import { useFakeFeeConfig } from 'lib/hooks'
import DepositInputAmountMobile from '../DepositInputAmountMobile'

const DepositToken = ({
  address: tokenAddress,
  currentLtv,
  onClose,
  txnType,
}: {
  address: string
  currentLtv: string
  onClose: () => void
  txnType?: ETxnType
}) => {
  const { RegisteredTokens, getConvexityData, ConvexityAccountData } = useConvexityData()
  const { accountStore, chainStore, queriesStore } = useStore()
  const account = accountStore.getAccount(chainStore.current.chainId)
  const originCurrency = chainStore.current.currencies.find((cur) => cur.coinMinimalDenom == tokenAddress) as Currency
  const originChainId = chainStore.chainInfos.find(
    (a) => a.currencies[0].coinDenom == originCurrency.coinDenom,
  )?.chainId

  const size = useContext(ResponsiveContext)

  const [activeTab, setActiveTab] = useState<string>(txnType ? txnType : ETxnType.deposit)
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0))
  const [token, setToken] = useState<ITokenData>()
  const [convexityToken, setConvexityToken] = useState<ConvexityToken>()
  const [step, setStep] = useState<ETxnSteps>(ETxnSteps.Input)
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [availableWithdrawalAmount, setAvailableWithdrawalAmount] = useState<BigNumber>(BigNumber.from(0))

  const [ltv, setLtv] = useState<string>('')
  const [borrowLimit, setBorrowLimit] = useState<number>(0)

  const [txnAmount, setTxnAmount] = useState<string>('')
  const [txnAmountBN, setTxnAmountBN] = useState(BigNumber.from(0))

  const [isPreview, setIsPreview] = useState<boolean>(false)

  const myBorrowsTotal = useMemo(() => {
    if (ConvexityAccountData) return parseFloat(ConvexityAccountData.totalBorrowed)
    else return 0
  }, [ConvexityAccountData])

  // useEffect(() => {
  //   if (tokenAddress) getConvexityData();
  // }, [tokenAddress]);

  useEffect(() => {
    if (RegisteredTokens) {
      setPageLoading(false)
    }
  }, [RegisteredTokens])

  useEffect(() => {
    if (tokenAddress && RegisteredTokens && ConvexityAccountData) {
      const token = RegisteredTokens.find((token) => token.address === tokenAddress)
      setTokenDecimals(token?.decimals || BigNumber.from(18))
      setConvexityToken(token)
      const loaned = token?.loaned || BigNumber.from(0)

      if (token) {
        let availableAmount
        const usdPrice = Number(token.usdPrice)
        const availableAmountUsd =
          Number(ConvexityAccountData.borrowLimit) - Number(ConvexityAccountData.totalBorrowed) / 0.8
        availableAmount =
          availableAmountUsd > 0 && usdPrice > 0
            ? utils.parseUnits(
              (availableAmountUsd / usdPrice / bigNumberToNumber(token.ltv, 4))
                .toFixed(token.decimals.toNumber())
                .toString(),
              token.decimals,
            )
            : BigNumber.from(0)

        if (availableAmount.gt(loaned)) {
          setAvailableWithdrawalAmount(loaned)
        } else setAvailableWithdrawalAmount(availableAmount)
      }

      setToken({
        symbol: token?.name,
        address: token?.address,
        liquidityRate: token?.depositAPY,
        availableLiquidity: token?.availableLiquidity,
      })
    }
  }, [tokenAddress, RegisteredTokens, ConvexityAccountData])

  useEffect(() => {
    setTxnAmount('')
  }, [activeTab])

  const feeConfig = useFakeFeeConfig(chainStore, originChainId || '', account.msgOpts.lendToken.gas)

  const availableAmount = BigNumber.from(
    tokenAddress === 'uumee'
      ? queriesStore
        .get(chainStore.current.chainId)
        .queryBalances.getQueryBech32Address(account.bech32Address)
        .getBalanceFromCurrency(originCurrency)
        .sub(feeConfig.fee)
        .toCoin().amount
      : queriesStore
        .get(chainStore.current.chainId)
        .queryBalances.getQueryBech32Address(account.bech32Address)
        .getBalanceFromCurrency(originCurrency)
        .toCoin().amount,
  )

  useEffect(() => {
    if (!txnAmount || !token || txnAmount === '') {
      return
    }
    setTxnAmountBN(utils.parseUnits(txnAmount, tokenDecimals))
  }, [txnAmount, tokenDecimals, token])

  useEffect(() => {
    if (token && convexityToken && ConvexityAccountData) {
      const usdPrice = Number(convexityToken.usdPrice)
      if (parseFloat(txnAmount) > 0) {
        const ltv = bigNumberToNumber(convexityToken.ltv, 4)
        let borrowLimit =
          activeTab === ETxnType.deposit
            ? parseFloat(ConvexityAccountData.borrowLimit) + parseFloat(txnAmount) * usdPrice * ltv
            : parseFloat(ConvexityAccountData.borrowLimit) - parseFloat(txnAmount) * usdPrice * ltv

        setBorrowLimit(borrowLimit > 0 ? borrowLimit : 0)

        if (borrowLimit > 0) {
          setLtv(((parseFloat(ConvexityAccountData.totalBorrowed) / borrowLimit) * 100).toFixed(2))
        } else {
          setLtv('0.00')
        }
      } else {
        setLtv('')
      }
    }
  }, [txnAmount, token, activeTab, convexityToken, ConvexityAccountData])

  const handleDeposit = () => {
    setStep(ETxnSteps.PendingSubmit)
    if (!token || !account || !convexityToken) {
      setStep(ETxnSteps.Failure)
      return
    }

    account.umee
      .lendToken(
        account.bech32Address,
        txnAmountBN.toString(),
        tokenAddress,
        convexityToken?.usageAsCollateralEnabled,
        convexityToken.ltv.lt(0) ? false : true,
        getConvexityData,
      )
      .catch((e) => console.log(e))
      .finally(() => {
        setStep(ETxnSteps.Input)
        onClose()
      })
  }

  const handleWithdrawal = () => {
    setStep(ETxnSteps.Pending)

    if (!token || !account || !convexityToken) {
      setStep(ETxnSteps.Failure)
      return
    }

    if (token.availableLiquidity) {
      if (token.availableLiquidity.isZero() || txnAmountBN.gt(token.availableLiquidity)) {
        displayToast('Withdraw failed', TToastType.TX_FAILED, { message: 'Liquidity in use' })
        setStep(ETxnSteps.Input)
      } else {
        const isMax = txnAmountBN.eq(convexityToken?.loaned) ? true : false
        account.umee
          .withdrawToken(
            account.bech32Address,
            isMax ? convexityToken.collateral.toString() : txnAmountBN.toString(),
            isMax ? `u/${tokenAddress}` : tokenAddress,
            getConvexityData,
          )
          .catch((e) => console.log(e))
          .finally(() => {
            setStep(ETxnSteps.Input)
            onClose()
          })
      }
    }
  }

  const pickOne = <V1, V2>(v1: V1, v2: V2, first: boolean): V1 | V2 => {
    return first ? v1 : v2
  }

  return (
    <>
      {pageLoading ? (
        <Box className="modal-width">
          <PageLoading />
        </Box>
      ) : (
        token &&
        convexityToken &&
        (size !== 'small' ? (
          <DepositInputAmount
            txnAvailability={{
              availableAmount: pickOne(availableAmount, availableWithdrawalAmount, activeTab === ETxnType.deposit),
              token,
              tokenDecimals,
            }}
            balance={pickOne(availableAmount, convexityToken.loaned, activeTab === ETxnType.deposit)}
            setTxnAmount={setTxnAmount}
            txnAmount={txnAmount}
            handleContinue={activeTab === ETxnType.deposit ? handleDeposit : handleWithdrawal}
            txnStep={step}
            setActiveTab={setActiveTab}
            currentLtv={currentLtv}
            initialborrowBalance={myBorrowsTotal}
            ltv={ltv}
            txnType={pickOne(ETxnType.deposit, ETxnType.withdraw, activeTab === ETxnType.deposit)}
          />
        ) : (
          <DepositInputAmountMobile
            txnAvailability={{
              availableAmount: pickOne(availableAmount, availableWithdrawalAmount, activeTab === ETxnType.deposit),
              token,
              tokenDecimals,
            }}
            balance={pickOne(availableAmount, convexityToken.loaned, activeTab === ETxnType.deposit)}
            setTxnAmount={setTxnAmount}
            txnAmount={txnAmount}
            handleContinue={activeTab === ETxnType.deposit ? handleDeposit : handleWithdrawal}
            txnStep={step}
            currentLtv={currentLtv}
            initialborrowBalance={myBorrowsTotal}
            borrowLimit={borrowLimit}
            ltv={ltv}
            txnType={pickOne(ETxnType.deposit, ETxnType.withdraw, activeTab === ETxnType.deposit)}
            usageAsCollateralEnabled={convexityToken.usageAsCollateralEnabled}
            isPreview={isPreview}
            setIsPreview={setIsPreview}
          />
        ))
      )}
    </>
  )
}

export default observer(DepositToken)
