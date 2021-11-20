import * as React from 'react';
import { BigNumberish, BigNumber, constants, utils } from 'ethers';
import { useWeb3 } from 'api/web3';
import { ETxnType, ITokenData, IUserReserveData } from 'lib/types';
import { useData } from 'api/data';
import { bigNumberToString, isZero, stringToBigNumber } from 'lib/number-utils';
import { useUserBalance, useAllowanceData } from 'api/data/allowanceData';
import { useErc20DetailedContract } from 'api/data/contracts';
import { useTransaction } from 'api/data/transactions';
import { InterestRateTypeEnums } from 'components/Borrows/BorrowInputRate';
import { RepayInputWallet } from 'components/Repay/Wallet';
import { getNewHealthRepay, assetPrecision } from 'lib/health-utils';
import { toast } from 'react-toastify';
import { ETxnSteps } from 'lib/types';
import { GREATER_THAN_ZERO_MESSAGE } from 'lib/constants';
import { IAssetPrices } from 'api/data/pricedata';

const { useEffect, useState } = React;

export interface RepayInputProps {
  priceData?: IAssetPrices;
  selectedToken?: string;
  amountBorrowed: BigNumberish;
  borrowData: IUserReserveData;
  inputAmount: string;
  currentHealthFactor: string;
  feesAmount: string;
  maxSlippage: string;
  nextHealthFactor: string;
  repayAmount: string;
  tokenDecimals: BigNumberish;
  userBalance?: BigNumber;
  availableAmount?: BigNumber;
  setTxnInputAmount(amount: string): void;
  setRepayAmount(amount: string): void;
  setRepayStep(step: ETxnSteps): void;
  setSelectedCollateralToken?(amount: string): void;
}

