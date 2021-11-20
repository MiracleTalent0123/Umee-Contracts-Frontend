import { Text } from 'grommet';
import * as React from 'react';

export interface AlertBarMessageProps {
  children: React.ReactNode;
}

const AlertBarMessage = ({ children }: AlertBarMessageProps) => <Text size="xsmall">{children}</Text>;

export default AlertBarMessage;
