import React from 'react';
import ButtonItem from './ButtonItem';

export const BarBtn = ({ text, onClick }: { text: string; onClick?(e: React.MouseEvent): void; }) => {
  return (
    <ButtonItem onClick={onClick} background="clrWithdrawAndDepositButtonsBg" textColor= 'clrTextLight'>
      {text}
    </ButtonItem>
  );
};
