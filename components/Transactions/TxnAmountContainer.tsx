import React from 'react';
import { Box, Button, Text } from 'grommet';
import { InfoWindow, InfoWindowBody } from 'components/InfoWindow';
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types';

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
};

export const TxnAmountContainer: React.FC<TxnAmountContainerProps> = ({
  handleContinue,
  header,
  children,
  txnType,
  buttonDisabled,
  isPending,
  isFinal,
}) => {
  return (
    <Box direction="row">
      <InfoWindow flex>
        <InfoWindowBody>
          <Box width="100%" align="center" alignSelf="center">
            <Box width="100%">{header}</Box>
            <Box width="100%" pad="10px 0">
              {children}
            </Box>
            {!isPending && !isFinal && handleContinue && (
              <Button
                onClick={handleContinue}
                style={{ borderRadius: '10px', backgroundColor: '#131A33', width: '100%' }}
                size="large"
                color="black"
                disabled={buttonDisabled}
                primary
              >
                <Box pad="15px 0" justify="center">
                  <Text textAlign="center" size="large">
                    {txnType}
                  </Text>
                </Box>
              </Button>
            )}
          </Box>
        </InfoWindowBody>
      </InfoWindow>
    </Box>
  );
};
