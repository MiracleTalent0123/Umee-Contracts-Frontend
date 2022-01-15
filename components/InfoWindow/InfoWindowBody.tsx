import { BoxProps, CardBody } from 'grommet';
import * as React from 'react';

export interface InfoWindowBodyProps {
  background?: BoxProps['background'];
  children?: any | any[];
  pad?: BoxProps['pad'];
  gap?: BoxProps['gap'];
  round?: BoxProps['round'];
}

const InfoWindowBody = ({ background, pad, gap, children, round }: InfoWindowBodyProps) => {
  return (
    <CardBody round={round || '3px'} background={background || 'white'} pad={pad || 'none'} gap={gap || 'none'}>
      {children}
    </CardBody>
  );
};

export default InfoWindowBody;
