import { Box, Card, CardBody, CardHeader, Text } from 'grommet';
import * as React from 'react';
export interface InfoPanelProps {
  title?: string;
  direction?: 'row' | 'column';
  children?: any;
}

const InfoPanel = ({ children, direction, title }: InfoPanelProps) => {
  return (
    <Card round="8px" background="white" flex>
      {title && (
        <CardHeader pad={{ top: 'small', horizontal: 'medium' }}>
          <Text size="small">
            <strong>{title}</strong>
          </Text>
        </CardHeader>
      )}
      <CardBody>
        <Box
          direction={direction || 'row'}
          margin={{ horizontal: 'medium', vertical: 'small' }}
          gap="small"
        >
          {children}
        </Box>
      </CardBody>
    </Card>
  );
};

export default InfoPanel;
