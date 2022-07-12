import * as React from 'react'
import BorrowInputAmount from 'components/Borrows/BorrowInputAmount'
import { ITokenData, ETxnSteps, ETxnType } from 'lib/types'
import { BigNumber, utils } from 'ethers'
import PageLoading from 'components/common/Loading/PageLoading'
import { Box, ResponsiveContext } from 'grommet'
import { useConvexityData } from 'api/convexity'
import { ConvexityToken } from 'api/convexity/data'
import { useStore } from 'api/cosmosStores'
import { Currency } from '@keplr-wallet/types'
import { observer } from 'mobx-react-lite'
import { useFakeFeeConfig } from 'lib/hooks'
import BorrowInputAmountMobile from '../BorrowInputAmountMobile'

const { useEffect, useState, useMemo, useContext } = React

const BorrowToken = ({
  address: tokenAddress,
  currentLtv,
  myBorrowsTotal,
  initialBorrowLimit,
  onClose,
  txnType,
}: {
  address: string
  currentLtv: string
  myBorrowsTotal: number
  initialBorrowLimit: string
  onClose: () => void
  txnType?: ETxnType
}) => {
  const { RegisteredTokens, getConvexityData, ConvexityAccountData } = useConvexityData()
  const [token, setToken] = useState<ITokenData>()
  const [convexityToken, setConvexityToken] = useState<ConvexityToken>()
  const [activeTab, setActiveTab] = useState<string>(txnType ? txnType : ETxnType.borrow)
  const [step, setStep] = useState<ETxnSteps>(ETxnSteps.InputAmount)
  const [txnAmount, setTxnAmount] = useState<string>('')
  const [availableBorrowAmount, setAvailableBorrowAmount] = useState<BigNumber>(BigNumber.from(0))
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0))
  const [txnAmountBN, setTxnAmountBN] = useState(BigNumber.from(0))
  const [pageLoading, setPageLoading] = useState<boolean>(true)

  const [ltv, setLtv] = useState<string>('')
  const [borrowBalance, setBorrowBalance] = useState<string>('')
  const [amountBorrowed, setAmountBorrowed] = useState<BigNumber>(BigNumber.from(0))
  const [isPreview, setIsPreview] = useState<boolean>(false)
  const size = useContext(ResponsiveContext)

  const { accountStore, queriesStore, chainStore } = useStore()
  const account = accountStore.getAccount(chainStore.current.chainId)
  const originCurrency = chainStore.current.currencies.find((cur) => cur.coinMinimalDenom == tokenAddress) as Currency
  const originChainId = chainStore.chainInfos.find(
    (a) => a.currencies[0].coinDenom == originCurrency.coinDenom,
  )?.chainId

  const feeConfig = useFakeFeeConfig(chainStore, originChainId || '', account.msgOpts.repayToken.gas)

  const userBalance = BigNumber.from(
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

  // useEffect(() => {
  //   if (tokenAddress) getConvexityData();
  // }, [tokenAddress]);

  useEffect(() => {
    setTxnAmount('')
  }, [activeTab])

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
      setAmountBorrowed(token?.borrowed || BigNumber.from(0))
      if (token) {
        let availableAmount
        const usdPrice = Number(token.usdPrice)
        const availableAmountUsd =
          Number(ConvexityAccountData.borrowLimit) * 0.8 - Number(ConvexityAccountData.totalBorrowed)
        availableAmount =
          availableAmountUsd > 0 && usdPrice > 0
            ? utils.parseUnits(
              (availableAmountUsd / usdPrice).toFixed(token.decimals.toNumber()).toString(),
              token.decimals,
            )
            : BigNumber.from(0)
        const availableLiquidity = token.availableLiquidity
        setAvailableBorrowAmount(availableLiquidity.gt(availableAmount) ? availableAmount : availableLiquidity)
      }

      setToken({
        symbol: token?.name,
        address: token?.address,
        variableBorrowRate: token?.variableBorrowAPR,
      })
    }
  }, [tokenAddress, RegisteredTokens, myBorrowsTotal, ConvexityAccountData])

  const availableRepayAmount = useMemo(() => {
    const amount = userBalance.lt(amountBorrowed) ? userBalance : amountBorrowed
    return amount
  }, [amountBorrowed, userBalance])

  useEffect(() => {
    if (!txnAmount) {
      setTxnAmountBN(BigNumber.from(0))
      return
    }

    setTxnAmountBN(utils.parseUnits(parseFloat(txnAmount).toFixed(tokenDecimals.toNumber()), tokenDecimals))
  }, [txnAmount, tokenDecimals])

  useEffect(() => {
    if (token && convexityToken) {
      const usdPrice = Number(convexityToken.usdPrice)
      if (parseFloat(txnAmount) > 0) {
        let borrowUsdAmount =
          activeTab === ETxnType.borrow
            ? myBorrowsTotal + parseFloat(txnAmount) * usdPrice
            : myBorrowsTotal - parseFloat(txnAmount) * usdPrice
        setBorrowBalance(borrowUsdAmount.toFixed(2))
        setLtv(((borrowUsdAmount / parseFloat(initialBorrowLimit)) * 100).toFixed(2))
        if (borrowUsdAmount < 0) {
          setBorrowBalance('0.00')
          setLtv('0.00')
        }
      } else {
        setBorrowBalance('')
        setLtv('')
      }
    }
  }, [txnAmount, token, myBorrowsTotal, initialBorrowLimit, activeTab, convexityToken])

  const handleBorrow = () => {
    setStep(ETxnSteps.Pending)

    if (!token || !account.bech32Address) {
      setStep(ETxnSteps.Failure)
      return
    }

    account.umee
      .borrowToken(account.bech32Address, txnAmountBN.toString(), tokenAddress, getConvexityData)
      .catch((e) => console.log(e))
      .finally(() => {
        setStep(ETxnSteps.Input)
        onClose()
      })
  }

  const handleRepay = () => {
    setStep(ETxnSteps.Pending)

    if (!token || !account.bech32Address) {
      setStep(ETxnSteps.Failure)
      return
    }

    account.umee
      .repayToken(account.bech32Address, txnAmountBN.toString(), tokenAddress, getConvexityData)
      .catch((e) => console.log(e))
      .finally(() => {
        setStep(ETxnSteps.Input)
        onClose()
      })
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
        convexityToken && (
          size !== 'small' ? 
            <BorrowInputAmount
              txnAvailability={{
                availableAmount: pickOne(availableBorrowAmount, availableRepayAmount, activeTab === ETxnType.borrow),
                token,
                tokenDecimals,
              }}
              setTxnAmount={setTxnAmount}
              handleContinue={activeTab === ETxnType.borrow ? handleBorrow : handleRepay}
              txnStep={step}
              setActiveTab={setActiveTab}
              initialBorrowBalance={myBorrowsTotal}
              borrowBalance={borrowBalance}
              balance={pickOne(amountBorrowed, availableRepayAmount, activeTab === ETxnType.borrow)}
              txnAmount={txnAmount}
              currentLtv={currentLtv}
              ltv={ltv}
              txnType={pickOne(ETxnType.borrow, ETxnType.repay, activeTab === ETxnType.borrow)}
            /> : (
              <BorrowInputAmountMobile 
                txnAvailability={{
                  availableAmount: pickOne(availableBorrowAmount, availableRepayAmount, activeTab === ETxnType.borrow),
                  token,
                  tokenDecimals,
                }}
                setTxnAmount={setTxnAmount}
                handleContinue={activeTab === ETxnType.borrow ? handleBorrow : handleRepay}
                txnStep={step}
                initialborrowBalance={myBorrowsTotal}
                borrowBalance={borrowBalance}
                balance={pickOne(amountBorrowed, availableRepayAmount, activeTab === ETxnType.borrow)}
                txnAmount={txnAmount}
                currentLtv={currentLtv}
                ltv={ltv}
                txnType={pickOne(ETxnType.borrow, ETxnType.repay, activeTab === ETxnType.borrow)}
                isPreview={isPreview}
                setIsPreview={setIsPreview}
                borrowLimit={Number(initialBorrowLimit)}
              />
            )
        )
      )}
    </>
  )
}

export default observer(BorrowToken)
