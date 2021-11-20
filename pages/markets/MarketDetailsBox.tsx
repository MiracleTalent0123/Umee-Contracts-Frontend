import React, { ReactNode } from 'react';
import {  TextItem, PrimaryText, SubText } from 'components';
import { Text, Box} from 'grommet';

export const MarketDetailsBox = ({
  title,
  value1,
  value2,
  subColor,
  mainColor
}: {
  title: string;
  value1: ReactNode;
  value2?: ReactNode;
  subColor?: string;
  mainColor?: string;
}) => {
  return (
    <Box border={{color: 'clrLozengeBorder'}} pad="small" fill="horizontal" width="xlarge">
      <Text weight='bold'>{title}</Text>
      <TextItem>
        <PrimaryText color={mainColor} size="medium">{value1}</PrimaryText>
        <SubText color={subColor}>{value2}</SubText>
      </TextItem>
    </Box>
  );
};
