import React from 'react';
import { Box, Text, BoxProps } from 'grommet';

interface TabProps {
  choiceA: string;
  choiceB: string;
  defaultSelected?: boolean;
  handler: (selected: string) => void;
  margin?: BoxProps['margin'];
}

export const BaseTab: React.FC<TabProps> = ({ choiceA, choiceB, defaultSelected, handler, margin }) => {
  return (
    <>
      <Box margin={margin || ''} direction="row" flex>
        <Box focusIndicator={false} direction="row" justify="center" onClick={() => handler(choiceA)} flex>
          <Text size="medium" color={defaultSelected ? 'clrTabPrimary' : 'clrTabDisabled'}>
            {choiceA}
          </Text>
        </Box>
        <Box focusIndicator={false} direction="row" justify="center" onClick={() => handler(choiceB)} flex>
          <Text size="medium" color={!defaultSelected ? 'clrTabPrimary' : 'clrTabDisabled'}>
            {choiceB}
          </Text>
        </Box>
      </Box>
      <Box direction="row" align="end" margin="10px 0 10px 0">
        <Box className={defaultSelected ? 'modal-tab modal-tab1 active' : 'modal-tab modal-tab1'}></Box>
        <Box className={!defaultSelected ? 'modal-tab modal-tab2 active' : 'modal-tab modal-tab2'}></Box>
      </Box>
    </>
  );
};