const RepayToken = ({
  address: tokenAddress,
  setActiveTab,
  currentLtv,
  myBorrowsTotal,
  initialBorrowLimit
}: {
  address: string;
  setActiveTab: (activeTab: string) => void;
  currentLtv: string;
  myBorrowsTotal: number;
  initialBorrowLimit: string;
}) => {
  const interestRateType = InterestRateTypeEnums.Variable;

  const {
    Contracts: {
      lendingPool, // let the tokens hit the floor...
    },
    ReserveData,
    ReserveConfigurationData,
    UserAccountData,
    UserReserveData,
    priceData,
  } = useData();
  const { account } = useWeb3();

  // Transactions
  const erc20Contract = useErc20DetailedContract(tokenAddress);
  const { contractCall: contractCallApprove, pending: pendingApprove } = useTransaction();
  const { contractCall: contractCallRepay, pending: pendingRepay } = useTransaction();
  const [txnHash, setTxnHash] = useState<string>('');

  // Borrow details
  const [token, setToken] = useState<ITokenData>();
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0));
  const [borrowData, setBorrowData] = useState<IUserReserveData>();
  const [amountBorrowed, setAmountBorrowed] = useState<BigNumber>(BigNumber.from(0));

  // Repay flow
  // changed RepayStep (repayStep => input)+ RepayType (empty param => repayTypeEnum.wallet)
  // Changes flow from (picking collateral type => input repay amount)
  const [repayStep, setRepayStep] = useState<ETxnSteps>(ETxnSteps.ChooseType);
  const [repayAmount, setRepayAmount] = useState<string>('');
  const [repayAmountBN, setRepayAmountBN] = useState<BigNumber>(BigNumber.from(0));

  // Your wallet
  const userBalance = useUserBalance(tokenAddress) || BigNumber.from(0);
  const [availableAmount, setAvailableAmount] = useState<BigNumber>(BigNumber.from(0));
  const allowance = useAllowanceData(erc20Contract, lendingPool ? lendingPool.address : '');

  const [ltv, setLtv] = useState<string>('');
  const [borrowBalance, setBorrowBalance] = useState<string>('');

  // Set Token data
  useEffect(() => {
    if (!tokenAddress) return;
    if (!token) {
      const address = tokenAddress as string;
      const t = ReserveData.find((r) => r.address.toLowerCase() === address.toLowerCase());
      setToken(t);
    }
    setTokenDecimals(ReserveConfigurationData.find((r) => r.address === tokenAddress)?.decimals || BigNumber.from(18));
  }, [token, tokenAddress, ReserveData, ReserveConfigurationData, UserAccountData]);

  // Set Borrow data
  useEffect(() => {
    const borrowData = UserReserveData.find((reserve) => reserve.address === tokenAddress);
    if (borrowData) {
      if (Number(interestRateType) === InterestRateTypeEnums.Stable) {
        setAmountBorrowed(borrowData.currentStableDebt || BigNumber.from(0));
      } else if (Number(interestRateType) === InterestRateTypeEnums.Variable) {
        setAmountBorrowed(borrowData.currentVariableDebt || BigNumber.from(0));
      }
      setBorrowData(borrowData);
    }
    if (userBalance.lt(amountBorrowed)) {
      setAvailableAmount(userBalance);
    } else {
      setAvailableAmount(amountBorrowed);
    }
  }, [UserReserveData, interestRateType, tokenAddress, amountBorrowed, userBalance]);

  // Watch for pending transactions and set repay step accordingly
  useEffect(() => {
    if (pendingApprove) {
      setRepayStep(ETxnSteps.PendingApprove);
    }
  }, [pendingApprove]);

  useEffect(() => {
    if (pendingRepay) {
      setRepayStep(ETxnSteps.PendingSubmit);
    }
  }, [pendingRepay]);

  useEffect(() => {
    if (repayAmount && tokenDecimals) {
      setRepayAmountBN(stringToBigNumber(parseFloat(repayAmount).toFixed(tokenDecimals.toNumber()), tokenDecimals));
    }
  }, [repayAmount, tokenDecimals]);

  useEffect(() => {
    if (priceData && token?.symbol) {
      if (parseFloat(repayAmount) > 0) {
        let borrowUsdAmount = myBorrowsTotal - parseFloat(repayAmount) * priceData[token.symbol].usd;
        if(borrowUsdAmount < 0) {
          setBorrowBalance('0.00');
          setLtv('0.00');
        }
        else {
          setBorrowBalance(borrowUsdAmount.toFixed(2));
          setLtv((borrowUsdAmount / parseFloat(initialBorrowLimit) * 100).toFixed(2));
        }
      } else {
        setBorrowBalance('');
        setLtv('');
      }
    }
  }, [repayAmount, priceData, token, myBorrowsTotal, initialBorrowLimit]);

  // Transaction approval
  const handleApprove = () => {
    if (!erc20Contract || !lendingPool) {
      setRepayStep(ETxnSteps.Failure);
      return;
    }

    contractCallApprove(
      () => erc20Contract.approve(lendingPool.address, constants.MaxUint256),
      'Approving token allowance',
      'Approval failed',
      'Approval succeeded',
      () => setRepayStep(ETxnSteps.Failure),
      () => setRepayStep(ETxnSteps.Submit)
    );
  };

  const handleContinue = () => {
    if (repayAmount === '' || isZero(repayAmount)) {
      toast.error(GREATER_THAN_ZERO_MESSAGE);
      return;
    }
    if (allowance.gte(repayAmountBN)) {
      setRepayStep(ETxnSteps.Submit);
    } else {
      setRepayStep(ETxnSteps.Overview);
    }
    handleRepay();
  };

  // The actual repaying itself
  const handleRepay = () => {
    setRepayStep(ETxnSteps.Pending);

    if (!lendingPool || !token || !account || !interestRateType) {
      setRepayStep(ETxnSteps.Failure);
      return;
    }

    if (repayAmountBN && amountBorrowed && repayAmountBN.gte(amountBorrowed.sub(10))) {
      contractCallRepay(
        () => lendingPool.repay(token.address || '', constants.MaxUint256, interestRateType, account),
        'Repaying',
        'Repay failed',
        'Repay succeeded',
        () => setRepayStep(ETxnSteps.Failure),
        () => setRepayStep(ETxnSteps.Success),
        undefined,
        (hash: string) => setTxnHash(hash)
      );
    } else if (repayAmountBN) {
      contractCallRepay(
        () => lendingPool.repay(token.address || '', repayAmountBN, interestRateType, account),
        'Repaying',
        'Repay failed',
        'Repay succeeded',
        () => setRepayStep(ETxnSteps.Failure),
        () => setRepayStep(ETxnSteps.Success),
        undefined,
        (hash: string) => setTxnHash(hash)
      );
    }
  };

  return (
    <>
      {!!token && !!borrowData && (
        <RepayInputWallet
          setRepayAmount={setRepayAmount}
          tokenDecimals={tokenDecimals}
          userBalance={userBalance}
          availableAmount={availableAmount}
          handleContinue={handleContinue}
          setActiveTab={setActiveTab}
          txnStep={repayStep}
          token={token}
          txnType={ETxnType.repay}
          initialBorrowBalance={myBorrowsTotal}
          borrowBalance={borrowBalance}
          ltv={ltv}
          currentLtv={currentLtv}
        />
      )}
    </>
  );
};

export default RepayToken;
