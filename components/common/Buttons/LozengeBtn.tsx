import React from 'react';
import { BaseBtn, BaseBtnProps } from './BaseBtn';

export const LozengeBtn = (props: BaseBtnProps) => {
  return <BaseBtn {...props} pad={{vertical: 'xsmall', horizontal:'small'}} round="50%"  color='clrLozengeBorder' />;
};
