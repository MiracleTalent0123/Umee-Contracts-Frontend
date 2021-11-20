import React, { useState } from 'react';
import { Box, Button, Nav, Text, Image } from 'grommet';
import UmeeLogo from '/public/images/Umee_logo_name_Icon_only.png';
import { Link } from 'react-router-dom';
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
import { NavLink } from 'react-router-dom'
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
    { id: 1, title: 'Markets', url: '/markets', icon: marketsIcon, activeIcon: activeMarketsIcon},
    { id: 2, title: 'Deposit', url: '/deposit', icon: depositIcon, activeIcon: activeDepositIcon},
    { id: 3, title: 'Borrow', url: '/borrow', icon: borrowIcon, activeIcon: activeBorrowIcon },
    { id: 4, title: 'Stake', icon: stakeIcon, activeIcon: activeStakeIcon },
    { id: 5, title: 'Vote', icon: voteIcon, activeIcon: activeVoteIcon },
  ];

  const [newActiveLink, setNewActiveLink] = useState(0);

  return (
    <Box>
      <div className="sidenav">
        <Box focusIndicator={false} justify="center" align="center">
          <Box margin={{ bottom: '40px', top:'10px', left: '40px' }} >
            <img height="60px" width="170px" src={UmeeLogo} alt="Umee Logo" />
          </Box>
        </Box>
        <Box direction="column" justify="between">
        {navItems &&
          navItems.map((navItem, i) => (  
            <>
              {navItem.title == "Stake" || navItem.title == "Vote" ?  
                <div className="stake-vote-icons" >
                  <div className="icon-img">
                    <img className='icons' src={navItem.icon} height='32px' width='32px' alt='icon'/>
                    <span className="sidenav-text">{navItem.title}</span>
                    <Text size="medium" color="black" style={{ textTransform: 'uppercase' }} />
                  </div>
                </div>
              :
                <NavLink 
                  exact
                  activeClassName="active" 
                  to={navItem.url}
                  isActive={(match: any, location: any) => {
                    match && setNewActiveLink(i); // set active index
                    return match; // return boolean
                  }}
                >
                  {newActiveLink === i // check active index against current index
                    ? navItem.icon && (
                      <div className="icon-img">
                        <img className='icons' src={navItem.activeIcon} height='32px' width='32px' alt='icon' />
                        <span className="sidenav-text">{navItem.title}</span>
                        <Text size="medium" color="black" style={{ textTransform: 'uppercase' }} />
                      </div>
                      )
                    : navItem.icon && (
                      <div className="icon-img">
                        <img className='icons' src={navItem.icon} height='32px' width='32px' alt='icon'/>
                        <span className="sidenav-text">{navItem.title}</span>
                        <Text size="medium" color="black" style={{ textTransform: 'uppercase' }} />
                      </div>
                  )}
                </NavLink>
              }
            </>
          ))} 
        </Box>
      </div>
    </Box>
  );
};
export default SideNav;

