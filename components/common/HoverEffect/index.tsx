import { Box, BoxExtendedProps } from 'grommet'
import clsx from 'clsx'
import React from 'react'
import { Theme, useTheme } from 'lib/hooks/theme/context'
import './HoverEffect.css'

const HoverEffect = ({ className, children, ...other }: BoxExtendedProps) => {
  const { themeMode } = useTheme()
  return (
    <Box className={clsx(className, themeMode === Theme.light ? 'hover-light' : 'hover-dark')} {...other}>
      {children}
    </Box>
  )
}

export default HoverEffect
