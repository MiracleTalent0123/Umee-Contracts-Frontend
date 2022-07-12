import { Box, ResponsiveContext, Text } from 'grommet';
import React, { useEffect, useContext } from 'react';
import TokenLogo from 'components/TokenLogo';
import { ETxnSteps, ETxnType } from 'lib/types';
import { bigNumberToString } from 'lib/number-utils';
import { BigNumber } from 'ethers';
import { PrimaryBtn } from 'components/common';
import { TxnConfirm } from 'components/Transactions';

const aprDecimals = BigNumber.from(25);

const EnableDeposit = ({ enabled, token, steps }: { token: any; enabled: () => void; steps: ETxnSteps }) => {
  const [isPending, setIsPending] = React.useState(false);
  const [isFinal, setIsFinal] = React.useState(false);

  useEffect(() => {
    steps === ETxnSteps.Pending || steps === ETxnSteps.PendingApprove || steps === ETxnSteps.PendingSubmit
      ? setIsPending(true)
      : setIsPending(false);

    steps === ETxnSteps.Failure || steps === ETxnSteps.Success ? setIsFinal(true) : setIsFinal(false);
  }, [steps]);

  const size = useContext(ResponsiveContext)

  return (
    <Box pad={size === 'small' ? 'large' : { horizontal: 'medium' }}>
      {!isPending && !isFinal && (
        <>
          <Text color="clrTextAndDataListHeader" size="xsmall">
            {ETxnType.deposit} Rates
          </Text>
          <Box pad="10px 0" width="100%" direction="row" justify="between" align="center">
            <Box direction="row" justify="start" align="center">
              {token?.symbol && <TokenLogo symbol={token?.symbol} width="36" height="36" />}
              <Text color="clrTextAndDataListHeader" margin="0 0 0 10px" size="small">
                {ETxnType.deposit} APY
              </Text>
            </Box>
            <Text color="clrTextAndDataListHeader" size="small">
              {token?.liquidityRate && bigNumberToString(token.liquidityRate, aprDecimals)}%
            </Text>
          </Box>
          <PrimaryBtn
            fullWidth
            text="Enable"
            pad={{ vertical: 'small' }}
            textSize="medium"
            round="large"
            onClick={enabled}
            margin={{ top: 'small' }}
          />
        </>
      )}
      {isPending && <TxnConfirm wallet="Metamask" />}
    </Box>
  );
};

export default EnableDeposit;
