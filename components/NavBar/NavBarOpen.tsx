import React, { useState } from 'react';
import { Box, Text, Image, Button } from 'grommet';
import MobileNav from './MobileNav';
import { Add } from 'grommet-icons';

const NavBarOpen = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <>
      <Box focusIndicator={false} onClick={() => setNavOpen(true)} direction="row" align="center" height={'42px'}>
        <Text margin={{ right: 'small' }} size="medium" color="clrTextAndDataListHeader">
          Menu
        </Text>
        <Button plain={true} icon={<Add color="clrTextAndDataListHeader" />} />
      </Box>
      <MobileNav navOpen={navOpen} close={() => setNavOpen(false)} />
    </>
  );
};

export default NavBarOpen;
