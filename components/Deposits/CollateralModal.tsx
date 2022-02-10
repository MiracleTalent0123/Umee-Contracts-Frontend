import { Box, Button, Text } from 'grommet';
import React from 'react';
import { BaseModal } from 'components/common/BaseModal';
import { ETxnSteps } from 'lib/types';
import { PrimaryBtn } from 'components/common';
import TokenLogoWithSymbol from 'components/TokenLogoWithSymbol';
import { TxnConfirm } from 'components/Transactions';

const CollateralModal = ({
  token: token,
  address: tokenAddress,
  onClose,
  enabled,
  steps,
  collateralSwitchChecked,
}: {
  token: any;
  address: string;
  onClose: (show: boolean) => void;
  enabled: () => void;
  steps: ETxnSteps;
  collateralSwitchChecked: any;
}) => {
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
      <Box width="350px" pad={{ horizontal: 'medium' }}>
        {token?.symbol && <TokenLogoWithSymbol width="60" height="60" symbol={token.symbol} />}
        {!isPending && !isFinal && (
          <Box margin={{ top: 'small' }}>
            <Text color="black" textAlign="center" size="medium">
              Use as Collateral
            </Text>
            <Text style={{ lineHeight: 'small' }} margin={{ vertical: 'small' }} size="small" textAlign="center">
              Enable {token?.symbol && token.symbol} to be used as collateral to increase your borrowing limit. Please
              note collateralized assets can be seized in liquidation.
            </Text>
            <PrimaryBtn
              fullWidth
              text={!collateralSwitchChecked ? 'Disable' : 'Enable'}
              pad={{ vertical: 'small' }}
              textSize="medium"
              round="large"
              onClick={enabled}
              margin={{ top: 'small' }}
            />
          </Box>
        )}
        {isPending && <TxnConfirm wallet="Metamask" />}
      </Box>
    </BaseModal>
  );
};

export default CollateralModal;
