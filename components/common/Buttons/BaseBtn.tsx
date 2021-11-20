import React from 'react';
import { Button, Box } from 'grommet';
import { ButtonExtendedProps, BoxProps} from 'grommet';


export interface BaseBtnProps extends ButtonExtendedProps {
  pad?: BoxProps['pad']
  round?: BoxProps['round']
  color?: string
}



export const BaseBtn: React.FC<BaseBtnProps> = ({ color, label, onClick, children }) => {
  return (
    <Box align="center">
      <Button label={label} onClick={onClick} color={color} >
        {children}
      </Button>
    </Box>
  );
};
