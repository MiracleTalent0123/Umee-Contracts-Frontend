import { BoxProps, Card } from 'grommet';
import * as React from 'react';

export interface InfoWindowProps {
  flex?: BoxProps['flex'];
  width?: BoxProps['width'];
  height?: BoxProps['height'];
  round?: BoxProps['round'];
  children?: any | any[];
}

const InfoWindow = ({ children, flex, height, round, width }: InfoWindowProps) => {
  return (
    <Card round={round || '3px'} flex={flex} width='100%' height={height} overflow="none" style={{boxShadow: 'none'}}>
      {children}
    </Card>
  );
};

export default InfoWindow;
