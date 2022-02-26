import { BoxProps, CardBody } from 'grommet';
import * as React from 'react';

export interface InfoWindowBodyProps {
  background?: BoxProps['background'];
  children?: any | any[];
  pad?: BoxProps['pad'];
  gap?: BoxProps['gap'];
  round?: BoxProps['round'];
  border?: BoxProps['border'];
}

const InfoWindowBody = ({ background, pad, gap, children, round, border }: InfoWindowBodyProps) => {
  return (
    <CardBody
      border={border}
      round={round || '3px'}
      background={background || 'white'}
      pad={pad || 'none'}
      gap={gap || 'none'}
    >
      {children}
    </CardBody>
  );
};

export default InfoWindowBody;
