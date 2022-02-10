import React from 'react';
import { Main, Layer, ThemeContext } from 'grommet';

export const Modal: React.FC<{ onClose: (show: boolean) => void }> = ({ children, onClose }) => {
  const close = () => onClose(false);
  return (
    <ThemeContext.Extend
      value={{
        layer: {
          overlay: {
            background: 'clrOverlay',
          },
        },
      }}
    >
      <Layer background="transparent" onClickOutside={close} onEsc={close}>
        <Main>{children}</Main>
      </Layer>
    </ThemeContext.Extend>
  );
};

export default Modal;
