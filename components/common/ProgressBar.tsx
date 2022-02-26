import React, { useContext } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import './progressBar.css';
import { Theme, useTheme } from 'lib/hooks/theme/context';

const ProgressBar = ({ value, borrowTotal }: { value: number; borrowTotal: number }) => {
  const size = useContext(ResponsiveContext);
  const { themeMode } = useTheme();

  return (
    <>
      <Box
        margin={{ top: size === 'small' ? 'medium' : 'xsmall' }}
        pad={{ horizontal: size === 'small' ? 'large' : 'medium', vertical: 'medium' }}
        round="large"
        background="clrBarBackground"
      >
        <Box pad={{ vertical: size === 'small' ? 'small' : '' }}>
          {value !== NaN && (
            <Box style={{ position: 'relative' }}>
              <Box className="indicators">
                <Box
                  className={`indicator-80 indicator ${
                    themeMode === Theme.dark ? 'indicator-dark' : 'indicator-light'
                  }`}
                >
                  <Text color="clrTextAndDataListHeader" size="xsmall">
                    80%
                  </Text>
                </Box>
                <Box
                  className={`indicator-100 indicator ${
                    themeMode === Theme.dark ? 'indicator-dark' : 'indicator-light'
                  }`}
                >
                  <Text color="clrTextAndDataListHeader" size="xsmall">
                    100%
                  </Text>
                </Box>
              </Box>
              <Box width="100%" className="progress-bar" background="clrBarRailBackground">
                <Box
                  style={{ width: `${value}%` }}
                  className="progress-bar-value"
                  aria-label={borrowTotal > 0 ? `$${borrowTotal.toFixed(2)}` : ''}
                ></Box>
              </Box>
              <Box
                className="slider-thumb borrowed-value"
                background="clrPrimary"
                border={{ size: '5px', color: 'clrWhite' }}
                style={{ left: `${value}%`, transition: 'ease-in-out 1s' }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProgressBar;
