import React, { useContext } from 'react';
import { Main, Layer, ResponsiveContext, Box, Button } from 'grommet';
import { Close } from 'grommet-icons';

export const Modal: React.FC<{ onClose: (show: boolean) => void; className?: string }> = ({
  children,
  onClose,
  className,
}) => {
  const close = () => onClose(false);
  const size = useContext(ResponsiveContext);

  return (
    <Layer
      className={`modal-layer ${className && className}`}
      style={{ overflow: 'auto' }}
      background="transparent"
      onClickOutside={close}
      onEsc={close}
    >
      <Main pad="small">
        {size === 'small' && (
          <Box className="modal-base-close">
            <Button onClick={close} plain={true} icon={<Close color="clrTextAndDataListHeader" />} />
          </Box>
        )}
        {children}
      </Main>
    </Layer>
  );
};

export default Modal;
