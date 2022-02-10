import React, { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import capitalize from 'lodash/capitalize';
import { Box, Text, Image } from 'grommet';
import Loading from 'components/common/Loading/Loading';
import { TxnAmountContainer, TxnConfirm } from 'components/Transactions';
import TokenLogo from 'components/TokenLogo';
import { AvailableToTxnInformationRow, TxnAmountInputRow, TxnStatusBar } from 'components/Transactions';
import { TTxnAvailability, ETxnType, ETxnSteps } from 'lib/types';
import truncate from 'lib/truncate';
import { useAccountConnection } from 'lib/hooks/account/useAccountConnection';
import TokenLogoWithSymbol from 'components/TokenLogoWithSymbol';
import { BaseTab } from 'components/Transactions/TxnTabs';
import { utils } from 'ethers';

enum Steps {
  Input,
  Pending,
  Final,
}

interface BridgeInputProps {
  txnAvailability: TTxnAvailability;
  handleContinue: (amount: number) => (e: React.MouseEvent) => void;
  onTabChange: (activeTab: ETxnType) => void;
  txnType: ETxnType;
  txnStep: ETxnSteps;
  depositTab: string;
  withdrawTab: string;
  layers: { address: string; logo: string }[];
}

const BridgeInputAmount: React.FC<BridgeInputProps> = ({
  txnAvailability,
  handleContinue,
  onTabChange,
  txnType,
  txnStep,
  depositTab,
  withdrawTab,
  layers,
}) => {
  const [amount, setAmount] = useState('');

  const { isAccountConnected } = useAccountConnection();

  const { token, availableAmount, tokenDecimals } = txnAvailability;

  // max balance that can transfer which excludes bridge fee
  const txnMaxAvail = {
    ...txnAvailability,
    availableAmount:
      parseFloat(utils.formatUnits(availableAmount, tokenDecimals)) > 0.01
        ? availableAmount.sub(10000)
        : availableAmount,
  };

  const step = useMemo(() => {
    if (txnStep === ETxnSteps.Pending || txnStep === ETxnSteps.PendingApprove || txnStep === ETxnSteps.PendingSubmit) {
      return Steps.Pending;
    } else if (txnStep === ETxnSteps.Failure || txnStep === ETxnSteps.Success) {
      return Steps.Final;
    } else {
      return Steps.Input;
    }
  }, [txnStep]);

  const layerInfo = useMemo(
    () => [
      <>
        <TokenLogo src={layers[0].logo} width="36" height="36" />
        <Text margin={{ left: 'small' }} color="#142A5B" size="small" title={layers[0].address}>
          {isAccountConnected && truncate(layers[0].address, 25, 4)}
        </Text>
      </>,
      <>
        <Image alt="symbol" src={layers[1].logo} width="36" height="36" />
        <Text margin={{ left: 'small' }} color="#142A5B" size="small" title={layers[1].address}>
          {truncate(layers[1].address, 23, 4)}
        </Text>
      </>,
    ],
    [isAccountConnected, layers]
  );

  useEffect(() => {
    setAmount('');
  }, [txnType]);

  if (step !== Steps.Input) {
    return (
      <TxnAmountContainer header={<TokenLogoWithSymbol width="60" height="60" symbol={token.symbol ?? ''} />}>
        {step === Steps.Pending && <TxnConfirm wallet={txnType === ETxnType.deposit ? 'Keplr' : 'Metamask'} />}
      </TxnAmountContainer>
    );
  }

  return (
    <TxnAmountContainer
      txnType={txnType}
      bridge={true}
      handleContinue={handleContinue(Number(amount))}
      buttonDisabled={Number(amount) === 0}
      header={
        <>
          <TokenLogoWithSymbol width="60" height="60" symbol={token.symbol ?? ''} />
            <BaseTab
              choiceA={depositTab}
              choiceB={withdrawTab}
              defaultSelected={txnType === ETxnType.deposit}
              handler={() => onTabChange(txnType === ETxnType.deposit ? ETxnType.withdraw : ETxnType.deposit)}
              margin={{ top: 'medium' }}
            />
        </>
      }
    >
      <Box pad={{ horizontal: 'medium' }}>
        <AvailableToTxnInformationRow
          txnType={txnType}
          symbol={token.symbol ?? ''}
          availableAmount={availableAmount}
          tokenDecimals={tokenDecimals}
          bridge={true}
        />
        <TxnAmountInputRow txnAvailability={txnMaxAvail} setTxnAmount={setAmount} txnAmount={amount} />
      </Box>
      <Box
        border={{ size: '1px', color: 'clrButtonBorderGrey', side: 'top' }}
        pad={{ horizontal: 'medium', top: 'medium' }}
      >
        <Text size="xsmall" className="letter-spacing">
          From
        </Text>
        <Box pad={{ vertical: 'small' }} width="100%" direction="row" justify="between" align="center">
          <Box direction="row" justify="start" align="center">
            {layerInfo[txnType === ETxnType.deposit ? 0 : 1]}
          </Box>
        </Box>
        <Box pad={{ top: 'small' }}>
          <Text size="xsmall" className="letter-spacing">
            To
          </Text>
          <Box pad={{ vertical: 'small' }} width="100%" direction="row" align="center">
            {layerInfo[txnType === ETxnType.withdraw ? 0 : 1]}
          </Box>
        </Box>
      </Box>
    </TxnAmountContainer>
  );
};

export default BridgeInputAmount;
