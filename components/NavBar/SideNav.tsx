import React, { useContext } from 'react';
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
import activeStakeIcon from '../../public/images/stake-selected.png';
import activeVoteIcon from '../../public/images/vote-selected.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import marketsHoverIcon from '../../public/images/markets-hover-icon.svg';
import dashboardHoverIcon from '../../public/images/dashboard-hover-icon.svg';
import depositHoverIcon from '../../public/images/deposit-hover-icon.svg';
import borrowHoverIcon from '../../public/images/borrow-hover-icon.svg';
import stakeHoverIcon from '../../public/images/stake-hover-icon.svg';
import voteHoverIcon from '../../public/images/vote-hover-icon.svg';

import './NavBar.css';
import ToggleTheme from './ToggleTheme';

export interface INavItem {
  id: number;
  title: string;
  url?: string;
  link?: string;
  icon: string;
  activeIcon: string;
  hoverIcon: string;
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
      link: 'https://wallet.keplr.app/#/umee/stake',
      icon: stakeIcon,
      activeIcon: stakeIcon,
      hoverIcon: stakeHoverIcon,
    },
    {
      id: 6,
      title: 'Vote',
      link: 'https://wallet.keplr.app/#/umee/governance',
      icon: voteIcon,
      activeIcon: voteIcon,
      hoverIcon: voteHoverIcon,
    },
  ];

  const location = useLocation();
  const size = useContext(ResponsiveContext);

  return (
    <>
      {size !== 'small' && size !== 'medium' && (
        <Box
          className="sidenav"
          background="clrPrimary"
          border={{ side: 'right', size: '1px', color: 'clrSideNavBorder' }}
        >
          <Box pad={{ top: 'xsmall', bottom: 'xsmall' }} focusIndicator={false} justify="center" align="center">
            <NavLink to="/">
              <Image src={UmeeLogo} alt="Umee Logo" />
            </NavLink>
          </Box>
          <Box className="sidenav-menus" margin={{ top: 'large' }}>
            {navItems &&
              navItems.map((navItem, i) => (
                <Box key={i}>
                  {navItem.url && (
                    <NavLink
                      exact
                      activeClassName="active"
                      to={navItem.url ? navItem.url : '#'}
                      isActive={() => location.pathname === navItem.url}
                    >
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
                    <a href={navItem.link}>
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
                    </a>
                  )}
                </Box>
              ))}
          </Box>
          <Box
            direction="row"
            justify="center"
            width="100%"
            margin={{ bottom: 'medium' }}
            style={{ position: 'absolute', bottom: 0 }}
            pad={{ horizontal: 'small' }}
          >
            <ToggleTheme />
          </Box>
        </Box>
      )}
    </>
  );
};
export default SideNav;
