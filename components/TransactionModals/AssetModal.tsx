import { Box, Button, Image, Main, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import TokenLogo from 'components/TokenLogo';
import { ETxnSteps } from 'lib/types';
import { bigNumberToString } from 'lib/number-utils';
import { BigNumber, constants } from 'ethers';
import UmeeLogo from '/public/images/Umee_logo_name_Icon_only.png';
import Loading from 'components/common/Loading/Loading';

const EnableDeposit = ({ enabled, token, steps }: { token: any, enabled: () => void, steps: ETxnSteps }) => {
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
    <Box className="modal-width" pad="20">
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
          <Text weight="bold" size="xsmall">Deposit Rates</Text>
          <Box pad="10px 0" width="100%" direction="row" justify="between" align="center"> 
            <Box direction="row" justify="start" align="center">
              {token?.symbol && (
                <TokenLogo 
                  symbol={token?.symbol} 
                  width="40"
                  height="40"
                />
              )}
              <Text margin="0 0 0 10px" size="small">Deposit APY</Text>
            </Box>
            <Text size="small">
              {token?.liquidityRate && bigNumberToString(token.liquidityRate, aprDecimals)}%
            </Text>
          </Box>
          <Box style={{borderColor: '#E1F0FF'}} border="top" pad="10px 0 30px" width="100%" direction="row"  justify="between" align="center"> 
            <Box direction="row" justify="start" align="center">
              <Image 
                alt="icon"
                width="115"
                height="40"
                src={UmeeLogo}
              />
              <Text margin="0 0 0 -66px" size="small">Umee APY</Text>
            </Box>
            <Text size="small">x.xx%</Text>
          </Box>
          <Button onClick={enabled} style={{borderRadius: '10px', backgroundColor: '#131A33'}} size="large" color="black" primary>
            <Box pad="15px 0" justify="center">
              <Text textAlign="center" size="large">Enable</Text>
            </Box>
          </Button>
        </>
      )}
      {isPending && (
        <>
          <Box pad="20px 0" width="100%" direction="row" justify="center">
            <Loading />
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
  );
};

export default EnableDeposit;
