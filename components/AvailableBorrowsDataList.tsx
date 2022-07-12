import * as React from 'react'
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList'
import { IDataListColumn } from './DataList/DataList'
import { BigNumber } from 'ethers'
import { bigNumberToString } from 'lib/number-utils'
import { Box, GridSizeType, ResponsiveContext, Text } from 'grommet'
import { Chain, useChain } from 'lib/hooks/chain/context'
import { useData } from 'api/data'
import { useConvexityData } from 'api/convexity'
import { AssetCard } from './AssetCard/AssetCard'
import GradientBox from './common/GradientBox/GradientBox'
import orderBy from 'lodash/fp/orderBy'
import BottomSheet from './common/BottomSheet/BottomSheet'
import BottomMenu from './common/BottomMenu/BottomMenu'
import { ETxnType } from 'lib/types'
import abbreviateNumber from 'lib/abbreviate'
import BorrowModalDesktop from './Borrows/BorrowDesktop'
import TransactionModal from './TransactionsMobile/Transactions'
import BottomMenus from './common/BottomMenu/BottomMenus'

export interface IAvailableBorrowsData {
  address: string
  symbol: string
  color?: string
  tokensAvailable?: BigNumber
  usdAvailable?: number
  variableAPR: string
  stableAPR?: BigNumber
  decimals: number
  borrowingEnabled: boolean
  balance?: number
}

export interface AvailableBorrowsDataListProps {
  columns: IDataListColumn[]
  userAssetsColumns: IDataListColumn[]
  myBorrowsData?: IAvailableBorrowsData[]
  data: IAvailableBorrowsData[]
  loggedIn: boolean
  selectedTokenAddress?: string
}

interface RowProps {
  row: IAvailableBorrowsData
  columnSizes: GridSizeType[]
  balance?: number
  available?: boolean
  onSelect?: () => void
  isBorrowed?: boolean
}

const aprDecimals = BigNumber.from(25)

const Row = ({ row, balance, available, columnSizes, onSelect, isBorrowed }: RowProps) => {
  const size = React.useContext(ResponsiveContext)
  const { chainMode } = useChain()

  if (size === 'small') {
    return (
      <Box className="asset-card">
        <AssetCard
          onClick={onSelect}
          symbol={row.symbol}
          noGradient={available || false}
          values={[
            { label: isBorrowed ? 'borrowed' : 'available', value: abbreviateNumber(balance) },
            { label: chainMode === Chain.cosmos ? 'APR' : 'APY', value: `${row.variableAPR}%` },
          ]}
        />
      </Box>
    )
  }

  return (
    <DataListRow columnSizes={columnSizes} tokenAddress={row.address} select={onSelect}>
      <TokenItem textSize="small" name={row.symbol} />
      <TextItem justify="start">
        <PrimaryText color="clrTextAndDataListHeader" size="small">
          {balance === undefined ? '–' : balance}
        </PrimaryText>
      </TextItem>
      <TextItem justify="start">
        <PrimaryText color="clrTextAndDataListHeader">{row.borrowingEnabled ? `${row.variableAPR}%` : '–'}</PrimaryText>
      </TextItem>
    </DataListRow>
  )
}

const AvailableBorrowsDataList = ({
  columns,
  data,
  loggedIn,
  selectedTokenAddress,
  userAssetsColumns,
  myBorrowsData,
}: AvailableBorrowsDataListProps) => {
  const columnSizes = columns.map((col) => col.size)
  const [tokenAddress, setTokenAddress] = React.useState<string>('')
  const [symbol, setSymbol] = React.useState<string>('')
  const { chainMode } = useChain()
  const { UserReserveData } = useData()
  const { RegisteredTokens } = useConvexityData()
  const size = React.useContext(ResponsiveContext)
  const [availableMarketSort, setAvailableMarketSort] = React.useState<'popular' | 'apr'>('popular')
  const [clickedTxnType, setClickedTxnType] = React.useState<ETxnType>()

  React.useEffect(() => {
    if (selectedTokenAddress) {
      setTokenAddress(selectedTokenAddress)
      let token: any
      if (chainMode === Chain.cosmos) {
        token = RegisteredTokens.find((asset) => asset.address === selectedTokenAddress)
        setSymbol(token.name)
      } else {
        token = UserReserveData.find((asset) => asset.address === selectedTokenAddress)
        setSymbol(token.symbol)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTokenAddress])

  const setToken = (address: string, symbol: string) => {
    setTokenAddress(address)
    setSymbol(symbol)
  }

  if (loggedIn) {
    return (
      <>
        {size === 'small' && (
          <>
            <BottomMenus
              open={!!tokenAddress}
              symbol={symbol}
              items={[ETxnType.borrow, ETxnType.repay, ETxnType.transfer]}
              setOpenSheet={() => setTokenAddress('')}
              setSelectedMenu={setClickedTxnType}
            />
            <TransactionModal
              txnType={clickedTxnType}
              onClose={() => setClickedTxnType(undefined)}
              tokenAddress={tokenAddress}
              symbol={symbol}
            />
          </>
        )}

        {tokenAddress && size !== 'small' && (
          <BorrowModalDesktop
            address={tokenAddress}
            symbol={symbol}
            onClose={() => {
              setTokenAddress('')
            }}
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
            Borrow Positions
          </Text>
        )}

        {myBorrowsData && myBorrowsData.length > 0 ? (
          <Box pad={{ bottom: 'medium' }}>
            <DataList columns={userAssetsColumns}>
              {myBorrowsData.map((row) => (
                <React.Fragment key={`row-${row.symbol}`}>
                  <Row
                    balance={Number(row.balance && row.balance.toFixed(2))}
                    row={row}
                    columnSizes={columnSizes}
                    onSelect={() => setToken(row.address, row.symbol)}
                    isBorrowed
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
        {data && data.length > 0 ? (
          <Box margin={{ top: myBorrowsData && myBorrowsData.length > 0 && size !== 'small' ? 'medium' : '' }}>
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
                    Lowest Borrow APR
                  </Text>
                </GradientBox>
              </Box>
            )}
            <DataList columns={columns}>
              {(size !== 'small' || availableMarketSort === 'popular'
                ? data
                : orderBy(['variableAPR'], ['asc'])(data.map((x) => ({ ...x, variableAPR: Number(x.variableAPR) })))
              ).map((row: any) => (
                <React.Fragment key={`row-${row.symbol}`}>
                  <Row
                    balance={Number(row.tokensAvailable && bigNumberToString(row.tokensAvailable, row.decimals))}
                    row={{ ...row, variableAPR: Number(row.variableAPR) === 0 ? '0.00' : row.variableAPR }}
                    columnSizes={columnSizes}
                    onSelect={() => setToken(row.address, row.symbol)}
                    available
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
              <Row row={{ ...row, borrowingEnabled: true }} columnSizes={columnSizes} available />
            </React.Fragment>
          ))}
      </DataList>
    )
  }
}

export default AvailableBorrowsDataList
