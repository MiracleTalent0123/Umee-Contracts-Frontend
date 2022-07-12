import { ETxnType } from 'lib/types'
import React from 'react'
import BottomSheet from '../BottomSheet/BottomSheet'
import BottomMenu from './BottomMenu'

const BottomMenus = ({
  open,
  setOpenSheet,
  symbol,
  items,
  setSelectedMenu,
}: {
  open: boolean
  setOpenSheet: (open: boolean) => void
  symbol: string
  items: ETxnType[]
  setSelectedMenu: (txnType: ETxnType) => void
}) => {
  return (
    <BottomSheet open={open} onDismiss={() => setOpenSheet(false)}>
      <BottomMenu symbol={symbol} items={items} onClickMenu={setSelectedMenu} />
    </BottomSheet>
  )
}

export default BottomMenus
