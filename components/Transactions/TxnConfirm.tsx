import React, { useContext } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import Loading from 'components/common/Loading/Loading';

export const TxnConfirm = ({ wallet }: { wallet: string }) => {
  const size = useContext(ResponsiveContext);

  return (
    <>
      <Box pad={{ vertical: size === 'small' ? 'large' : 'medium' }} width="100%" direction="row" justify="center">
        <Loading />
      </Box>
      <Box margin={{ bottom: 'medium' }} width="100%" direction="row" justify="center">
        <Text color="clrTextAndDataListHeader" size="small">
          Confirm transaction in {wallet} wallet
        </Text>
      </Box>
    </>
  );
};
