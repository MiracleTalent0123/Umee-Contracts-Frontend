import React from 'react'
import clsx from 'clsx'
import { Theme, useTheme } from 'lib/hooks/theme/context'
import './GradientBox.css'
import { Box, BoxExtendedProps } from 'grommet'
import HoverEffect from '../HoverEffect'

interface GradientBoxProps extends BoxExtendedProps {
  children?: React.ReactNode
  selected?: boolean
  noGradient?: boolean
  className?: string
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | undefined
  onClick?: () => void
}

const GradientBox = ({
  children,
  selected,
  noGradient,
  onClick,
  className,
  pad,
  margin,
  align,
  ...other
}: GradientBoxProps) => {
  const { themeMode } = useTheme()
  const Comp = onClick ? HoverEffect : Box
  return (
    <Comp
      align={align}
      onClick={onClick}
      pad={pad || '.3em'}
      margin={margin}
      className={clsx({ GradientBox: !noGradient }, className)}
      border={noGradient ? { color: 'clrBorderGrey' } : undefined}
      style={{ borderRadius: '5px', borderStyle: 'solid', borderWidth: '1px' }}
      background={selected ? themeMode === Theme.dark ? 'clrDarkGreyOnNavy' : 'clrOffWhiteBlueLine' : ''}
      focusIndicator={false}
      {...other}
    >
      {children}
    </Comp>
  )
}

GradientBox.defaultProps = {
  selected: false,
}

export default GradientBox
