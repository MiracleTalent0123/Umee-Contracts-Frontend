import React, { useContext } from 'react'
import clsx from 'clsx'
import { Button, Box, Text, TextProps, BoxProps, ButtonProps, ResponsiveContext } from 'grommet'

export interface ButtonItemProps extends BoxProps {
  text?: string;
  textSize?: TextProps['size'];
  hoverIndicator?: ButtonProps['hoverIndicator'];
  href?: ButtonProps['href'];
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  textWeight?: TextProps['weight']
}

export const PrimaryBtnBox = ({
  text,
  direction,
  justify,
  align,
  pad,
  margin,
  round,
  href,
  textSize,
  hoverIndicator,
  disabled,
  className,
  children,
  textWeight,
  ...props
}: ButtonItemProps) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box
      background="clrBoxGradient"
      justify={justify || 'center'}
      align={align || 'center'}
      pad={pad || { vertical: size === 'small' ? 'medium' : 'small', horizontal: 'medium' }}
      margin={margin || '0'}
      round={round || '3px'}
      className={clsx({'primary-btn': !disabled}, className)}
      direction="row"
      {...props}
    >
      {text && <Text weight={'normal' || textWeight} size={textSize || 'xsmall'}>{text}</Text>}
      {children}
    </Box>
  )
}
