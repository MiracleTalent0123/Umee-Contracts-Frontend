import { Box, Button, BoxProps, Image, Text, TextProps, ButtonProps } from 'grommet';
import * as React from 'react';

export interface ButtonItemProps extends BoxProps {
  children?: React.ReactChild;
  textSize?: TextProps['size'];
  textColor?: TextProps['color'];
  hoverIndicator?: ButtonProps['hoverIndicator'];
  href?: ButtonProps['href'];
  onClick?(e: React.MouseEvent): void;
  gradient?: boolean
}

const ButtonItem = ({
  children,
  direction,
  justify,
  align,
  pad,
  margin,
  round,
  onClick,
  href,
  textSize,
  textColor,
  hoverIndicator,
  gradient,
  ...props
}: ButtonItemProps) => {
  return (
    <Button
      href={href}
      onClick={onClick}
      hoverIndicator={hoverIndicator || 'false'}
      style={gradient ? {
        background: 'var(--umee-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      } : undefined}
    >
      <Box
        justify={justify || 'center'}
        align={align || 'center'}
        pad={pad || { horizontal: 'small', vertical: 'xsmall' }}
        margin={margin || { horizontal: 'xsmall' }}
        round={round || '3px'}
        {...props}
      >
        <Text size={textSize || 'xsmall'} color={textColor}>
          {children}
        </Text>
      </Box>
    </Button>
  );
};

export default ButtonItem;
