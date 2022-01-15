import React from 'react';
import { Main, Layer } from 'grommet';

export const Modal: React.FC<{ onClose: (show: boolean) => void }> = ({ children, onClose }) => {
  const close = () => onClose(false);
  return (
    <Layer background="transparent" onClickOutside={close} onEsc={close}>
      <Main>{children}</Main>
    </Layer>
  );
};

export default Modal;
