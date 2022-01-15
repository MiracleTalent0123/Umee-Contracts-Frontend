import React from 'react';
import { Box, Text } from 'grommet';

interface RangeInputProps {
  setValue: (value?: any) => void;
  scales: number[];
  maxAmount: string;
  min: number;
  max: number;
  value: number;
}

const TxnAmountRangeInput: React.FC<RangeInputProps> = ({
  value,
  setValue,
  scales,
  maxAmount,
  min,
  max
}) => (
  <Box className="percentage-step">
    <input
      className="steps"
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => {
        Number(maxAmount) > 0 ? setValue(e.target.value) : setValue(0);
      }}
    />
    <Box className="bubble-container">
      <Text style={{ left: `${value}%` }} size="small" className="bubble">{value}</Text>
    </Box>
    <div className="slider-rail"></div>
    <div className="slider-track" style={{ width: `${value}%` }}></div>
    <Box className="steps">
      <Box className="slider-thumb" style={{ left: `calc(${value}% - ${0.2 * value}px)` }}></Box>
      <Box className="steps" direction="row">
        {scales.map((scale, index) => (
          <Box
            key={index}
            className={
              index * (100 / (scales.length - 1)) < value ? 'amount-percentage selected' : 'amount-percentage'
            }
          >
            <div className="price-percentage"></div>
          </Box>
        ))}
      </Box>
    </Box>
    <Box direction="row" margin={{ top: '20px' }} className="steps">
      {scales.map((scale, index) => (
        <Box className="percentage-text" direction="row" justify="center" key={index}>
          <Text size="small">{index * (100 / (scales.length - 1))}%</Text>
        </Box>
      ))}
    </Box>
  </Box>
);

export default TxnAmountRangeInput;
