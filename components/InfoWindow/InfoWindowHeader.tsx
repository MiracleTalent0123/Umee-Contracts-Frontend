import { BoxProps, CardHeader, Text, TextProps } from 'grommet';
import * as React from 'react';

export interface InfoWindowHeaderProps {
  background?: BoxProps['background'];
  pad?: BoxProps['pad'];
  textSize?: TextProps['size'];
  title: string;
}

const InfoWindowHeader = ({ background, pad, textSize, title }: InfoWindowHeaderProps) => {
  return (
    <CardHeader background={background || 'clrHeaderBg'} pad={pad || 'small'}>
      <Text size={textSize || 'medium'} color='clrHeaderText'>{title}</Text>
    </CardHeader>
  );
};

export default InfoWindowHeader;
