import React, { useContext } from 'react';
import { Box, Button, ResponsiveContext, Text } from 'grommet';
import { InfoWindow, InfoWindowBody } from 'components/InfoWindow';
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types';
import { PrimaryBtn } from 'components/common';

export interface ITxnAmount {
  txnAvailability: TTxnAvailability;
  txnAmount: string;
  newHealthFactor?: string;
  setTxnAmount(amount: string): void;
  handleBackButton?(e: React.MouseEvent): void;
  handleContinue(e: React.MouseEvent): void;
  txnType: ETxnType;
  setTxnAmount(amount: string): void;
  setTxnStep(step: ETxnSteps): void;
}

export type TxnAmountContainerProps = {
  handleBackButton?: (e: React.SyntheticEvent) => void;
  handleContinue?: (e: React.MouseEvent) => void;
  header?: React.ReactNode | string;
  txnType?: string;
  buttonDisabled?: boolean;
  isPending?: boolean;
  isFinal?: boolean;
  bridge?: boolean;
};

export const TxnAmountContainer: React.FC<TxnAmountContainerProps> = ({
  handleContinue,
  header,
  children,
  txnType,
  buttonDisabled,
  isPending,
  isFinal,
  bridge,
}) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box direction="row">
      <InfoWindow flex>
        <InfoWindowBody background="clrBackground">
          <Box width="100%" align="center" alignSelf="center">
            <Box width="100%">{header}</Box>
            <Box width="100%" margin={{ top: 'xxsmall' }}>
              {children}
            </Box>
            {!isPending && !isFinal && handleContinue && (
              <PrimaryBtn
                fullWidth
                text={bridge ? 'Transfer' : txnType}
                pad={{ vertical: 'small' }}
                textSize="medium"
                round="large"
                disabled={buttonDisabled}
                onClick={handleContinue}
                margin={{
                  top: 'medium',
                  horizontal: 'medium',
                }}
              />
            )}
          </Box>
        </InfoWindowBody>
      </InfoWindow>
    </Box>
  );
};
