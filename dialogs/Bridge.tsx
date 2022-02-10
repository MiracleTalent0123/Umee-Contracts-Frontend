import React, { useState, useMemo, useCallback } from 'react';
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

interface BridgeDialogProps {
  address: string;
  tokenName: string;
  onClose: () => void;
}

const BridgeDialog: React.FC<BridgeDialogProps> = ({ address: tokenAddress, tokenName, onClose }) => {
  const [activeTab, setActiveTab] = useState<ETxnType>(ETxnType.deposit);
  const balanceOnEthereum = useUserBalance(tokenAddress) || BigNumber.from(0);
  const [step, setStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const {
    ReserveData,
    ReserveConfigurationData,
    Contracts: { gravity },
  } = useData();
  const { chainStore, accountStore, queriesStore } = useStore();
  const { contractCall } = useTransaction();
  const tokenContract = useErc20DetailedContract(tokenAddress);
  const allowance = useAllowanceData(tokenContract, gravity ? gravity.address : '');

  // reserveCfgData is token data on Ethereum
  const reserveCfgData = useMemo(
    () => ReserveConfigurationData.find((r) => r.address === tokenAddress),
    [ReserveConfigurationData, tokenAddress]
  );

  // 1M uatom on Ethereum is 1 ATOM
  // todo: use reserveCfgData.decimals instead of hardcoded value once atom decimals on Ethereum is updated to 6
  let decimalsOnEthereum = reserveCfgData?.decimals || BigNumber.from(6);

    const token = useMemo(() => {
      if(tokenName == 'UMEE') {
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
      }
      else {
        const reserve = ReserveData.find((r) => r.address === tokenAddress);
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
    }, [ReserveData, tokenAddress]);

  const web3 = useWeb3();
  let originCurrency = tokenName == 'UMEE'
    ? (chainStore.current.currencies.find((cur) => cur.coinMinimalDenom === 'uumee') as Currency)
    : (chainStore.current.currencies.find(
        (cur) => cur.coinMinimalDenom === IBCAssetInfos[0].coinMinimalDenom
      ) as Currency);

  const account = useMemo(() => accountStore.getAccount(chainStore.current.chainId), [chainStore, accountStore]);

  const sendToEthereum = useCallback(
    (amount: number) => () => {
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
            '100'
          )
          .catch((e) => console.log(e))
          .finally(() => onClose());
      }
    },
    [account.umee, chainStore, originCurrency.coinDecimals, tokenName, web3.account, onClose]
  );

  const sendToUmee = useCallback(
    (amount: number) => () => {
      if (gravity && tokenContract && decimalsOnEthereum && web3.account) {
        const roundedAmount = Math.round(amount * 10 ** decimalsOnEthereum.toNumber());
        const tx = async () => {
          if (allowance?.lt(roundedAmount)) {
            await tokenContract.approve(gravity.address, constants.MaxUint256);
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
          }
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
    ]
  );

  const balance = useMemo(
    () =>
      BigNumber.from(
        queriesStore
          .get(chainStore.current.chainId)
          .queryBalances.getQueryBech32Address(account.bech32Address)
          .getBalanceFromCurrency(originCurrency)
          .toCoin().amount
      ),
    [account.bech32Address, chainStore, originCurrency, queriesStore]
  );

  if (!(token && balanceOnEthereum)) {
    return <PageLoading />;
  }

  return (
    <BridgeInputAmount
      txnAvailability={{
        availableAmount: activeTab === ETxnType.deposit ? balance : balanceOnEthereum,
        token,
        tokenDecimals: activeTab === ETxnType.deposit ? originCurrency.coinDecimals : decimalsOnEthereum,
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
    />
  );
};

export default BridgeDialog;
