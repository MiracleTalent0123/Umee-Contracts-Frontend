import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text, Image } from 'grommet';
import Image1 from '../public/images/bg-1.png';
import Image2 from '../public/images/bg-2.png';

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Background1 = () => {
  return (
    <Box direction="row" justify="center" width="full" style={{ position: 'absolute', bottom: '-165px', left: 0 }}>
      <Box className="content" pad={{ horizontal: 'xsmall' }}>
        <Image src={Image1} alt="background" width="230px" />
      </Box>
    </Box>
  );
};

const Background2 = () => {
  return (
    <Box direction="row" justify="center" width="full" style={{ position: 'absolute', bottom: '-165px', right: 0 }}>
      <Box direction="row" justify="end" className="content" pad={{ horizontal: 'xsmall' }}>
        <Image src={Image2} alt="background" width="230px" />
      </Box>
    </Box>
  );
};

const Layout: React.FC<LayoutProps> = ({ title, subtitle, children }) => {
  const location = useLocation();

  return (
    <>
      <Box pad={{ bottom: '150px' }}>
        <Box style={{ position: 'relative' }}>
          <Text weight={'bold'} style={{ fontFamily: 'Moret' }} size="xlarge">
            {title}
          </Text>
        </Box>
        <Box margin={{ top: 'large' }} pad={{ top: 'small' }}>
          {subtitle && (
            <Box className="border-gradient-bottom" pad={{ bottom: 'medium' }}>
              <Text size="medium">{subtitle}</Text>
            </Box>
          )}
        </Box>
        <Box>{children}</Box>
      </Box>
      {location.pathname === '/dashboard' ? <Background2 /> : <Background1 />}
    </>
  );
};

export default Layout;
