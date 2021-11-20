import { Box, Text } from 'grommet';
import * as React from 'react';

const { useEffect, useState } = React;

export interface ToggleSwitchProps {
  choiceA: string;
  choiceB: string;
  defaultSelected?: string;
  handler?(selected: string): void;
}

const ToggleSwitch = ({ choiceA, choiceB, defaultSelected, handler }: ToggleSwitchProps) => {
  const [selected, setSelected] = useState(defaultSelected || choiceA);

  useEffect(() => {
    if (handler) {
      handler(selected);
    }
  }, [handler, selected]);

  const getToggleColor = (currency: string) => (selected === currency ? 'clrToggleOnText' : 'clrToggleOffText');

  return (
    <Box round={true} width="small" direction="row" background={{color:'#131A33'}} border={{ color: 'clrToggleBg', size: 'medium' }}>
      <Box
        round={true}
        focusIndicator={false}
        onClick={() => setSelected(choiceA)}
        justify="center"
        align="center"
        width="xsmall"
        pad="xxsmall"
        background={getToggleColor(choiceA)}
      >
        <Text size="small" color={getToggleColor(choiceB)}>
          {choiceA}
        </Text>
      </Box>
      <Box
        round={true}
        focusIndicator={false}
        onClick={() => setSelected(choiceB)}
        justify="center"
        align="center"
        width="xsmall"
        pad="xxsmall"
        background={getToggleColor(choiceB)}
      >
        <Text size="small" color={getToggleColor(choiceA)}>
          {choiceB}
        </Text>
      </Box>
    </Box>
  );
};

export default ToggleSwitch;
