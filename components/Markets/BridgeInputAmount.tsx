import React from 'react';
import { Box, Text, Image } from 'grommet';
import Loading from 'components/common/Loading/Loading';
import { TxnAmountContainer, ITxnAmount } from 'components/Transactions';
import { TTxnAvailability, ETxnSteps, ETxnType } from 'lib/types';
import { AvailableToTxnInformationRow, TxnAmountInputRow } from 'components/Transactions';
import TokenLogo from 'components/TokenLogo';
import { useWeb3 } from 'api/web3';
import { mainnet } from 'lib/tokenaddresses';
import truncate from 'lib/truncate';
import ModalHeader from 'components/ModalHeader';
import { TxnStatusBar } from 'components/Transactions/TxnStatusBar';
import _ from 'lodash';
import { useStore } from '../../api/cosmosStores';
import { useAccountConnection } from '../../lib/hooks/account/useAccountConnection';
import UmeeLogo from '../../public/images/Umee_logo_icon_only.png';

export interface BridgeDepositProps {
  txnAvailability: TTxnAvailability;
  setTxnAmount(amount: string): void;
  handleContinue(e: React.MouseEvent): void;
  txnStep: ETxnSteps;
  setActiveTab(activeTab: string): void;
  network?: string;
  txnType: ETxnType;
}

const BridgeInputAmount = ({
  txnAvailability,
  setTxnAmount,
  handleContinue,
  txnStep,
  setActiveTab,
  txnType,
}: BridgeDepositProps) => {
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
  interface ITokenLogo {
    symbol: string;
    width?: string;
    height?: string;
  }
  let chain = 'ethereum';
  let mainnetAddress = mainnet['WETH'];

  const web3 = useWeb3();
  const iconUrl = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${chain}/assets/${mainnetAddress}/logo.png`;

  return (
    <TxnAmountContainer
      txnType={txnType}
      handleContinue={handleContinue}
      isPending={isPending}
      isFinal={isFinal}
      header={
        token.symbol && (
          <>
            <ModalHeader symbol={token.symbol} />
            {!isPending && !isFinal && (
              <>
                <Box margin="-40px 0 0" direction="row" justify="between">
                  <Box>
                    <Text
                      size="medium"
                      className="gradient-text"
                      weight="bold"
                    >
                      Ethereum
                    </Text>
                  </Box>
                  <Box onClick={() => setActiveTab('Withdraw')}>
                    <Text size="medium" color="#133A33" weight="bold">
                      Umee
                    </Text>
                  </Box>
                </Box>
                <Box direction="row" margin="10px 0 10px 0">
                  <Box className="modal-tab modal-tab1 active"></Box>
                  <Box className="modal-tab modal-tab2"></Box>
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
            txnType={ETxnType.deposit}
            symbol={token.symbol ? token.symbol : ''}
            availableAmount={availableAmount}
            tokenDecimals={tokenDecimals}
          />
          <TxnAmountInputRow txnAvailability={txnAvailability} setTxnAmount={setTxnAmount} />
          <Box margin={{bottom: 'small'}}>
            <Text size="12px" weight="bold" color="black">
              From
            </Text>
            <Box pad={{vertical: 'small'}} width="100%" direction="row" justify="between" align="center">
              <Box direction="row" justify="start" align="center">
                {token?.symbol && <TokenLogo src={UmeeLogo} width="40" height="40" />}
                <Text margin={{ left: 'small' }} color="#142A5B" size="small">
                  {isAccountConnected && truncate(account.bech32Address, 25, 4)}
                </Text>
              </Box>
            </Box>
            <Box pad={{top: 'small'}} style={{ borderTop: '2px solid #E1F0FF' }}>
              <Text size="12px" weight="bold" color="black">
                To
              </Text>
              <Box pad={{vertical: 'small'}} width="100%" direction="row" align="center">
                <Image alt="symbol" src={iconUrl} width="40px" height="40px" />
                <Text color="#142A5B" margin={{ left: 'small' }} size="small">
                  {truncate(web3.account, 23, 4)}
                </Text>
              </Box>
            </Box>
          </Box>
        </>
      )}
      {isPending && (
        <>
          <Box pad="20px 0" width="100%" direction="row" justify="center">
            <Loading />
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

export default BridgeInputAmount;
