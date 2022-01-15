import React from 'react';
import { Box, Text } from 'grommet';
import './progressBar.css';

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <>
      <Box className="indicators">
        <Box className="indicator indicator-80">
          <Text className='' size="small">80%</Text>
        </Box>
        <Box className="indicator indicator-100">
          <Text size="small">100%</Text>
        </Box>
      </Box>
      {value !== NaN && (
        <Box width="100%" className="progress-bar">
          <Box style={{ width: `${value}%` }} className="progress-bar-value" aria-label={`${value}%`}></Box>
        </Box>
      )}
    </>
  );
};

export default ProgressBar;
