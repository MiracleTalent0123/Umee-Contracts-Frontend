import { Box, Button, Stack, Text } from 'grommet';
import * as React from 'react';

export interface CollateralSwitchProps {
  checked?: boolean;
  handler?(checked: boolean): void;
  enabled?: boolean;
}

const CollateralSwitch = ({ checked, handler, enabled }: CollateralSwitchProps) => {
  return (
    <Button
      focusIndicator={false}
      onClick={(e) => {
        if (handler) handler(!checked);
      }}
      disabled={!enabled}
    >
      <Box
        direction='row'
        align='center'
        gap='xsmall'
        justify='center'
      >
        <Box>
          <Text size="xsmall" color={checked ? 'clrCollateralSwitchChecked' : 'clrCollateralSwitchUnChecked'}>
            {checked ? 'Yes' : 'No'}
          </Text>
        </Box>
        <Box>
          <Stack anchor={checked ? 'right' : 'left'}>
            <Box background={checked ? 'status-ok' : 'accent-1'} round="large" pad="small" width="xxsmall" />
            <Box
              background={checked ? 'white' : 'neutral-1'}
              round="100%"
              pad="xsmall"
              margin={checked ? { right: 'xxsmall' } : { left: 'xxsmall' }}
              border={{ color: checked ? 'white' : 'neutral-1', size: '3px' }}
            />
          </Stack>
        </Box>
      </Box>
    </Button>
  );
};

export default CollateralSwitch;
