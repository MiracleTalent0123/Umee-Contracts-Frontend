import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Text } from 'grommet';
import { PrimaryBtn } from './common';

const NoDepositsBox = () => {
  const history = useHistory();

  return (
    <Box direction="column" alignContent="center" alignSelf="center">
      <Box justify="center">
        <Text color="clrTextAndDataListHeader" size="small">You have not supplied any assets</Text>
      </Box>
      <Box justify="center" pad="small">
        <PrimaryBtn
          onClick={() => history.push('/supply')}
          textSize="medium"
          round="large"
          text='Supply'
          pad={{vertical: 'small'}}
        />
      </Box>
    </Box>
  );
};

export default NoDepositsBox;
