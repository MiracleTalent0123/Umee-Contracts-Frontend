import React, { useState, useEffect } from 'react';
import { Box } from 'grommet';
import { IUserTxnDeposit, IUserTxnBorrow } from 'lib/types';
import { useData } from 'api/data';
import { useWeb3 } from 'api/web3';
import PageLoading from 'components/common/Loading/PageLoading';
import { BigNumber, utils } from 'ethers';
import { IDataListColumn } from 'components/DataList/DataList';
import { DepositsDataList, BorrowsDataList } from 'components';
import NoWalletConnectedBox from 'components/NoWalletConnectedBox';
import NoDepositsBox from 'components/NoDepositsBox';
import Layout from 'pages/Layout';
import DashboardOverview from 'components/Dashboard/DashboardOverview';

const Dashboard = () => {
  const [borrowData, setBorrowData] = useState<IUserTxnBorrow[]>([]);
  const [depositData, setDepositData] = useState<IUserTxnDeposit[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [myDepositsTotal, setMyDepositsTotal] = useState<number>(0);
  const [myBorrowsTotal, setMyBorrowsTotal] = useState<number>(0);
  const [borrowLimitUsed, setBorrowLimitUsed] = useState<string>('0');
  const [borrowLimit, setBorrowLimit] = useState<number>(0);
  const { UserAccountData, UserReserveData, ReserveConfigurationData, ReserveData, priceData } = useData();
  const web3 = useWeb3();
  const [ethPrice, setEthPrice] = useState<number>();

  useEffect(() => {
    if (ReserveData) {
      setEthPrice(ReserveData.find((r) => r.symbol === 'WETH')?.usdPrice || 0);
    }
  }, [ReserveData, UserAccountData?.totalCollateralETH, ethPrice]);

  useEffect(() => {
    if (UserAccountData && UserReserveData && ReserveData && ReserveConfigurationData) {
      setPageLoading(false);
    }

    if (!web3.account) {
      setPageLoading(false);
    }
  }, [
    ReserveConfigurationData,
    ReserveData,
    UserAccountData,
    UserReserveData,
    borrowData.length,
    depositData.length,
    web3.account,
  ]);

  useEffect(() => {
    setBorrowData(
      UserReserveData.filter((d) => !d.currentVariableDebt.isZero()).map((reserve) => {
        return {
          symbol: reserve.symbol,
          address: reserve.address,
          decimals: reserve.decimals,
          usdPrice: ReserveData.find((r) => r.address.toLowerCase() === reserve.address.toLowerCase())?.usdPrice || 0,
          currentUTokenBalance: reserve.currentUTokenBalance,
          currentStableDebt: reserve.currentStableDebt,
          currentVariableDebt: reserve.currentVariableDebt,
          principalStableDebt: reserve.principalStableDebt,
          scaledVariableDebt: reserve.scaledVariableDebt,
          stableBorrowRate: reserve.stableBorrowRate,
          liquidityRate: reserve.liquidityRate,
          stableRateLastUpdated: reserve.stableRateLastUpdated,
          usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
          variableBorrowAPR:
            ReserveData.find((r) => r.address === reserve.address)?.variableBorrowRate || BigNumber.from(0),
          stableBorrowAPR:
            ReserveData.find((r) => r.address === reserve.address)?.stableBorrowRate || BigNumber.from(0),
        };
      })
    );
  }, [ReserveData, UserReserveData]);

  useEffect(() => {
    if (UserReserveData) {
      setDepositData(
        UserReserveData.filter((d) => d.currentUTokenBalance && !d.currentUTokenBalance.isZero()).map((reserve) => {
          return {
            symbol: reserve.symbol,
            address: reserve.address,
            decimals: reserve.decimals,
            currentUTokenBalance: reserve.currentUTokenBalance,
            currentStableDebt: reserve.currentStableDebt,
            currentVariableDebt: reserve.currentVariableDebt,
            principalStableDebt: reserve.principalStableDebt,
            scaledVariableDebt: reserve.scaledVariableDebt,
            stableBorrowRate: reserve.stableBorrowRate,
            liquidityRate: reserve.liquidityRate,
            stableRateLastUpdated: reserve.stableRateLastUpdated,
            usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
            usdPrice: ReserveData.find((r) => r.address.toLowerCase() === reserve.address.toLowerCase())?.usdPrice || 0,
          };
        })
      );
    }
  }, [ReserveConfigurationData, ReserveData, UserReserveData]);

  useEffect(() => {
    if (!priceData) return;
    setMyDepositsTotal(
      UserReserveData.reduce((acc, reserve) => {
        const assetPrice = priceData[reserve.symbol].usd;
        const tempReserve = parseFloat(utils.formatUnits(reserve.currentUTokenBalance, reserve.decimals));
        acc += tempReserve * assetPrice;
        return acc;
      }, 0)
    );
    setMyBorrowsTotal(
      UserReserveData.reduce((acc, reserve) => {
        const assetPrice = priceData[reserve.symbol].usd;
        const tempReserve = parseFloat(
          utils.formatUnits(reserve.currentVariableDebt.add(reserve.currentStableDebt), reserve.decimals)
        );
        acc += tempReserve * assetPrice;
        return acc;
      }, 0)
    );
  }, [UserReserveData, priceData]);

  useEffect(() => {
    if (UserAccountData) {
      const maxLtv = UserAccountData.currentLiquidationThreshold.toString();
      const borrowLimit = (myDepositsTotal * parseFloat(maxLtv)) / 10000;
      setBorrowLimitUsed(borrowLimit > 0 ? ((myBorrowsTotal / borrowLimit) * 100).toFixed(2) : '0');
      setBorrowLimit(borrowLimit);
    }
  }, [myBorrowsTotal, UserAccountData, myDepositsTotal]);

  const depositsColumns: IDataListColumn[] = [
    { title: 'ASSETS', size: 'flex' },
    { title: 'SUPPLIED', size: 'flex' },
    { title: 'APY', size: 'xsmall' },
    { title: '', size: 'flex' },
  ];

  const borrowsColumns: IDataListColumn[] = [
    { title: 'ASSETS', size: 'flex' },
    { title: 'BORROWED', size: 'flex' },
    { title: 'APY', size: 'xsmall' },
    { title: '', size: 'flex' },
  ];

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <Layout title="Dashboard">
      {!web3.account && <NoWalletConnectedBox />}
      {web3.account && UserAccountData && (
        <DashboardOverview
          myDepositsTotal={myDepositsTotal}
          myBorrowsTotal={myBorrowsTotal}
          userData={UserAccountData}
          ethPrice={ethPrice}
          borrowLimit={borrowLimit}
          borrowLimitUsed={parseFloat(borrowLimitUsed)}
        />
      )}
      {web3.account && (
        <Box
          margin={{top: 'large'}}
          align={Number(UserAccountData?.totalDebtETH) === 0 && myDepositsTotal === 0 ? 'center' : undefined}
        >
          {Number(UserAccountData?.totalDebtETH) === 0 && myDepositsTotal === 0 ? (
            <NoDepositsBox />
          ) : (
            <Box width="auto" direction="row" gap="medium" flex>
              <DepositsDataList columns={depositsColumns} data={depositData} total={myDepositsTotal} />
              <BorrowsDataList
                columns={borrowsColumns}
                data={borrowData}
                total={Number(UserAccountData?.totalDebtETH) || 0}
              />
            </Box>
          )}
        </Box>
      )}
    </Layout>
  );
};

export default Dashboard;
