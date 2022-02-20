import React, { useContext } from 'react';
import { Main, Layer, ResponsiveContext, Button, Box } from 'grommet';
import { Close } from 'grommet-icons';

export const BaseModal: React.FC<{ onClose: (show: boolean) => void }> = ({ children, onClose }) => {
  const close = () => onClose(false);
  const size = useContext(ResponsiveContext);

  return (
    <Layer className="modal-layer" background="transparent" onClickOutside={close} onEsc={close}>
      <Main
        overflow="none"
        round="10px"
        background="white"
        pad={{ vertical: size === 'small' ? 'large' : 'medium' }}
        gap="small"
        align="center"
        width={size === 'small' ? '95%' : ''}
        margin={'auto'}
      >
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
