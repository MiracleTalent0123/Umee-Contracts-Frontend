import React, { useState, useMemo, useCallback, useEffect, useContext } from 'react';
import { Currency } from '@keplr-wallet/types';
import { BigNumber, constants } from 'ethers';
import { useData } from 'api/data';
import { useStore } from 'api/cosmosStores';
import { useWeb3 } from 'api/web3';
import { useTransaction } from 'api/data/transactions';
import { useAllowanceData, useUserBalance } from 'api/data/allowanceData';
import { useErc20DetailedContract } from 'api/data/contracts';
import PageLoading from 'components/common/Loading/PageLoading';
import BridgeInputAmount from 'components/Markets/BridgeInputAmount';
import { ETxnType, ETxnSteps } from 'lib/types';
import { IBCAssetInfos } from '../config';
import umeeLogo from '../public/images/Logo.svg';
import ethereumLogo from '../public/images/eth-logo.svg';
import { parseUnits } from 'ethers/lib/utils';
import { displayToast, TToastType } from 'components/common/toasts';
import { truncateAfterDecimals } from 'lib/number-utils';
import { BridgeTransferEventContext } from 'pages/markets';
import { observer } from 'mobx-react-lite';

interface BridgeDialogProps {
  address: string;
  tokenName: string;
  direction: ETxnType.deposit | ETxnType.withdraw
  onClose: () => void;
}

export interface suggestedFee {
  label: string;
  value: number;
}

const gasSpentBy20txBatch = 735000;

const suggestedFees: suggestedFee[] = [
  { label: 'Average', value: 100 },
  { label: 'Fast', value: 1000 },
];

