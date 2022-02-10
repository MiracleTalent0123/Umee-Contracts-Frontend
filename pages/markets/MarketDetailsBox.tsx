import React, { ReactNode } from 'react';
import { Text, Box } from 'grommet';

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
  return (
    <Box background={background || 'white'} pad="small" round="5px" fill="horizontal" width="xlarge">
      <Box
        pad={{ bottom: 'xsmall' }}
        margin={{ bottom: 'xsmall' }}
        border={{ side: 'bottom', size: '2px', color: borderColor }}
      >
        <Text size={textSize ? textSize : 'medium'} weight={bold ? 'bold' : 'normal'}>
          {title}
        </Text>
      </Box>
      {children}
    </Box>
  );
};
