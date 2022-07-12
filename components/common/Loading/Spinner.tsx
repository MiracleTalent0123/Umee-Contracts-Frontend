import React from 'react';
import { BoxProps, Image } from 'grommet';
import LoadingSpin from '../../../public/images/loading-spin.svg';

const Spinner = ({ width, margin }: { width?: string; margin?: BoxProps['margin'] }) => {
  return <Image width={width || '36px'} margin={margin || ''} src={LoadingSpin} alt="loading spinner" />;
};

export default Spinner;
