import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList'
import { IDataListColumn } from './DataList/DataList'
import { BigNumber, utils } from 'ethers'
import { Box, GridSizeType, ResponsiveContext, Text } from 'grommet'
import { ETxnType, IUserTxnDeposit } from 'lib/types'
import { bigNumberToString } from 'lib/number-utils'
import { SecondaryBtn } from './common'
import { Chain, useChain } from 'lib/hooks/chain/context'
import { AssetCard } from './AssetCard/AssetCard'
import abbreviateNumber from 'lib/abbreviate'
import TransactionModal from './TransactionsMobile/Transactions'
import BottomMenus from './common/BottomMenu/BottomMenus'

export interface DepositsDataListProps {
  columns: IDataListColumn[]
  data: IUserTxnDeposit[]
}

const DepositsDataList = ({ columns, data }: DepositsDataListProps) => {
  const size = useContext(ResponsiveContext)
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>()
  const [selectedMenu, setSelectedMenu] = useState<ETxnType>()
  const [symbol, setSymbol] = useState<string>('')
  const [address, setAddress] = useState<string>('')

  return (
    <Box width={size === 'medium' || size === 'small' || size === 'large' ? '100%' : '50%'}>
      <Box
        pad={{ vertical: 'small' }}
        {...(size === 'small' ? { margin: { bottom: 'large', top: 'xlarge' } } : {})}
        className={size === 'small' ? '' : 'border-gradient-bottom'}
        align={size === 'small' ? 'center' : 'start'}
      >
        <Text
          color="clrTextAndDataListHeader"
          size={size === 'small' ? 'medium1' : 'medium'}
          style={{ fontFamily: size === 'small' ? 'Moret' : 'Helvetica' }}
        >
          Supply Positions
        </Text>
      </Box>
      {data.length > 0 ? (
        <DataList columns={columns}>
          {data.map((row) => (
            <Row
              key={row.address}
              onClick={(symbol, address) => {
                setOpenBottomSheet(true)
                setSymbol(symbol)
                setAddress(address)
              }}
              columnSizes={columns.map((col) => col.size)}
              row={row}
            />
          ))}
        </DataList>
      ) : (
        <Text margin={{ top: 'small' }} size="small" color="clrTextAndDataListHeader">
          Nothing supplied yet
        </Text>
      )}
      {size === 'small' && (
        <>
          <BottomMenus
            open={!!openBottomSheet}
            items={[ETxnType.deposit, ETxnType.withdraw, ETxnType.transfer]}
            setOpenSheet={setOpenBottomSheet}
            setSelectedMenu={setSelectedMenu}
            symbol={symbol}
          />
          <TransactionModal
            symbol={symbol}
            tokenAddress={address}
            txnType={selectedMenu}
            onClose={() => setSelectedMenu(undefined)}
          />
        </>
      )}
    </Box>
  )
}

const Row = ({
  columnSizes,
  row,
  onClick,
}: {
  columnSizes: GridSizeType[]
  row: IUserTxnDeposit
  onClick: (symbol: string, address: string) => void
}) => {
  const size = useContext(ResponsiveContext)
  const { chainMode } = useChain()
  const { symbol, currentUTokenBalance, liquidityRate, address, decimals } = row
  const balance = Number(bigNumberToString(currentUTokenBalance ?? 0, decimals))
  const apy =
    liquidityRate &&
    (chainMode == Chain.ethereum
      ? parseFloat(utils.formatUnits(liquidityRate, BigNumber.from(25))).toFixed(2)
      : liquidityRate)

  if (size === 'small') {
    return (
      <Box className="asset-card">
        <AssetCard
          symbol={symbol}
          noGradient={false}
          onClick={() => onClick(symbol, address)}
          values={[
            { label: 'supplied', value: abbreviateNumber(balance) },
            { label: chainMode === Chain.cosmos ? 'APR' : 'APY', value: `${apy}%` },
          ]}
        />
      </Box>
    )
  }

  return (
    <DataListRow columnSizes={columnSizes}>
      {symbol && <TokenItem textSize="small" name={symbol} />}
      <TextItem justify="start">
        <PrimaryText color="clrTextAndDataListHeader" size="small">
          {balance.toLocaleString()}
        </PrimaryText>
      </TextItem>
      {size !== 'small' && (
        <TextItem justify="start">
          <PrimaryText color="clrTextAndDataListHeader" size="small">
            {apy}%
          </PrimaryText>
        </TextItem>
      )}
      {address && (
        <TextItem justify="end">
          <Link
            to={{
              pathname: '/supply',
              state: { tokenAddress: address },
            }}
          >
            <SecondaryBtn
              textSize="xsmall"
              round="large"
              text="SUPPLY"
              pad={{ vertical: 'small', horizontal: 'small' }}
            />
          </Link>
        </TextItem>
      )}
    </DataListRow>
  )
}

export default DepositsDataList
