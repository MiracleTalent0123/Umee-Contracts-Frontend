import { utils } from 'ethers';
import React, { useEffect, useState } from 'react';
import DepositInputAmount from 'components/Deposits/DepositInputAmount';
import { useData } from 'api/data';
import { BigNumber, constants } from 'ethers';
import { useTransaction } from 'api/data/transactions';
import { useWeb3 } from 'api/web3';
import { useAllowanceData, useUserBalance } from 'api/data/allowanceData';
import { useErc20DetailedContract, useErc20MintContract } from 'api/data/contracts';
import { ETxnType, ITokenData } from 'lib/types';
import PageLoading from 'components/common/Loading/PageLoading';
import { ETxnSteps } from 'lib/types';
import { getMaxWithdraws } from 'lib/health-utils';
import EnableDeposit from 'components/TransactionModals/AssetModal';

const DepositToken = ({
  address: tokenAddress,
  myDepositsTotal,
  currentLtv,
  maxLtv,
  myBorrowsTotal,
  onClose,
}: {
  address: string;
  myDepositsTotal: number;
  currentLtv: string;
  maxLtv: string;
  myBorrowsTotal: number;
  onClose: () => void;
}) => {
  const [isDeposit, setIsDeposit] = useState<boolean>(true);
  const [token, setToken] = useState<ITokenData>();
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0));
  const [depositBalance, setDepositBalance] = useState<BigNumber>(BigNumber.from(0));
  const [depositStep, setDepositStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const [withdrawalStep, setWithdrawalStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const [mintStep, setMintStep] = useState<ETxnSteps>(ETxnSteps.Input);
  const [step, setStep] = useState<string>('deposit');
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [txnHash, setTxnHash] = useState('');

  const erc20Contract = useErc20DetailedContract(tokenAddress);
  const erc20MintContract = useErc20MintContract(tokenAddress);

  const availableAmount = useUserBalance(tokenAddress) || BigNumber.from(0);
  const [availableWithdrawalAmount, setAvailableWithdrawalAmount] = useState<BigNumber>(BigNumber.from(0));
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

  const { contractCall: contractCallApprove } = useTransaction();
  const { contractCall: contractCallDeposit } = useTransaction();
  const { contractCall: contractCallWithdrawal } = useTransaction();
  const { contractCall: contractCallMint } = useTransaction();

  const [ltv, setLtv] = useState<string>('');

  const { account } = useWeb3();
  const allowance = useAllowanceData(erc20Contract, lendingPool ? lendingPool.address : '');

  const [txnAmount, setTxnAmount] = useState<string>('');
  const [txnAmountBN, setTxnAmountBN] = useState(BigNumber.from(0));
  const [allowanceFlag, setAllowanceFlag] = useState<boolean>();

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

  useEffect(() => {
    if (
      token &&
      ReserveData &&
      lendingPool &&
      ReserveConfigurationData &&
      reserveCfgData &&
      erc20Contract &&
      availableAmount &&
      allowance?.gt(BigNumber.from(0)) !== undefined
    ) {
      setPageLoading(false);
      setTokenDecimals(reserveCfgData?.decimals || BigNumber.from(0));
      setAllowanceFlag(allowance?.gt(BigNumber.from(0)));
    }
  }, [
    token,
    ReserveConfigurationData,
    ReserveData,
    erc20Contract,
    lendingPool,
    reserveCfgData,
    availableAmount,
    allowance?.gt(BigNumber.from(0)),
  ]);

  useEffect(() => {
    setTxnAmount('');
    if (isDeposit) setStep('deposit');
    else setStep('withdraw');
  }, [isDeposit]);

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
    if (!txnAmount || !reserveCfgData || txnAmount === '') {
      return;
    }
    let depositBigNumber = utils.parseUnits(
      parseFloat(txnAmount).toFixed(reserveCfgData.decimals.toNumber()),
      reserveCfgData.decimals
    );
    setTxnAmountBN(depositBigNumber);
  }, [txnAmount, reserveCfgData]);

  useEffect(() => {
    if (priceData && token?.symbol) {
      if (parseFloat(txnAmount) > 0) {
        let depositUsdAmount = isDeposit
          ? myDepositsTotal + parseFloat(txnAmount) * priceData[token.symbol].usd
          : myDepositsTotal - parseFloat(txnAmount) * priceData[token.symbol].usd;
        let borrowLimit = (depositUsdAmount * parseFloat(maxLtv)) / 10000;
        if (borrowLimit > 0) {
          setLtv(((myBorrowsTotal / borrowLimit) * 100).toFixed(2));
        } else {
          setLtv('0.00');
        }
      } else {
        setLtv('');
      }
    }
  }, [txnAmount, myDepositsTotal, priceData, token, maxLtv, myBorrowsTotal, isDeposit]);

  useEffect(() => {
    if (!tokenAddress) {
      return;
    }

    const userReserve = UserReserveData.find((r) => r.address === tokenAddress);

    if (UserAccountData && token && priceData && token.symbol && userReserve && reserveCfgData && depositBalance) {
      // If reserve cannot be used as collateral => Available to withdraw => tokens deposited
      if (reserveCfgData.usageAsCollateralEnabled && !UserAccountData.totalDebtETH.isZero()) {
        // Maximum a user can withdraw to keep health in good standing
        const MaxAvailable = getMaxWithdraws(
          UserAccountData,
          priceData[token.symbol].eth,
          token.symbol,
          tokenDecimals.toString()
        );

        // If the User's deposits is less than healthFactor max => Can withdraw all
        // If deposits are less => can withdraw up to healthFactor max
        if (userReserve.currentUTokenBalance.lt(MaxAvailable)) {
          setAvailableWithdrawalAmount(depositBalance);
        } else {
          setAvailableWithdrawalAmount(MaxAvailable);
        }
      } else {
        setAvailableWithdrawalAmount(depositBalance);
      }
    }
  }, [UserAccountData, UserReserveData, depositBalance, priceData, token, tokenAddress, tokenDecimals, reserveCfgData]);

  const handleApprove = () => {
    setDepositStep(ETxnSteps.PendingApprove);
    if (!erc20Contract || !lendingPool) {
      setDepositStep(ETxnSteps.Failure);
      return;
    }

    contractCallApprove(
      () => erc20Contract.approve(lendingPool.address, constants.MaxUint256),
      'Approving allowance',
      'Approval failed',
      'Approval succeeded',
      () => {
        setDepositStep(ETxnSteps.Input);
        onClose();
      }
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
      () => lendingPool.deposit(token.address || '', txnAmountBN, account, 0),
      'Supplying',
      'Supply failed',
      'Supply succeeded',
      () => {
        setDepositStep(ETxnSteps.Input);
        onClose();
      },
      undefined,
      (hash: string) => setTxnHash(hash)
    );
  };

  const handleWithdrawal = () => {
    setWithdrawalStep(ETxnSteps.Pending);

    if (!lendingPool) {
      setWithdrawalStep(ETxnSteps.Failure);
      return;
    }
    if (txnAmountBN.gte(depositBalance.sub(10))) {
      contractCallWithdrawal(
        () => lendingPool.withdraw(tokenAddress as string, constants.MaxUint256, account || ''),
        'Withdrawing',
        'Withdraw failed',
        'Withdraw succeeded',
        () => {
          setWithdrawalStep(ETxnSteps.Input);
          onClose();
        },
        undefined,
        (hash: string) => setTxnHash(hash)
      );
    } else {
      contractCallWithdrawal(
        () => lendingPool.withdraw(tokenAddress as string, txnAmountBN, account || ''),
        'Withdrawing',
        'Withdraw failed',
        'Withdraw succeeded',
        () => {
          setWithdrawalStep(ETxnSteps.Input);
          onClose();
        },
        undefined,
        (hash: string) => setTxnHash(hash)
      );
    }
  };

  const handleFaucet = () => {
    if (token?.symbol === 'DAI' || token?.symbol === 'USDC') {
      setStep('faucet');
      setMintStep(ETxnSteps.Pending);
      if (!erc20MintContract || !lendingPool) {
        setMintStep(ETxnSteps.Failure);
        return;
      }

      contractCallMint(
        () => erc20MintContract.mint(utils.parseUnits('1000', tokenDecimals)),
        `Minting 1000 ${token?.symbol}`,
        'Mint failed',
        'Mint succeeded',
        () => {
          setMintStep(ETxnSteps.Input);
          onClose();
        }
      );
    }
  };

  const pickOne = <V1, V2>(v1: V1, v2: V2, first: boolean): V1 | V2 => {
    return first ? v1 : v2;
  };

  const pickDataOne = <V1, V2, V3>(v1: V1, v2: V2, v3: V3, first: string): V1 | V2 | V3 => {
    return first == 'deposit' ? v1 : first == 'withdraw' ? v2 : v3;
  };

  return (
    <>
      {pageLoading ? (
        <PageLoading />
      ) : (
        token &&
        (allowanceFlag ? (
          <DepositInputAmount
            txnAvailability={{
              availableAmount: pickOne(availableAmount, availableWithdrawalAmount, isDeposit),
              token,
              tokenDecimals,
            }}
            balance={pickOne(availableAmount, depositBalance, isDeposit)}
            setTxnAmount={setTxnAmount}
            txnAmount={txnAmount}
            handleContinue={isDeposit ? handleDeposit : handleWithdrawal}
            txnStep={pickDataOne(depositStep, withdrawalStep, mintStep, step)}
            setIsDeposit={setIsDeposit}
            handleFaucet={handleFaucet}
            isDeposit={isDeposit}
            currentLtv={currentLtv}
            initialborrowBalance={myBorrowsTotal}
            ltv={ltv}
            txnType={pickDataOne(ETxnType.deposit, ETxnType.withdraw, ETxnType.mint, step)}
          />
        ) : (
          <EnableDeposit token={token} steps={depositStep} enabled={handleApprove} />
        ))
      )}
    </>
  );
};

export default DepositToken;
