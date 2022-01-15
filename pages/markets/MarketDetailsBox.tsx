import React, { ReactNode } from 'react';
import { TextItem, PrimaryText, SubText } from 'components';
import { Text, Box } from 'grommet';

export const MarketDetailsBox = ({
  title,
  children,
  textSize,
  bold,
  background,
}: {
  title: string;
  children?: ReactNode;
  textSize?: string;
  bold?: boolean;
  background?: string;
}) => {
  return (
    <Box background={background || 'white'} pad="small" round="5px" fill="horizontal" width="xlarge">
      <Text size={textSize ? textSize : 'medium'} weight={bold ? 'bold' : 'normal'}>
        {title}
      </Text>
      {children}
    </Box>
  );
};
