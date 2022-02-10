import React from 'react';
import { Button, Box, Text, TextProps, BoxProps, ButtonProps } from 'grommet';
import './button.css';

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
  return (
    <Button
      style={{ width: fullWidth ? '100%' : 'auto' }}
      href={href}
      onClick={onClick}
      hoverIndicator={hoverIndicator || 'false'}
      disabled={disabled}
    >
      <Box
        background="clrDefaultBGAndText"
        className="secondary-btn"
        justify={justify || 'center'}
        align={align || 'center'}
        pad={pad || { vertical: 'xsmall' }}
        margin={margin || '0'}
        round={round || '3px'}
        border={{color: 'clrButtonBorderGrey', size: '2px'}}
        {...props}
      >
        <Text size={textSize || 'xsmall'}>{text}</Text>
      </Box>
    </Button>
  );
};
