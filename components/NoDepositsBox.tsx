import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Text } from 'grommet';
import { ButtonItem } from '.';

const NoDepositsBox = () => {
  const history = useHistory();

  return (
    <Box direction="column" alignContent="center" alignSelf="center">
      <Box justify="center">
        <Text size="medium">You have not supplied any assets</Text>
      </Box>
      <Box justify="center" pad="small">
        <ButtonItem
          onClick={() => history.push('/deposit')}
          textColor="white"
          background="#131A33"
          textSize="small"
          round="5px"
        >
          Supply
        </ButtonItem>
      </Box>
    </Box>
  );
};

export default NoDepositsBox;
