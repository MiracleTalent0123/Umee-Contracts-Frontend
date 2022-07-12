import React, { useContext, useEffect, useState, useMemo, MouseEvent, useCallback } from 'react'
import { Box, GridSizeType, ResponsiveContext, Text } from 'grommet'
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList'
import { IDataListColumn } from './DataList/DataList'
import { BigNumber } from 'ethers'
import { bigNumberToString, bigNumberToNumber, isZero } from 'lib/number-utils'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import CollateralModal from './Deposits/CollateralModal'
import { useData } from '../api/data'
import { useTransaction } from '../api/data/transactions'
import { ETxnSteps, ETxnType } from 'lib/types'
import { displayToast, TToastType } from './common/toasts'
import { Chain, useChain } from 'lib/hooks/chain/context'
import { useStore } from 'api/cosmosStores'
import { useConvexityData } from 'api/convexity'
import InfoTooltip from './common/InfoTooltip/InfoTooltip'
import { AssetCard } from './AssetCard/AssetCard'
import GradientBox from './common/GradientBox/GradientBox'
import orderBy from 'lodash/fp/orderBy'
import BottomSheet from './common/BottomSheet/BottomSheet'
import BottomMenu from './common/BottomMenu/BottomMenu'
import DepositModalDesktop from './Deposits/DepositDesktop'
import TransactionModal from './TransactionsMobile/Transactions'
import abbreviateNumber from 'lib/abbreviate'
import { apply } from 'lodash/fp'
import BottomMenus from './common/BottomMenu/BottomMenus'

export interface IAvailableDepositsData {
  address: string
  symbol: string
  color?: string
  tokenBalance?: BigNumber
  usdBalance?: BigNumber
  usdPriceDecimals?: number
  apy?: string
  decimals: number
  usageAsCollateralEnabled?: boolean
}

export interface AvailableDepositsDataListProps {
  columns: IDataListColumn[]
  userAssetsColumns: IDataListColumn[]
  data: IAvailableDepositsData[]
  loggedIn: boolean
  selectedTokenAddress?: string
  userDeposits: IAvailableDepositsData[]
}

interface RowProps {
  row: IAvailableDepositsData
  columnSizes: GridSizeType[]
  onSelect?: () => void
  available?: boolean
  guest?: boolean
  onCollateralClick?: (e: MouseEvent) => void
  isSupplied?: boolean
}

const aprDecimals = BigNumber.from(25)

const Row = ({ columnSizes, row, available, guest, onSelect, onCollateralClick, isSupplied }: RowProps) => {
  const size = useContext(ResponsiveContext)
  const { chainMode } = useChain()
  const { address, symbol, tokenBalance, apy, decimals, usageAsCollateralEnabled } = row
  const balance = Number(bigNumberToString(tokenBalance ?? 0, decimals))

  if (size === 'small') {
    return (
      <Box className="asset-card">
        <AssetCard
          onClick={onSelect}
          symbol={symbol}
          noGradient={available || false}
          values={[
            { label: isSupplied ? 'supplied' : 'available', value: abbreviateNumber(balance) },
            { label: chainMode === Chain.cosmos ? 'APR' : 'APY', value: `${apy}%` },
          ]}
        />
      </Box>
    )
  }

  return (
    <DataListRow select={onSelect} columnSizes={columnSizes} tokenAddress={address}>
      <TokenItem textSize="small" name={symbol} />
      <TextItem justify="start">
        <PrimaryText color="clrTextAndDataListHeader" size="small">
          {guest ? '–' : balance}
        </PrimaryText>
      </TextItem>
      <TextItem justify="start">
        <PrimaryText color="clrTextAndDataListHeader" size="small">
          {apy}%
        </PrimaryText>
      </TextItem>
      <InfoTooltip content="Borrow against your assets by collateralizing them.">
        <ToggleSwitch handleClick={onCollateralClick} enabled={usageAsCollateralEnabled} label={symbol} />
      </InfoTooltip>
    </DataListRow>
  )
}

