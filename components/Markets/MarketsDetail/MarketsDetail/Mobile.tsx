import React, { useMemo, useState } from 'react'
import { useWeb3 } from 'api/web3'
import { PrimaryBtn } from 'components/common'
import { InfoPanelItem } from 'components/InfoBar'
import InfoCustomMeter from 'components/InfoBar/InfoCustomMeter'
import { InfoPanelItemStyles } from 'components/InfoBar/InfoPanelItem'
import { BigNumber } from 'ethers'
import { Box, Image, Text } from 'grommet'
import { bigNumberToString, bigNumberToUSDString } from 'lib/number-utils'
import { Chain, useChain } from 'lib/hooks/chain/context'
import { useStore } from 'api/cosmosStores'
import activeBorrowIcon from '../../../../public/images/borrow-selected.png'
import activeDepositIcon from '../../../../public/images/deposit-selected.png'
import Logo from '../../../../public/images/Logo.svg'
import { useConvexityData } from 'api/convexity'
import VectorWhite from '../../../../public/images/vector-white.svg'
import VectorDark from '../../../../public/images/vector-dark.svg'
import { Theme, useTheme } from 'lib/hooks/theme/context'
import { observer } from 'mobx-react-lite'
import { MarketsDetailPanelProps } from '.'
import { ETxnType } from 'lib/types'
import TransactionModal from 'components/TransactionsMobile/Transactions'

