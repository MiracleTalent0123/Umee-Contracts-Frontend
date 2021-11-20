import React from 'react';
import { Box, Text } from 'grommet';

export const PostTitleDesc = ({ text }: {text: string}) => {
  return (
    <Box>
      <Text size="small">{text}</Text>
    </Box>
  );
};
