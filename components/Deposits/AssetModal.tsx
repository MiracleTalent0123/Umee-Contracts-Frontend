import { Box, Button, Image, Main, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import TokenLogo from 'components/TokenLogo';
import { ETxnSteps } from 'lib/types';
import { bigNumberToString } from 'lib/number-utils';
import { BigNumber, constants } from 'ethers';
import { PrimaryBtn } from 'components/common';
import TokenLogoWithSymbol from 'components/TokenLogoWithSymbol';
import { TxnConfirm } from 'components/Transactions';

const EnableDeposit = ({ enabled, token, steps }: { token: any; enabled: () => void; steps: ETxnSteps }) => {
  const [isPending, setIsPending] = React.useState(false);
  const [isFinal, setIsFinal] = React.useState(false);

  useEffect(() => {
    steps === ETxnSteps.Pending || steps === ETxnSteps.PendingApprove || steps === ETxnSteps.PendingSubmit
      ? setIsPending(true)
      : setIsPending(false);

    steps === ETxnSteps.Failure || steps === ETxnSteps.Success ? setIsFinal(true) : setIsFinal(false);
  }, [steps]);

  const aprDecimals = BigNumber.from(25);

  return (
    <Box style={{ minWidth: '350px' }} pad={{ horizontal: 'medium' }}>
      {token?.symbol && <TokenLogoWithSymbol width="60" height="60" symbol={token.symbol} />}
      {!isPending && !isFinal && (
        <>
          <Text weight="bold" size="xsmall">
            Deposit Rates
          </Text>
          <Box pad="10px 0" width="100%" direction="row" justify="between" align="center">
            <Box direction="row" justify="start" align="center">
              {token?.symbol && <TokenLogo symbol={token?.symbol} width="36" height="36" />}
              <Text margin="0 0 0 10px" size="small">
                Deposit APY
              </Text>
            </Box>
            <Text size="small">{token?.liquidityRate && bigNumberToString(token.liquidityRate, aprDecimals)}%</Text>
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
