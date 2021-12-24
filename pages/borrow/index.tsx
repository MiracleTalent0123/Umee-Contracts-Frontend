import { Box, Text } from 'grommet';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AvailableBorrowsDataList } from 'components';
import { IDataListColumn } from 'components/DataList/DataList';
import { DataListControls } from 'components/DataListControls/DataListControls';
import { IAvailableBorrowsData } from 'components/AvailableBorrowsDataList';
import { useData } from 'api/data';
import { useParams } from 'react-router-dom';
import { BigNumber, utils } from 'ethers';
import PageLoading from 'components/common/Loading/PageLoading';
import { useWeb3 } from 'api/web3';
import { getMaxBorrows } from 'lib/health-utils';
import './borrow.css';

const { useEffect, useState } = React;

export interface IMyBorrowsData {
  name: string;
  color: string;
  value: number;
  type: string;
  variableAPR?: BigNumber;
  address: string;
}

type stateType = {
  tokenAddress: string;
};

const Borrow = () => {
  const { state } = useLocation<stateType>();
  const { ReserveData, ReserveConfigurationData, UserReserveData, priceData, UserAccountData } = useData();
  const web3 = useWeb3();
  const { tokenAddress } = useParams<{ tokenAddress: string }>();

  const [tokens, setTokens] = useState<IAvailableBorrowsData[]>([]);
  const [myBorrowsData, setMyBorrowsData] = useState<IAvailableBorrowsData[]>();

  const [filteredData, setFilteredData] = useState<IAvailableBorrowsData[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (web3.account) {
      setLoggedIn(true);
    }
  }, [web3.account]);

  useEffect(() => {
    if (UserReserveData && ReserveConfigurationData && priceData && ReserveData) {
      setPageLoading(false);
    }
    if (!web3.account && ReserveData) {
      setPageLoading(false);
    }
  }, [ReserveConfigurationData, ReserveData, UserReserveData, priceData, web3.account, tokens.length]);

  useEffect(() => {
    if (ReserveData.length) {
      const tokens = ReserveData.reduce((acc, datum) => {
        const data = UserReserveData.find((value) => value.address === datum.address);
        let availableAmount;
        if (UserAccountData && datum.address && priceData && datum.symbol && ReserveData) {
          // Maximum a user can Borrow to keep health in good standing
          const MaxAvailable = getMaxBorrows(
            UserAccountData,
            priceData[datum.symbol].eth,
            datum.symbol,
            ReserveConfigurationData.find((r) => r.address === datum.address)?.decimals.toString() || '18'
          );

          // If the User's deposits is less than healthFactor max => Can withdraw all
          // If deposits are less => can withdraw up to healthFactor max
          if (datum.availableLiquidity.lt(MaxAvailable)) {
            availableAmount = datum.availableLiquidity;
          } else {
            availableAmount = MaxAvailable;
          }
        }
        if (!data || (data && data.currentVariableDebt?.isZero())) {
          if (datum.symbol !== 'WETH') {
            acc.push({
              address: datum.address,
              symbol: datum.symbol,
              color: 'black',
              tokensAvailable: availableAmount,
              usdAvailable: datum.usdPrice,
              variableAPR: datum.variableBorrowRate,
              decimals: ReserveConfigurationData.find((r) => r.address === datum.address)?.decimals.toNumber(),
              borrowingEnabled:
                ReserveConfigurationData.find((r) => r.address === datum.address)?.borrowingEnabled || false,
            });
          }
        }
        return acc;
      }, Array<IAvailableBorrowsData>());
      setTokens(tokens);
    }
    if (UserReserveData && priceData) {
      setMyBorrowsData(
        ReserveData.reduce((acc, reserve) => {
          const data = UserReserveData.find((value) => value.address === reserve.address);
          const reserveConfig = ReserveConfigurationData.find((r) => r.address === reserve.address);
          if (data && !data.currentStableDebt?.isZero()) {
            acc.push({
              symbol: reserve.symbol,
              color: 'black',
              balance: parseFloat(utils.formatUnits(data.currentStableDebt, reserveConfig?.decimals)),
              variableAPR: reserve.variableBorrowRate,
              stableAPR: reserve.stableBorrowRate,
              address: reserve.address,
              borrowingEnabled:
                ReserveConfigurationData.find((r) => r.address === reserve.address)?.borrowingEnabled || false,
              decimals: reserveConfig?.decimals.toNumber() || 18,
            });
          }
          if (data && !data.currentVariableDebt?.isZero()) {
            acc.push({
              symbol: reserve.symbol,
              color: 'black',
              balance: parseFloat(utils.formatUnits(data.currentVariableDebt, reserveConfig?.decimals)),
              variableAPR: reserve.variableBorrowRate,
              address: reserve.address,
              borrowingEnabled:
                ReserveConfigurationData.find((r) => r.address === reserve.address)?.borrowingEnabled || false,
              decimals: reserveConfig?.decimals.toNumber() || 18,
            });
          }
          return acc;
        }, Array<IAvailableBorrowsData>())
      );
    }
  }, [ReserveData, tokenAddress, ReserveConfigurationData, UserReserveData, priceData, UserAccountData]);

  const availableTokensColumns: IDataListColumn[] = [
    { title: 'Asset', size: 'flex' },
    { title: 'Liquidity', size: 'flex' },
    { title: 'APY', size: 'flex' },
  ];

  const userAssetsColums: IDataListColumn[] = [
    { title: 'Asset', size: 'flex' },
    { title: 'Balance', size: 'flex' },
    { title: 'APY', size: 'flex' },
  ];

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <div className="nav-title assets-container">
        <h1>Borrow</h1>
        <p>Borrow assets for cross-chain leverage</p>
      </div>
      {/**
       * @todo: ADK: This section is nearly identical to the the on in deposit/index.tsx.
       * Prime candidate for refactoring, but I'm too tired right now to do it. :)  */}
      <Box direction="row" justify="center" gap="medium" className="assets-container">
        <Box width="100%" style={{ maxWidth: '700px' }}>
          <DataListControls fullDataList={tokens} setFilteredData={setFilteredData} />
          <Box pad={{ vertical: 'small' }} width="auto" direction="row" gap="medium">
            {web3.account && myBorrowsData && myBorrowsData.length > 0 ? (
              <AvailableBorrowsDataList columns={userAssetsColums} data={myBorrowsData} loggedIn={loggedIn} />
            ) : (
              <></>
            )}
          </Box>
          {filteredData.length > 0 ? (
            <Box pad={{ vertical: 'small' }} width="auto">
              <Text size="small" margin={{ bottom: '10px' }}>
                Available Markets
              </Text>
              {tokens && (
                <Box direction="row" gap="medium">
                  <AvailableBorrowsDataList
                    columns={availableTokensColumns}
                    data={filteredData}
                    loggedIn={loggedIn}
                    selectedTokenAddress={state && state.tokenAddress}
                  />
                </Box>
              )}
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default Borrow;
