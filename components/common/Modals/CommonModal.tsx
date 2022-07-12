import React from 'react';
import { Main, Layer, LayerProps, BoxProps, ThemeContext } from 'grommet';

export const Modal = ({
  children,
  onClose,
  position,
  width,
  fullwidth,
  margin,
}: {
  children: React.ReactNode;
  onClose: (show: boolean) => void;
  position: LayerProps['position'];
  width?: BoxProps['width'];
  fullwidth?: boolean;
  margin?: BoxProps['margin'];
}) => {
  const close = () => {
    onClose(false);
  };

  return (
    <ThemeContext.Extend
      value={{
        layer: {
          overlay: {
            background: 'transparent',
          },
        },
      }}
    >
      <Layer
        style={{ width: fullwidth ? '100%' : 'auto', overflow: 'auto', borderRadius: '0px' }}
        position={position}
        background="white"
        onClickOutside={close}
        onEsc={close}
        margin={margin || ''}
      >
        <Main width={width || '100%'}>{children}</Main>
      </Layer>
    </ThemeContext.Extend>
  );
};
