import { utils } from 'ethers';
import React, { useEffect, useState } from 'react';
import DepositInputAmount from 'components/Deposits/DepositInputAmount';
import { useData } from 'api/data';
import { BigNumber, constants } from 'ethers';
import { useTransaction } from 'api/data/transactions';
import { useWeb3 } from 'api/web3';
import { useAllowanceData, useUserBalance } from 'api/data/allowanceData';
import { useErc20DetailedContract } from 'api/data/contracts';
import { ETxnType, ITokenData } from 'lib/types';
import PageLoading from 'components/PageLoading';
import { isZero } from 'lib/number-utils';
import { getNewHealthDeposit } from 'lib/health-utils';
import { ETxnSteps } from 'lib/types';
import { toast } from 'react-toastify';
import { GREATER_THAN_ZERO_MESSAGE } from 'lib/constants';
import EnableDeposit from 'components/TransactionModals/AssetModal';
import './depositModal.css';

const DepositToken = ({
  address: tokenAddress,
  setActiveTab,
  myDepositsTotal,
  currentLtv,
  maxLtv,
  initialBorrowLimit,
  myBorrowsTotal
}: {
  address: string;
  setActiveTab: (activeTab: string) => void;
  myDepositsTotal: number;
  initialBorrowLimit: string;
  currentLtv: string;
  maxLtv: string;
  myBorrowsTotal: number;
}) => {
  const [token, setToken] = useState<ITokenData>();
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0));
  const [depositStep, setDepositStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [txnHash, setTxnHash] = useState('');
  const erc20Contract = useErc20DetailedContract(tokenAddress);
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
  const { ReserveData, ReserveConfigurationData, UserAccountData, UserReserveData } = useData();
  const {
    Contracts: { lendingPool },
    priceData,
  } = useData();

  const { contractCall: contractCallApprove, pending: pendingApprove } = useTransaction();
  const { contractCall: contractCallDeposit, pending: pendingDeposit } = useTransaction();

  const [ltv, setLtv] = useState<string>('');
  const [borrowLimit, setBorrowLimit] = useState<string>('');

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
    if (priceData && token?.symbol) {
      if (parseFloat(depositAmount) > 0) {
        let depositUsdAmount = myDepositsTotal + parseFloat(depositAmount) * priceData[token.symbol].usd;
        let borrowLimit = (depositUsdAmount * parseFloat(maxLtv)) / 10000;
        if(borrowLimit > 0) {
          setBorrowLimit(borrowLimit.toFixed(2));
          setLtv((myBorrowsTotal / borrowLimit * 100).toFixed(2));
        } else {
          setLtv('0.00');
          setBorrowLimit('0.00');
        }
      } else {
        setBorrowLimit('');
        setLtv('');
      }
    }
  }, [depositAmount, myDepositsTotal, priceData, token, maxLtv, myBorrowsTotal]);

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
      () => erc20Contract.approve(lendingPool.address, constants.MaxUint256),
      'Approving token allowance',
      'Approval failed',
      'Approval succeeded',
      () => setDepositStep(ETxnSteps.Failure),
      () => setDepositStep(ETxnSteps.Success)
    );
  };

  const handleDeposit = () => {
    setDepositStep(ETxnSteps.PendingSubmit);
    if (!lendingPool || !token || !account) {
      setDepositStep(ETxnSteps.Failure);
      return;
    }
    // Must approve transaction first
    contractCallDeposit(
      () => lendingPool.deposit(token.address || '', depositAmountBN, account, 0),
      'Depositing',
      'Deposit failed',
      'Deposit succeeded',
      () => setDepositStep(ETxnSteps.Failure),
      () => setDepositStep(ETxnSteps.Success),
      undefined,
      (hash: string) => setTxnHash(hash)
    );
  };

  const handleContinue = () => {
    if (depositAmount === '' || isZero(depositAmount)) {
      console.log(depositAmount);
      toast.error(GREATER_THAN_ZERO_MESSAGE);
      return;
    }
    handleDeposit();
  };

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {!!token &&
        (allowance.gte(depositAmountBN) ? (
          <DepositInputAmount
            txnAvailability={{ availableAmount, token, tokenDecimals }}
            setTxnAmount={setDepositAmount}
            handleContinue={handleContinue}
            txnStep={depositStep}
            setActiveTab={setActiveTab}
            currentLtv={currentLtv}
            initialborrowLimit={initialBorrowLimit}
            ltv={ltv}
            borrowLimit={borrowLimit}
            txnType={ETxnType.deposit}
          />
        ) : (
          <EnableDeposit token={token} steps={depositStep} enabled={handleApprove} />
        ))}
    </>
  );
};

export default DepositToken;
