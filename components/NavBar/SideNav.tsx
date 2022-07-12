import React, { useContext, useEffect, useState } from 'react';
import { Box, Text, Image, ResponsiveContext } from 'grommet';
import UmeeLogo from '/public/images/Logo.svg';
import dashBoardIcon from '../../public/images/dashboard-icon.png';
import activeDashboardIcon from '../../public/images/dashboard-selected.png';
import borrowIcon from '../../public/images/borrow-icon.png';
import depositIcon from '../../public/images/deposit-icon.png';
import marketsIcon from '../../public/images/markets-icon.png';
import activeBorrowIcon from '../../public/images/borrow-selected.png';
import activeDepositIcon from '../../public/images/deposit-selected.png';
import activeMarketsIcon from '../../public/images/markets-selected.png';
import stakeIcon from '../../public/images/stake-icon.png';
import voteIcon from '../../public/images/vote-icon.png';
import { NavLink, useLocation } from 'react-router-dom';
import marketsHoverIcon from '../../public/images/markets-hover-icon.svg';
import dashboardHoverIcon from '../../public/images/dashboard-hover-icon.svg';
import depositHoverIcon from '../../public/images/deposit-hover-icon.svg';
import borrowHoverIcon from '../../public/images/borrow-hover-icon.svg';
import stakeHoverIcon from '../../public/images/stake-hover-icon.svg';
import voteHoverIcon from '../../public/images/vote-hover-icon.svg';
import activeStakeIcon from '../../public/images/stake-selected.png';
import activeVoteIcon from '../../public/images/vote-selected.png';

import './NavBar.css'
import ToggleTheme from './ToggleTheme'
import ConnectWallet from 'components/ConnectWallet/ConnectWallet'
import SideNavActions from './SideNavActions'

export interface INavItem {
  id: number
  title: string
  url?: string
  link?: string
  icon: string
  activeIcon: string
  hoverIcon: string
}

export const SideNav = () => {
  const navItems: INavItem[] = [
    {
      id: 1,
      title: 'Markets',
      url: '/markets',
      icon: marketsIcon,
      activeIcon: activeMarketsIcon,
      hoverIcon: marketsHoverIcon,
    },
    {
      id: 2,
      title: 'Dashboard',
      url: '/dashboard',
      icon: dashBoardIcon,
      activeIcon: activeDashboardIcon,
      hoverIcon: dashboardHoverIcon,
    },
    {
      id: 3,
      title: 'Supply',
      url: '/supply',
      icon: depositIcon,
      activeIcon: activeDepositIcon,
      hoverIcon: depositHoverIcon,
    },
    {
      id: 4,
      title: 'Borrow',
      url: '/borrow',
      icon: borrowIcon,
      activeIcon: activeBorrowIcon,
      hoverIcon: borrowHoverIcon,
    },
    {
      id: 5,
      title: 'Stake',
      url: '/stake',
      icon: stakeIcon,
      activeIcon: activeStakeIcon,
      hoverIcon: stakeHoverIcon,
    },
    {
      id: 6,
      title: 'Vote',
      url: '/governance',
      icon: voteIcon,
      activeIcon: activeVoteIcon,
      hoverIcon: voteHoverIcon,
    },
  ]

  const location = useLocation()
  const size = useContext(ResponsiveContext)

  const [tabPos, setTabPos] = useState<number>(0)

  useEffect(() => {
    navItems.forEach((item, index) => {
      if (item.url == location.pathname) setTabPos(index)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <>
      {size !== 'small' && size !== 'medium' && (
        <Box
          className="sidenav"
          background="clrPrimary"
          border={{ side: 'right', size: '1px', color: 'clrSideNavBorder' }}
          justify="between"
        >
          <Box height={{ min: 'unset' }}>
            <Box
              pad={{ top: 'xsmall', bottom: 'xsmall' }}
              margin={{ bottom: 'small' }}
              height={{ min: 'unset' }}
              focusIndicator={false}
              justify="center"
              align="center"
            >
              <NavLink to="/">
                <Image src={UmeeLogo} alt="Umee Logo" />
              </NavLink>
            </Box>
            <Box className="sidenav-menus" margin={{ top: 'medium' }} height={{ min: 'unset' }}>
              <Box className="menu-tab" style={{ top: `calc(100% / 6 * ${tabPos})` }} />
              {navItems &&
                navItems.map((navItem, i) => (
                  <Box key={i} height="65px">
                    {navItem.url && (
                      <NavLink exact to={navItem.url ? navItem.url : '#'}>
                        <Box direction="column" justify="center" className="icon-img">
                          <Image
                            className="icons icon-default"
                            src={location.pathname === navItem.url ? navItem.activeIcon : navItem.icon}
                            width="32px"
                            alt="icon"
                          />
                          <Image className="icons icon-hover" src={navItem.hoverIcon} width="32px" alt="icon" />
                          <Text
                            size="xsmall"
                            color={location.pathname === navItem.url ? 'clrDefaultBGAndText' : 'clrNavLinkDefault'}
                            margin={{ top: 'xsmall' }}
                          >
                            {navItem.title}
                          </Text>
                        </Box>
                      </NavLink>
                    )}
                    {navItem.link && (
                      <a href={navItem.link} target="_blank" rel="noreferrer">
                        <Box direction="column" justify="center" className="icon-img">
                          <Image
                            className="icons icon-default"
                            src={location.pathname === navItem.url ? navItem.activeIcon : navItem.icon}
                            width="32px"
                            alt="icon"
                          />
                          <Image
                            className="icons icon-hover external-link"
                            src={navItem.hoverIcon}
                            width="32px"
                            alt="icon"
                          />
                          <Text
                            size="xsmall"
                            color={location.pathname === navItem.url ? 'clrDefaultBGAndText' : 'clrNavLinkDefault'}
                            margin={{ top: 'xsmall' }}
                          >
                            {navItem.title}
                          </Text>
                        </Box>
                      </a>
                    )}
                  </Box>
                ))}
            </Box>
          </Box>
          <Box
            direction="column"
            justify="center"
            width="100%"
            pad={{ horizontal: '10px' }}
            margin={{ bottom: 'medium' }}
            height={{ min: 'unset' }}
          >
            <Box margin={{ top: 'small' }}>
              <ConnectWallet />
            </Box>
            <Box margin={{ top: 'small' }} direction="row" justify="between" align="center">
              <ToggleTheme />
              <SideNavActions />
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}
