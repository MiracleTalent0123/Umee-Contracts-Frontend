import { Box, Image, Text } from 'grommet';
import React from 'react';
import Logo from '../../public/images/Logo.svg';
import CloseNav from '../../public/images/close-nav.svg';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { NavLink } from 'react-router-dom';

const MobileNav = ({ navOpen, close }: { navOpen: boolean; close: () => void }) => {
  const menus = [
    {
      title: 'Markets',
      url: '/markets',
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
    },
    {
      title: 'Supply',
      url: '/supply',
    },
    {
      title: 'Borrow',
      url: '/borrow',
    },
    { title: 'Stake' },
    { title: 'Vote' },
  ];

  return (
    <Box pad="medium" className={`navbar ${navOpen ? 'open' : ''}`} background="clrPrimary">
      <Box height={'100%'} style={{ position: 'relative' }}>
        <Box height={'42px'} direction="row" justify="between" align="center">
          <Image src={Logo} alt="logo" />
          <Box onClick={() => close()} direction="row" align="center">
            <Text color={'white'} margin={{ right: 'small' }} size="medium">
              Close
            </Text>
            <Image src={CloseNav} alt="open nav" />
          </Box>
        </Box>
        <Box margin={{ top: 'xlarge' }}>
          {menus.map((menu, index) => (
            <Box pad={{ vertical: 'small' }} key={index}>
              <NavLink onClick={() => close()} to={menu.url ? menu.url : '#'}>
                <Text size="medium" color={'white'}>
                  {menu.title}
                </Text>
              </NavLink>
            </Box>
          ))}
        </Box>
        <Box className="connect-wallet-mobile" width={'100%'} direction="row" justify="center">
          <ConnectWalletButton />
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNav;
