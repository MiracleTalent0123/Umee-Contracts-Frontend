import React, { useEffect, useState } from 'react';
import MarketsDataList from 'components/MarketsDataList';
import { IDataListColumn } from 'components/DataList/DataList';
import PageLoading from 'components/common/Loading/PageLoading';
import { useStore } from 'api/cosmosStores';
import { useConvexityData } from 'api/convexity';
import { observer } from 'mobx-react-lite';

interface ConvexityProps {
  marketColumns: IDataListColumn[];
  marketMobileColumns: IDataListColumn[];
  size: string;
  chain: string;
}

const Convexity: React.FC<ConvexityProps> = ({
  marketColumns,
  marketMobileColumns,
  size,
  chain,
}) => {
  const { RegisteredTokens, getConvexityData } = useConvexityData();
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const { accountStore, chainStore, queriesStore } = useStore();
  const account = accountStore.getAccount(chainStore.current.chainId);

  // useEffect(() => {
  //   getConvexityData();
  // }, []);

  useEffect(() => {
    if (RegisteredTokens.length > 0) setPageLoading(false);
  }, [RegisteredTokens, account]);

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <MarketsDataList
      chainType={chain}
      columns={size === 'small' || size === 'medium' ? marketMobileColumns : marketColumns}
      data={RegisteredTokens}
    />
  );
};

export default observer(Convexity);
