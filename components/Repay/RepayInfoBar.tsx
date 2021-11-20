import { BigNumber, BigNumberish } from 'ethers';
import { Box, MeterProps } from 'grommet';
import * as React from 'react';
import { IUserCollateralTotals } from 'api/data/userdata';
import { bigNumberToString, bigNumberToUSDString, safeBigNumberToUSDStringTruncate, safeBigNumberToStringAllDecimals, safeBigNumberToStringTruncate } from 'lib/number-utils';
import { ITokenData, IUserReserveData } from 'lib/types';
import { InfoPanelMeter } from '../InfoBar';
import { InfoPanelMeterTypeEnums } from '../InfoBar/InfoPanelMeter';
import { InfoWindowTableDisplay, InfoWindowTableItem, infoWinTblItemStyle } from 'components/InfoWindow';
import { HealthFactorTableItem } from 'components/common/Text/HealthFactorTableItem';

export interface RepayInfoBarProps {
  token?: ITokenData;
  borrowData?: IUserReserveData;
  amountBorrowed?: BigNumberish;
  tokenDecimals?: BigNumberish;
  userCollateralTotals?: IUserCollateralTotals;
  currentHealthFactor?: string;
  userBalance?: BigNumber;
  userCollateralChartData?: MeterProps['values'];
  loanToValue?: string;
  currentdebtETH?: BigNumber;
}

const RepayInfoBar = ({
  token,
  borrowData,
  amountBorrowed,
  tokenDecimals,
  userCollateralTotals,
  currentHealthFactor,
  userBalance,
  userCollateralChartData,
  loanToValue,
  currentdebtETH,
}: RepayInfoBarProps) => {
  const safeTokenSym = !!token && token.symbol;
  const safeTokenPrice = (token?.usdPrice ?? 0);
  const safeAmtBorrowed = (amountBorrowed ?? 0);

  return (
    <InfoWindowTableDisplay flat title={`Repay ${safeTokenSym}`}>
      <Box flex>
        <Box direction="row" gap="xlarge" flex>
          {!!tokenDecimals && (
            <InfoWindowTableItem
              title="You borrowed"
              justify="start"
              data={[
                {
                  value: `${safeBigNumberToStringAllDecimals(safeAmtBorrowed, tokenDecimals)
                  } ${safeTokenSym}`,
                  ...infoWinTblItemStyle,
                },
                {
                  value: `${safeBigNumberToUSDStringTruncate(safeAmtBorrowed, tokenDecimals, safeTokenPrice)}`,
                  textSize: 'xsmall',
                },
              ]}
            />
          )}
          {!!userCollateralTotals && (
            <InfoWindowTableItem
              title="Your collateral"
              data={[
                { value: `${userCollateralTotals.USD} USD`, ...infoWinTblItemStyle },
                { value: `${userCollateralTotals.ETH} ETH`, textSize: 'xsmall' },
              ]}
            />
          )}
          {!!currentHealthFactor && (
            <HealthFactorTableItem currentUserDebt={currentdebtETH || BigNumber.from(0)} healthFactor={currentHealthFactor} />
          )}
        </Box>
        <Box direction="row" gap="xlarge" flex>
          {!!userBalance && !!tokenDecimals && (
            <InfoWindowTableItem
              title="Wallet balance"
              data={[
                {
                  value: `${safeBigNumberToStringAllDecimals(userBalance, tokenDecimals)} ${safeTokenSym}`,
                  ...infoWinTblItemStyle,
                },
                {
                  value: `${safeBigNumberToUSDStringTruncate(userBalance, tokenDecimals, safeTokenPrice)}`,
                  textSize: 'xsmall',
                },
              ]}
            />
          )}
          {!!userCollateralChartData && (
            <InfoPanelMeter
              title="Collateral composition"
              textSize="small"
              type={InfoPanelMeterTypeEnums.Bar}
              values={userCollateralChartData}
            />
          )}
          {!!loanToValue && (
            <InfoWindowTableItem
              title="Loan to value"
              centered
              data={[{ value: `${parseFloat(loanToValue) / 100} %`, ...infoWinTblItemStyle }]}
            />
          )}
        </Box>
      </Box>
    </InfoWindowTableDisplay>
  );
};

export default RepayInfoBar;
