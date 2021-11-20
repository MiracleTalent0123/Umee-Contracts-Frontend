import { Box, Button, Image, Main, Text, Spinner } from 'grommet';
import React, { useEffect, useState } from 'react';
import { BaseModal } from 'components/common/BaseModal';
import TokenLogo from 'components/TokenLogo';
import { ETxnSteps } from 'lib/types';

const CollateralModal = ({ token: token, address: tokenAddress, onClose, enabled, steps, collateralSwitchChecked }: { token: any, address: string; onClose: (show: boolean) => void, enabled: () => void, steps:  ETxnSteps, collateralSwitchChecked: any }) => {
  const [isPending, setIsPending] = React.useState(false);
  const [isFinal, setIsFinal] = React.useState(false);

  React.useEffect(() => {
    steps === ETxnSteps.Pending || steps === ETxnSteps.PendingApprove || steps === ETxnSteps.PendingSubmit
      ? setIsPending(true)
      : setIsPending(false);

    steps === ETxnSteps.Failure || steps === ETxnSteps.Success ? setIsFinal(true) : setIsFinal(false);
  }, [steps]);
  
  return (
    <BaseModal onClose={onClose}>
      <Box width="320px" pad="20">
        {token?.symbol && (
          <>
            <Box margin="-65px 0 0" direction="row" justify="center">
              <TokenLogo 
                symbol={token?.symbol} 
                width="70"
                height="70"
              />
            </Box>
            <Box margin="-10px 0 20px" direction="row" justify="center">
              <Text size="small" style={{color: 'black', padding: '2px 8px', borderRadius: '5px', background: 'linear-gradient(110.73deg, #FDA9FF -7.25%, #4DFFE5 105.72%)'}}>{token.symbol}</Text>
            </Box>
          </>
        )}
        {(!isPending && !isFinal) && (
          <>
            <Text color="black" textAlign="center" size="medium" weight="bold">Use as Collateral</Text>
            <Text style={{lineHeight: '15px'}} margin="5px 0 50px" size="small" textAlign="center">
              Enable {token?.symbol && token.symbol} to be used as collateral to increase your borrowing limit. 
              Please note collateralized assets can be seized in liquidation.
            </Text>
            <Button onClick={enabled} style={{borderRadius: '10px', backgroundColor: '#131A33'}} size="large" color="black" primary>
              <Box pad="15px 0" justify="center">
                <Text textAlign="center" size="large">
                  {!collateralSwitchChecked ? 'Disable': 'Enable'}
                </Text>
              </Box>
            </Button>
          </>
        )}
        {isPending && (
          <>
            <Box pad="20px 0" width="100%" direction="row" justify="center">
              <Spinner size="large" color="clrSpinnerLarge" />
            </Box>
            <Box margin="0 0 30px" width="100%" direction="row" justify="center">
              <Text size="small">
                Confirm transaction in Metamask wallet
              </Text>
            </Box>
          </>
        )}
        {isFinal && (
          steps === ETxnSteps.Failure ? (
            <Box pad="30px 0" direction="row" justify="between" align="center" gap="xsmall">
              <Text size="xsmall">Failure</Text>
              <Box round="100%" background="status-error" width="10px" height="10px" />
            </Box>
          ) : (
            <Box pad="30px 0" direction="row" justify="between" align="center" gap="xsmall">
              <Text size="xsmall">Success</Text>
              <Box round="100%" background="status-ok" width="10px" height="10px" />
            </Box>
          )
        )}
      </Box>
    </BaseModal>
  );
};

export default CollateralModal;
