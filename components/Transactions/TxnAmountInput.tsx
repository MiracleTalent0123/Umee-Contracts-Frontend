import React, { useState, useEffect } from 'react';
import { Box, Text, TextInput } from 'grommet';
import { BigNumber, utils } from 'ethers';
import { TTxnAvailability } from 'lib/types';
import { MaxBtn } from 'components/common';
import '../TransactionModals/modals.css';
import TxnAmountRangeInput from './TxnAmountRangeInput';
import { useData } from 'api/data';

export type TTxnAmountInput = {
  setTxnAmount: (amount: string) => void;
  txnAvailability: TTxnAvailability;
  disabled?: boolean;
  txnAmount: string;
};
export const TxnAmountInput = ({ setTxnAmount, disabled = false, txnAvailability, txnAmount }: TTxnAmountInput) => {
  const { availableAmount, token, tokenDecimals } = txnAvailability;
  const [usdPrice, setUsdPrice] = useState<string>('0.00');
  const maxAmount = utils.formatUnits(availableAmount, tokenDecimals);
  const scales = [0, 1, 2, 3, 4];
  const [percentage, setPercentage] = useState<number>(0);
  const { priceData } = useData();

  useEffect(() => {
    if(txnAmount == '') {
      setPercentage(0);
      setUsdPrice('0.00');
    }
    if (priceData && txnAmount && token.symbol) {
      setUsdPrice((Number(txnAmount) * priceData[token.symbol].usd).toFixed(2));
    }
  }, [txnAmount, priceData, token]);

  const setInputValue = (val: string) => {
    if (Number(maxAmount) > 0) setPercentage(Number(((Number(val) / Number(maxAmount)) * 100).toFixed(0)));
    else setPercentage(0);
  };

  const setPercentageValue = (percent: string) => {
    setPercentage(Number(percent));
  };

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
                const tgt = e.target;
                // Handle input field only
                setInputValue(tgt.valueAsNumber < 0 || tgt.value === '00' ? '0' : tgt.value);
                // Handle what's to be passed up.
                const conversionTarget = utils.parseUnits(tgt.value ? tgt.value : '0', tokenDecimals).toString();
                if (availableAmount.lt(conversionTarget)) {
                  const val = utils.formatUnits(availableAmount, tokenDecimals).toString();
                  setTxnAmount(val);
                  setInputValue(val);
                } else {
                  setTxnAmount(tgt.value);
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
            <Text alignSelf="end" size="medium">
              ~${usdPrice}
            </Text>
          </Box>
        </Box>
        <Box width="20%">
          <MaxBtn
            txnAvailability={txnAvailability}
            onClickCb={(amount: string) => {
              if(Number(amount) < 0) amount = '0';
              setInputValue(amount);
              setTxnAmount(amount);
            }}
          />
        </Box>
      </Box>
      <TxnAmountRangeInput
        value={percentage}
        min={0}
        max={100}
        setValue={(value: any) => {
          setPercentageValue(value);
          setTxnAmount(((value * Number(maxAmount)) / 100).toString());
        }}
        scales={scales}
        maxAmount={maxAmount}
      />
    </>
  );
};
