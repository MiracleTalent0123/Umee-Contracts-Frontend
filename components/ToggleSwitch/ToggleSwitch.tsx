import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ToggleSwitch.css';
import { Box } from 'grommet';
import { Theme, useTheme } from 'lib/hooks/theme/context';

export interface ToggleSwitchProps {
  choiceA?: string;
  choiceB?: string;
  label?: string;
  defaultSelected?: string;
  handler?: string;
  handleClick?: (event: any) => void;
  enabled?: boolean;
}

const ToggleSwitch = ({
  label,
  choiceA,
  choiceB,
  defaultSelected,
  handler,
  handleClick,
  enabled,
}: ToggleSwitchProps) => {
  const [selected, setSelected] = useState(defaultSelected || choiceA);
  const { themeMode } = useTheme();

  useEffect(() => {
    if (handler) {
      handler(selected);
    }
  }, [handler, selected]);

  const getToggleColor = (currency: string) => (selected === currency ? 'clrToggleOffText' : 'clrToggleOnText');

  return (
    <Box className="container" direction="row" align="center" justify="start">
      <div className="toggle-switch">
        <input checked={enabled} onChange={handleClick} type="checkbox" className="checkbox" name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className={`inner ${themeMode === Theme.dark ? 'linner-dark' : ''}`} />
          <span className={`switch ${themeMode === Theme.dark ? 'switch-dark' : ''}`} />
        </label>
      </div>
    </Box>
  );
};

export default ToggleSwitch;
