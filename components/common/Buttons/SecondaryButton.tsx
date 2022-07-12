import React from 'react';
import { Button, TextProps, BoxProps, ButtonProps } from 'grommet';
import './button.css';
import { SecondaryBtnBox } from './SecondaryButtonBox';

export interface ButtonItemProps extends BoxProps {
  text?: string;
  textSize?: TextProps['size'];
  hoverIndicator?: ButtonProps['hoverIndicator'];
  href?: ButtonProps['href'];
  onClick?(e: React.MouseEvent): void;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const SecondaryBtn = ({
  text,
  direction,
  justify,
  align,
  pad,
  margin,
  round,
  onClick,
  href,
  textSize,
  hoverIndicator,
  fullWidth,
  disabled,
  ...props
}: ButtonItemProps) => {
  return (
    <Button
      style={{ width: fullWidth ? '100%' : 'auto' }}
      href={href}
      onClick={onClick}
      hoverIndicator={hoverIndicator || 'false'}
      disabled={disabled}
    >
      <SecondaryBtnBox
        pad={pad}
        margin={margin}
        round={round}
        justify={justify}
        align={align}
        text={text}
        textSize={textSize}
        {...props}
      />
    </Button>
  );
};
