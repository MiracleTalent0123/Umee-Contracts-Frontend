import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, ResponsiveContext } from 'grommet';
import { BigNumber } from 'ethers';
import { InfoWindow, InfoWindowBody } from 'components/InfoWindow';
import { useData } from 'api/data';
import { bigNumberToString, bigNumberToUSDString, bigNumberToNumber } from 'lib/number-utils';
import PageLoading from 'components/common/Loading/PageLoading';
import { useUserBalances } from 'api/data/allowanceData';
import { InfoPanelItem } from 'components';
import Modal from 'components/common/Modal';
import { MarketDetailsBox } from './MarketDetailsBox';
import { TTokenConfig } from 'lib/types';
import { useUsageAsCollateral } from 'lib/hooks/useUsageAsCollateral';
import InfoCustomMeter from 'components/InfoBar/InfoCustomMeter';
import { InfoPanelItemStyles } from 'components/InfoBar/InfoPanelItem';
import { getMaxBorrows } from 'lib/health-utils';
import TokenLogo from 'components/TokenLogo';
import { PrimaryBtn } from 'components/common';

const MarketsDetail = ({ address: tokenAddress, onClose }: { address: string; onClose: (show: boolean) => void }) => {
  const size = useContext(ResponsiveContext);
  const { ReserveData, ReserveConfigurationData, UserReserveData, UserAccountData, priceData } = useData();
  const [loading, setLoading] = useState<boolean>(true);
  const [decimals, setDecimals] = useState<BigNumber>(BigNumber.from(18));
  const [token, setToken] = useState<{
    symbol: string;
    address: string;
    usdPrice: number;
    availableLiquidity: BigNumber;
    totalStableDebt: BigNumber;
    totalVariableDebt: BigNumber;
    liquidityRate: BigNumber;
    variableBorrowRate: BigNumber;
    stableBorrowRate: BigNumber;
    averageStableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
    lastUpdateTimestamp: number;
  }>();
  const [tokenConfig, setTokenConfig] = useState<TTokenConfig>();
  const [reserveStats, setReserveStats] = useState<{
    totalBorrowed: BigNumber;
    totalLiquidity: BigNumber;
    borrowedPortion: number;
    availablePortion: number;
    totalBorrowedUsd: string;
    availableLiquidity: BigNumber;
    availableLiquidityUsd: string;
    totalLiquidityUsd: string;
  }>();
  const [userReserve, setUserReserve] = useState<{
    symbol: string;
    address: string;
    decimals: BigNumber;
    currentUTokenBalance: BigNumber;
    currentStableDebt: BigNumber;
    currentVariableDebt: BigNumber;
    principalStableDebt: BigNumber;
    scaledVariableDebt: BigNumber;
    stableBorrowRate: BigNumber;
    liquidityRate: BigNumber;
    stableRateLastUpdated: number;
    usageAsCollateralEnabled: boolean;
  }>();
  const [tokenAddresses, setTokenAddresses] = useState<string[]>([]);
  const walletBalances = useUserBalances(tokenAddresses);
  const [availableBorrowAmount, setAvailableBorrowAmount] = useState<BigNumber>(BigNumber.from(0));

  useEffect(() => {
    if (ReserveData && ReserveConfigurationData && tokenAddress && ReserveData.length > 1 && reserveStats) {
      setLoading(false);
    }
  }, [ReserveData, ReserveConfigurationData, tokenAddress, reserveStats]);

  const canUseAsCollateral = useUsageAsCollateral({ address: tokenAddress });

  useEffect(() => {
    if (tokenAddress) {
      const address = tokenAddress as string;
      const t = ReserveData.find((r) => r.address.toLowerCase() === address.toLowerCase());

      if (UserAccountData && token && priceData && token.symbol && t) {
        // Maximum a user can Borrow to keep health in good standing
        const MaxAvailable = getMaxBorrows(
          UserAccountData,
          priceData[token.symbol].eth,
          token.symbol,
          decimals.toString()
        );

        if (t.availableLiquidity.lt(MaxAvailable)) {
          setAvailableBorrowAmount(t.availableLiquidity);
        } else {
          setAvailableBorrowAmount(MaxAvailable);
        }
      }
    }
  }, [ReserveConfigurationData, ReserveData, UserAccountData, tokenAddress, token, priceData, decimals]);

  useEffect(() => {
    if (!ReserveData || !ReserveConfigurationData || !tokenAddress || ReserveData.length < 1) {
      return;
    }
    const reserve = ReserveData.find((r) => r.address === tokenAddress);
    setToken(reserve);
    const addresses = [];
    if (tokenAddress) {
      addresses.push(tokenAddress);
    }
    setTokenAddresses(addresses);

    setUserReserve(UserReserveData.find((r) => r.address === tokenAddress));
    const reserveConfig = ReserveConfigurationData.find((r) => r.address === tokenAddress);
    setTokenConfig(reserveConfig);
    const decimals = reserveConfig?.decimals || BigNumber.from(18);
    setDecimals(decimals);

    const totalBorrowed = reserve?.totalStableDebt.add(reserve.totalVariableDebt) || BigNumber.from(0);
    const totalBorrowedUsd = bigNumberToUSDString(totalBorrowed, decimals, reserve?.usdPrice);
    const totalLiquidity = reserve?.availableLiquidity.add(totalBorrowed || 0) || BigNumber.from(0);
    const totalLiquidityUsd = bigNumberToUSDString(totalLiquidity || 0, decimals, reserve?.usdPrice);
    let borrowedPortion;
    let availablePortion;
    if (!totalLiquidity.isZero()) {
      const numberBorrowed = bigNumberToNumber(totalBorrowed, decimals);
      const numberLiquid = bigNumberToNumber(totalLiquidity, decimals);
      const numberAvailable = bigNumberToNumber(reserve?.availableLiquidity || 0, decimals);
      borrowedPortion = numberBorrowed / numberLiquid;
      availablePortion = numberAvailable / numberLiquid;
    } else {
      borrowedPortion = 0;
      availablePortion = 0;
    }
    const availableLiquidity = reserve?.availableLiquidity || BigNumber.from(0);
    const availableLiquidityUsd = bigNumberToUSDString(availableLiquidity, decimals, reserve?.usdPrice);

    const returnValue = {
      totalBorrowed: totalBorrowed,
      totalLiquidity: totalLiquidity,
      borrowedPortion: borrowedPortion,
      availablePortion: availablePortion,
      totalBorrowedUsd: totalBorrowedUsd,
      availableLiquidity: availableLiquidity,
      availableLiquidityUsd: availableLiquidityUsd,
      totalLiquidityUsd: totalLiquidityUsd,
    };

    setReserveStats(returnValue);
  }, [ReserveData, ReserveConfigurationData, tokenAddress, UserReserveData]);

  if (loading) {
    return <PageLoading />;
  }
  return (
    <>
      {token && reserveStats && (
        <Modal onClose={onClose}>
          <Box width={'100%'} direction="row" fill="horizontal" alignContent="center" alignSelf="center" align="center">
            <Box width={'100%'} direction="column">
              <InfoWindow flex round="5px">
                <InfoWindowBody
                  border={{ size: '1px', color: 'clrSideNavBorder' }}
                  round="5px"
                  pad={size === 'small' ? 'small' : 'xsmall'}
                  background="clrBackground"
                >
                  <Box round="5px" direction={size === 'small' ? 'column' : 'row'} align="center" justify="center">
                    <Box width={{ min: size !== 'small' ? '190px' : '' }}>
                      <InfoPanelItem
                        title="TOTAL BORROWED"
                        titleBg="clrBoxGradient"
                        titleDirection="row"
                        textSize="xsmall"
                        data={[
                          { value: '$', textSize: 'medium' },
                          {
                            value: Number(reserveStats?.totalBorrowedUsd).toLocaleString(),
                            textSize: 'medium',
                          },
                        ]}
                        align={size === 'small' ? 'center' : 'end'}
                      />
                    </Box>
                    <Box style={{ position: 'relative' }}>
                      <InfoCustomMeter value={reserveStats?.borrowedPortion} />
                      <Box
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                      >
                        <TokenLogo width="74" height="74" symbol={token.symbol} />
                      </Box>
                    </Box>
                    <Box width={{ min: size !== 'small' ? '190px' : '' }}>
                      <InfoPanelItem
                        title="AVAILABLE LIQUIDITY"
                        titleBg="clrTextAndDataListHeader"
                        titleDirection="row-reverse"
                        textSize="xsmall"
                        data={[
                          { value: '$', textSize: 'medium' },
                          {
                            value: Number(reserveStats?.availableLiquidityUsd).toLocaleString(),
                            textSize: 'medium',
                          },
                        ]}
                        align={size === 'small' ? 'center' : 'start'}
                      />
                    </Box>
                  </Box>
                  <Box margin={{ top: size == 'small' ? 'medium' : '' }} direction={'row'} wrap flex justify="around">
                    <Box width={size === 'small' ? '50%' : 'auto'}>
                      <InfoPanelItem
                        align="center"
                        textSize="xsmall"
                        title="MAXIMUM LTV"
                        data={[
                          {
                            value: tokenConfig?.ltv && bigNumberToString(tokenConfig.ltv, 2),
                            textSize: 'small',
                          },
                          { value: '%', textSize: 'small' },
                        ]}
                      />
                    </Box>
                    <Box width={size === 'small' ? '50%' : 'auto'}>
                      <InfoPanelItem
                        align="center"
                        textSize="xsmall"
                        title="LIQUIDATION THRESHOLD"
                        data={[
                          {
                            value:
                              tokenConfig?.liquidationThreshold &&
                              bigNumberToString(tokenConfig.liquidationThreshold, 2),
                            textSize: 'small',
                          },
                          { value: '%', textSize: 'small' },
                        ]}
                      />
                    </Box>
                    <Box width={size === 'small' ? '50%' : 'auto'}>
                      <InfoPanelItem
                        align="center"
                        textSize="xsmall"
                        title="LIQUIDATION PENALTY"
                        data={[
                          {
                            value:
                              tokenConfig?.liquidationBonus &&
                              (parseFloat(bigNumberToString(tokenConfig.liquidationBonus, 2)) - 100).toFixed(2),
                            textSize: 'small',
                          },
                          { value: '%', textSize: 'small' },
                        ]}
                      />
                    </Box>
                    <Box width={size === 'small' ? '50%' : 'auto'}>
                      <InfoPanelItem
                        align="center"
                        textSize="xsmall"
                        title="COLLATERAL"
                        data={[{ value: canUseAsCollateral ? 'Yes' : 'No', textSize: 'small' }]}
                      />
                    </Box>
                  </Box>
                </InfoWindowBody>
              </InfoWindow>
              <InfoWindow>
                <InfoWindowBody background="transparent">
                  <Box margin={{ top: 'small' }} direction={size === 'small' ? 'column' : 'row'} gap="small" flex>
                    <MarketDetailsBox
                      background="clrBackground"
                      borderColor="clrDetailBoxBorderTop1"
                      title="SUPPLY INFORMATION"
                      textSize="xsmall"
                    >
                      <InfoPanelItem
                        title="Supply Position"
                        textSize="small"
                        justify="between"
                        style={InfoPanelItemStyles.Horizontal}
                        data={[
                          {
                            value: userReserve && bigNumberToString(userReserve.currentUTokenBalance, decimals),
                            textSize: 'small',
                          },
                          { value: token.symbol, textSize: 'small' },
                        ]}
                      />
                      <InfoPanelItem
                        title="Wallet Balance"
                        textSize="small"
                        justify="between"
                        style={InfoPanelItemStyles.Horizontal}
                        data={[
                          {
                            value: bigNumberToString(walletBalances[0], decimals),
                            textSize: 'small',
                          },
                          { value: token.symbol, textSize: 'small' },
                        ]}
                      />
                      <InfoPanelItem
                        title="Supply APY"
                        textSize="small"
                        justify="between"
                        style={InfoPanelItemStyles.Horizontal}
                        data={[
                          {
                            value: bigNumberToString(token.liquidityRate, BigNumber.from(25)),
                            textSize: 'small',
                          },
                          { value: '%', textSize: 'small' },
                        ]}
                      />
                      <Box margin={{ top: 'medium' }} direction="row" justify="center">
                        <Link
                          to={{
                            pathname: '/supply',
                            state: { tokenAddress: tokenAddress },
                          }}
                          style={{ width: '100%' }}
                        >
                          <PrimaryBtn
                            fullWidth
                            text="Supply"
                            pad={{ vertical: 'xsmall' }}
                            textSize="medium"
                            round="medium"
                          />
                        </Link>
                      </Box>
                    </MarketDetailsBox>
                    <MarketDetailsBox
                      background="clrBackground"
                      borderColor="clrDetailBoxBorderTop3"
                      title="BORROW INFORMATION"
                      textSize="xsmall"
                    >
                      <InfoPanelItem
                        title="Borrow Position"
                        textSize="small"
                        justify="between"
                        style={InfoPanelItemStyles.Horizontal}
                        data={[
                          {
                            value:
                              userReserve &&
                              bigNumberToString(
                                userReserve.currentVariableDebt.add(userReserve.currentStableDebt),
                                decimals
                              ),
                            textSize: 'small',
                          },
                          { value: token.symbol, textSize: 'small' },
                        ]}
                      />
                      <InfoPanelItem
                        title="Available"
                        textSize="small"
                        justify="between"
                        style={InfoPanelItemStyles.Horizontal}
                        data={[
                          {
                            value: bigNumberToString(availableBorrowAmount, decimals),
                            textSize: 'small',
                          },
                          { value: token.symbol, textSize: 'small' },
                        ]}
                      />
                      <InfoPanelItem
                        title="Borrow APY"
                        textSize="small"
                        justify="between"
                        style={InfoPanelItemStyles.Horizontal}
                        data={[
                          {
                            value: bigNumberToString(token.variableBorrowRate, BigNumber.from(25)),
                            textSize: 'small',
                          },
                          { value: '%', textSize: 'small' },
                        ]}
                      />
                      <Box margin={{ top: 'medium' }} direction="row" justify="center">
                        <Link
                          to={{
                            pathname: '/borrow',
                            state: { tokenAddress: tokenAddress },
                          }}
                          style={{ width: '100%' }}
                        >
                          <PrimaryBtn
                            fullWidth
                            text="Borrow"
                            pad={{ vertical: 'xsmall' }}
                            textSize="medium"
                            round="medium"
                          />
                        </Link>
                      </Box>
                    </MarketDetailsBox>
                  </Box>
                </InfoWindowBody>
              </InfoWindow>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default MarketsDetail;
