import React, { useContext } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';

interface RangeInputProps {
  setValue: (value?: any) => void;
  scales: number[];
  maxAmount: string;
  min: number;
  max: number;
  value: number;
}

const TxnAmountRangeInput = ({ value, setValue, scales, maxAmount, min, max }: RangeInputProps) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box>
      <Box
        background="clrBarBackground"
        round="large"
        pad={{ vertical: size === 'small' ? 'large' : 'medium', horizontal: 'medium' }}
      >
        <Box className="percentage-step">
          <input
            className="steps"
            type="range"
            min={min}
            max={max}
            value={value}
            step={scales.length > 1 ? (max - min) / (scales.length - 1) : undefined}
            onChange={(e) => {
              Number(maxAmount) > 0 ? setValue(e.target.value) : setValue(0);
            }}
          />
          <Box className="bubble-container">
            <Text color="clrPrimary" style={{ left: `${value}%` }} size="small" className="bubble">
              {value}%
            </Text>
          </Box>
          <Box className="slider-rail" background="clrBarRailBackground"></Box>
          <Box className="slider-track" background="clrBoxGradient" style={{ width: `${value}%` }}></Box>
          <Box className="steps">
            <Box
              className="slider-thumb"
              background="clrPrimary"
              border={{ size: '5px', color: 'clrWhite' }}
              style={{ left: `calc(${value}% - ${0.2 * value}px)` }}
            ></Box>
            <Box className="steps" direction="row">
              {scales.map((scale, index) => (
                <Box key={index} background="clrScale" className="amount-percentage" />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction="row" justify="between" align="center" pad={{ horizontal: 'medium' }} margin={{ top: 'xxsmall' }}>
        {scales.map(
          (scale, index) =>
            index != 1 &&
            index != 3 && (
              <Box className="percentage-text" direction="row" justify="center" key={index}>
                <Text color="clrTextAndDataListHeader" className="letter-spacing" size="xsmall">
                  {index * (100 / (scales.length - 1))}%
                </Text>
              </Box>
            )
        )}
      </Box>
    </Box>
  );
};

export default TxnAmountRangeInput;
