import React, { Children } from 'react';
import ButtonItem, { ButtonItemProps } from './ButtonItem';

export const TxnListBtn = ({ onClick, children }: React.PropsWithChildren<ButtonItemProps>) => {
  return <ButtonItem textColor="clrTxnListButtonText" onClick={onClick} background="clrTxnListButtonBg" >{children}</ButtonItem>;
};
