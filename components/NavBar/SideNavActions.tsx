import React, { useContext } from 'react';
import { Box, BoxProps, Image, ResponsiveContext, Text } from 'grommet';
import DocsIcon from '../../public/images/sidebar/Docs icon.svg';
import TwitterIcon from '../../public/images/sidebar/twitter-white.png';
import DiscordIcon from '../../public/images/sidebar/discord-white.png';

const SideNavActions = ({ margin }: { margin?: BoxProps['margin'] }) => {
  const actions = [
    { label: 'Docs', url: 'https://docs.umee.cc/umee/overview/what-is-umee', img: DocsIcon },
    { label: 'Twitter', url: 'https://twitter.com/Umee_CrossChain?s=20&t=i-FnBForXfxPuyELhgNd-g', img: TwitterIcon },
    { label: 'Discord', url: 'https://discord.com/invite/umee', img: DiscordIcon },
  ];
  const size = useContext(ResponsiveContext);

  return (
    <>
      {actions.map((action, index) => (
        <a key={index} href={action.url} target="_blank" rel="noreferrer">
          {size === 'medium' || size === 'small' ? (
            <Box direction="row" align="center" margin={{ bottom: '24px' }}>
              <Box width={'20px'} direction="row" justify="center">
                <Image src={action.img} width="auto" alt="umee links" />
              </Box>
              <Text margin={{ left: 'small' }} color="clrWhite" size="small">
                {action.label}
              </Text>
            </Box>
          ) : (
            <Box>
              <Image src={action.img} alt="umee links" />
            </Box>
          )}
        </a>
      ))}
    </>
  );
};

export default SideNavActions;
