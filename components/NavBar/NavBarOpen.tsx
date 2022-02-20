import React, { useState } from 'react';
import { Box, Text, Image } from 'grommet';
import MobileNav from './MobileNav';
import OpenNav from '../../public/images/open-nav.svg';

const NavBarOpen = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <>
      <Box
        onClick={() => setNavOpen(true)}
        direction="row"
        align="center"
        height={'42px'}
      >
        <Text margin={{ right: 'small' }} size="medium">
          Menu
        </Text>
        <Image src={OpenNav} alt="open nav" />
      </Box>
      <MobileNav navOpen={navOpen} close={() => setNavOpen(false)} />
    </>
  );
};

export default NavBarOpen;
