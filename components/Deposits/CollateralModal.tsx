import { Box, Text } from 'grommet'
import React from 'react'
import { BaseModal } from 'components/common/Modals/BaseModal'
import { ETxnSteps } from 'lib/types'
import { PrimaryBtn } from 'components/common'
import { TxnConfirm } from 'components/Transactions'
import { Chain, useChain } from 'lib/hooks/chain/context'

const CollateralModal = ({
  token,
  onClose,
  enabled,
  steps,
  collateralSwitchChecked,
}: {
  token: string;
  onClose: (show: boolean) => void;
  enabled: () => void;
  steps: ETxnSteps;
  collateralSwitchChecked: any;
}) => {
  const [isPending, setIsPending] = React.useState(false)
  const [isFinal, setIsFinal] = React.useState(false)
  const { chainMode } = useChain()

  React.useEffect(() => {
    steps === ETxnSteps.Pending || steps === ETxnSteps.PendingApprove || steps === ETxnSteps.PendingSubmit
      ? setIsPending(true)
      : setIsPending(false)

    steps === ETxnSteps.Failure || steps === ETxnSteps.Success ? setIsFinal(true) : setIsFinal(false)
  }, [steps])

  return (
    <BaseModal symbol={token} onClose={onClose}>
      <Box width="350px" pad={{ horizontal: 'medium' }}>
        {!isPending && !isFinal && (
          <Box margin={{ top: 'small' }}>
            <Text color="clrTextAndDataListHeader" textAlign="center" size="medium">
              Use as Collateral
            </Text>
            <Text
              color="clrTextAndDataListHeader"
              style={{ lineHeight: 'small' }}
              margin={{ vertical: 'small' }}
              size="small"
              textAlign="center"
            >
              {collateralSwitchChecked ? 'Enable' : 'Disable'} {token} to be used as collateral
              {collateralSwitchChecked && 'to increase your borrowing limit'}. Please note collateralized assets can be
              seized in liquidation.
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
        {isPending && <TxnConfirm wallet={chainMode == Chain.ethereum ? 'Metamask' : 'Keplr'} />}
      </Box>
    </BaseModal>
  )
}

export default CollateralModal
