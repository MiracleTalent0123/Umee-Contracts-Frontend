import * as React from 'react';
import BorrowInputAmount from 'components/Borrows/BorrowInputAmount';
import { InterestRateTypeEnums } from 'components/Borrows/BorrowInputRate';
import { ITokenData, ETxnSteps, ETxnType } from 'lib/types';
import { useData } from 'api/data';
import { BigNumber, utils } from 'ethers';
import { useTransaction } from 'api/data/transactions';
import { useWeb3 } from 'api/web3';
import PageLoading from 'components/common/Loading/PageLoading';
import { getMaxBorrows } from 'lib/health-utils';
import { toast } from 'react-toastify';
import { GREATER_THAN_ZERO_MESSAGE } from 'lib/constants';
import { isZero } from 'lib/number-utils';

const { useEffect, useState } = React;

const BorrowToken = ({
  address: tokenAddress,
  setActiveTab,
  currentLtv,
  myBorrowsTotal,
  initialBorrowLimit,
}: {
  address: string;
  setActiveTab: (activeTab: string) => void;
  currentLtv: string;
  myBorrowsTotal: number;
  initialBorrowLimit: string;
}) => {
  const { ReserveData, ReserveConfigurationData, UserAccountData, priceData, UserReserveData } = useData();
  const {
    Contracts: { lendingPool },
  } = useData();
  const { account } = useWeb3();

  const { contractCall: contractCallBorrow, pending: pendingBorrow } = useTransaction();

  const [token, setToken] = useState<ITokenData>();
  const [borrowStep, setBorrowStep] = useState<ETxnSteps>(ETxnSteps.InputAmount);
  const [borrowAmount, setBorrowAmount] = useState<string>('');
  const [availableAmount, setAvailableAmount] = useState<BigNumber>(BigNumber.from(0));
  const [tokenDecimals, setTokenDecimals] = useState<BigNumber>(BigNumber.from(0));
  const [borrowAmountBN, setBorrowAmountBN] = useState(BigNumber.from(0));
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const [ltv, setLtv] = useState<string>('');
  const [borrowBalance, setBorrowBalance] = useState<string>('');
  const [borrowedBalance, setBorrowedBalance] = useState<BigNumber>(BigNumber.from(0));

  useEffect(() => {
    if (ReserveData && UserAccountData && ReserveConfigurationData && lendingPool && account && token) {
      setPageLoading(false);
    }
  }, [ReserveConfigurationData, ReserveData, UserAccountData, account, lendingPool, token]);
  const [txnHash, setTxnHash] = useState('');

  useEffect(() => {
    if (!tokenAddress || !UserReserveData) {
      setBorrowedBalance(BigNumber.from(0));
      return;
    }

    const userReserve = UserReserveData.find((r) => r.address === tokenAddress);

    if (!userReserve) {
      setBorrowedBalance(BigNumber.from(0));
      return;
    }

    setBorrowedBalance(userReserve.currentVariableDebt);
  }, [UserReserveData, tokenAddress]);

  useEffect(() => {
    if (!borrowAmount) {
      setBorrowAmountBN(BigNumber.from(0));
      return;
    }

    setBorrowAmountBN(utils.parseUnits(parseFloat(borrowAmount).toFixed(tokenDecimals.toNumber()), tokenDecimals));
  }, [borrowAmount, tokenDecimals]);

  useEffect(() => {
    if (priceData && token?.symbol) {
      if (parseFloat(borrowAmount) > 0) {
        let borrowUsdAmount = myBorrowsTotal + parseFloat(borrowAmount) * priceData[token.symbol].usd;
        setBorrowBalance(borrowUsdAmount.toFixed(2));
        setLtv(((borrowUsdAmount / parseFloat(initialBorrowLimit)) * 100).toFixed(2));
      } else {
        setBorrowBalance('');
        setLtv('');
      }
    }
  }, [borrowAmount, priceData, token, myBorrowsTotal, initialBorrowLimit]);

  useEffect(() => {
    if (tokenAddress) {
      const address = tokenAddress as string;
      const t = ReserveData.find((r) => r.address.toLowerCase() === address.toLowerCase());
      setTokenDecimals(ReserveConfigurationData.find((r) => r.address === t?.address)?.decimals || BigNumber.from(18));
      setToken(t);

      if ( UserAccountData && token && priceData && token.symbol && t) {
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
          setAvailableAmount(t.availableLiquidity);
        } else {
          setAvailableAmount(MaxAvailable);
        }
      }
    }
  }, [ReserveConfigurationData, ReserveData, UserAccountData, tokenAddress, token, priceData, tokenDecimals]);

  const handleContinue = () => {
    if (borrowAmount === '' || isZero(borrowAmount)) {
      toast.error(GREATER_THAN_ZERO_MESSAGE);
      return;
    }
    handleBorrow();
  };

  const handleBorrow = () => {
    setBorrowStep(ETxnSteps.Pending);

    if (!lendingPool || !token || !account) {
      setBorrowStep(ETxnSteps.Failure);
      return;
    }
    // Must approve transaction first
    contractCallBorrow(
      () => lendingPool.borrow(token.address || '', borrowAmountBN, InterestRateTypeEnums.Variable, 0, account),
      'Borrowing',
      'Borrow failed',
      'Borrow succeeded',
      () => setBorrowStep(ETxnSteps.Failure),
      () => setBorrowStep(ETxnSteps.Success),
      undefined,
      (hash: string) => setTxnHash(hash)
    );
  };

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {!!token && (
        <BorrowInputAmount
          txnAvailability={{ availableAmount, token, tokenDecimals }}
          setTxnAmount={setBorrowAmount}
          handleContinue={handleContinue}
          txnStep={borrowStep}
          setActiveTab={setActiveTab}
          initialBorrowBalance={myBorrowsTotal}
          borrowBalance={borrowBalance}
          borrowedBalance={borrowedBalance}
          currentLtv={currentLtv}
          ltv={ltv}
          txnType={ETxnType.borrow}
        />
      )}
    </>
  );
};

export default BorrowToken;
