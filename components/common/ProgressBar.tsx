import React from 'react';
import { Box, Text } from 'grommet';
import './progressBar.css';

const ProgressBar = ({ value, borrowTotal }: { value: number; borrowTotal: number }) => {
  return (
    <>
      <Box margin={{ top: 'xsmall' }} pad="medium" round="large" background="clrInfoBarBG">
        {value !== NaN && (
          <Box style={{ position: 'relative' }}>
            <Box className="indicators">
              <Box className="indicator indicator-80">
                <Text size="xsmall">80%</Text>
              </Box>
              <Box className="indicator indicator-100">
                <Text size="xsmall">100%</Text>
              </Box>
            </Box>
            <Box width="100%" className="progress-bar">
              <Box
                style={{ width: `${value}%` }}
                className="progress-bar-value"
                aria-label={borrowTotal > 0 ? `$${borrowTotal.toFixed(2)}` : ''}
              ></Box>
            </Box>
            <Box
              className="slider-thumb borrowed-value"
              background="clrPrimary"
              border={{ size: '5px', color: 'clrDefaultBGAndText' }}
              style={{ left: `${value}%`, transition: 'ease-in-out 1s' }}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProgressBar;
