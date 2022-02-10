import React from 'react';
import { Main, Layer, Button, ThemeContext } from 'grommet';
import { InfoBar, InfoBarHeader } from 'components/';
import { Close } from 'grommet-icons';

export const BaseModal: React.FC<{ onClose: (show: boolean) => void }> = ({ children, onClose }) => {
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
        {/* <InfoBar>
        <InfoBarHeader>
          <Button onClick={close} plain={true} icon={<Close color="clrHeaderText" />} />
        </InfoBarHeader>
      </InfoBar> */}

        <Main
          overflow="none"
          round="10px"
          background="white"
          pad={{ vertical: 'medium' }}
          gap="small"
          align="center"
        >
          {children}
        </Main>
      </Layer>
    </ThemeContext.Extend>
  );
};
