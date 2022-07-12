import React from 'react';
import { useLocation } from 'react-router-dom';
import { Chain, useChain } from 'lib/hooks/chain/context';
import { IDataListColumn } from 'components/DataList/DataList';
import Layout from 'pages/Layout';
import Reflection from './reflection';
import Convexity from './convexity';

export type stateType = {
  tokenAddress: string;
};

const Deposit = () => {
  const { state } = useLocation<stateType>();
  const { chainMode } = useChain();

  const availableTokensColumns: IDataListColumn[] = [
    { title: 'AVAILABLE ASSETS', size: 'flex' },
    { title: 'AVAILABLE', size: 'flex', tooltip: 'Assets available for you to supply based on your balances' },
    {
      title: `SUPPLY ${chainMode === Chain.cosmos ? 'APR' : 'APY'}`,
      size: 'flex',
      tooltip:
        'APR earned for lending assets. APR is variable and this is an approximation used for illustrative purposes.',
    },
    { title: 'COLLATERAL', size: 'flex' },
  ];

  const userAssetsColumns: IDataListColumn[] = [
    { title: 'YOUR POSITIONS', size: 'flex' },
    { title: 'SUPPLIED', size: 'flex', tooltip: 'Assets you have supplied that can be collateralized' },
    {
      title: `SUPPLY ${chainMode === Chain.cosmos ? 'APR' : 'APY'}`,
      size: 'flex',
      tooltip:
        'APR earned for lending assets. APR is variable and this is an approximation used for illustrative purposes.',
    },
    { title: 'COLLATERAL', size: 'flex' },
  ];

  const availableTokensMobileColumns: IDataListColumn[] = [
    { title: 'AVAILABLE ASSETS', size: 'flex' },
    { title: 'AVAILABLE', size: 'flex', tooltip: 'Assets available for you to supply based on your balances' },
    { title: 'COLLATERAL', size: 'xsmall' },
  ];

  const userAssetsMobileColumns: IDataListColumn[] = [
    { title: 'YOUR POSITIONS', size: 'flex' },
    { title: 'SUPPLIED', size: 'flex', tooltip: 'Assets you have supplied that can be collateralized' },
    { title: 'COLLATERAL', size: 'xsmall' },
  ];

  return (
    <>
      <Layout title="Supply" subtitle="Supply assets and set collateral for borrowing">
        {chainMode == Chain.ethereum ? (
          <Reflection
            availableTokensColumns={availableTokensColumns}
            availableTokensMobileColumns={availableTokensMobileColumns}
            userAssetsColumns={userAssetsColumns}
            userAssetsMobileColumns={userAssetsMobileColumns}
            state={state}
          />
        ) : (
          <Convexity
            availableTokensColumns={availableTokensColumns}
            availableTokensMobileColumns={availableTokensMobileColumns}
            userAssetsColumns={userAssetsColumns}
            userAssetsMobileColumns={userAssetsMobileColumns}
            state={state}
          />
        )}
      </Layout>
    </>
  );
};

export default Deposit;
