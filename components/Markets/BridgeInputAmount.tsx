import React, { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import capitalize from 'lodash/capitalize';
import { Box, Text, Image } from 'grommet';
import Loading from 'components/common/Loading/Loading';
import { TxnAmountContainer, } from 'components/Transactions';
import TokenLogo from 'components/TokenLogo';
import ModalHeader from 'components/ModalHeader';
import { AvailableToTxnInformationRow, TxnAmountInputRow, TxnStatusBar } from 'components/Transactions';
import { TTxnAvailability, ETxnType, ETxnSteps } from 'lib/types';
import truncate from 'lib/truncate';
import { useAccountConnection } from 'lib/hooks/account/useAccountConnection';

enum Steps {
  Input,
  Pending,
  Final
}

interface BridgeInputProps {
  txnAvailability: TTxnAvailability;
  handleContinue: (amount: number) => (e: React.MouseEvent) => void;
  onTabChange: (activeTab: ETxnType) => void;
  txnType: ETxnType;
  txnStep: ETxnSteps;
  depositTab: string;
  withdrawTab: string;
  layers: { address: string, logo: string }[]
}

interface BridgeDirectionTab {
  active: boolean
  children: React.ReactNode
  onClick: (e: React.MouseEvent) => void
}

const BridgeDirectionTab: React.FC<BridgeDirectionTab> = ({
  active,
  children,
  onClick
}) => (
  <Box onClick={onClick}>
    <Text
      size="medium"
      className={active ? 'gradient-text' : undefined}
      color={active ? undefined : '#133A33'}
      weight="bold"
    >
      {children}
    </Text>
  </Box>
);

const BridgeInputAmount: React.FC<BridgeInputProps> = ({
  txnAvailability,
  handleContinue,
  onTabChange,
  txnType,
  txnStep,
  depositTab,
  withdrawTab,
  layers
}) => {
  const [amount, setAmount] = useState('');

  const { isAccountConnected } = useAccountConnection();

  const { token, availableAmount, tokenDecimals } = txnAvailability;

  const step = useMemo(() => {
    if (
      txnStep === ETxnSteps.Pending ||
      txnStep === ETxnSteps.PendingApprove ||
      txnStep === ETxnSteps.PendingSubmit
    ) {
      return Steps.Pending;
    } else if (
      txnStep === ETxnSteps.Failure ||
      txnStep === ETxnSteps.Success
    ) {
      return Steps.Final;
    } else {
      return Steps.Input;
    }
  }, [txnStep]);

  const layerInfo = useMemo(
    () => ([(
      <>
        <TokenLogo src={layers[0].logo} width="40" height="40" />
        <Text margin={{ left: 'small' }} color="#142A5B" size="small" title={layers[0].address}>
          {isAccountConnected && truncate(layers[0].address, 25, 4)}
        </Text>
      </>
    ), (
      <>
        <Image alt="symbol" src={layers[1].logo} width="40" height="40" />
        <Text margin={{ left: 'small' }} color="#142A5B" size="small" title={layers[1].address}>
          {truncate(layers[1].address, 23, 4)}
        </Text>
      </>
    )]),
    [isAccountConnected, layers]
  );

  useEffect(() => {
    setAmount('0');
  }, [txnType]);

  if (step !== Steps.Input) {
    return (
      <TxnAmountContainer header={
        <ModalHeader symbol={token.symbol ?? ''} />
      }>
        {step === Steps.Pending && (
          <>
            <Box pad="20px 0" width="100%" direction="row" justify="center">
              <Loading />
            </Box>
            <Box margin="0 0 30px" width="100%" direction="row" justify="center">
              <Text size="small">Confirm transaction in Metamask wallet</Text>
            </Box>
          </>
        )}
        {step === Steps.Final && (
          <TxnStatusBar text={capitalize(txnType)} status={txnStep} />
        )}
      </TxnAmountContainer>
    );
  }

  return (
    <TxnAmountContainer
      txnType={txnType}
      handleContinue={handleContinue(Number(amount))}
      buttonDisabled={Number(amount) === 0}
      header={
        <>
          <ModalHeader symbol={token.symbol ?? ''} />
          <Box margin="-40px 0 0" direction="row" justify="between">
            <BridgeDirectionTab
              active={txnType === ETxnType.deposit}
              onClick={() => onTabChange(ETxnType.deposit)}
            >
              {depositTab}
            </BridgeDirectionTab>
            <BridgeDirectionTab
              active={txnType === ETxnType.withdraw}
              onClick={() => onTabChange(ETxnType.withdraw)}
            >
              {withdrawTab}
            </BridgeDirectionTab>
          </Box>
          <Box direction="row" margin="10px 0 10px 0">
            <Box className={clsx('modal-tab modal-tab1', { active: txnType === ETxnType.deposit })}></Box>
            <Box className={clsx('modal-tab modal-tab2', { active: txnType === ETxnType.withdraw })}></Box>
          </Box>
        </>
      }
    >
      <Box margin={{ top: 'small' }}>
        <AvailableToTxnInformationRow
          txnType={txnType}
          symbol={token.symbol ?? ''}
          availableAmount={availableAmount}
          tokenDecimals={tokenDecimals}
        />
        <TxnAmountInputRow
          txnAvailability={txnAvailability}
          setTxnAmount={setAmount}
          txnAmount={amount}
        />
      </Box>
      <Box margin={{bottom: 'small'}}>
        <Text size="12px" weight="bold" color="black">
          From
        </Text>
        <Box pad={{vertical: 'small'}} width="100%" direction="row" justify="between" align="center">
          <Box direction="row" justify="start" align="center">
            {layerInfo[txnType === ETxnType.deposit ? 0 : 1]}
          </Box>
        </Box>
        <Box pad={{top: 'small'}} style={{ borderTop: '2px solid #E1F0FF' }}>
          <Text size="12px" weight="bold" color="black">
            To
          </Text>
          <Box pad={{vertical: 'small'}} width="100%" direction="row" align="center">
            {layerInfo[txnType === ETxnType.withdraw ? 0 : 1]}
          </Box>
        </Box>
      </Box>
    </TxnAmountContainer>
  );
};

export default BridgeInputAmount;
