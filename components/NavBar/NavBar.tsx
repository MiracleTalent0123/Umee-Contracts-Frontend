import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import React from 'react';
import { Box, Button, Nav, Text, Image } from 'grommet';
import UmeeLogo from '/public/images/Umee_logo_name_sm.png';
import { Link } from 'react-router-dom';
export interface INavItem {
  id: number;
  title: string;
  url: string;
}

const NavBar = () => {
  const navItems: INavItem[] = [
    { id: 1, title: 'Markets', url: '/markets' },
    { id: 2, title: 'My Dashboard', url: '/' },
    { id: 3, title: 'Deposit', url: '/deposit' },
    { id: 4, title: 'Borrow', url: '/borrow' },
    // { id: 5, title: 'Swap', url: '/swap' },
  ];

  return (
    <Box>
      <Nav
        direction="row"
        background="brand"
        pad={{ horizontal: 'medium' }}
        border={{ side: 'bottom', color: 'accent-1', size: 'small' }}
        gap="small"
        justify="between"
      >
        <Box focusIndicator={false} justify="center" align="center">
          <Link to="/">
            <Box margin={{ vertical: '12px' }}>
              <Image margin="xxsmall" src={UmeeLogo} alt="Umee Logo" />
            </Box>
          </Link>
        </Box>

        <Box direction="row" justify="between">
          {navItems &&
            navItems.map((navItem) => (
              <Box
                key={navItem.title}
                focusIndicator={false}
                justify="center"
                align="center"
                pad={{ horizontal: 'small' }}
              >
                <Link to={navItem.url}>
                  <Button>
                    <Text size="medium" color="clrNavItemText" style={{ textTransform: 'uppercase' }}>
                      {navItem.title}
                    </Text>
                  </Button>
                </Link>
              </Box>
            ))}
          <Box direction="row" margin={{ left: 'small', vertical: 'xsmall' }} gap="small">
            <ConnectWalletButton />
          </Box>
        </Box>
      </Nav>
    </Box>
  );
};

export default NavBar;
