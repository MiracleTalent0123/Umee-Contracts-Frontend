import React, { useState } from 'react'
import MobileNav from './MobileNav'
import MenuOpen from 'components/common/MenuOpen'

const NavBarOpen = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  return (
    <>
      <MenuOpen onClick={() => setNavOpen(true)} />
      <MobileNav navOpen={navOpen} close={() => setNavOpen(false)} />
    </>
  )
}

export default NavBarOpen
