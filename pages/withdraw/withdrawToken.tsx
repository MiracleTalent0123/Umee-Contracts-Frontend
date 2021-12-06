import * as React from 'react';
import WithdrawInputAmount from 'components/Withdrawals/WithdrawInputAmount';
import { useData } from 'api/data';
import { useTransaction } from 'api/data/transactions';
import { BigNumber, utils, constants } from 'ethers';
import { useWeb3 } from 'api/web3';
import { ETxnType, ITokenData } from 'lib/types';
import PageLoading from 'components/common/Loading/PageLoading';
import { useUserCollateralChartData } from 'api/data/userdata';
import { getMaxWithdraws, checkHealth } from 'lib/health-utils';
import { ETxnSteps } from 'lib/types';
import { toast } from 'react-toastify';
import { GREATER_THAN_ZERO_MESSAGE } from 'lib/constants';
import { isZero } from 'lib/number-utils';

const { useEffect, useState } = React;

const WithdrawToken = ({
  address: tokenAddress,
  setActiveTab,
  myDepositsTotal,
  currentLtv,
  maxLtv,
  initialBorrowLimit,
  myBorrowsTotal,
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
  const [withdrawalStep, setWithdrawalStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>('');
  const [availableAmount, setAvailableAmount] = useState(BigNumber.from(0));
  const [availableWithdraw, setAvailableWithdraw] = useState<BigNumber>(BigNumber.from(0));
  const [txnHash, setTxnHash] = useState('');

  const [tokenDecimals, setTokenDecimals] = useState(BigNumber.from(0));
  const [depositBalance, setDepositBalance] = useState<BigNumber>(BigNumber.from(0));
  const [withdrawalAmountBN, setWithdrawalAmountBN] = useState(BigNumber.from(0));
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const { ReserveData } = useData();
  const { account } = useWeb3();
  const { UserReserveData } = useData();
  const { UserAccountData } = useData();
  const [tokenReserveConfig, setTokenReserveConfig] = useState<{
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
  const { ReserveConfigurationData, priceData } = useData();
  const collateralData = useUserCollateralChartData(priceData, UserReserveData);
  const {
    Contracts: { lendingPool },
  } = useData();
  const { contractCall, pending } = useTransaction();

  const [ltv, setLtv] = useState<string>('');
  const [borrowLimit, setBorrowLimit] = useState<string>('');

  useEffect(() => {
    if (UserAccountData && UserReserveData && ReserveData && ReserveConfigurationData && account && lendingPool) {
      setPageLoading(false);
    }
  }, [ReserveConfigurationData, ReserveData, UserAccountData, UserReserveData, account, lendingPool]);

  useEffect(() => {
    if (!withdrawalAmount) {
      setWithdrawalAmountBN(BigNumber.from(0));
      return;
    }

    setWithdrawalAmountBN(
      utils.parseUnits(parseFloat(withdrawalAmount).toFixed(tokenDecimals.toNumber()), tokenDecimals)
    );
  }, [ReserveConfigurationData, tokenDecimals, withdrawalAmount]);

  useEffect(() => {
    if (priceData && token?.symbol) {
      if (parseFloat(withdrawalAmount) > 0) {
        let depositUsdAmount = myDepositsTotal - parseFloat(withdrawalAmount) * priceData[token.symbol].usd;
        let borrowLimit = (depositUsdAmount * parseFloat(maxLtv)) / 10000;
        if(borrowLimit > 0) {
          setLtv(((myBorrowsTotal / borrowLimit) * 100).toFixed(2));
          setBorrowLimit(borrowLimit.toFixed(2));
        } else {
          setLtv('0.00');
          setBorrowLimit('0.00');
        }
      } else {
        setBorrowLimit('');
        setLtv('');
      }
    }
  }, [withdrawalAmount, myDepositsTotal, priceData, token, maxLtv, myBorrowsTotal]);

  useEffect(() => {
    if (pending) {
      setWithdrawalStep(ETxnSteps.Pending);
    }
  }, [pending]);

  useEffect(() => {
    if (!tokenAddress) {
      setToken(undefined);
      return;
    }

    const reserve = ReserveData.find((r) => r.address === tokenAddress);
    setToken({
      symbol: reserve?.symbol,
      address: tokenAddress as string,
      availableLiquidity: reserve?.availableLiquidity,
      totalStableDebt: reserve?.totalStableDebt,
      totalVariableDebt: reserve?.totalVariableDebt,
      liquidityRate: reserve?.liquidityRate,
      variableBorrowRate: reserve?.variableBorrowRate,
      stableBorrowRate: reserve?.stableBorrowRate,
      averageStableBorrowRate: reserve?.averageStableBorrowRate,
      liquidityIndex: reserve?.liquidityIndex,
      variableBorrowIndex: reserve?.variableBorrowIndex,
      usdPrice: reserve?.usdPrice,
    });
  }, [ReserveData, tokenAddress]);

  useEffect(() => {
    setTokenDecimals(ReserveConfigurationData.find((r) => r.address === token?.address)?.decimals || BigNumber.from(0));
  }, [ReserveConfigurationData, token?.address]);

  useEffect(() => {
    if (!tokenAddress) {
      return;
    }

    const reserveConfig = ReserveConfigurationData.find((r) => r.address === tokenAddress);
    setTokenReserveConfig(reserveConfig);
  }, [ReserveConfigurationData, tokenAddress]);

  useEffect(() => {
    if (!tokenAddress || !UserReserveData) {
      setDepositBalance(BigNumber.from(0));
      return;
    }

    const userReserve = UserReserveData.find((r) => r.address === tokenAddress);

    if (!userReserve) {
      setDepositBalance(BigNumber.from(0));
      return;
    }

    setDepositBalance(userReserve.currentUTokenBalance);
  }, [UserReserveData, tokenAddress]);

  useEffect(() => {
    if (!tokenAddress) {
      return;
    }

    const userReserve = UserReserveData.find((r) => r.address === tokenAddress);

    if ( UserAccountData && token && priceData && token.symbol && userReserve && tokenReserveConfig && depositBalance) {
      // Available to withdraw => tokens deposited
      setAvailableWithdraw(depositBalance);
      // If reserve cannot be used as collateral => Available to withdraw => tokens deposited
      if(tokenReserveConfig.usageAsCollateralEnabled && !UserAccountData.totalDebtETH.isZero()){
        // Maximum a user can withdraw to keep health in good standing
        const MaxAvailable = getMaxWithdraws(UserAccountData, priceData[token.symbol].eth, token.symbol, tokenDecimals.toString());

        // If the User's deposits is less than healthFactor max => Can withdraw all
        // If deposits are less => can withdraw up to healthFactor max
        if(userReserve.currentUTokenBalance.lt(MaxAvailable)){
          setAvailableAmount(depositBalance);            
        }else{
          setAvailableAmount(MaxAvailable);
        }
      }else{
        setAvailableAmount(depositBalance);
      }
    }
  }, [UserAccountData, UserReserveData, depositBalance, priceData, token, tokenAddress, tokenDecimals, tokenReserveConfig]);

  const handleWithdrawal = () => {
    setWithdrawalStep(ETxnSteps.Pending);

    if (!lendingPool) {
      setWithdrawalStep(ETxnSteps.Failure);
      return;
    }
    if (withdrawalAmountBN.gte(depositBalance.sub(10))) {
      contractCall(
        () => lendingPool.withdraw(tokenAddress as string, constants.MaxUint256, account || ''),
        'Withdrawing',
        'Withdraw failed',
        'Withdraw succeeded',
        () => setWithdrawalStep(ETxnSteps.Failure),
        () => setWithdrawalStep(ETxnSteps.Success),
        undefined,
        (hash: string) => setTxnHash(hash)
      );
    } else {
      contractCall(
        () => lendingPool.withdraw(tokenAddress as string, withdrawalAmountBN, account || ''),
        'Withdrawing',
        'Withdraw failed',
        'Withdraw succeeded',
        () => setWithdrawalStep(ETxnSteps.Failure),
        () => setWithdrawalStep(ETxnSteps.Success),
        undefined,
        (hash: string) => setTxnHash(hash)
      );
    }
  };
  const handleContinue = () => {
    if (withdrawalAmount === '' || isZero(withdrawalAmount)) {
      toast.error(GREATER_THAN_ZERO_MESSAGE);
      return;
    }
    handleWithdrawal();
  };

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <div>
      {!!token && (
        <WithdrawInputAmount
          txnAvailability={{ availableAmount, token, tokenDecimals }}
          setTxnAmount={setWithdrawalAmount}
          handleContinue={handleContinue}
          setActiveTab={setActiveTab}
          txnStep={withdrawalStep}
          currentLtv={currentLtv}
          initialborrowLimit={initialBorrowLimit}
          ltv={ltv}
          borrowLimit={borrowLimit}
          txnType={ETxnType.withdraw}
          depositBalance={availableWithdraw}
        />
      )}
    </div>
  );
};

export default WithdrawToken;
