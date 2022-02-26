import React from 'react';
import { Button, Box, Text, TextProps, BoxProps, ButtonProps } from 'grommet';
import './button.css';
import { Theme, useTheme } from 'lib/hooks/theme/context';

export interface ButtonItemProps extends BoxProps {
  text?: string;
  textSize?: TextProps['size'];
  hoverIndicator?: ButtonProps['hoverIndicator'];
  href?: ButtonProps['href'];
  onClick?(e: React.MouseEvent): void;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const SecondaryBtn = ({
  text,
  direction,
  justify,
  align,
  pad,
  margin,
  round,
  onClick,
  href,
  textSize,
  hoverIndicator,
  fullWidth,
  disabled,
  ...props
}: ButtonItemProps) => {
  const { themeMode } = useTheme();

  return (
    <Button
      style={{ width: fullWidth ? '100%' : 'auto' }}
      href={href}
      onClick={onClick}
      hoverIndicator={hoverIndicator || 'false'}
      disabled={disabled}
    >
      <Box
        className={`secondary-btn ${themeMode === Theme.dark ? 'secondary-btn-dark' : null}`}
        justify={justify || 'center'}
        align={align || 'center'}
        pad={pad || { vertical: 'xsmall' }}
        margin={margin || '0'}
        round={round || '3px'}
        border={{ color: 'clrButtonBorderGrey', size: '2px' }}
        background="clrBackground"
        {...props}
      >
        <Text color="clrTextAndDataListHeader" style={{ letterSpacing: '0.1em' }} size={textSize || 'xsmall'}>
          {text}
        </Text>
      </Box>
    </Button>
  );
};