const BridgeDialog: React.FC<BridgeDialogProps> = ({
  address: tokenAddress,
  tokenName,
  onClose,
  direction
}) => {
  const [activeTab, setActiveTab] = useState<ETxnType>(direction)

  useEffect(() => {
    setActiveTab(direction)
  }, [direction])


  const balanceOnEthereum = useUserBalance(tokenAddress) || BigNumber.from(6);
  const [step, setStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const bridgeTransferEvent = useContext(BridgeTransferEventContext);
  const {
    ReserveData,
    ReserveConfigurationData,
    priceData,
    Contracts: { gravity },
  } = useData();
  const { chainStore, accountStore, queriesStore } = useStore();
  const { contractCall } = useTransaction();
  const tokenContract = useErc20DetailedContract(tokenAddress);
  const allowance = useAllowanceData(tokenContract, gravity ? gravity.address : '');

  const [feeAmount, setFeeAmount] = useState(0);

  const [fees, setFees] = useState(suggestedFees);

  // reserveCfgData is token data on Ethereum
  const reserveCfgData = useMemo(
    () => ReserveConfigurationData.find((r) => r.address === tokenAddress),
    [ReserveConfigurationData, tokenAddress]
  );

  // 1M uatom on Ethereum is 1 ATOM
  // todo: use reserveCfgData.decimals instead of hardcoded value once atom decimals on Ethereum is updated to 6
  const decimalsOnEthereum = reserveCfgData?.decimals ?? BigNumber.from(6);
  const daiDecimals = BigNumber.from(18);
  const token = useMemo(() => {
    if (tokenName == 'UMEE') {
      return {
        symbol: 'UMEE',
        address: tokenAddress as string,
        usdPrice: 0,
        availableLiquidity: BigNumber.from(0),
        totalStableDebt: BigNumber.from(0),
        totalVariableDebt: BigNumber.from(0),
        liquidityRate: BigNumber.from(0),
        variableBorrowRate: BigNumber.from(0),
        stableBorrowRate: BigNumber.from(0),
        averageStableBorrowRate: BigNumber.from(0),
        liquidityIndex: BigNumber.from(0),
        variableBorrowIndex: BigNumber.from(0),
      };
    } else {
      const reserve = ReserveData.find((r) => r.address.toLowerCase() === tokenAddress.toLowerCase());
      return {
        symbol: reserve?.symbol,
        address: tokenAddress as string,
        usdPrice: reserve?.usdPrice,
        availableLiquidity: reserve?.availableLiquidity,
        totalStableDebt: reserve?.totalStableDebt,
        totalVariableDebt: reserve?.totalVariableDebt,
        liquidityRate: reserve?.liquidityRate,
        variableBorrowRate: reserve?.variableBorrowRate,
        stableBorrowRate: reserve?.stableBorrowRate,
        averageStableBorrowRate: reserve?.averageStableBorrowRate,
        liquidityIndex: reserve?.liquidityIndex,
        variableBorrowIndex: reserve?.variableBorrowIndex,
      };
    }
  }, [ReserveData, tokenAddress, tokenName]);

  const web3 = useWeb3();

  useEffect(() => {
    const symbol = token.symbol;
    if (web3.provider && symbol && priceData && priceData[symbol]) {
      web3.provider.getGasPrice().then((gasPrice) => {
        // (((735000 * currenEthGasPriceInGwei)/ 1000000000 / 20) * ETHUSD) / UMEEUSD =  placeholder value in Umee
        const wei = gasPrice.toNumber();
        const currenEthGasPriceInGwei = truncateAfterDecimals(wei / 10 ** 9, 6);
        const feeInEth = (gasSpentBy20txBatch * currenEthGasPriceInGwei) / 1000000000;
        const ethPrice = priceData['WETH'].usd;
        const feeTimesEth = feeInEth * ethPrice;
        const fast = (feeTimesEth / priceData[symbol].usd) * 1.5;
        let avg = fast / 20;

        if (symbol == 'ATOM') {
          avg = fast / 2;
        }

        setFeeAmount(truncateAfterDecimals(avg, 6));
        suggestedFees[0].value = truncateAfterDecimals(avg, 6);
        suggestedFees[1].value = truncateAfterDecimals(fast, 6);
        setFees(suggestedFees);
      });
    }
  }, [web3.provider, priceData, token.symbol, ReserveData]);
  let originCurrency: Currency;
  if (tokenName == 'UMEE') {
    originCurrency = chainStore.current.currencies.find((cur) => cur.coinMinimalDenom === 'uumee') as Currency;
  } else if (tokenName == 'ATOM') {
    originCurrency = chainStore.current.currencies.find(
      (cur) => cur.coinMinimalDenom === IBCAssetInfos[0].coinMinimalDenom
    ) as Currency;
  } else {
    originCurrency = chainStore.current.currencies.find(
      (cur) => cur.coinMinimalDenom === 'gravity0xd787Ec2b6C962f611300175603741Db8438674a0'
    ) as Currency;
  }
  /*originCurrency =
    tokenName == 'UMEE'
      ? (chainStore.current.currencies.find((cur) => cur.coinMinimalDenom === 'uumee') as Currency)
      : (chainStore.current.currencies.find(
        (cur) => cur.coinMinimalDenom === IBCAssetInfos[0].coinMinimalDenom
      ) as Currency);*/
  const account = accountStore.getAccount(chainStore.current.chainId);

  const sendToEthereum = useCallback(
    (amount: number, fee: number) => () => {
      const token = chainStore.current.currencies.find((c) => c.coinDenom === tokenName);

      let denom = tokenName == 'UMEE' ? 'uumee' : token?.coinMinimalDenom;

      const ethereumAddress = web3.account?.toLowerCase();
      if (ethereumAddress && denom) {
        setStep(ETxnSteps.Pending);
        account.umee
          .sendToEthereum(
            ethereumAddress,
            denom,
            parseUnits(amount.toString(), originCurrency.coinDecimals).toString(),
            parseUnits(fee.toString(), originCurrency.coinDecimals).toString(),
            bridgeTransferEvent
          )
          .catch((e) => console.log(e))
          .finally(() => onClose());
      }
    },
    [chainStore, tokenName, web3.account, account.umee, originCurrency.coinDecimals, bridgeTransferEvent, onClose]
  );

  const sendToUmee = useCallback(
    (amount: number) => () => {
      if (gravity && tokenContract && decimalsOnEthereum && web3.account) {
        const roundedAmount = Math.round(amount * 10 ** decimalsOnEthereum.toNumber()).toString();
        const tx = async () => {
          if (allowance?.lt(roundedAmount)) {
            const tx = await tokenContract.approve(gravity.address, constants.MaxUint256);
            await tx.wait();
          }
          return await gravity.sendToCosmos(tokenAddress, account.bech32Address, roundedAmount);
        };

        setStep(ETxnSteps.Pending);

        contractCall(
          '',
          tx,
          'Transferring',
          'Transfer failed',
          'Transaction included in the block',
          () => {
            setStep(ETxnSteps.Input);
            onClose();
          },
          () => {
            displayToast(
              'Bridging in Progress',
              TToastType.TX_BROADCASTING,
              {
                message: 'This process may take a minute',
              },
              { delay: 3000 }
            );
          },
          bridgeTransferEvent
        );
      }
    },
    [
      gravity,
      decimalsOnEthereum,
      tokenContract,
      contractCall,
      web3.account,
      account.bech32Address,
      allowance,
      tokenAddress,
      onClose,
      bridgeTransferEvent,
    ]
  );

  const balance = BigNumber.from(
    queriesStore
      .get(chainStore.current.chainId)
      .queryBalances.getQueryBech32Address(account.bech32Address)
      .getBalanceFromCurrency(originCurrency)
      .toCoin().amount
  )

  if (!(token && balanceOnEthereum)) {
    return <PageLoading />;
  }

  return (
    <BridgeInputAmount
      txnAvailability={{
        availableAmount: activeTab === ETxnType.deposit ? balance : balanceOnEthereum,
        token,
        tokenDecimals:
          activeTab === ETxnType.deposit
            ? originCurrency.coinDecimals
            : token.symbol == 'DAI'
              ? daiDecimals
              : decimalsOnEthereum,
      }}
      layers={[
        { address: account.bech32Address, logo: umeeLogo },
        { address: web3.account ?? '', logo: ethereumLogo },
      ]}
      txnStep={step}
      handleContinue={activeTab === ETxnType.deposit ? sendToEthereum : sendToUmee}
      txnType={activeTab}
      onTabChange={setActiveTab}
      depositTab="Ethereum"
      withdrawTab="Umee"
      defaultFeeAmount={feeAmount}
      suggestedFees={fees}
    />
  );
};

export default observer(BridgeDialog);
