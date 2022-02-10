import React from 'react';
import { Box, Text } from 'grommet';
import Loading from 'components/common/Loading/Loading';

export const TxnConfirm = ({ wallet }: { wallet: string }) => {
  return (
    <>
      <Box pad={{vertical: 'medium'}} width="100%" direction="row" justify="center">
        <Loading />
      </Box>
      <Box margin={{bottom: 'medium'}} width="100%" direction="row" justify="center">
        <Text size="small">Confirm transaction in {wallet} wallet</Text>
      </Box>
    </>
  );
};
