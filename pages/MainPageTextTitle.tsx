import React from 'react';
import { Box, Text } from 'grommet';
import { InfoBarHeader } from 'components';
import GradientBorder from '/public/images/gradient-border.png';

export const MainPageTextTitle = ({ title }: { title: string }) => {
  return (
    <InfoBarHeader margin={{ horizontal: 'large', top: 'medium', bottom: 'small' }}>
      <Box round="3px" flex>
        <Box pad={{ vertical: 'xsmall', horizontal: 'none' }} direction="row">
          <Box>
            <Text size="large" weight="bold" color="clrHeaderText">
              {title}
            </Text>
          </Box>
        </Box>
        <Box height="2px" background={{ image: `url(${GradientBorder})`, size: 'cover' }}></Box>
      </Box>
    </InfoBarHeader>
  );
};
