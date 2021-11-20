import { Box, Card, CardBody, CardFooter, CardHeader, Text } from 'grommet';
import * as React from 'react';
import GradientBorder from '/public/images/gradient-border.png';
export interface InfoPanelProps {
  title?: string;
  direction?: 'row' | 'column';
  children?: any;
}

const InfoPanel = ({ children, direction, title }: InfoPanelProps) => {
  return (
    <Card round="3px" background="clrInfoPanelBg" flex>
      {title && (
        <CardHeader pad={{ vertical: 'small', horizontal: 'medium' }}>
          <Text size="small">
            <strong>{title}</strong>
          </Text>
        </CardHeader>
      )}
      <CardBody>
        {title && <Box height="2px" background={{ image: `url(${GradientBorder})`, size: 'cover' }}></Box>}
        <Box
          direction={direction || 'row'}
          background="clrInfoPanelBg"
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
