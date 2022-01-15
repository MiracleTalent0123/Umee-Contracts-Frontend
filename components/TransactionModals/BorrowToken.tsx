import * as React from 'react';
import BorrowInputAmount from 'components/Borrows/BorrowInputAmount';
import { InterestRateTypeEnums } from 'components/Borrows/BorrowInputRate';
import { ITokenData, ETxnSteps, ETxnType } from 'lib/types';
import { useData } from 'api/data';
import { BigNumber, constants, utils } from 'ethers';
import { useTransaction } from 'api/data/transactions';
import { useWeb3 } from 'api/web3';
import PageLoading from 'components/common/Loading/PageLoading';
import { getMaxBorrows } from 'lib/health-utils';
import { toast } from 'react-toastify';
import { GREATER_THAN_ZERO_MESSAGE } from 'lib/constants';
import { isZero } from 'lib/number-utils';
import { useUserBalance } from 'api/data/allowanceData';

const { useEffect, useState } = React;

const BorrowToken = ({
  address: tokenAddress,
  currentLtv,
  myBorrowsTotal,
  initialBorrowLimit,
  onClose,
}: {
  address: string;
  currentLtv: string;
  myBorrowsTotal: number;
  initialBorrowLimit: string;
  onClose: () => void;
}) => {
  const { ReserveData, ReserveConfigurationData, UserAccountData, priceData, UserReserveData } = useData();
  const {
    Contracts: { lendingPool },
  } = useData();
  const { account } = useWeb3();

  const { contractCall: contractCallBorrow } = useTransaction();
  const { contractCall: contractCallRepay } = useTransaction();

  const [token, setToken] = useState<ITokenData>();
  const [isBorrow, setIsBorrow] = useState<boolean>(true);
  const [borrowStep, setBorrowStep] = useState<ETxnSteps>(ETxnSteps.InputAmount);
  const [repayStep, setRepayStep] = useState<ETxnSteps>(ETxnSteps.InputAmount);
  const [txnAmount, setTxnAmount] = useState<string>('');
  const userBalance = useUserBalance(tokenAddress) || BigNumber.from(0);
  const [availableBorrowAmount, setAvailableBorrowAmount] = useState<BigNumber>(BigNumber.from(0));
  const [availableRepayAmount, setAvailableRepayAmount] = useState<BigNumber>(BigNumber.from(0));
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0));
  const [txnAmountBN, setTxnAmountBN] = useState(BigNumber.from(0));
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const [ltv, setLtv] = useState<string>('');
  const [borrowBalance, setBorrowBalance] = useState<string>('');
  const [amountBorrowed, setAmountBorrowed] = useState<BigNumber>(BigNumber.from(0));

  const interestRateType = InterestRateTypeEnums.Variable;

  useEffect(() => {
    setTxnAmount('');
  }, [isBorrow]);

  useEffect(() => {
    if (ReserveData && UserAccountData && ReserveConfigurationData && lendingPool && account && token) {
      setPageLoading(false);
    }
  }, [ReserveConfigurationData, ReserveData, UserAccountData, account, lendingPool, token]);
  const [txnHash, setTxnHash] = useState('');

  useEffect(() => {
    if (!tokenAddress || !UserReserveData) {
      setAmountBorrowed(BigNumber.from(0));
      return;
    }

    const userReserve = UserReserveData.find((r) => r.address === tokenAddress);

    if (!userReserve) {
      setAmountBorrowed(BigNumber.from(0));
      return;
    }

    setAmountBorrowed(userReserve.currentVariableDebt);
  }, [UserReserveData, tokenAddress]);

  useEffect(() => {
    if (userBalance.lt(amountBorrowed)) {
      setAvailableRepayAmount(userBalance);
    } else {
      setAvailableRepayAmount(amountBorrowed);
    }
  }, [amountBorrowed, userBalance, UserReserveData, tokenAddress]);

  useEffect(() => {
    if (!txnAmount) {
      setTxnAmountBN(BigNumber.from(0));
      return;
    }

    setTxnAmountBN(utils.parseUnits(parseFloat(txnAmount).toFixed(tokenDecimals.toNumber()), tokenDecimals));
  }, [txnAmount, tokenDecimals]);

  useEffect(() => {
    if (priceData && token?.symbol) {
      if (parseFloat(txnAmount) > 0) {
        let borrowUsdAmount = isBorrow
          ? myBorrowsTotal + parseFloat(txnAmount) * priceData[token.symbol].usd
          : myBorrowsTotal - parseFloat(txnAmount) * priceData[token.symbol].usd;
        setBorrowBalance(borrowUsdAmount.toFixed(2));
        setLtv(((borrowUsdAmount / parseFloat(initialBorrowLimit)) * 100).toFixed(2));
        if (borrowUsdAmount < 0) {
          setBorrowBalance('0.00');
          setLtv('0.00');
        }
      } else {
        setBorrowBalance('');
        setLtv('');
      }
    }
  }, [txnAmount, priceData, token, myBorrowsTotal, initialBorrowLimit, isBorrow]);

  useEffect(() => {
    if (tokenAddress) {
      const address = tokenAddress as string;
      const t = ReserveData.find((r) => r.address.toLowerCase() === address.toLowerCase());
      setTokenDecimals(ReserveConfigurationData.find((r) => r.address === t?.address)?.decimals || BigNumber.from(18));
      setToken(t);

      if (UserAccountData && token && priceData && token.symbol && t) {
        // Maximum a user can Borrow to keep health in good standing
        const MaxAvailable = getMaxBorrows(
          UserAccountData,
          priceData[token.symbol].eth,
          token.symbol,
          tokenDecimals.toString()
        );

        // If the User's deposits is less than healthFactor max => Can withdraw all
        // If deposits are less => can withdraw up to healthFactor max
        if (t.availableLiquidity.lt(MaxAvailable)) {
          setAvailableBorrowAmount(t.availableLiquidity);
        } else {
          setAvailableBorrowAmount(MaxAvailable);
        }
      }
    }
  }, [ReserveConfigurationData, ReserveData, UserAccountData, tokenAddress, token, priceData, tokenDecimals]);

  const handleContinue = () => {
    if (txnAmount === '' || isZero(txnAmount)) {
      toast.error(GREATER_THAN_ZERO_MESSAGE);
      return;
    }
    isBorrow ? handleBorrow() : handleRepay();
  };

  const handleBorrow = () => {
    setBorrowStep(ETxnSteps.Pending);

    if (!lendingPool || !token || !account) {
      setBorrowStep(ETxnSteps.Failure);
      return;
    }
    // Must approve transaction first
    contractCallBorrow(
      () => lendingPool.borrow(token.address || '', txnAmountBN, InterestRateTypeEnums.Variable, 0, account),
      'Borrowing',
      'Borrow failed',
      'Borrow succeeded',
      () => {
        setBorrowStep(ETxnSteps.Input);
        onClose();
      },
      undefined,
      (hash: string) => setTxnHash(hash)
    );
  };

  const handleRepay = () => {
    setRepayStep(ETxnSteps.Pending);

    if (!lendingPool || !token || !account) {
      setRepayStep(ETxnSteps.Failure);
      return;
    }

    if (txnAmountBN && amountBorrowed && txnAmountBN.gte(amountBorrowed.sub(10))) {
      contractCallRepay(
        () => lendingPool.repay(token.address || '', constants.MaxUint256, interestRateType, account),
        'Repaying',
        'Repay failed',
        'Repay succeeded',
        () => {
          setRepayStep(ETxnSteps.Input);
          onClose();
        },
        undefined,
        (hash: string) => setTxnHash(hash)
      );
    } else if (txnAmountBN) {
      contractCallRepay(
        () => lendingPool.repay(token.address || '', txnAmountBN, interestRateType, account),
        'Repaying',
        'Repay failed',
        'Repay succeeded',
        () => {
          setRepayStep(ETxnSteps.Input);
          onClose();
        },
        undefined,
        (hash: string) => setTxnHash(hash)
      );
    }
  };

  if (pageLoading) {
    return <PageLoading />;
  }

  const pickOne = <V1, V2>(v1: V1, v2: V2, first: boolean): V1 | V2 => {
    return first ? v1 : v2;
  };

  return (
    <>
      {!!token && (
        <BorrowInputAmount
          txnAvailability={{
            availableAmount: pickOne(availableBorrowAmount, availableRepayAmount, isBorrow),
            token,
            tokenDecimals,
          }}
          setTxnAmount={setTxnAmount}
          handleContinue={handleContinue}
          txnStep={pickOne(borrowStep, repayStep, isBorrow)}
          setIsBorrow={setIsBorrow}
          isBorrow={isBorrow}
          initialBorrowBalance={myBorrowsTotal}
          borrowBalance={borrowBalance}
          balance={pickOne(amountBorrowed, availableRepayAmount, isBorrow)}
          txnAmount={txnAmount}
          currentLtv={currentLtv}
          ltv={ltv}
          txnType={pickOne(ETxnType.borrow, ETxnType.repay, isBorrow)}
        />
      )}
    </>
  );
};

export default BorrowToken;
