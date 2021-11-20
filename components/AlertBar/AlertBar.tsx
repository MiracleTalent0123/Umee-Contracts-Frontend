import { Box, Button, TextProps } from 'grommet';
import * as Icons from 'grommet-icons';
import * as React from 'react';

const { useState } = React;

export interface AlertBarProps {
  children?: React.ReactElement<TextProps>;
  message?: string;
}

const AlertBar = ({ children }: AlertBarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <Box direction="row" pad={{ horizontal: 'medium', vertical: 'xxsmall' }} background="accent-1" justify="between">
          {children}
          <Button focusIndicator={false} onClick={() => setIsVisible(!isVisible)}>
            <Box flex align="center" pad={{ left: 'small' }}>
              <Icons.Close size="small" />
            </Box>
          </Button>
        </Box>
      )}
    </>
  );
};

export default AlertBar;
