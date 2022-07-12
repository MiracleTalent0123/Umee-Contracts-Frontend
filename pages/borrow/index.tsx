import React from 'react';
import { useLocation } from 'react-router-dom';
import { IDataListColumn } from 'components/DataList/DataList';
import Layout from 'pages/Layout';
import { useChain, Chain } from 'lib/hooks/chain/context';
import Reflection from './reflection';
import Convexity from './convexity';
import { stateType } from 'pages/deposit';

const Borrow = () => {
  const { state } = useLocation<stateType>();
  const { chainMode } = useChain();

  const availableTokensColumns: IDataListColumn[] = [
    { title: 'AVAILABLE ASSETS', size: 'flex' },
    {
      title: 'AVAILABLE',
      size: 'flex',
      tooltip: 'Assets available for you to borrow based on your collateralized positions',
    },
    {
      title: `BORROW ${chainMode === Chain.cosmos ? 'APR' : 'APY'}`,
      size: 'flex',
      tooltip:
        'Annual percentage rate paid for borrowing assets. APR is variable and this is an approximation used for illustrative purposes.',
    },
  ];

  const userAssetsColumns: IDataListColumn[] = [
    { title: 'YOUR POSITIONS', size: 'flex' },
    { title: 'BORROWED', size: 'flex', tooltip: 'Assets you have borrowed' },
    {
      title: `BORROW ${chainMode === Chain.cosmos ? 'APR' : 'APY'}`,
      size: 'flex',
      tooltip:
        'Annual percentage rate paid for borrowing assets. APR is variable and this is an approximation used for illustrative purposes.',
    },
  ];

  return (
    <Layout title="Borrow" subtitle="Borrow assets for cross-chain leverage">
      {chainMode == Chain.ethereum ? (
        <Reflection
          availableTokensColumns={availableTokensColumns}
          userAssetsColumns={userAssetsColumns}
          state={state}
        />
      ) : (
        <Convexity
          availableTokensColumns={availableTokensColumns}
          userAssetsColumns={userAssetsColumns}
          state={state}
        />
      )}
    </Layout>
  );
};

export default Borrow;
