import React from 'react';
import { Box, Main } from 'grommet';
import {
  InfoPanel,
  InfoPanelItem,
  InfoPanelMeter,
  InfoBar,
  InfoBarHeader,
  InfoBarBody,
  ButtonItem,
} from '../../components';
import { IDataListColumn } from '../../components/DataList/DataList';
import DepositsDataList from '../../components/DepositsDataList';
import BorrowsDataList from '../../components/BorrowsDataList';
import { useData } from '../../api/data';
import { useState, useEffect } from 'react';
import { BigNumber, utils } from 'ethers';
import { useWeb3 } from '../../api/web3';
import { useHistory } from 'react-router-dom';
import NoWalletConnectedBox from 'components/NoWalletConnectedBox';
import PageLoading from 'components/common/Loading/PageLoading';
import { useUserCollateralChartData, useUserDepositChartData } from 'api/data/userdata';
import { bigNumberToUSDNumber, bigNumberETHToString} from 'lib/number-utils';
import InfoDetailPopUp from 'components/InfoBar/InfoDetailPopUp';

import { IUserTxnBorrow, IUserTxnDeposit } from 'lib/types';

const Dashboard = () => {
  const history = useHistory();

  const [borrowMeter, setBorrowMeter] = useState<{
    label: string;
    value: number;
  }[]>([]);
  const [borrowData, setBorrowData] = useState<IUserTxnBorrow[]>([]);
  const [depositData, setDepositData] = useState<IUserTxnDeposit[]>([]);

  const [ myDepositsTotal, setMyDepositsTotal ] = useState<number>(0);
  const [ pageLoading, setPageLoading ] = useState<boolean>(true);
  const [ ltv, setLtv ] = useState<string>('0');
  const [ show, setShow ] = useState<boolean>(false);
  const [ showButton, setShowButton ] = useState<boolean>(false);

  const { UserAccountData, UserReserveData, ReserveConfigurationData, ReserveData, priceData } = useData();
  const web3 = useWeb3();
  const userDepositChartData = useUserDepositChartData(priceData, UserReserveData);
  const userCollateralChartData = useUserCollateralChartData(priceData, UserReserveData);
  const [ethPrice, setEthPrice] = useState<number>();


  useEffect(() => {
    if(ReserveData){
      setEthPrice(ReserveData.find(r => r.symbol === 'WETH')?.usdPrice || 0);
    }
  }, [ReserveData, UserAccountData?.totalCollateralETH, ethPrice]);

  useEffect(() => {
    if (UserAccountData && UserReserveData && ReserveData && ReserveConfigurationData) {
      setPageLoading(false);
    }

    if (!web3.account) {
      setPageLoading(false);
    }
  }, [ReserveConfigurationData, ReserveData, UserAccountData, UserReserveData, borrowData.length, depositData.length, web3.account]);

  useEffect(() => {
    if(myDepositsTotal > 0){
      setShowButton(true);
    }
  },[myDepositsTotal]);

  useEffect(() => {
    if(!UserAccountData?.totalDebtETH.isZero() && !UserAccountData?.totalCollateralETH.isZero() && UserAccountData?.totalDebtETH){
      const debt = parseFloat(utils.formatEther(UserAccountData.totalDebtETH));
      const collateral = parseFloat(utils.formatEther(UserAccountData.totalCollateralETH));
      setLtv(((debt/collateral)*100).toFixed(2).toString());
    }
  }, [UserAccountData?.totalDebtETH, UserAccountData?.totalCollateralETH]);

  useEffect(() => {
    if(!priceData) return;
    setMyDepositsTotal(
      UserReserveData.reduce((acc, reserve) => {
        const assetPrice = priceData[reserve.symbol].usd;
        const tempReserve = parseFloat(utils.formatUnits(reserve.currentUTokenBalance, reserve.decimals));
        acc += tempReserve * assetPrice;
        return acc;
      }, 0)
    );
  }, [UserReserveData, priceData]);

  useEffect(() => {
    setBorrowData(UserReserveData.map((reserve) => {
      return (
        {
          symbol: reserve.symbol,
          address: reserve.address,
          decimals: reserve.decimals,
          usdPrice: ReserveData.find(r => r.address.toLowerCase() === reserve.address.toLowerCase())?.usdPrice || 0,
          currentUTokenBalance: reserve.currentUTokenBalance,
          currentStableDebt: reserve.currentStableDebt,
          currentVariableDebt: reserve.currentVariableDebt,
          principalStableDebt: reserve.principalStableDebt,
          scaledVariableDebt: reserve.scaledVariableDebt,
          stableBorrowRate: reserve.stableBorrowRate,
          liquidityRate: reserve.liquidityRate,
          stableRateLastUpdated: reserve.stableRateLastUpdated,
          usageAsCollateralEnabled: reserve.usageAsCollateralEnabled,
          variableBorrowAPR: ReserveData.find(r => r.address === reserve.address)?.variableBorrowRate || BigNumber.from(0),
          stableBorrowAPR: ReserveData.find(r => r.address === reserve.address)?.stableBorrowRate || BigNumber.from(0),
        }
      );
    }));
  }, [ReserveData, UserReserveData]);

  useEffect(() => {
    setDepositData(UserReserveData.filter(d => d.currentUTokenBalance && !d.currentUTokenBalance.isZero()).map((reserve) => {
      return (
        {
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
          usdPrice: ReserveData.find(r => r.address.toLowerCase() === reserve.address.toLowerCase())?.usdPrice || 0,
        }
      );
    }));
  }, [ReserveConfigurationData, ReserveData, UserReserveData]);

  useEffect(() => {

    if (!UserAccountData?.totalDebtETH || !priceData) return;
    const borrowTotalUsd = bigNumberToUSDNumber(UserAccountData.totalDebtETH, 18, (priceData['WETH'].usd));

    const borrowMeterData = UserReserveData.reduce((acc, reserve) => {
      if (reserve.currentStableDebt || reserve.currentVariableDebt) {
        const reserveDebt = reserve.currentStableDebt.add(reserve.currentVariableDebt);
        const reserveDebtUsd = bigNumberToUSDNumber(reserveDebt, reserve.decimals, priceData[reserve.symbol].usd);
        acc.push({
          label: reserve.symbol,
          value: reserveDebtUsd / borrowTotalUsd,
        });
      }
      return (acc);

    }, Array<{ label: string; value: number }>());

    setBorrowMeter(borrowMeterData);
  }, [UserReserveData, priceData, UserAccountData]);

  const depositsColumns: IDataListColumn[] = [
    { title: 'Your deposits', size: 'flex' },
    { title: 'Current balance', size: 'flex' },
    { title: 'APY', size: 'flex' },
    { title: 'Collateral', size: 'flex' },
    { title: '', size: 'flex' },
    { title: '', size: 'flex' },
  ];


  const borrowsColumns: IDataListColumn[] = [
    { title: 'Your borrows', size: 'flex' },
    { title: 'Borrowed', size: 'flex' },
    { title: 'APR', size: 'flex' },
    { title: '', size: 'flex' },
    { title: '', size: 'flex' },
  ];

  const handleDepositClick = (e: any) => {
    e.preventDefault();
    history.push('/deposit');
  };
  if (pageLoading) {
    return (
      <PageLoading />
    );
  }

  return (
    <div>
      <InfoBar>

        <InfoBarHeader></InfoBarHeader>
        {!web3.account &&
          <NoWalletConnectedBox />
        }

        {web3.account && UserAccountData &&
          <InfoBarBody>
            <InfoPanel title="Deposit Information">
              <InfoPanelItem
                title="Approximate balance"
                data={[
                  { value: myDepositsTotal.toFixed(2), bold: true },
                  { value: 'USD' }
                ]}
              />
              {/* <Box flex /> */}
              <InfoPanelMeter
                title="Deposit Composition"
                values={userDepositChartData}
              // values={depositMeter}
              />
            </InfoPanel>
            <InfoPanel title="Borrow Information" direction="row">
              <Box flex>                             
                <InfoPanelItem title="You borrowed" data={[{ value: bigNumberETHToString(UserAccountData.totalDebtETH,  ethPrice), bold: true }, { value: 'USD' }]} />
                <InfoPanelItem title="Your collateral" data={[{ value: bigNumberETHToString(UserAccountData.totalCollateralETH, ethPrice), bold: true }, { value: 'USD' }]} />  
                <InfoPanelItem title="Current LTV" data={[{ value: ltv , bold: true }, { value: '%' }]} />
                <InfoDetailPopUp userData={UserAccountData} show={show} setShow={setShow} showButton={showButton}/>
              </Box>
              <Box flex />
              <InfoPanelMeter
                title="Borrow Composition"
                values={borrowMeter}
              />
              <InfoPanelMeter
                title="Collateral Composition"
                values={userCollateralChartData}
              />
            </InfoPanel>
          </InfoBarBody>
        }
      </InfoBar>
      {web3.account &&
        <Main pad={{ horizontal: 'large', vertical: 'small' }} gap="small" align={Number(UserAccountData?.totalDebtETH) === 0 && myDepositsTotal === 0 ? 'center' : undefined}>
          {Number(UserAccountData?.totalDebtETH) === 0 && myDepositsTotal === 0 ?
            <Box direction="column" alignContent="center" alignSelf="center" border={{ color: 'brand', size: 'large' }} pad="large" margin="xlarge" width="medium">
              <Box justify="center" pad="small">You have not made any Deposits</Box>
              <Box justify="center" pad="small">
                <ButtonItem onClick={(e) => handleDepositClick(e)} background="brand">
                  Deposit
                </ButtonItem>
              </Box>
            </Box>
            :
            <Box direction="row" gap="medium">
              <DepositsDataList columns={depositsColumns} data={depositData} total={myDepositsTotal} />
              <BorrowsDataList columns={borrowsColumns} data={borrowData} total={Number(UserAccountData?.totalDebtETH) || 0} />
            </Box>
          }
        </Main>
      }
    </div>
  );
};

export default Dashboard;