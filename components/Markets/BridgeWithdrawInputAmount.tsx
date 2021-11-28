import React from 'react';
import { Box, Text, Image, Spinner } from 'grommet';
import { TxnAmountContainer, ITxnAmount } from 'components/Transactions';
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types';
import { AvailableToTxnInformationRow, TxnAmountInputRow } from 'components/Transactions';
import TokenLogo from 'components/TokenLogo';
import { BigNumber, constants } from 'ethers';
import ModalHeader from 'components/ModalHeader';
import { TxnStatusBar } from 'components/Transactions/TxnStatusBar';
import _ from 'lodash';
import { mainnet } from 'lib/tokenaddresses';
import { useWeb3 } from 'api/web3';
import truncate from 'lib/truncate';
import { useStore } from '../../api/cosmosStores';
import { useAccountConnection } from '../../lib/hooks/account/useAccountConnection';

export interface WithdrawProps {
  txnAvailability: TTxnAvailability;
  setTxnAmount(amount: string): void;
  handleContinue(e: React.MouseEvent): void;
  txnStep: ETxnSteps;
  setActiveTab(activeTab: string): void;
  txnType: ETxnType;
  depositBalance: BigNumber;
}

declare global {
  interface Window {
    keplr: any;
  }
}

const BridgeWithdrawInputAmount = ({
  txnAvailability,
  setTxnAmount,
  handleContinue,
  txnStep,
  setActiveTab,
  txnType,
  depositBalance,
}: WithdrawProps) => {
  const { isAccountConnected } = useAccountConnection();
  const { accountStore, chainStore } = useStore();
  const account = accountStore.getAccount(chainStore.current.chainId);

  const { availableAmount, tokenDecimals, token } = txnAvailability;
  const [isPending, setIsPending] = React.useState(false);
  const [isFinal, setIsFinal] = React.useState(false);

  React.useEffect(() => {
    txnStep === ETxnSteps.Pending || txnStep === ETxnSteps.PendingApprove || txnStep === ETxnSteps.PendingSubmit
      ? setIsPending(true)
      : setIsPending(false);

    txnStep === ETxnSteps.Failure || txnStep === ETxnSteps.Success ? setIsFinal(true) : setIsFinal(false);
  }, [txnStep]);

  let chain = 'ethereum';
  let mainnetAddress = mainnet['WETH'];

  const web3 = useWeb3();
  const iconUrl = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${chain}/assets/${mainnetAddress}/logo.png`;

  return (
    <TxnAmountContainer
      handleContinue={handleContinue}
      txnType={txnType}
      isPending={isPending}
      isFinal={isFinal}
      header={
        token.symbol && (
          <>
            <ModalHeader symbol={token.symbol} />
            {!isPending && !isFinal && (
              <>
                <Box margin="-40px 0 0" direction="row" justify="between">
                  <Box onClick={() => setActiveTab('Deposit')}>
                    <Text color="#133A33" size="medium">
                      Deposit
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      size="medium"
                      style={{
                        background: 'linear-gradient(98.2deg, #FDA9FF -6.64%, #4DFFE5 106.64%)',
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                      }}
                    >
                      Withdraw
                    </Text>
                  </Box>
                </Box>
                <Box direction="row" margin="10px 0 10px 0">
                  <Box className="modal-tab modal-tab1"></Box>
                  <Box className="modal-tab modal-tab2 active"></Box>
                </Box>
              </>
            )}
          </>
        )
      }
    >
      {!isPending && !isFinal && (
        <>
          <AvailableToTxnInformationRow
            txnType={txnType}
            symbol={token.symbol ? token.symbol : ''}
            availableAmount={depositBalance}
            tokenDecimals={tokenDecimals}
          />
          <TxnAmountInputRow txnAvailability={txnAvailability} setTxnAmount={setTxnAmount} />
          <Box margin={{bottom: 'small'}}>
            <Text size="xsmall" weight="bold" color="black">
              From
            </Text>
            <Box pad="10px 0" width="100%" direction="row" align="center">
              <Image alt="symbol" src={iconUrl} width="40px" height="40px" />
              <Text color="#142A5B" margin={{ left: 'small' }} size="small">
                {web3.account ? truncate(web3.account, 23, 4) : ''}
              </Text>
            </Box>
            <Box>
              <Text size="12px" weight="bold" color="black">
                To
              </Text>
              <Box pad="10px 0" width="100%" direction="row" align="center">
                {token?.symbol && <TokenLogo symbol={token?.symbol} width="40" height="40" />}
                <Text margin={{ left: 'small' }} color="#142A5B" size="small">
                  {isAccountConnected && truncate(account.bech32Address, 25, 4)}
                </Text>
              </Box>
            </Box>
          </Box>
        </>
      )}
      {isPending && (
        <>
          <Box pad="20px 0" width="100%" direction="row" justify="center">
            <Spinner size="large" color="clrSpinnerLarge" />
          </Box>
          <Box margin="0 0 30px" width="100%" direction="row" justify="center">
            <Text size="small">Confirm transaction in Metamask wallet</Text>
          </Box>
        </>
      )}
      {isFinal && <TxnStatusBar text={_.capitalize(txnType)} status={txnStep} />}
    </TxnAmountContainer>
  );
};

export default BridgeWithdrawInputAmount;
