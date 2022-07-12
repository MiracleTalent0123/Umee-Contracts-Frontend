import React, { useContext } from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';
import { Theme, useTheme } from 'lib/hooks/theme/context';
import DarkSwitch from '../../public/images/sidebar/dark-mode.svg';
import LightSwitch from '../../public/images/sidebar/light-mode.svg';
import './ToggleTheme.css';

const ToggleTheme = () => {
  const { themeMode, setTheme } = useTheme();
  const size = useContext(ResponsiveContext);

  return (
    <Box onClick={() => setTheme(themeMode === Theme.light ? Theme.dark : Theme.light)}>
      <Image
        width={size === 'small' || size === 'medium' ? '20' : '15'}
        src={themeMode === Theme.light ? LightSwitch : DarkSwitch}
        alt="theme mode"
      />
    </Box>
  );
};

export default ToggleTheme;
