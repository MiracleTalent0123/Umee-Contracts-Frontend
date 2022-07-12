import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useConvexityData } from 'api/convexity'
import { useStore } from 'api/cosmosStores'
import { SupplyPageProps } from './reflection'
import PageLoading from 'components/common/Loading/PageLoading'
import AvailableDepositsDataList, { IAvailableDepositsData } from 'components/AvailableDepositsDataList'
import { BigNumber, utils } from 'ethers'
import { ResponsiveContext } from 'grommet'
import { observer } from 'mobx-react-lite'

export interface WalletBalance {
  denom: string;
  amount: BigNumber;
}

const Convexity: React.FC<SupplyPageProps> = ({
  availableTokensColumns,
  userAssetsColumns,
  availableTokensMobileColumns,
  userAssetsMobileColumns,
  state,
}) => {
  const size = useContext(ResponsiveContext)
  const { accountStore, chainStore, queriesStore } = useStore()
  const { RegisteredTokens, getConvexityData } = useConvexityData()
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [depositsData, setDepositsData] = useState<IAvailableDepositsData[]>([])
  const [userDeposits, setUserDeposits] = useState<IAvailableDepositsData[]>([])

  const account = accountStore.getAccount(chainStore.current.chainId)
  const queries = queriesStore.get(chainStore.current.chainId)

  const walletBalances = chainStore.current.currencies.map((currency) => {
    const balance = BigNumber.from(
      queries.queryBalances.getQueryBech32Address(account.bech32Address).getBalanceFromCurrency(currency).toCoin()
        .amount
    )

    return {
      denom: currency.coinDenom,
      amount: balance,
    }
  })

  // useEffect(() => {
  //   getConvexityData();
  // }, []);

  useEffect(() => {
    if (account.bech32Address) {
      setLoggedIn(true)
    } else setLoggedIn(false)
  }, [account.bech32Address])

  useEffect(() => {
    if (RegisteredTokens.length > 0) setPageLoading(false)
  }, [RegisteredTokens])

  useEffect(() => {
    let depositReserves
    if (RegisteredTokens && account.bech32Address) {
      depositReserves = RegisteredTokens.reduce((acc, token, i) => {
        const balance = walletBalances.find((balance) => balance.denom == token.name)

        if (token.loaned.isZero()) {
          acc.push({
            address: token.address,
            symbol: token.name,
            tokenBalance: balance?.amount,
            apy: token.depositAPY,
            decimals: token.decimals.toNumber(),
            usageAsCollateralEnabled: token.usageAsCollateralEnabled,
          })
        }
        return acc
      }, Array<IAvailableDepositsData>())
    } else if (!account.bech32Address) {
      depositReserves = RegisteredTokens.reduce((acc, userReserve) => {
        acc.push({
          address: userReserve.address,
          symbol: userReserve.name,
          color: 'clrReserveIndicatorDefault',
          tokenBalance: BigNumber.from(0),
          apy: userReserve.depositAPY,
          decimals: 0,
        })
        return acc
      }, Array<IAvailableDepositsData>())
    } else return

    const orderedDeposits = depositReserves.sort(
      (deposit1, deposit2) =>
        (deposit2.tokenBalance ? deposit2.tokenBalance.toNumber() : 0) -
        (deposit1.tokenBalance ? deposit1.tokenBalance.toNumber() : 0)
    )
    setDepositsData(orderedDeposits)

    if (RegisteredTokens && account.bech32Address) {
      const existingDeposits = RegisteredTokens.reduce((acc, token) => {
        if (!token.loaned.isZero()) {
          acc.push({
            address: token.address,
            symbol: token.name,
            tokenBalance: token.loaned,
            apy: token.depositAPY,
            decimals: token.decimals.toNumber(),
            usageAsCollateralEnabled: token.usageAsCollateralEnabled,
          })
        }
        return acc
      }, Array<IAvailableDepositsData>())

      const orderedUserDeposits = existingDeposits.sort(
        (deposit1, deposit2) =>
          (deposit2.tokenBalance ? deposit2.tokenBalance.toNumber() : 0) -
          (deposit1.tokenBalance ? deposit1.tokenBalance.toNumber() : 0)
      )
      setUserDeposits(orderedUserDeposits)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [RegisteredTokens, account.bech32Address])

  if (pageLoading) {
    return <PageLoading />
  }

  return (
    <AvailableDepositsDataList
      columns={size === 'small' ? availableTokensMobileColumns : availableTokensColumns}
      userAssetsColumns={size === 'small' ? userAssetsMobileColumns : userAssetsColumns}
      data={depositsData}
      userDeposits={userDeposits}
      loggedIn={loggedIn}
      selectedTokenAddress={state && state.tokenAddress}
    />
  )
}

export default observer(Convexity)
