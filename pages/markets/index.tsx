import React, { useCallback, useContext, useEffect, useState } from 'react';
import { IDataListColumn } from 'components/DataList/DataList';
import Layout from 'pages/Layout';
import { ResponsiveContext } from 'grommet';
import Convexity from './convexity';
import Reflection from './reflection';
import { Chain, useChain } from 'lib/hooks/chain/context';
import { useStore } from 'api/cosmosStores';
import { useWeb3 } from 'api/web3';
import { useData } from 'api/data';
import { useBridgeHistory } from 'api/data/transactions';
import { EmbedChainInfos } from '../../config';
import { useUmeeTokenAddress } from 'api/web3/chains';
import { IReserveConfigurationData } from 'lib/types';
import TransferHistoryList from 'components/Markets/TransferHistoryList';
import { WalletStatus } from '@keplr-wallet/stores';
import TagManager from 'react-gtm-module';
import { observer } from 'mobx-react-lite';

const tagManagerArgs = {
  dataLayer: {
    userId: '0x000000000000000000',
    userProject: 'umeev1',
    page: 'markets',
  },
  dataLayerName: 'MarketLayer',
};

export const BridgeTransferEventContext = React.createContext(() => {});

const transferPageSize = 10;

function Markets() {
  const { chainMode } = useChain();
  const size = useContext(ResponsiveContext);
  const { chainStore, accountStore } = useStore();
  const { account: etherAddr, chainId } = useWeb3();
  const { ReserveConfigurationData } = useData();
  const umeeTokenAddr = useUmeeTokenAddress(chainId);
  const umeeCurrency = { address: umeeTokenAddr, decimals: 6, symbol: 'UMEE' } as unknown as IReserveConfigurationData;
  const [transferPage, setTransferPage] = useState<number>(1);
  TagManager.dataLayer(tagManagerArgs);

  const cosmosChainInfo = chainStore.getChain(EmbedChainInfos[1].chainId);
  const osmoChainInfo = chainStore.getChain(EmbedChainInfos[2].chainId);
  const junoChainInfo = chainStore.getChain(EmbedChainInfos[3].chainId);

  const umeeAccount = accountStore.getAccount(chainStore.current.chainId);
  const cosmosAccount = accountStore.getAccount(cosmosChainInfo.chainId);
  const junoAccount = accountStore.getAccount(junoChainInfo.chainId);
  const osmoAccount = accountStore.getAccount(osmoChainInfo.chainId);

  useEffect(() => {
    if (umeeAccount.walletStatus === WalletStatus.Loaded) {
      if (cosmosAccount.walletStatus === WalletStatus.NotInit) {
        cosmosAccount.init();
      }

      if (junoAccount.walletStatus === WalletStatus.NotInit) {
        junoAccount.init();
      }

      if (osmoAccount.walletStatus === WalletStatus.NotInit) {
        osmoAccount.init();
      }
    }
  }, [cosmosAccount, junoAccount, osmoAccount, umeeAccount, umeeAccount.walletStatus]);

  const { transferHistory, refetch } = useBridgeHistory(
    [
      etherAddr?.toLowerCase() ?? '',
      umeeAccount.bech32Address,
      cosmosAccount.bech32Address,
      junoAccount.bech32Address,
      osmoAccount.bech32Address,
    ],
    [chainStore.current.currencies, cosmosChainInfo.currencies, junoChainInfo.currencies, osmoChainInfo.currencies],
    ReserveConfigurationData.concat(umeeCurrency),
    chainMode === Chain.cosmos,
    chainId === 1
  );

  const handleBridgeTransfer = useCallback(() => {
    refetch();
    setTransferPage(1);
  }, [refetch]);

  const marketColumns: IDataListColumn[] = [
    { title: 'ASSETS', size: 'flex' },
    { title: 'MARKET SIZE', size: 'flex', tooltip: 'Total value of assets supplied for lending.' },
    {
      title: `SUPPLY ${chainMode === Chain.cosmos ? 'APR' : 'APY'}`,
      size: 'flex',
      tooltip:
        'APR earned for lending assets. APR is variable and this is an approximation used for illustrative purposes.',
    },
    {
      title: `BORROW ${chainMode === Chain.cosmos ? 'APR' : 'APY'}`,
      size: 'flex',
      tooltip:
        'Annual percentage rate paid for borrowing assets. APR is variable and this is an approximation used for illustrative purposes.',
    },
    { title: '', size: 'flex' },
  ];

  const marketMobileColumns: IDataListColumn[] = [
    { title: 'ASSETS', size: 'flex' },
    { title: 'MARKET SIZE', size: 'xsmall', tooltip: 'Total value of assets supplied for lending.' },
    { title: '', size: 'flex' },
  ];

  const historyColumns: IDataListColumn[] = [
    { title: 'TRANSACTION', size: 'flex' },
    { title: 'TYPE', size: 'flex' },
    { title: 'AMOUNT', size: 'flex' },
    { title: 'CURRENT STATUS', size: 'flex' },
    { title: '', size: 'flex' },
  ];

  const historyMobileColumns: IDataListColumn[] = [
    { title: 'TRANSACTION', size: 'flex' },
    { title: 'AMOUNT', size: 'xsmall' },
    { title: 'CURRENT STATUS', size: 'flex' },
  ];

  return (
    <Layout title="Umee Markets" subtitle="Markets available for cross-chain leverage">
      <BridgeTransferEventContext.Provider value={handleBridgeTransfer}>
        {chainMode === Chain.cosmos ? (
          <Convexity
            size={size}
            chain={chainMode}
            marketColumns={marketColumns}
            marketMobileColumns={marketMobileColumns}
          />
        ) : (
          <Reflection
            size={size}
            chain={chainMode}
            marketColumns={marketColumns}
            marketMobileColumns={marketMobileColumns}
          />
        )}

        {transferHistory.length > 0 && (
          <TransferHistoryList
            columns={size === 'medium' || size === 'small' ? historyMobileColumns : historyColumns}
            data={transferHistory.slice((transferPage - 1) * transferPageSize, transferPage * transferPageSize)}
            totalPages={Math.ceil(transferHistory.length / transferPageSize)}
            onPageChange={setTransferPage}
            page={transferPage}
          />
        )}
      </BridgeTransferEventContext.Provider>
    </Layout>
  );
}

export default observer(Markets);
