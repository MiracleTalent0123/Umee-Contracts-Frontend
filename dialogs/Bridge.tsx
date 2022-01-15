import React, { useState, useMemo, useCallback } from 'react';
import { Currency } from '@keplr-wallet/types';
import { BigNumber, constants } from 'ethers';
import { bech32 } from 'bech32';
import { useData } from 'api/data';
import { useStore } from 'api/cosmosStores';
import { useWeb3 } from 'api/web3';
import { useTransaction } from 'api/data/transactions';
import { useAllowanceData, useUserBalance } from 'api/data/allowanceData';
import { useErc20DetailedContract } from 'api/data/contracts';
import PageLoading from 'components/common/Loading/PageLoading';
import BridgeInputAmount from 'components/Markets/BridgeInputAmount';
import { ETxnType, ETxnSteps } from 'lib/types';
import { mainnet } from 'lib/tokenaddresses';
import { IBCAssetInfos } from '../config';
import umeeLogo from '../public/images/Umee_logo_icon_only.png';
import 'components/TransactionModals/modals.css';

const chain = 'ethereum';

const mainnetAddress = mainnet['WETH'];

const ethereumLogo = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${chain}/assets/${mainnetAddress}/logo.png`;


interface BridgeDialogProps {
  address: string
  tokenName: string
}

const BridgeDialog: React.FC<BridgeDialogProps> = ({ address: tokenAddress, tokenName }) => {
  const [activeTab, setActiveTab] = useState<ETxnType>(ETxnType.deposit);
  const balanceOnEthereum = useUserBalance(tokenAddress) || BigNumber.from(0);
  const [step, setStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const { ReserveData, ReserveConfigurationData, Contracts: { gravity } } = useData();
  const { chainStore, accountStore, queriesStore } = useStore();
  const { contractCall } = useTransaction();
  const tokenContract = useErc20DetailedContract(tokenAddress);
  const allowance = useAllowanceData(tokenContract, gravity ? gravity.address : '');

  // reserveCfgData is token data on Ethereum
  const reserveCfgData = useMemo(
    () => ReserveConfigurationData.find(
      (r) => r.address === tokenAddress
    ),
    [ReserveConfigurationData, tokenAddress]
  );

  // 1M uatom on Ethereum is 1 ATOM
  // todo: use reserveCfgData.decimals instead of hardcoded value once atom decimals on Ethereum is updated to 6
  const decimalsOnEthereum = 6; // reserveCfgData?.decimals

  const token = useMemo(
    () => {
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
    },
    [ReserveData, tokenAddress]
  );

  const web3 = useWeb3();

  const originCurrency = chainStore.current.currencies.find(
    cur => cur.coinMinimalDenom === IBCAssetInfos[0].coinMinimalDenom
  ) as Currency;

  const account = useMemo(
    () => accountStore.getAccount(chainStore.current.chainId),
    [chainStore, accountStore]
  );

  const sendToEthereum = useCallback(
    (amount: number) => () => {
      const token = chainStore.current.currencies.find(c => c.coinDenom === tokenName);
      const denom = token?.coinMinimalDenom;
      const ethereumAddress = web3.account?.toLowerCase(); //'0x0bBe502CaC194c3c0F1ca8cC30fa3Df4397e9226'.toUpperCase();

      if (ethereumAddress && denom) {
        setStep(ETxnSteps.Pending);
        account.umee.sendToEthereum(
          ethereumAddress,
          denom,
          BigNumber.from(amount * 10 ** originCurrency.coinDecimals).toString(),
          '100'
        )
          .catch(e => console.log(e))
          .finally(() => setStep(ETxnSteps.Input));
      }
    },
    [account.umee, chainStore, originCurrency.coinDecimals, tokenName, web3.account]
  );

  const sendToUmee = useCallback(
    (amount: number) => () => {
      if (gravity && tokenContract && reserveCfgData && web3.account) {
        const roundedAmount =  Math.round(amount * 10 ** decimalsOnEthereum);
        const tx = async () => {
          const addr = bech32.decode(account.bech32Address)
            .words
            .map(i => BigNumber.from(i).toHexString().slice(2))
            .join('');
          if (allowance?.lt(roundedAmount)) {
            await tokenContract.approve(gravity.address, constants.MaxUint256);
          }
          return await gravity.sendToCosmos(tokenAddress, '0x' + addr, roundedAmount);
        };

        setStep(ETxnSteps.Pending);

        contractCall(
          tx,
          'Withdrawing',
          'Withdraw failed',
          'Withdraw succeeded',
          () => setStep(ETxnSteps.Input)
        );
      }
    },
    [
      gravity,
      tokenContract,
      reserveCfgData,
      contractCall,
      web3.account,
      account.bech32Address,
      allowance,
      tokenAddress
    ]
  );

  const balance = useMemo(
    () => BigNumber.from(
      queriesStore
        .get(chainStore.current.chainId)
        .queryBalances
        .getQueryBech32Address(account.bech32Address)
        .getBalanceFromCurrency(originCurrency)
        .toCoin()
        .amount
    ),
    [account.bech32Address, chainStore, originCurrency, queriesStore]
  );

  if (!(reserveCfgData && token && balanceOnEthereum)) {
    return <PageLoading />;
  }

  return (
    <BridgeInputAmount
      txnAvailability={{
        availableAmount: activeTab === ETxnType.deposit ?  balance : balanceOnEthereum,
        token,
        tokenDecimals: activeTab === ETxnType.deposit ? originCurrency.coinDecimals : decimalsOnEthereum
      }}
      layers={[
        { address: account.bech32Address, logo: umeeLogo },
        { address: web3.account ?? '', logo: ethereumLogo }
      ]}
      txnStep={step}
      handleContinue={activeTab === ETxnType.deposit ? sendToEthereum : sendToUmee}
      txnType={activeTab}
      onTabChange={setActiveTab}
      depositTab='Ethereum'
      withdrawTab='Umee'
    />
  );
};

export default BridgeDialog;
