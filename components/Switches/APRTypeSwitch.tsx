import { Box, Button, Stack, Text } from 'grommet';
import * as React from 'react';

const { useEffect, useState } = React;

export interface APRTypeSwitchProps {
  checked?: boolean;
  handler?(isVariable: boolean): void;
}

const APRTypeSwitch = ({ checked, handler }: APRTypeSwitchProps) => {
  const [isVariable, setUseCollateral] = useState<boolean>(checked || false);

  useEffect(() => {
    if (handler) {
      handler(isVariable);
    }
  }, [handler, isVariable]);

  return (
    <Button
      focusIndicator={false}
      onClick={(e) => {
        setUseCollateral(!isVariable);
      }}
    >
      <Box direction="row" width="small" align="center" justify="end" gap="xsmall">
        <Box>
          <Text size="small" color={isVariable ? 'brand' : 'brand'}>
            {isVariable ? 'Variable' : 'Stable'}
          </Text>
        </Box>
        <Box>
          <Stack anchor={isVariable ? 'right' : 'left'}>
            <Box background={isVariable ? 'accent-1' : 'accent-1'} round="large" pad="small" width="xxsmall" />
            <Box
              background={isVariable ? 'white' : 'neutral-1'}
              round="100%"
              pad="xsmall"
              margin={isVariable ? { right: 'xxsmall' } : { left: 'xxsmall' }}
              border={{ color: isVariable ? 'white' : 'neutral-1', size: '3px' }}
            />
          </Stack>
        </Box>
      </Box>
    </Button>
  );
};

export default APRTypeSwitch;