const MarketsDetailMobile = ({ marketsDetail }: { marketsDetail: MarketsDetailPanelProps }) => {
  const web3 = useWeb3()
  const { chainMode } = useChain()
  const { accountStore, chainStore } = useStore()
  const umeeAddress = accountStore.getAccount(chainStore.current.chainId).bech32Address
  const { ConvexityPriceData } = useConvexityData()
  const { themeMode } = useTheme()

  const {
    borrowedPortion,
    totalBorrowedUsd,
    availableLiquidityUsd,
    liquidationThreshold,
    ltv,
    liquidationBonus,
    symbol,
    canUseAsCollateral,
    balance,
    decimals,
    liquidityRate,
    variableBorrowRate,
    currentVariableDebt,
    currentStableDebt,
    currentUTokenBalance,
    availableBorrowAmount,
    tokenAddress,
  } = marketsDetail

  const usdPrice = useMemo(() => {
    if (!ConvexityPriceData) return
    const price = ConvexityPriceData.find((data) => data.denom === symbol)
    return Number(price?.amount)
  }, [ConvexityPriceData, symbol])

  const marketSize = useMemo(() => {
    return Number(totalBorrowedUsd) + Number(availableLiquidityUsd)
  }, [availableLiquidityUsd, totalBorrowedUsd])

  const [txnType, setTxnType] = useState<ETxnType>()

  return (
    <>
      {marketsDetail && (
        <>
          <Box>
            <Box pad={{ horizontal: 'large', bottom: 'xlarge' }}>
              <Box style={{ position: 'relative' }} pad={{ vertical: 'medium', horizontal: 'medium' }}>
                <Box direction="row" justify="center" pad={{ vertical: 'xlarge' }}>
                  <InfoCustomMeter value={borrowedPortion} />
                </Box>
                <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <Box direction="row" justify="center">
                    <Text size="small" color={'clrTextAndDataListHeader'}>
                      $
                    </Text>
                    <Text
                      margin={{ horizontal: 'xsmall', top: '-4px' }}
                      size="medium1"
                      color={'clrTextAndDataListHeader'}
                    >
                      {Math.floor(marketSize).toLocaleString()}
                    </Text>
                    <Text size="small" color={'clrTextAndDataListHeader'}>
                      {(marketSize - Math.floor(marketSize)).toFixed(2).substring(1)}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box>
                <InfoPanelItem
                  title="Available Liquidity"
                  titleBg="var(--umee-full-pink)"
                  titleDirection="row"
                  textSize="small"
                  data={[
                    { value: '$', textSize: 'small' },
                    {
                      value: Number(availableLiquidityUsd).toLocaleString(),
                      textSize: 'small',
                    },
                  ]}
                  align={'center'}
                  justify="between"
                  style={InfoPanelItemStyles.Horizontal}
                />
              </Box>
              <Box margin={{ top: 'large' }}>
                <InfoPanelItem
                  title="Total Borrowed"
                  titleBg="var(--umee-full-green)"
                  titleDirection="row"
                  textSize="small"
                  data={[
                    { value: '$', textSize: 'small' },
                    {
                      value: Number(totalBorrowedUsd).toLocaleString(),
                      textSize: 'small',
                    },
                  ]}
                  align={'center'}
                  justify="between"
                  style={InfoPanelItemStyles.Horizontal}
                />
              </Box>
            </Box>
            <Box pad={{ vertical: 'xlarge', horizontal: 'large' }} border={{ side: 'top', color: 'clrBorderGrey' }}>
              <Text size="medium1" alignSelf="center" color="clrTextAndDataListHeader" className="font-moret">
                Positions
              </Text>
              <Box margin={{ top: 'xlarge' }}>
                <Box direction="row" justify="between" pad={{ bottom: 'large' }}>
                  <Box>
                    <Box direction="row" pad={'small'} align="center" background="var(--umee-full-pink)" round="large">
                      <Image src={activeDepositIcon} alt="deposit" />
                      <Text margin={{ left: 'small' }} color={'white'} size="medium">
                        {chainMode == Chain.cosmos
                          ? umeeAddress
                            ? Number(bigNumberToString(currentUTokenBalance, decimals)).toLocaleString()
                            : '—'
                          : web3.account
                            ? Number(bigNumberToString(currentUTokenBalance, decimals)).toLocaleString()
                            : '—'}
                      </Text>
                    </Box>
                    <Text color={'clrDarkGreyOnNavy'} size="small" margin={{ top: 'xsmall' }}>
                      ${Number(bigNumberToUSDString(currentUTokenBalance, decimals, usdPrice, 2)).toLocaleString()}
                    </Text>
                  </Box>
                  <Box>
                    <Box direction="row" align="start">
                      <Text alignSelf="end" size="medium1" color={'clrTextAndDataListHeader'}>
                        {chainMode == Chain.cosmos
                          ? liquidityRate.toString()
                          : bigNumberToString(liquidityRate, BigNumber.from(25))}
                      </Text>
                      <Text margin={{ top: 'xsmall' }} size="small" color={'clrTextAndDataListHeader'}>
                        %
                      </Text>
                    </Box>
                    <Text alignSelf="end" color={'clrDarkGreyOnNavy'} size="small">
                      Supply {chainMode === Chain.cosmos ? 'APR' : 'APY'}
                    </Text>
                  </Box>
                </Box>
                <Box
                  border={{ side: 'top', color: 'clrBorderGrey' }}
                  direction="row"
                  justify="between"
                  pad={{ top: 'large' }}
                >
                  <Box>
                    <Box direction="row" pad={'small'} align="center" background="var(--umee-full-green)" round="large">
                      <Image src={activeBorrowIcon} alt="borrow" />
                      <Text margin={{ left: 'small' }} color={'white'} size="medium">
                        {chainMode == Chain.cosmos
                          ? umeeAddress
                            ? Number(
                              bigNumberToString(currentVariableDebt.add(currentStableDebt), decimals),
                            ).toLocaleString()
                            : '—'
                          : web3.account
                            ? Number(
                              bigNumberToString(currentVariableDebt.add(currentStableDebt), decimals),
                            ).toLocaleString()
                            : '—'}
                      </Text>
                    </Box>
                    <Text color={'clrDarkGreyOnNavy'} size="small" margin={{ top: 'xsmall' }}>
                      $
                      {Number(
                        bigNumberToUSDString(currentVariableDebt.add(currentStableDebt), decimals, usdPrice, 2),
                      ).toLocaleString()}
                    </Text>
                  </Box>
                  <Box>
                    <Box direction="row" align="start">
                      <Text alignSelf="end" size="medium1" color={'clrTextAndDataListHeader'}>
                        {chainMode == Chain.cosmos
                          ? variableBorrowRate.toString()
                          : bigNumberToString(variableBorrowRate, BigNumber.from(25))}
                      </Text>
                      <Text margin={{ top: 'xsmall' }} size="small" color={'clrTextAndDataListHeader'}>
                        %
                      </Text>
                    </Box>
                    <Text alignSelf="end" color={'clrDarkGreyOnNavy'} size="small">
                      Borrow {chainMode === Chain.cosmos ? 'APR' : 'APY'}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              pad={{ top: 'xlarge', horizontal: 'large', bottom: 'large' }}
              border={{ side: 'top', color: 'clrBorderGrey' }}
            >
              <Text size="medium1" alignSelf="center" color="clrTextAndDataListHeader" className="font-moret">
                Market Stats
              </Text>
              <Box margin={{ top: 'xlarge' }}>
                <Box>
                  <InfoPanelItem
                    align="center"
                    textSize="small"
                    title="Maximum LTV"
                    data={
                      ltv
                        ? [
                          {
                            value: ltv && bigNumberToString(ltv, 2),
                            textSize: 'small',
                          },
                          { value: '%', textSize: 'small' },
                        ]
                        : [{ value: '—', textSize: 'small' }]
                    }
                    justify="between"
                    style={InfoPanelItemStyles.Horizontal}
                  />
                </Box>
                <Box margin={{ top: 'large' }}>
                  <InfoPanelItem
                    align="center"
                    textSize="small"
                    title="Liquidation Threshold"
                    data={
                      liquidationThreshold
                        ? [
                          {
                            value: liquidationThreshold && bigNumberToString(liquidationThreshold, 2),
                            textSize: 'small',
                          },
                          { value: '%', textSize: 'small' },
                        ]
                        : [{ value: '—', textSize: 'small' }]
                    }
                    justify="between"
                    style={InfoPanelItemStyles.Horizontal}
                  />
                </Box>
                <Box margin={{ top: 'large' }}>
                  <InfoPanelItem
                    align="center"
                    textSize="small"
                    title="Liquidation Penalty"
                    data={
                      liquidationBonus
                        ? [
                          {
                            value:
                                chainMode == Chain.cosmos
                                  ? bigNumberToString(liquidationBonus, 2)
                                  : (parseFloat(bigNumberToString(liquidationBonus, 2)) - 100).toFixed(2),
                            textSize: 'small',
                          },
                          { value: '%', textSize: 'small' },
                        ]
                        : [{ value: '—', textSize: 'small' }]
                    }
                    justify="between"
                    style={InfoPanelItemStyles.Horizontal}
                  />
                </Box>
                <Box margin={{ top: 'large' }}>
                  <InfoPanelItem
                    align="center"
                    textSize="small"
                    title="Can be used as collateral?"
                    data={[{ value: canUseAsCollateral ? 'Yes' : 'No', textSize: 'small' }]}
                    justify="between"
                    style={InfoPanelItemStyles.Horizontal}
                  />
                </Box>
              </Box>
              <Box margin={{ top: 'xlarge' }}>
                <Box border={{ color: 'clrBorderGrey' }} pad="medium" round="small">
                  <Box direction="row" align="center">
                    <Image src={Logo} width="17px" alt="umee logo" />
                    <Text
                      size="small"
                      color="clrTextAndDataListHeader"
                      className="font-moret"
                      margin={{ left: 'xsmall' }}
                    >
                      Umee-versity
                    </Text>
                  </Box>
                  <Text color="clrTextAndDataListHeader" margin={{ top: 'small' }} size="medium">
                    What is the Cosmos Hub?
                  </Text>
                  <Text color="clrTextAndDataListHeader" margin={{ top: 'small' }} size="small">
                    The Cosmos Hub is the first of thousands of interconnected blockchains that comprise the Cosmos
                    Ecosystem. ATOM is the cryptocurrency powering the Hub. ATOM’s utility involves governance as a
                    staking token, on/off ramp for the greater Cosmos ecosystem, and newer features like Interchain
                    Security.{' '}
                  </Text>
                </Box>
              </Box>
              <Box
                margin={{ top: 'xlarge' }}
                pad={{ bottom: 'xlarge' }}
                justify="center"
                style={{ position: 'relative' }}
              >
                <Box style={{ position: 'absolute', top: '-15px', right: '15px' }}>
                  {themeMode === Theme.dark ? (
                    <Image width={'75'} src={VectorWhite} alt="umee vector" />
                  ) : (
                    <Image width={'75'} src={VectorDark} alt="umee vector" />
                  )}
                </Box>
                <PrimaryBtn round="xlarge" width={'50%'} margin="auto" pad={'0'}>
                  <Box onClick={() => setTxnType(ETxnType.deposit)} pad={'medium'}>
                    Supply
                  </Box>
                  <Box onClick={() => setTxnType(ETxnType.borrow)} pad={{ vertical: 'medium' }}>
                    <Box border={{ side: 'left', color: 'clrDarkGreyOnNavy' }} pad={{ horizontal: 'medium' }}>
                      Borrow
                    </Box>
                  </Box>
                </PrimaryBtn>
              </Box>
            </Box>
          </Box>
          <TransactionModal
            symbol={symbol}
            tokenAddress={tokenAddress}
            onClose={() => setTxnType(undefined)}
            txnType={txnType}
          />
        </>
      )}
    </>
  )
}

export default observer(MarketsDetailMobile)
