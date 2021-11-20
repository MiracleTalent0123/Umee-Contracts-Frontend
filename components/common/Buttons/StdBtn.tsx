import { Box, Text } from 'grommet';
import React from 'react';

export const StdBtn = ({
  onClick,
  text,
  width,
  disabled,
}: {
  onClick?: React.MouseEventHandler;
  text: string;
  width?: 'large' | 'medium' | 'small';
  disabled?: boolean;
}) => {
  return (
    <>
      <Box
        focusIndicator={false}
        onClick={!!onClick ? onClick : undefined}
        align="center"
        justify="center"
        pad={{vertical: 'xsmall', horizontal: 'small'}}
        background={disabled ? 'clrButtonDisabledBg' : 'clrButtonDefaultBg'}
        width={width || 'xsmall'}
        elevation="small"
        round="xsmall"
      >
        <Text size="small" color="clrButtonDefaultText">
          {text}
        </Text>
      </Box>
    </>
  );
};
