import React, { useContext } from 'react';
import { Main, Layer, ResponsiveContext } from 'grommet';

export const WalletsModal: React.FC<{ onClose: (show: boolean) => void }> = ({ children, onClose }) => {
  const close = () => {
    onClose(false);
  };
  const size = useContext(ResponsiveContext);

  return (
    <Layer
      position={size === 'small' || size === 'medium' ? 'bottom' : 'bottom-left'}
      className={`${
        size === 'small' || size === 'medium' ? 'wallet-modal-layer-center' : 'wallet-modal-layer-left'
      } wallet-modal-layer`}
      background="transparent"
      onClickOutside={close}
      onEsc={close}
    >
      <Main overflow="none" round="10px" background="clrBackground" align="center" margin={'auto'}>
        {children}
      </Main>
    </Layer>
  );
};
