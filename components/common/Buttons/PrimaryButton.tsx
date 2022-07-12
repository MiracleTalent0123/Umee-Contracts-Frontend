import React, { useContext } from 'react'
import { Button, TextProps, BoxProps, ButtonProps, ResponsiveContext } from 'grommet'
import { PrimaryBtnBox } from './PrimaryButtonBox'

export interface ButtonItemProps extends BoxProps {
  text?: string;
  textSize?: TextProps['size'];
  hoverIndicator?: ButtonProps['hoverIndicator'];
  href?: ButtonProps['href'];
  onClick?(e: React.MouseEvent): void;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
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
  children,
  ...props
}: ButtonItemProps) => {
  const size = useContext(ResponsiveContext)

  return (
    <Button
      style={{ width: fullWidth ? '100%' : 'auto' }}
      href={href}
      onClick={onClick}
      hoverIndicator={hoverIndicator || 'false'}
      disabled={disabled}
    >
      <PrimaryBtnBox
        pad={pad}
        margin={margin}
        round={round}
        justify={justify}
        align={align}
        text={text}
        textSize={textSize}
        {...props}
      />
    </Button>
  )
}
