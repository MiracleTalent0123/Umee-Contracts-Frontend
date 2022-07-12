import React, { useContext, useEffect, useState, MouseEvent, useMemo } from 'react'
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList'
import { IDataListColumn } from './DataList/DataList'
import { BigNumber } from 'ethers'
import BridgeModal from './BridgeTransaction/BridgeModal'
import { bigNumberToString } from 'lib/number-utils'
import abbreviateNumber from 'lib/abbreviate'
import { SecondaryBtn } from './common'
import { ResponsiveContext, Box, Text } from 'grommet'
import { Chain } from 'lib/hooks/chain/context'
import { ConvexityToken } from 'api/convexity/data'
import { useData } from 'api/data'
import { useUmeeTokenAddress } from 'api/web3/chains'
import { useWeb3 } from 'api/web3'
import { useAccountConnection } from 'lib/hooks/account/useAccountConnection'
import { connect } from 'api/web3/providers'
import { Chains } from '../config'
import InfoTooltip from './common/InfoTooltip/InfoTooltip'
import MarketsDetailDesktop from './Markets/MarketsDetail/MarketsDetailDesktop'
import { ETxnType } from 'lib/types'
import GradientBox from './common/GradientBox/GradientBox'
import TransactionModal from './TransactionsMobile/Transactions'
import { AssetCard } from './AssetCard/AssetCard'
import orderBy from 'lodash/fp/orderBy'
import { TransferDialog } from 'dialogs/Transfer'
import BottomMenus from './common/BottomMenu/BottomMenus'

export interface IMarketsData {
  name: string
  address: string
  marketSize?: string
  totalBorrowed?: BigNumber
  marketSizeUsd: string
  totalBorrowedUsd: string
  depositAPY: BigNumber | string
  variableBorrowAPR: BigNumber | string
}

export interface MarketsDataListProps {
  columns: IDataListColumn[]
  data?: IMarketsData[] | ConvexityToken[]
  selectedTokenAddress?: string
  decimals?: BigNumber
  chainType: string
}

const aprDecimals = BigNumber.from(25)

const tooltip = 'Transfer assets to and from their native chains'

type ModalType = 'menu' | 'markets' | 'bridge' | 'ibc'

