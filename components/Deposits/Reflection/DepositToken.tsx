import { utils } from 'ethers'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import DepositInputAmount from 'components/Deposits/DepositInputAmount'
import { useData } from 'api/data'
import { BigNumber, constants } from 'ethers'
import { useTransaction } from 'api/data/transactions'
import { useWeb3 } from 'api/web3'
import { useAllowanceData, useUserBalance } from 'api/data/allowanceData'
import { useErc20DetailedContract, useErc20MintContract } from 'api/data/contracts'
import { ETxnType, ITokenData } from 'lib/types'
import PageLoading from 'components/common/Loading/PageLoading'
import { ETxnSteps } from 'lib/types'
import { getMaxWithdraws } from 'lib/health-utils'
import EnableDeposit from '../AssetModal'
import { Box, ResponsiveContext } from 'grommet'
import { displayToast, TToastType } from 'components/common/toasts'
import DepositInputAmountMobile from '../DepositInputAmountMobile'

const DepositToken = ({
  address: tokenAddress,
  myDepositsTotal,
  currentLtv,
  maxLtv,
  myBorrowsTotal,
  onClose,
  txnType,
}: {
  address: string
  myDepositsTotal: number
  currentLtv: string
  maxLtv: string
  myBorrowsTotal: number
  onClose: () => void
  txnType?: ETxnType
}) => {
  const [activeTab, setActiveTab] = useState<string>(txnType ? txnType : ETxnType.deposit)
  const [token, setToken] = useState<ITokenData>()
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0))
  const [depositBalance, setDepositBalance] = useState<BigNumber>(BigNumber.from(0))
  const [step, setStep] = useState<ETxnSteps>(ETxnSteps.Input)
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const erc20Contract = useErc20DetailedContract(tokenAddress)
  const erc20MintContract = useErc20MintContract(tokenAddress)
  const availableAmount = useUserBalance(tokenAddress) || BigNumber.from(0)
  const [availableWithdrawalAmount, setAvailableWithdrawalAmount] = useState<BigNumber>(BigNumber.from(0))
  const [reserveCfgData, setReserveCfgData] = useState<{
    symbol: string
    address: string
    decimals: BigNumber
    ltv: BigNumber
    liquidationThreshold: BigNumber
    liquidationBonus: BigNumber
    reserveFactor: BigNumber
    usageAsCollateralEnabled: boolean
    borrowingEnabled: boolean
    stableBorrowRateEnabled: boolean
    isActive: boolean
    isFrozen: boolean
  }>()
  const { ReserveData, ReserveConfigurationData, UserAccountData, UserReserveData } = useData()
  const {
    Contracts: { lendingPool },
    priceData,
  } = useData()

  const { contractCall: contractCallApprove } = useTransaction()
  const { contractCall: contractCallDeposit } = useTransaction()
  const { contractCall: contractCallWithdrawal } = useTransaction()
  const { contractCall: contractCallMint } = useTransaction()

  const [ltv, setLtv] = useState<string>('')
  const [borrowLimit, setBorrowLimit] = useState<number>()

  const { account } = useWeb3()
  const allowance = useAllowanceData(erc20Contract, lendingPool ? lendingPool.address : '')

  const [txnAmount, setTxnAmount] = useState<string>('')
  const [txnAmountBN, setTxnAmountBN] = useState(BigNumber.from(0))
  const [allowanceFlag, setAllowanceFlag] = useState<boolean>()

  const [isPreview, setIsPreview] = useState<boolean>(false)

  const size = useContext(ResponsiveContext)

  useEffect(() => {
    if (tokenAddress) {
      const reserve = ReserveData.find((r) => r.address === tokenAddress)
      const reserveConfig = ReserveConfigurationData.find((r) => r.address === tokenAddress)
      setReserveCfgData(reserveConfig)
      setToken({
        symbol: reserve?.symbol,
        address: tokenAddress as string,
        usdPrice: reserve?.usdPrice,
        availableLiquidity: reserve?.availableLiquidity,
        totalStableDebt: reserve?.totalStableDebt,
        totalVariableDebt: reserve?.totalVariableDebt,
        liquidityRate: reserve?.liquidityRate,
        variableBorrowRate: reserve?.variableBorrowRate,
        stableBorrowRate: reserve?.stableBorrowRate,
        averageStableBorrowRate: reserve?.averageStableBorrowRate,
        liquidityIndex: reserve?.liquidityIndex,
        variableBorrowIndex: reserve?.variableBorrowIndex,
      })
    }
  }, [tokenAddress, ReserveData, ReserveConfigurationData])

  useEffect(() => {
    if (
      token &&
      ReserveData &&
      lendingPool &&
      ReserveConfigurationData &&
      reserveCfgData &&
      erc20Contract &&
      availableAmount &&
      allowance?.gt(BigNumber.from(0)) !== undefined
    ) {
      setPageLoading(false)
      setTokenDecimals(reserveCfgData?.decimals || BigNumber.from(0))
      setAllowanceFlag(allowance?.gt(BigNumber.from(0)))
    }
  }, [
    token,
    ReserveConfigurationData,
    ReserveData,
    erc20Contract,
    lendingPool,
    reserveCfgData,
    availableAmount,
    allowance?.gt(BigNumber.from(0)),
  ])

  useEffect(() => {
    setTxnAmount('')
  }, [activeTab])

  useEffect(() => {
    if (!tokenAddress || !UserReserveData) {
      setDepositBalance(BigNumber.from(0))
      return
    }

    const userReserve = UserReserveData.find((r) => r.address === tokenAddress)

    if (!userReserve) {
      setDepositBalance(BigNumber.from(0))
      return
    }

    setDepositBalance(userReserve.currentUTokenBalance)
  }, [UserReserveData, tokenAddress])

  useEffect(() => {
    if (!txnAmount || !reserveCfgData || txnAmount === '') {
      return
    }
    setTxnAmountBN(utils.parseUnits(txnAmount, reserveCfgData.decimals))
  }, [txnAmount, reserveCfgData])

  useEffect(() => {
    if (priceData && token?.symbol) {
      if (parseFloat(txnAmount) > 0) {
        let depositUsdAmount =
          activeTab === ETxnType.deposit
            ? myDepositsTotal + parseFloat(txnAmount) * priceData[token.symbol].usd
            : myDepositsTotal - parseFloat(txnAmount) * priceData[token.symbol].usd
        let borrowLimit = (depositUsdAmount * parseFloat(maxLtv)) / 10000
        setBorrowLimit(borrowLimit > 0 ? borrowLimit : 0)
        if (borrowLimit > 0) {
          setLtv(((myBorrowsTotal / borrowLimit) * 100).toFixed(2))
        } else {
          setLtv('0.00')
        }
      } else {
        setLtv('')
      }
    }
  }, [txnAmount, myDepositsTotal, priceData, token, maxLtv, myBorrowsTotal, activeTab])

  useEffect(() => {
    if (!tokenAddress) {
      return
    }

    const userReserve = UserReserveData.find((r) => r.address === tokenAddress)

    if (
      UserAccountData &&
      token &&
      priceData &&
      token.symbol &&
      token.availableLiquidity &&
      userReserve &&
      reserveCfgData &&
      depositBalance
    ) {
      // If reserve cannot be used as collateral => Available to withdraw => tokens deposited
      // let maxUserAmountToWithdraw = depositBalance;
      // if (!userReserve.currentUTokenBalance.lt(token.availableLiquidity)) {
      //   maxUserAmountToWithdraw = token.availableLiquidity;
      // }

      if (reserveCfgData.usageAsCollateralEnabled && !UserAccountData.totalDebtETH.isZero()) {
        // Maximum a user can withdraw to keep health in good standing
        const MaxAvailable = getMaxWithdraws(
          UserAccountData,
          priceData[token.symbol].eth,
          token.symbol,
          tokenDecimals.toString(),
        )

        // If the User's deposits is less than healthFactor max => Can withdraw all
        // If deposits are less => can withdraw up to healthFactor max

        if (depositBalance.lt(MaxAvailable)) {
          setAvailableWithdrawalAmount(depositBalance)
        } else {
          setAvailableWithdrawalAmount(MaxAvailable)
        }
      } else {
        setAvailableWithdrawalAmount(depositBalance)
      }
    }
  }, [UserAccountData, UserReserveData, depositBalance, priceData, token, tokenAddress, tokenDecimals, reserveCfgData])

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

  const handleDeposit = () => {
    setStep(ETxnSteps.PendingSubmit)
    if (!lendingPool || !token || !account) {
      setStep(ETxnSteps.Failure)
      return
    }

    const depositGas = async () => {
      let gas = await lendingPool.estimateGas.deposit(token.address || '', txnAmountBN, account, 0)
      return gas.toNumber()
    }
    // Must approve transaction first
    contractCallDeposit(
      ETxnType.deposit,
      async () =>
        lendingPool.deposit(token.address || '', txnAmountBN, account, 0, {
          gasLimit: (await depositGas()) * 3,
        }),
      'Supplying',
      'Supply failed',
      'Supply succeeded',
      () => {
        setStep(ETxnSteps.Input)
        onClose()
      },
      undefined,
    )
  }

  const handleWithdrawal = () => {
    setStep(ETxnSteps.Pending)

    if (!lendingPool) {
      setStep(ETxnSteps.Failure)
      return
    }
    const withdrawGasMax = async () => {
      let gasMax = await lendingPool.estimateGas.withdraw(tokenAddress as string, constants.MaxUint256, account || '')
      return gasMax.toNumber()
    }
    const withdrawGas = async () => {
      let gas = await lendingPool.estimateGas.withdraw(tokenAddress as string, txnAmountBN, account || '')
      return gas.toNumber()
    }

    if (token?.availableLiquidity) {
      if (token.availableLiquidity.isZero() || txnAmountBN.gt(token.availableLiquidity)) {
        displayToast('Withdraw failed', TToastType.TX_FAILED, { message: 'Liquidity in use' })
        setStep(ETxnSteps.Input)
      } else {
        contractCallWithdrawal(
          ETxnType.withdraw,
          async () =>
            lendingPool.withdraw(tokenAddress as string, txnAmountBN, account || '', {
              gasLimit: (await withdrawGas()) * 3,
            }),
          'Withdrawing',
          'Withdraw failed',
          'Withdraw succeeded',
          () => {
            setStep(ETxnSteps.Input)
            onClose()
          },
          undefined,
        )
      }
    }
  }

  const handleFaucet = useCallback(() => {
    setStep(ETxnSteps.Pending)
    if (!erc20MintContract || !lendingPool) {
      setStep(ETxnSteps.Failure)
      return
    }

    contractCallMint(
      ETxnType.mint,
      () => erc20MintContract.mint(utils.parseUnits('2', tokenDecimals)),
      `Minting 2 ${token?.symbol}`,
      'Mint failed',
      'Mint succeeded',
      () => {
        setStep(ETxnSteps.Input)
        onClose()
      },
    )
  }, [erc20MintContract, token, setStep, contractCallMint, lendingPool, onclose, tokenDecimals])

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
        (allowanceFlag ? (
          size !== 'small' ? (
            <DepositInputAmount
              txnAvailability={{
                availableAmount: pickOne(availableAmount, availableWithdrawalAmount, activeTab === ETxnType.deposit),
                token,
                tokenDecimals,
              }}
              balance={pickOne(availableAmount, depositBalance, activeTab === ETxnType.deposit)}
              setTxnAmount={setTxnAmount}
              txnAmount={txnAmount}
              handleContinue={activeTab === ETxnType.deposit ? handleDeposit : handleWithdrawal}
              txnStep={step}
              setActiveTab={setActiveTab}
              currentLtv={currentLtv}
              initialborrowBalance={myBorrowsTotal}
              ltv={ltv}
              txnType={pickOne(ETxnType.deposit, ETxnType.withdraw, activeTab === ETxnType.deposit)}
              handleFaucet={handleFaucet}
            />
          ) : (
            <DepositInputAmountMobile
              txnAvailability={{
                availableAmount: pickOne(availableAmount, availableWithdrawalAmount, activeTab === ETxnType.deposit),
                token,
                tokenDecimals,
              }}
              balance={pickOne(availableAmount, depositBalance, activeTab === ETxnType.deposit)}
              setTxnAmount={setTxnAmount}
              txnAmount={txnAmount}
              handleContinue={activeTab === ETxnType.deposit ? handleDeposit : handleWithdrawal}
              txnStep={step}
              currentLtv={currentLtv}
              initialborrowBalance={myBorrowsTotal}
              ltv={ltv}
              txnType={pickOne(ETxnType.deposit, ETxnType.withdraw, activeTab === ETxnType.deposit)}
              isPreview={isPreview}
              setIsPreview={setIsPreview}
              borrowLimit={borrowLimit}
              usageAsCollateralEnabled={reserveCfgData?.usageAsCollateralEnabled}
            />
          )
        ) : (
          <EnableDeposit token={token} steps={step} enabled={handleApprove} />
        ))
      )}
    </>
  )
}

export default DepositToken