const AvailableDepositsDataList = ({
  columns,
  userAssetsColumns,
  data,
  loggedIn,
  selectedTokenAddress,
  userDeposits,
}: AvailableDepositsDataListProps) => {
  const size = useContext(ResponsiveContext)
  const { chainMode } = useChain()
  const { accountStore, chainStore } = useStore()
  const account = accountStore.getAccount(chainStore.current.chainId)
  const [token, setToken] = useState<any>('')
  const [tokenAddress, setTokenAddress] = useState<string>('')
  const [isModalShow, setIsModalShow] = useState<string>('')
  const [collateralSwitchChecked, setCollateralSwitchChecked] = useState<boolean>()
  const [collateralStep, setCollateralStep] = useState<ETxnSteps>(ETxnSteps.Input)
  const { getConvexityData } = useConvexityData()
  const { UserReserveData } = useData()
  const { RegisteredTokens } = useConvexityData()
  const [availableMarketSort, setAvailableMarketSort] = useState<'popular' | 'apr'>('popular')
  const [clickedTxnType, setClickedTxnType] = useState<ETxnType>()

  useEffect(() => {
    if (selectedTokenAddress) {
      let token: any
      if (chainMode === Chain.cosmos) {
        token = RegisteredTokens.find((asset) => asset.address === selectedTokenAddress)
      } else {
        token = UserReserveData.find((asset) => asset.address === selectedTokenAddress)
      }
      setTokenAddress(selectedTokenAddress)
      setIsModalShow('deposit')
      setToken(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTokenAddress])

  const columnSizes = columns.map((col) => col.size)

  const setAssetModal = (token: any) => {
    setToken(token)
    setTokenAddress(token.address)
    setIsModalShow('deposit')
  }

  const setCollateralModal = (token: any, e: MouseEvent) => {
    e.stopPropagation()
    setToken(token)
    setTokenAddress(token.address)
    setIsModalShow('collateral')
    setCollateralSwitchChecked(!token.usageAsCollateralEnabled)
    setCollateralStep(ETxnSteps.Input)
  }

  const {
    Contracts: { lendingPool },
  } = useData()
  const { contractCall } = useTransaction()

  const toggleCollateral = async () => {
    let balance = token && bigNumberToNumber(token.tokenBalance, token.decimals)
    if (isZero(balance)) {
      displayToast('Sorry, balance is not enough', TToastType.TX_FAILED)
      setIsModalShow('')
      return
    } else if (!userDeposits.find((e) => e.address == tokenAddress)) {
      displayToast('Asset must be supplied before enabling for collateral', TToastType.TX_FAILED)
      setIsModalShow('')
      return
    } else {
      setCollateralStep(ETxnSteps.PendingSubmit)
      if (collateralSwitchChecked === undefined || !lendingPool || !tokenAddress) {
        setCollateralStep(ETxnSteps.Failure)
        return
      }
      const collateralGas = async () => {
        let gas = await lendingPool.estimateGas.setUserUseReserveAsCollateral(tokenAddress, collateralSwitchChecked)
        return gas.toNumber()
      }
      await contractCall(
        '',
        async () =>
          lendingPool.setUserUseReserveAsCollateral(tokenAddress, collateralSwitchChecked, {
            gasLimit: (await collateralGas()) * 3,
          }),
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral`,
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral failed`,
        `${collateralSwitchChecked ? 'Enabling' : 'Disabling'} use of reserve as collateral succeeded`,
        () => {
          setCollateralStep(ETxnSteps.Input)
          closeDepositModal()
        },
      )
    }
  }

  const toggleConvexityCollateral = () => {
    setCollateralStep(ETxnSteps.PendingSubmit)
    if (collateralSwitchChecked === undefined || !tokenAddress) {
      setCollateralStep(ETxnSteps.Failure)
      return
    }

    account.umee
      .setCollateral(account.bech32Address, tokenAddress, collateralSwitchChecked, getConvexityData)
      .catch((e) => console.log(e))
      .finally(() => {
        setCollateralStep(ETxnSteps.Input)
        closeDepositModal()
      })
  }

  const enableCollateral = async () => {
    if (chainMode == Chain.ethereum) toggleCollateral()
    else toggleConvexityCollateral()
  }

  const closeDepositModal = useCallback(() => {
    setTokenAddress('')
    setIsModalShow('')
  }, [])

  if (loggedIn) {
    return (
      <>
        {tokenAddress && isModalShow == 'collateral' && (
          <CollateralModal
            token={token.symbol}
            steps={collateralStep}
            collateralSwitchChecked={collateralSwitchChecked}
            enabled={enableCollateral}
            onClose={closeDepositModal}
          />
        )}
        {size === 'small' && (
          <>
            <BottomMenus
              open={!!tokenAddress}
              symbol={token.symbol}
              items={[ETxnType.deposit, ETxnType.withdraw, ETxnType.transfer]}
              setOpenSheet={() => setTokenAddress('')}
              setSelectedMenu={setClickedTxnType}
            />
            <TransactionModal
              txnType={clickedTxnType}
              onClose={() => setClickedTxnType(undefined)}
              tokenAddress={tokenAddress}
              symbol={token.symbol}
            />
          </>
        )}
        {size !== 'small' && tokenAddress && isModalShow === 'deposit' && (
          <DepositModalDesktop
            address={tokenAddress}
            symbol={chainMode === Chain.cosmos ? (selectedTokenAddress ? token.name : token.symbol) : token.symbol}
            onClose={closeDepositModal}
          />
        )}
        {size === 'small' && (
          <Text
            color="clrTextAndDataListHeader"
            size="medium1"
            textAlign="center"
            margin={{ bottom: 'medium' }}
            style={{ fontFamily: 'Moret' }}
            weight={300}
          >
            Supply Positions
          </Text>
        )}
        {userDeposits.length > 0 ? (
          <Box pad={{ bottom: 'medium' }}>
            <DataList columns={userAssetsColumns}>
              {userDeposits.map((row) => (
                <React.Fragment key={`row-${row.symbol}`}>
                  <Row
                    columnSizes={columnSizes}
                    row={row}
                    isSupplied
                    onSelect={() => setAssetModal(row)}
                    onCollateralClick={(event) => setCollateralModal(row, event)}
                  />
                </React.Fragment>
              ))}
            </DataList>
          </Box>
        ) : (
          size === 'small' && (
            <Text margin={{ top: 'small' }} size="small" color="clrTextAndDataListHeader" textAlign="center">
              No items
            </Text>
          )
        )}
        {size === 'small' && (
          <Text
            color="clrTextAndDataListHeader"
            size="medium1"
            textAlign="center"
            margin={{ vertical: 'medium' }}
            style={{ fontFamily: 'Moret' }}
            weight={300}
          >
            Other Markets
          </Text>
        )}
        {data.length > 0 ? (
          <Box margin={{ top: userDeposits.length > 0 && size !== 'small' ? 'medium' : '' }}>
            {size === 'small' && (
              <Box margin={{ bottom: 'medium' }} flex direction="row">
                <Box margin={{ right: 'small' }}>
                  <GradientBox
                    selected={availableMarketSort === 'popular'}
                    onClick={() => setAvailableMarketSort('popular')}
                  >
                    <Text size="small" color={'clrTextAndDataListHeader'}>
                      Most Popular
                    </Text>
                  </GradientBox>
                </Box>
                <GradientBox selected={availableMarketSort === 'apr'} onClick={() => setAvailableMarketSort('apr')}>
                  <Text size="small" color={'clrTextAndDataListHeader'}>
                    Highest Supply APR
                  </Text>
                </GradientBox>
              </Box>
            )}
            <DataList columns={columns}>
              {(size !== 'small' || availableMarketSort === 'popular'
                ? data
                : orderBy(['apy'], ['desc'])(data.map((x) => ({ ...x, apy: Number(x.apy) })))
              ).map((row: any) => (
                <React.Fragment key={`row-${row.symbol}`}>
                  <Row
                    columnSizes={columnSizes}
                    row={{ ...row, apy: Number(row.apy) === 0 ? '0.00' : row.apy }}
                    available
                    onSelect={() => setAssetModal(row)}
                  />
                </React.Fragment>
              ))}
            </DataList>
          </Box>
        ) : (
          size === 'small' && (
            <Text size="small" color="clrTextAndDataListHeader" textAlign="center">
              No items
            </Text>
          )
        )}
      </>
    )
  } else {
    return (
      <DataList columns={columns}>
        {data &&
          data.map((row) => (
            <React.Fragment key={`row-${row.symbol}`}>
              <Row columnSizes={columnSizes} row={row} guest available />
            </React.Fragment>
          ))}
      </DataList>
    )
  }
}

export default AvailableDepositsDataList
