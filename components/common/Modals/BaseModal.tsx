import React, { useContext } from 'react';
import { Main, Layer, ResponsiveContext, Button, Box } from 'grommet';
import { Close } from 'grommet-icons';
import { useHistory } from 'react-router-dom';
import TokenLogoWithSymbol from 'components/TokenLogoWithSymbol';

export const BaseModal: React.FC<{ onClose: (show: boolean) => void; symbol: string }> = ({
  children,
  onClose,
  symbol,
}) => {
  const history = useHistory();

  const close = () => {
    const location = history.location;
    if (location.state) history.replace({ pathname: location.pathname, state: null });
    onClose(false);
  };
  const size = useContext(ResponsiveContext);

  return (
    <Layer
      className="modal-layer"
      style={{ overflow: 'auto' }}
      background="transparent"
      onClickOutside={close}
      onEsc={close}
    >
      <TokenLogoWithSymbol width="60" height="60" symbol={symbol} />
      <Main
        overflow="none"
        round="10px"
        background="clrBackground"
        pad={{ vertical: size === 'small' ? 'large' : 'medium' }}
        gap="small"
        align="center"
        width={size === 'small' ? '95%' : ''}
        border={{ size: '1px', color: 'clrSideNavBorder' }}
        margin={{ top: '-45px', horizontal: 'auto' }}
      >
        {size === 'small' && (
          <Box className="modal-close">
            <Button onClick={close} plain={true} icon={<Close size="18px" color="clrTextAndDataListHeader" />} />
          </Box>
        )}
        <Box pad={{ top: 'medium' }} width={{ min: size !== 'small' ? '350px' : '100%' }}>
          {children}
        </Box>
      </Main>
    </Layer>
  );
};
