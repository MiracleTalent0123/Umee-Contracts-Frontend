import { Box, Text } from 'grommet';
import React, { useState } from 'react';
import TokenLogo from '../../TokenLogo';
import CurrencyInput from '../CurrencyInput';
import TokenDropdown from '../TokenDropdown';
import { useUserCollateralData } from 'api/data/userdata';
import { useData } from 'api/data';
import { bigNumberToString, safeBigNumberToStringAllDecimals } from 'lib/number-utils';
import { useEffect } from 'react';
import { TxnAmountContainer } from 'components/Transactions';
import { TitleBlock } from 'components/common';
import { MaxSlippageBlock } from './MaxSlippageBlock';
import { ETxnSteps, TTxnNavHandlers } from 'lib/types';
import { RepayInputProps } from 'pages/repay/repayToken';
import { BigNumberToString } from 'components/common/Text/BigNumberToString';

const RepayInputCollateral = ({
  amountBorrowed,
  borrowData,
  inputAmount,
  currentHealthFactor,
  feesAmount,
  maxSlippage,
  nextHealthFactor,
  priceData,
  repayAmount,
  selectedToken,
  tokenDecimals,
  setTxnInputAmount,
  setRepayAmount,
  setRepayStep,
  setSelectedCollateralToken,
  handleContinue
}: RepayInputProps & Required<Pick<TTxnNavHandlers, 'handleContinue'>>) => {
  const { UserReserveData } = useData();
  const userCollateralData = useUserCollateralData(priceData, UserReserveData);

  const [availableCollateralAmount, setAvailableCollateralAmount] = useState<string>('0');

  useEffect(() => {
    if (selectedToken && userCollateralData && borrowData?.currentUTokenBalance) {
      const collateralData = userCollateralData[selectedToken];
      setAvailableCollateralAmount(bigNumberToString(collateralData.count, tokenDecimals));
    }
  }, [borrowData, selectedToken, tokenDecimals, userCollateralData]);

  return (
    <TxnAmountContainer
      handleBackButton={() => setRepayStep(ETxnSteps.ChooseType)}
      handleContinue={handleContinue}
      header={<TitleBlock title="Repay" desc="Select an asset and amount to repay." />}
    >
      {/* Repay Amount */}
      <Box direction="row" width="50%" gap="small" justify="end">
        <Box width="8rem">
          <Box direction="row" justify="start">
            <Text size="xsmall">Borrowed asset</Text>
          </Box>
          <Box direction="row" background="accent-1" pad="xsmall" round="3px" align="center">
            <TokenLogo symbol={borrowData.symbol || ''} width="25px" height="25px" />
            <Box pad={{ left: 'xsmall' }}>
              <Text size="small" weight="bold">
                {borrowData.symbol}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box direction="row" gap="xsmall" justify="end">
            <Text size="xsmall">Available to repay</Text>
            <Text size="xsmall" weight="bold">
              {safeBigNumberToStringAllDecimals(amountBorrowed, tokenDecimals)}
            </Text>
          </Box>
          <CurrencyInput
            amount={repayAmount}
            maxAmount={bigNumberToString(amountBorrowed, tokenDecimals)}
            setAmount={setRepayAmount}
          />
          <Box direction="row" gap="xsmall" justify="end">
            <Text size="xsmall" color="neutral-3">
              = $ {priceData ? parseFloat(repayAmount || '0') * priceData[borrowData.symbol].usd : ''} (
              {(parseFloat(repayAmount || '0') / parseFloat(bigNumberToString(amountBorrowed, tokenDecimals))) * 100}%)
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Collateral Amount */}
      <Box direction="row" width="50%" gap="small" justify="start">
        <Box>
          <Box direction="row" gap="xsmall" justify="end">
            <Text size="xsmall">Available</Text>
            <Text size="xsmall">
              <strong>{availableCollateralAmount}</strong>
            </Text>
          </Box>
          <CurrencyInput
            amount={inputAmount}
            maxAmount={availableCollateralAmount}
            setAmount={setTxnInputAmount}
            hasMaxButton={false}
          />
          <Box direction="row" gap="xsmall" justify="end">
            <Text size="xsmall" color="neutral-3">
              = $ {priceData ? (parseFloat(inputAmount || '0') * priceData[borrowData.symbol].usd).toFixed(2) : ''} (
              {(parseFloat(inputAmount || '0') / parseFloat(availableCollateralAmount)) * 100}%)
            </Text>
          </Box>
        </Box>
        <Box width="8rem">
          <Box direction="row" justify="end">
            <Text size="xsmall">Select collateral</Text>
          </Box>
          <TokenDropdown
            tokens={Object.keys(userCollateralData || {})}
            selectedToken={selectedToken}
            setSelectedToken={!!setSelectedCollateralToken ? setSelectedCollateralToken : () => null}
          />
        </Box>
      </Box>

      {/* Details */}
      <Box width="30%" gap="xxsmall" margin={{ top: 'medium' }}>
        {/* New Health Factor */}
        <Box
          direction="row"
          background="neutral-1"
          pad={{ horizontal: 'small', vertical: 'xxsmall' }}
          align="center"
          gap="xxsmall"
          justify="between"
        >
          <Box>
            <Text size="xsmall">New health factor</Text>
          </Box>
          <BigNumberToString value={currentHealthFactor} />
          <Box>
            <Text size="xsmall">{'>>'}</Text>
          </Box>
          <BigNumberToString value={nextHealthFactor} />
        </Box>

        <MaxSlippageBlock maxSlippage={maxSlippage} feesAmount={feesAmount} />
      </Box>
    </TxnAmountContainer>
  );
};

export default RepayInputCollateral;
