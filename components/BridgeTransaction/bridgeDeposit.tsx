import { utils } from 'ethers';
import React, { useEffect, useState } from 'react';
import { useData } from 'api/data';
import { BigNumber, constants } from 'ethers';
import { useTransaction } from 'api/data/transactions';
import { useWeb3 } from 'api/web3';
import { useAllowanceData, useUserBalance } from 'api/data/allowanceData';
import { useErc20DetailedContract } from 'api/data/contracts';
import PageLoading from 'components/common/Loading/PageLoading';
import { ETxnType, ITokenData, ETxnSteps} from 'lib/types';
import BridgeInputAmount from 'components/Markets/BridgeInputAmount';
import contractArtifcat from '../../api/types/Peggy.json';
import Web3 from 'web3';
import '../TransactionModals/modals.css';

import { bech32 } from 'bech32';

var abi = contractArtifcat.abi;

export interface IHistoricalRateData {
  apy: number;
  date: string;
}


const BridgeDeposit = ({ address: tokenAddress, setActiveTab }: { address: string; setActiveTab: (activeTab: string) => void }) => {
  const [token, setToken] = useState<ITokenData>();
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0));
  const [depositStep, setDepositStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const erc20Contract = useErc20DetailedContract(tokenAddress);


  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [txnHash, setTxnHash] = useState('');


  const availableAmount = useUserBalance(tokenAddress) || BigNumber.from(0);
  const [reserveCfgData, setReserveCfgData] = useState<{
    symbol: string;
    address: string;
    decimals: BigNumber;
    ltv: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
    reserveFactor: BigNumber;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    isActive: boolean;
    isFrozen: boolean;
  }>();
  const { ReserveData, ReserveConfigurationData, UserAccountData } = useData();
  const {
    Contracts: { lendingPool },
    priceData,
  } = useData();

  const { contractCall: contractCallApprove, pending: pendingApprove } = useTransaction();
  const { contractCall: contractCallDeposit, pending: pendingDeposit } = useTransaction();

  useEffect(() => {
    if (ReserveData && lendingPool && ReserveConfigurationData && reserveCfgData && erc20Contract && availableAmount) {
      setPageLoading(false);
      setTokenDecimals(reserveCfgData?.decimals || BigNumber.from(0));
    }
  }, [ReserveConfigurationData, ReserveData, erc20Contract, lendingPool, reserveCfgData, availableAmount]);

  useEffect(() => {
    if (pendingApprove) {
      setDepositStep(ETxnSteps.PendingApprove);
    }
  }, [pendingApprove]);

  useEffect(() => {
    if (pendingDeposit) {
      setDepositStep(ETxnSteps.PendingSubmit);
    }
  }, [pendingDeposit]);

  const { account } = useWeb3();
  const allowance = useAllowanceData(erc20Contract, lendingPool ? lendingPool.address : '');

  const [depositAmount, setDepositAmount] = useState<string>('');
  const [depositAmountBN, setDepositAmountBN] = useState(BigNumber.from(0));
  
  useEffect(() => {
    if (!depositAmount || !reserveCfgData || depositAmount === '') {
      return;
    }
    let depositBigNumber = utils.parseUnits(parseFloat(depositAmount).toFixed(reserveCfgData.decimals.toNumber()), reserveCfgData.decimals);
    setDepositAmountBN(depositBigNumber);
  }, [depositAmount, reserveCfgData]);

  useEffect(() => {
    if (tokenAddress) {
      const reserve = ReserveData.find((r) => r.address === tokenAddress);
      const reserveConfig = ReserveConfigurationData.find((r) => r.address === tokenAddress);
      setReserveCfgData(reserveConfig);
      setToken({
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
      });
    }
  }, [tokenAddress, ReserveData, ReserveConfigurationData]);

  const handleApprove = () => {
    setDepositStep(ETxnSteps.PendingApprove);
    if (!erc20Contract || !lendingPool) {
      setDepositStep(ETxnSteps.Failure);
      return;
    }

    contractCallApprove(
      () => erc20Contract.approve(erc20Contract.address, constants.MaxUint256),
      'Approving token allowance',
      'Approval failed',
      'Approval succeeded',
      () => setDepositStep(ETxnSteps.Failure),
      () => setDepositStep(ETxnSteps.Submit)
    );
  };

  const handleDeposit = async () => {
    setDepositStep(ETxnSteps.PendingSubmit);
    if ( !token || !account) {
      setDepositStep(ETxnSteps.Failure);
      return;
    }

    const web3 = new Web3(window.ethereum);
    const PeggyContract = new web3.eth.Contract(abi, '0xfe46555aBaD51aD11f34B9Ce84417457A1695373');
    const acc = await web3.eth.getAccounts();
    const accounts = acc[0];
    const bech32Decoded = bech32.decode('umee1x2q37tl286mryd0pzzwy8x79wq3tzfutflatd4');
    await PeggyContract.methods.sendToCosmos(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48, bech32Decoded, 1).call().then(function(res: any){
      console.log('NO EORROR', res);
    }).catch(function(err: any) {
      console.log('ERROR',err);
    });
    setDepositStep(ETxnSteps.Submit);    
  };


  const handleContinue = () => {
    console.log('Handle Continue');
    handleApprove();
    handleDeposit();
  };

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {!!token && (
        <BridgeInputAmount
          txnAvailability={{ availableAmount, token, tokenDecimals }}
          setTxnAmount={setDepositAmount}
          handleContinue={handleContinue}
          txnType={ETxnType.deposit}
          setActiveTab={setActiveTab}
          txnStep={depositStep}
        />
      )}
    </>
  );
};

export default BridgeDeposit;
