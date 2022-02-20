import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text, Image, ResponsiveContext } from 'grommet';
import Image1 from '../public/images/bottom-bg1.png';
import Image2 from '../public/images/bottom-bg2.png';

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Background1 = ({ size }: { size: string }) => {
  return (
    <Box
      direction="row"
      justify="center"
      width="full"
      style={{ position: 'absolute', bottom: 0, left: 0 }}
    >
      <Box className="content" pad={{ horizontal: 'xsmall' }}>
        <Image src={Image1} alt="background" width={'230px'} />
      </Box>
    </Box>
  );
};

const Background2 = ({ size }: { size: string }) => {
  return (
    <Box
      direction="row"
      justify="center"
      width="full"
      style={{ position: 'absolute', bottom: 0, right: 0 }}
    >
      <Box direction="row" justify="end" className="content" pad={{ horizontal: 'xsmall' }}>
        <Image src={Image2} alt="background" width={'230px'} />
      </Box>
    </Box>
  );
};

const Layout: React.FC<LayoutProps> = ({ title, subtitle, children }) => {
  const location = useLocation();
  const size = useContext(ResponsiveContext);

  return (
    <>
      <Box pad={{ bottom: '150px' }}>
        <Box style={{ position: 'relative' }} direction="row" justify="between" align="center">
          <Text
            weight={'bold'}
            style={{ fontFamily: 'Moret' }}
            size={size === 'small' || size === 'medium' ? '36px' : 'xlarge'}
          >
            {title}
          </Text>
        </Box>
        <Box margin={{ top: 'large' }} pad={{ top: 'small' }}>
          {subtitle && (
            <Box className="border-gradient-bottom" pad={{ bottom: 'medium' }}>
              <Text size={size === 'small' ? 'small' : 'medium'}>{subtitle}</Text>
            </Box>
          )}
        </Box>
        <Box>{children}</Box>
      </Box>
      {location.pathname === '/dashboard' ? <Background2 size={size} /> : <Background1 size={size} />}
    </>
  );
};

export default Layout;
