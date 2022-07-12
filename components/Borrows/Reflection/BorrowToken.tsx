import * as React from 'react'
import BorrowInputAmount from 'components/Borrows/BorrowInputAmount'
import { ITokenData, ETxnSteps, ETxnType } from 'lib/types'
import { useData } from 'api/data'
import { BigNumber, constants, utils } from 'ethers'
import { useTransaction } from 'api/data/transactions'
import { useWeb3 } from 'api/web3'
import PageLoading from 'components/common/Loading/PageLoading'
import { getMaxBorrows } from 'lib/health-utils'
import { useAllowanceData, useUserBalance } from 'api/data/allowanceData'
import { useErc20DetailedContract } from 'api/data/contracts'
import EnableDeposit from 'components/Deposits/AssetModal'
import { Box, ResponsiveContext } from 'grommet'
import BorrowInputAmountMobile from '../BorrowInputAmountMobile'

const { useEffect, useState, useMemo, useContext } = React

export enum InterestRateTypeEnums {
  Stable = 1,
  Variable = 2,
}

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
  const { ReserveData, ReserveConfigurationData, UserAccountData, priceData, UserReserveData } = useData()
  const {
    Contracts: { lendingPool },
  } = useData()
  const { account } = useWeb3()
  const erc20Contract = useErc20DetailedContract(tokenAddress)
  const allowance = useAllowanceData(erc20Contract, lendingPool ? lendingPool.address : '')

  const { contractCall: contractCallApprove } = useTransaction()
  const { contractCall: contractCallBorrow } = useTransaction()
  const { contractCall: contractCallRepay } = useTransaction()

  const [token, setToken] = useState<ITokenData>()
  const [activeTab, setActiveTab] = useState<string>(txnType ? txnType : ETxnType.borrow)
  const [step, setStep] = useState<ETxnSteps>(ETxnSteps.InputAmount)
  const [txnAmount, setTxnAmount] = useState<string>('')
  const userBalance = useUserBalance(tokenAddress) || BigNumber.from(0)
  const [availableBorrowAmount, setAvailableBorrowAmount] = useState<BigNumber>(BigNumber.from(0))
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0))
  const [txnAmountBN, setTxnAmountBN] = useState(BigNumber.from(0))
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [allowanceFlag, setAllowanceFlag] = useState<boolean>()

  const [ltv, setLtv] = useState<string>('')
  const [borrowBalance, setBorrowBalance] = useState<string>('')
  const [amountBorrowed, setAmountBorrowed] = useState<BigNumber>(BigNumber.from(0))
  const size = useContext(ResponsiveContext)
  const [isPreview, setIsPreview] = useState<boolean>(false)

  const interestRateType = InterestRateTypeEnums.Variable

  useEffect(() => {
    setTxnAmount('')
  }, [activeTab])

  useEffect(() => {
    if (
      ReserveData &&
      UserAccountData &&
      ReserveConfigurationData &&
      lendingPool &&
      account &&
      token &&
      allowance?.gt(BigNumber.from(0)) !== undefined
    ) {
      setPageLoading(false)
      setAllowanceFlag(allowance?.gt(BigNumber.from(0)))
    }
  }, [
    ReserveConfigurationData,
    ReserveData,
    UserAccountData,
    account,
    lendingPool,
    token,
    allowance?.gt(BigNumber.from(0)),
  ])
  const [txnHash, setTxnHash] = useState('')

  useEffect(() => {
    if (!tokenAddress || !UserReserveData) {
      setAmountBorrowed(BigNumber.from(0))
      return
    }

    const userReserve = UserReserveData.find((r) => r.address === tokenAddress)

    if (!userReserve) {
      setAmountBorrowed(BigNumber.from(0))
      return
    }

    setAmountBorrowed(userReserve.currentVariableDebt)
  }, [UserReserveData, tokenAddress])

  const availableRepayAmount = useMemo(
    () => (userBalance.lt(amountBorrowed) ? userBalance : amountBorrowed),
    [amountBorrowed, userBalance],
  )

  useEffect(() => {
    if (!txnAmount) {
      setTxnAmountBN(BigNumber.from(0))
      return
    }

    setTxnAmountBN(utils.parseUnits(parseFloat(txnAmount).toFixed(tokenDecimals.toNumber()), tokenDecimals))
  }, [txnAmount, tokenDecimals])

  useEffect(() => {
    if (priceData && token?.symbol) {
      if (parseFloat(txnAmount) > 0) {
        let borrowUsdAmount =
          activeTab === ETxnType.borrow
            ? myBorrowsTotal + parseFloat(txnAmount) * priceData[token.symbol].usd
            : myBorrowsTotal - parseFloat(txnAmount) * priceData[token.symbol].usd
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
  }, [txnAmount, priceData, token, myBorrowsTotal, initialBorrowLimit, activeTab])

  useEffect(() => {
    if (tokenAddress) {
      const address = tokenAddress as string
      const t = ReserveData.find((r) => r.address.toLowerCase() === address.toLowerCase())
      setTokenDecimals(ReserveConfigurationData.find((r) => r.address === t?.address)?.decimals || BigNumber.from(18))
      setToken(t)

      if (UserAccountData && token && priceData && token.symbol && t) {
        // Maximum a user can Borrow to keep health in good standing
        const MaxAvailable = getMaxBorrows(
          UserAccountData,
          priceData[token.symbol].eth,
          token.symbol,
          tokenDecimals.toString(),
        )

        // If the User's deposits is less than healthFactor max => Can withdraw all
        // If deposits are less => can withdraw up to healthFactor max
        if (t.availableLiquidity.lt(MaxAvailable)) {
          setAvailableBorrowAmount(t.availableLiquidity)
        } else {
          setAvailableBorrowAmount(MaxAvailable)
        }
      }
    }
  }, [ReserveConfigurationData, ReserveData, UserAccountData, tokenAddress, token, priceData, tokenDecimals])

  const handleApprove = () => {
    setStep(ETxnSteps.PendingApprove)
    if (!erc20Contract || !lendingPool) {
      setStep(ETxnSteps.Failure)
      return
    }

    contractCallApprove(
      '',
      () => erc20Contract.approve(lendingPool.address, constants.MaxUint256),
      'Approving allowance',
      'Approval failed',
      'Approval succeeded',
      () => {
        setStep(ETxnSteps.Input)
        onClose()
      },
    )
  }

  const handleBorrow = () => {
    setStep(ETxnSteps.Pending)

    if (!lendingPool || !token || !account) {
      setStep(ETxnSteps.Failure)
      return
    }

    const borrowGas = async () => {
      let gas = await lendingPool.estimateGas.borrow(
        token.address || '',
        txnAmountBN,
        InterestRateTypeEnums.Variable,
        0,
        account,
      )
      return gas.toNumber()
    }
    // Must approve transaction first
    contractCallBorrow(
      ETxnType.borrow,
      async () =>
        lendingPool.borrow(token.address || '', txnAmountBN, InterestRateTypeEnums.Variable, 0, account, {
          gasLimit: (await borrowGas()) * 3,
        }),
      'Borrowing',
      'Borrow failed',
      'Borrow succeeded',
      () => {
        setStep(ETxnSteps.Input)
        onClose()
      },
      undefined,
    )
  }

  const handleRepay = () => {
    setStep(ETxnSteps.Pending)
    if (!lendingPool || !token || !account) {
      setStep(ETxnSteps.Failure)
      return
    }

    const repayGas = async () => {
      let gas = await lendingPool.estimateGas.repay(token.address || '', txnAmountBN, interestRateType, account)
      return gas.toNumber()
    }

    contractCallRepay(
      ETxnType.repay,
      async () =>
        lendingPool.repay(token.address || '', txnAmountBN, interestRateType, account, {
          gasLimit: (await repayGas()) * 3,
        }),
      'Repaying',
      'Repay failed',
      'Repay succeeded',
      () => {
        setStep(ETxnSteps.Input)
        onClose()
      },
      undefined,
    )
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
      ) : !!token && allowanceFlag ? (
        size !== 'small' ? (
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
          />
        ) : (
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
      ) : (
        <EnableDeposit token={token} steps={step} enabled={handleApprove} />
      )}
    </>
  )
}

export default BorrowToken
