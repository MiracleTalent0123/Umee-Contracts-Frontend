import clsx from 'clsx'
import { Box } from 'grommet'
import { Theme, useTheme } from 'lib/hooks/theme/context'
import React from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import './BottomSheet.css'

interface BottomSheetProps {
  open: boolean
  onDismiss?: () => void
  className?: string
  children: React.ReactNode
  header?: React.ReactNode
}

const Sheet = ({ open, onDismiss, className, children, header }: BottomSheetProps) => {
  const { themeMode } = useTheme()

  return (
    <BottomSheet
      open={open}
      onDismiss={onDismiss}
      className={clsx(className, { dark: themeMode === Theme.dark })}
      header={
        header && (
          <>
            <Box pad={{ horizontal: 'large', vertical: 'medium' }}>{header}</Box>
            <Box
              border={{ color: 'clrBorderGrey', side: 'top' }}
              style={{ maxWidth: 'initial' }}
            />
          </>
        )
      }
    >
      <Box background="clrModalBackground">
        {open && children}
      </Box>
    </BottomSheet>
  )
}

export default Sheet
