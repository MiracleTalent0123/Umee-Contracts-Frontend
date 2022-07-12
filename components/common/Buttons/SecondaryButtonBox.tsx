import React from 'react';
import { Box, Text, TextProps, BoxProps, ButtonProps } from 'grommet';
import './button.css';
import { Theme, useTheme } from 'lib/hooks/theme/context';

export interface ButtonItemProps extends BoxProps {
  text?: string;
  textSize?: TextProps['size'];
  hoverIndicator?: ButtonProps['hoverIndicator'];
  onClick?(e: React.MouseEvent): void;
  textWeight?: TextProps['weight'];
}

export const SecondaryBtnBox = ({
  text,
  direction,
  justify,
  align,
  pad,
  margin,
  round,
  onClick,
  textSize,
  hoverIndicator,
  textWeight,
  ...props
}: ButtonItemProps) => {
  const { themeMode } = useTheme();

  return (
    <Box
      className={`secondary-btn ${themeMode === Theme.dark ? 'secondary-btn-dark' : null}`}
      justify={justify || 'center'}
      align={align || 'center'}
      pad={pad || { vertical: 'xsmall' }}
      margin={margin || '0'}
      round={round || '3px'}
      border={{ color: 'clrButtonBorderGrey', size: '2px' }}
      background="clrBackground"
      onClick={onClick}
      {...props}
    >
      <Text
        weight={'normal' || textWeight}
        color="clrTextAndDataListHeader"
        style={{ letterSpacing: '0.1em' }}
        size={textSize || 'xsmall'}
      >
        {text}
      </Text>
    </Box>
  );
};
