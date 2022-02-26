import { Box, Button, Image, Text } from 'grommet';
import React from 'react';
import Logo from '../../public/images/Logo.svg';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { NavLink } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { Close } from 'grommet-icons';

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
          <Box focusIndicator={false} onClick={() => close()} direction="row" align="center">
            <Text color={'white'} margin={{ right: 'small' }} size="medium">
              Close
            </Text>
            <Button plain={true} icon={<Close color="clrWhite" />} />
          </Box>
        </Box>
        <Box direction="row" justify="between" margin={{ top: 'xlarge' }}>
          <Box>
            {menus.map((menu, index) => (
              <Box pad={{ bottom: 'medium' }} key={index}>
                <NavLink onClick={() => close()} to={menu.url ? menu.url : '#'}>
                  <Text size="medium" color={'white'}>
                    {menu.title}
                  </Text>
                </NavLink>
              </Box>
            ))}
          </Box>
          <Box>
            <ToggleTheme />
          </Box>
        </Box>
        <Box className="connect-wallet-mobile" width={'100%'} direction="row" justify="center">
          <ConnectWalletButton />
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNav;
