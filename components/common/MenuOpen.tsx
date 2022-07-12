import React from 'react'
import HamburgerIcon from '../../public/images/Hamburger.svg'
import { Box, Image } from 'grommet'
import HoverEffect from './HoverEffect'

const MenuOpen = ({ width, onClick }: { width?: string; onClick?: () => void }) => {
  return (
    <HoverEffect focusIndicator={false} onClick={onClick} pad='12px' round='small'>
      <Image src={HamburgerIcon} width={width} alt="menu open" />
    </HoverEffect>
  )
}

export default MenuOpen
