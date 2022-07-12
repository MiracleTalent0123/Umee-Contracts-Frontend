import * as React from 'react'
import { Link } from 'react-router-dom'
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList'
import { IDataListColumn } from './DataList/DataList'
import { BigNumber, utils } from 'ethers'
import { ETxnType, IBorrowData } from '../lib/types'
import { bigNumberToString } from '../lib/number-utils'
import { Box, ResponsiveContext, Text } from 'grommet'
import { SecondaryBtn } from './common'
import { Chain, useChain } from 'lib/hooks/chain/context'
import { AssetCard } from './AssetCard/AssetCard'
import { useState } from 'react'
import abbreviateNumber from 'lib/abbreviate'
import TransactionModal from './TransactionsMobile/Transactions'
import BottomMenus from './common/BottomMenu/BottomMenus'

export interface BorrowsDataListProps {
  columns: IDataListColumn[]
  data: IBorrowData[]
}

const BorrowsDataList = ({ columns, data }: BorrowsDataListProps) => {
  const aprDecimals = BigNumber.from(25)
  const columnSizes = columns.map((col) => col.size)
  const size = React.useContext(ResponsiveContext)
  const { chainMode } = useChain()

  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>()
  const [selectedMenu, setSelectedMenu] = useState<ETxnType>()
  const [symbol, setSymbol] = useState<string>('')
  const [address, setAddress] = useState<string>('')

  return (
    <Box width={size === 'medium' || size === 'small' || size === 'large' ? '100%' : '50%'}>
      {size === 'small' && (
        <>
          <BottomMenus 
            open={!!openBottomSheet}
            items={[ETxnType.borrow, ETxnType.repay, ETxnType.transfer]}
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
      <Box
        pad={{ vertical: 'small' }}
        {...(size === 'small' ? { margin: { bottom: 'large' } } : {})}
        className={size === 'small' ? '' : 'border-gradient-bottom'}
        align={size === 'small' ? 'center' : 'start'}
      >
        <Text
          color="clrTextAndDataListHeader"
          size={size === 'small' ? 'medium1' : 'medium'}
          style={{ fontFamily: size === 'small' ? 'Moret' : 'Helvetica' }}
        >
          Borrow Positions
        </Text>
      </Box>
      {data.length > 0 ? (
        <DataList columns={columns}>
          {data.map((row) => {
            const { symbol, currentVariableDebt, variableBorrowAPR, decimals, address } = row
            const balance = Number(bigNumberToString(currentVariableDebt ?? 0, decimals))
            const apy =
              variableBorrowAPR &&
              (chainMode == Chain.ethereum
                ? parseFloat(utils.formatUnits(variableBorrowAPR, aprDecimals)).toFixed(2)
                : variableBorrowAPR)

            if (size === 'small') {
              return (
                <Box className="asset-card" key={`row-${symbol}-3`}>
                  <AssetCard
                    symbol={symbol ?? ''}
                    values={[
                      { label: 'borrowed', value: abbreviateNumber(balance) },
                      { label: chainMode === Chain.cosmos ? 'APR' : 'APY', value: `${apy}%` },
                    ]}
                    noGradient={false}
                    onClick={() => {
                      setOpenBottomSheet(true)
                      setSymbol(symbol || '')
                      setAddress(address || '')
                    }}
                  />
                </Box>
              )
            }
            return (
              <DataListRow columnSizes={columnSizes} key={`row-${symbol}-2`}>
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
                        pathname: '/borrow',
                        state: { tokenAddress: address },
                      }}
                    >
                      <SecondaryBtn
                        round="large"
                        text="BORROW"
                        pad={{ vertical: 'small', horizontal: 'small' }}
                        textSize="xsmall"
                      />
                    </Link>
                  </TextItem>
                )}
              </DataListRow>
            )
          })}
        </DataList>
      ) : (
        <Text margin={{ top: 'small' }} size="small" color="clrTextAndDataListHeader">
          Nothing borrowed yet
        </Text>
      )}
    </Box>
  )
}

export default BorrowsDataList
