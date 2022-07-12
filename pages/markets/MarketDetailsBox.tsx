import React, { ReactNode, useContext } from 'react';
import { Text, Box, ResponsiveContext, BoxProps } from 'grommet';

export const MarketDetailsBox = ({
  title,
  children,
  textSize,
  bold,
  background,
  borderColor,
}: {
  title: string;
  children?: ReactNode;
  textSize?: string;
  bold?: boolean;
  background?: string;
  borderColor?: string;
}) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box
      background={background || 'white'}
      pad={size === 'small' ? 'medium' : 'small'}
      round="5px"
      fill="horizontal"
      width="xlarge"
      border={{ size: '1px', color: 'clrSideNavBorder' }}
    >
      <Box
        pad={{ bottom: 'xsmall' }}
        margin={{ bottom: 'xsmall' }}
        border={{ side: 'bottom', size: '2px', color: borderColor }}
      >
        <Text
          style={{ textTransform: 'uppercase' }}
          color="clrTextAndDataListHeader"
          size={textSize ? textSize : 'medium'}
          weight={bold ? 'bold' : 'normal'}
        >
          {title}
        </Text>
      </Box>
      {children}
    </Box>
  );
};
