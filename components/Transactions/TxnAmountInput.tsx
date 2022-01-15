import React, { useMemo } from 'react';
import { Box, Text, TextInput } from 'grommet';
import { utils } from 'ethers';
import { TTxnAvailability } from 'lib/types';
import { MaxBtn } from 'components/common';
import TxnAmountRangeInput from './TxnAmountRangeInput';
import { useData } from 'api/data';
import '../TransactionModals/modals.css';

interface TTxnAmountInput {
  setTxnAmount: (amount: string) => void;
  txnAvailability: TTxnAvailability;
  disabled?: boolean;
  txnAmount: string;
};

const scales = [0, 1, 2, 3, 4];

export const TxnAmountInput: React.FC<TTxnAmountInput> = ({
  setTxnAmount,
  disabled,
  txnAvailability,
  txnAmount
}) => {
  const { availableAmount, token, tokenDecimals } = txnAvailability;
  const maxAmount = utils.formatUnits(availableAmount, tokenDecimals);
  const { priceData } = useData();

  const usdPrice = useMemo(() => {
    if (priceData && txnAmount && token.symbol) {
      return Number(txnAmount) * priceData[token.symbol].usd;
    } else {
      return 0;
    }
  }, [priceData, token.symbol, txnAmount]);

  return (
    <>
      <Box
        direction="row"
        margin={{ top: '3px', bottom: '18px' }}
        justify="end"
        align="center"
        background="#E1F0FF"
        round="5px"
        focusIndicator={true}
        pad={{ vertical: '17px' }}
      >
        <Box width="80%">
          <Box direction="row">
            <TextInput
              style={{ borderStyle: 'none', textAlign: 'right', padding: '0 5px' }}
              onChange={function (e: any) {
                const value = e.target.value === '' ? '0' : e.target.value;
                const conversionTarget = utils.parseUnits(value, tokenDecimals).toString();

                if (availableAmount.lt(conversionTarget)) {
                  const val = utils.formatUnits(availableAmount, tokenDecimals).toString();
                  setTxnAmount(val);
                } else if (value < 0) {
                  setTxnAmount('0');
                } else {
                  setTxnAmount(value);
                }
              }}
              value={txnAmount}
              placeholder="0.00"
              type="number"
              min="0"
              disabled={disabled}
            />
            <Text alignSelf="center" weight="bold" size="medium" color="#131A33">
              {token?.symbol}
            </Text>
          </Box>
          <Box margin={{ top: '-5px' }}>
            <Text alignSelf="end" size="small">
              ~${usdPrice.toFixed(2)}
            </Text>
          </Box>
        </Box>
        <Box width="20%">
          <MaxBtn
            txnAvailability={txnAvailability}
            onClickCb={(amount: string) => setTxnAmount(Math.max(Number(amount), 0).toString())}
          />
        </Box>
      </Box>
      <TxnAmountRangeInput
        value={Math.min(Math.round(Number(txnAmount) * 100 / Number(maxAmount)), 100)}
        min={0}
        max={100}
        setValue={(value: any) => setTxnAmount(Number(value * Number(maxAmount) / 100).toFixed(2))}
        scales={scales}
        maxAmount={maxAmount}
      />
    </>
  );
};

TxnAmountInput.defaultProps = {
  disabled: false
};
