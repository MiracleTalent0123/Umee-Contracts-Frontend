import React from 'react';
import { Box, Image, Text } from 'grommet';
import { Theme, useTheme } from 'lib/hooks/theme/context';
import DarkSwitch from '../../public/images/dark-mode-moon.svg';
import LightSwitch from '../../public/images/light-mode-sun.svg';
import './ToggleTheme.css';

const ToggleTheme = () => {
  const { themeMode, setTheme } = useTheme();

  return (
    <Box
      width="85px"
      direction="row"
      justify="between"
      align="center"
      background="clrThemeSwitchBG"
      pad="3px"
      round="xlarge"
    >
      <Box className="theme-toggle-container">
        <Box
          className={`theme-toggle-box${themeMode === Theme.dark ? ' theme-toggle-box-dark' : ''}`}
          background="clrPrimary"
          onClick={() => setTheme(themeMode === Theme.light ? Theme.dark : Theme.light)}
        >
          <Image width="25" height="25" src={themeMode === Theme.light ? LightSwitch : DarkSwitch} alt="theme mode" />
        </Box>
        {themeMode === Theme.dark ? (
          <Text
            margin={{ left: 'xsmall' }}
            className="letter-spacing dark-mode-text theme-mode-text"
            textAlign="center"
            color="clrTextAndDataListHeader"
            size="xsmall"
          >
            Dark
            <br />
            Mode
          </Text>
        ) : (
          <Text
            margin={{ right: 'xsmall' }}
            className="letter-spacing light-mode-text theme-mode-text"
            textAlign="center"
            color="clrTextAndDataListHeader"
            size="xsmall"
          >
            Light
            <br />
            Mode
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default ToggleTheme;