const MarketsDataList: React.FC<MarketsDataListProps> = ({
  columns,
  data,
  selectedTokenAddress,
  decimals,
  chainType,
}) => {
  const size = useContext(ResponsiveContext)
  const [tokenAddress, setTokenAddress] = useState<string>('')
  const [tokenName, setTokenName] = useState<string>('')
  const [isModalShow, setIsModalShow] = useState<ModalType | null>(null)
  const columnSizes = columns.map((col) => col.size)
  const { ReserveData } = useData()
  const { chainId, account } = useWeb3()
  const umeeTokenAddr = useUmeeTokenAddress(chainId)
  const { isAccountConnected, connectAccount } = useAccountConnection()
  const [clickedTxnType, setClickedTxnType] = useState<ETxnType | undefined>()
  const [availableMarketSort, setAvailableMarketSort] = useState<'popular' | 'apr'>('popular')

  useEffect(() => {
    if (selectedTokenAddress) {
      setTokenAddress(selectedTokenAddress)
    }
  }, [selectedTokenAddress])

  const ethAddress = useMemo(
    () => {
      const result: any = { UMEE: umeeTokenAddr }
      ReserveData.forEach(acc => {
        result[acc.symbol] = acc.address
      })
      return result
    },
    [umeeTokenAddr, ReserveData]
  )

  const setModalInfo = (name: string, address: any, modal: ModalType) => {
    setTokenAddress(address)
    setTokenName(name)
    setIsModalShow(modal)
  }

  const closeModal = () => setIsModalShow(null)

  return (
    <>
      {size !== 'small' && (
        <>
          {isModalShow === 'bridge' && (
            <BridgeModal
              address={tokenAddress}
              tokenName={tokenName}
              onClose={closeModal}
              direction={chainType === Chain.cosmos ? ETxnType.withdraw : ETxnType.deposit}
            />
          )}
          {isModalShow === 'ibc' && (
            <TransferDialog
              onClose={closeModal}
              isMobileView={false}
              chainId={Chains[tokenName]}
              coinMinimalDenom={tokenAddress}
              direction={true}
            />
          )}
          {isModalShow === 'markets' && (
            <MarketsDetailDesktop address={tokenAddress} onClose={closeModal} />
          )}
        </>
      )}
      {size === 'small' && (
        <>
          <BottomMenus
            open={isModalShow === 'menu'}
            symbol={tokenName}
            items={[
              ETxnType.transfer,
              ETxnType.deposit,
              ETxnType.withdraw,
              ETxnType.borrow,
              ETxnType.repay,
              ETxnType.markets,
            ]}
            setOpenSheet={closeModal}
            setSelectedMenu={setClickedTxnType}
          />
          <TransactionModal
            tokenAddress={tokenAddress}
            symbol={tokenName}
            txnType={clickedTxnType}
            onClose={() => setClickedTxnType(undefined)}
          />
        </>
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
          Markets
        </Text>
      )}

      {size === 'small' && (
        <Box margin={{ bottom: 'medium' }} flex direction="row">
          <Box margin={{ right: 'small' }}>
            <GradientBox selected={availableMarketSort === 'popular'} onClick={() => setAvailableMarketSort('popular')}>
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

      <DataList background="clrDefaultBg" columns={columns}>
        {data &&
          (size !== 'small' || availableMarketSort === 'popular'
            ? data
            : orderBy(
              ['depositAPY'],
              ['desc'],
            )(
              data.map((x) => ({
                ...x,
                depositAPY: Number(x.depositAPY),
              })),
            )
          ).map(({ name, address, marketSizeUsd, depositAPY, variableBorrowAPR }: any) => {
            const borrowApy =
              variableBorrowAPR &&
              (chainType == Chain.ethereum ? bigNumberToString(variableBorrowAPR, aprDecimals) : variableBorrowAPR)
            const supplyApy = Number(depositAPY) === 0 ? '0.00' : depositAPY

            if (size === 'small') {
              return (
                <Box className="asset-card" key={`row-${name}`}>
                  <AssetCard
                    onClick={() => setModalInfo(name, address, 'menu')}
                    symbol={name}
                    noGradient={false}
                    values={[
                      { label: 'supply', value: supplyApy + '%' },
                      { label: 'borrow', value: borrowApy + '%' },
                    ]}
                  />
                </Box>
              )
            }

            return (
              <DataListRow
                select={() => !(chainType == Chain.ethereum && name == 'UMEE') && setModalInfo(name, address, 'markets')}
                columnSizes={columnSizes}
                tokenAddress={address}
                key={`row-${name}`}
              >
                <TokenItem textSize="small" name={name} />
                <TextItem justify="start">
                  <PrimaryText color="clrTextAndDataListHeader" size="small">
                    {`$${
                      chainType == Chain.ethereum
                        ? abbreviateNumber(marketSizeUsd)
                        : abbreviateNumber(Number(marketSizeUsd))
                    }`}
                  </PrimaryText>
                </TextItem>

                {size !== 'small' && size !== 'medium' && (
                  <>
                    <TextItem justify="start">
                      <PrimaryText color="clrTextAndDataListHeader" size="small">
                        {supplyApy}%
                      </PrimaryText>
                    </TextItem>
                    <TextItem justify="start">
                      <PrimaryText color="clrTextAndDataListHeader" size="small">
                        {borrowApy}%
                      </PrimaryText>
                    </TextItem>
                  </>
                )}

                <TextItem justify="start">
                  <InfoTooltip content={tooltip}>
                    <SecondaryBtn
                      isConnected={
                        () => {
                          !isAccountConnected && connectAccount()

                          if (chainType === Chain.ethereum || ['UMEE', 'DAI'].includes(name)) {
                            !account && connect()
                          }
                        }
                      }
                      onClick={e => {
                        e.stopPropagation()

                        if (chainType === Chain.ethereum) {
                          setModalInfo(name, address, 'bridge')
                        } else if (['UMEE', 'DAI'].includes(name)) {
                          setModalInfo(name, ethAddress[name], 'bridge')
                        } else {
                          setModalInfo(name, address, 'ibc')
                        }
                      }}
                      round="large"
                      pad={{ vertical: 'small', horizontal: 'small' }}
                      text="TRANSFER"
                      textSize="xsmall"
                    />
                  </InfoTooltip>
                </TextItem>
              </DataListRow>
            )
          })}
      </DataList>
    </>
  )
}

export default MarketsDataList
