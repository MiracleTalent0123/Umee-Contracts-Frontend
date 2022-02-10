import React from 'react';
import { Button, Box, Text, TextProps, BoxProps, ButtonProps } from 'grommet';

export interface ButtonItemProps extends BoxProps {
  text?: string;
  textSize?: TextProps['size'];
  hoverIndicator?: ButtonProps['hoverIndicator'];
  href?: ButtonProps['href'];
  onClick?(e: React.MouseEvent): void;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

export const PrimaryBtn = ({
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
  className,
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
        background="clrBoxGradient"
        justify={justify || 'center'}
        align={align || 'center'}
        pad={pad || { vertical: 'xsmall' }}
        margin={margin || '0'}
        round={round || '3px'}
        className={className}
        {...props}
      >
        <Text size={textSize || 'xsmall'}>{text}</Text>
      </Box>
    </Button>
  );
};
