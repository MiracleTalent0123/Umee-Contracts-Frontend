import React from 'react';
import { Box, Text, Image } from 'grommet';
import UmeeLogo from '/public/images/Logo.svg';
import dashBoardIcon from '../../public/images/dashboard-icon.svg';
import activeDashboardIcon from '../../public/images/dashboard-selected.svg';
import borrowIcon from '../../public/images/borrow-icon.svg';
import depositIcon from '../../public/images/deposit-icon.svg';
import marketsIcon from '../../public/images/markets-icon.svg';
import activeBorrowIcon from '../../public/images/borrow-selected.svg';
import activeDepositIcon from '../../public/images/deposit-selected.svg';
import activeMarketsIcon from '../../public/images/markets-selected.svg';
import stakeIcon from '../../public/images/stake-icon.svg';
import voteIcon from '../../public/images/vote-icon.svg';
import activeStakeIcon from '../../public/images/stake-selected.svg';
import activeVoteIcon from '../../public/images/vote-selected.svg';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

export interface INavItem {
  id: number;
  title: string;
  url?: string;
  icon: string;
  activeIcon: string;
}

export const SideNav = () => {
  const navItems: INavItem[] = [
    { id: 1, title: 'Markets', url: '/markets', icon: marketsIcon, activeIcon: activeMarketsIcon },
    { id: 2, title: 'Dashboard', url: '/dashboard', icon: dashBoardIcon, activeIcon: activeDashboardIcon },
    { id: 3, title: 'Supply', url: '/deposit', icon: depositIcon, activeIcon: activeDepositIcon },
    { id: 4, title: 'Borrow', url: '/borrow', icon: borrowIcon, activeIcon: activeBorrowIcon },
    { id: 5, title: 'Stake', icon: stakeIcon, activeIcon: activeStakeIcon },
    { id: 6, title: 'Vote', icon: voteIcon, activeIcon: activeVoteIcon },
  ];

  const location = useLocation();

  return (
    <Box>
      <div className="sidenav">
        <Box focusIndicator={false} justify="center" align="center">
          <Box margin={{ bottom: '-10px', left: '-12px' }}>
            <NavLink to="/">
              <Image src={UmeeLogo} alt="Umee Logo" />
            </NavLink>
          </Box>
        </Box>
        <Box>
          {navItems &&
            navItems.map((navItem, i) => (
              <Box key={i}>
                {navItem.title == 'Stake' || navItem.title == 'Vote' ? (
                  <div className="stake-vote-icons">
                    <div className="icon-img">
                      <Image className="icons" src={navItem.icon} width="35px" alt="icon" />
                      <span className="sidenav-text">{navItem.title}</span>
                      <Text size="medium" color="black" style={{ textTransform: 'uppercase' }} />
                    </div>
                  </div>
                ) : (
                  <NavLink
                    exact
                    activeClassName="active"
                    to={navItem.url ? navItem.url : '#'}
                    isActive={() => location.pathname === navItem.url}
                  >
                    {location.pathname === navItem.url // check active index against current index
                      ? navItem.icon && (
                        <div className="icon-img">
                          <Image className="icons" src={navItem.activeIcon} width="35px" alt="icon" />
                          <span className="sidenav-text">{navItem.title}</span>
                          <Text size="medium" color="black" style={{ textTransform: 'uppercase' }} />
                        </div>
                      )
                      : navItem.icon && (
                        <div className="icon-img">
                          <Image className="icons" src={navItem.icon} width="35px" alt="icon" />
                          <span className="sidenav-text">{navItem.title}</span>
                          <Text size="medium" color="black" style={{ textTransform: 'uppercase' }} />
                        </div>
                      )}
                  </NavLink>
                )}
              </Box>
            ))}
        </Box>
      </div>
    </Box>
  );
};
export default SideNav;
