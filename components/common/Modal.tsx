import React, { useContext } from 'react';
import { Main, Layer, ResponsiveContext, Box, Button } from 'grommet';
import { Close } from 'grommet-icons';

export const Modal: React.FC<{ onClose: (show: boolean) => void }> = ({ children, onClose }) => {
  const close = () => onClose(false);
  const size = useContext(ResponsiveContext);

  return (
    <Layer
      className="modal-layer"
      style={{ overflow: 'auto' }}
      background="transparent"
      onClickOutside={close}
      onEsc={close}
    >
      <Main pad="small">
        {size === 'small' && (
          <Box className="modal-close">
            <Button onClick={close} plain={true} icon={<Close color="clrPrimary" />} />
          </Box>
        )}
        {children}
      </Main>
    </Layer>
  );
};

export default Modal;
