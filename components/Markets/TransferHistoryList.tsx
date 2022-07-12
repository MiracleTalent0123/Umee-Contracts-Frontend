import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent, useCallback, useContext, useMemo, useState } from 'react';
import LinkIcon from '../../public/images/external-link.png';
import { Box, Image, ResponsiveContext, Text } from 'grommet';
import PendingImage from '../../public/images/info-icon.png';
import SuccessImage from '../../public/images/success-icon.png';
import FailedImage from '../../public/images/error-icon.png';
import DataList, { IDataListColumn } from 'components/DataList/DataList';
import { DataListRow, PrimaryText, TextItem } from 'components';
import { SecondaryBtn } from 'components/common';
import TransferStatusModal from './TransferStatusModal';
import { TxnStatusType } from 'lib/types';
import TransferStatus from './TransferStatus';
import { TransferHistory, TransferType, IbcType } from 'api/data/transactions';
import { useStore } from 'api/cosmosStores';

const txlink = (txHash: string, txType: TransferType, ibcType: IbcType) => {
  if ([
    TransferType.umeeToEth,
    TransferType.ibcFromUmee
  ].includes(txType)) {
    return `https://explorer.umeemania-1.network.umee.cc/umee/tx/${txHash}`;
    // return `https://www.mintscan.io/umee/txs/${txHash}`;
  } else if (txType === TransferType.ibcToUmee) {
    return `https://explorer.umeemania-1.network.umee.cc/${ibcType}/tx/${txHash}`;
    // return `https://www.mintscan.io/${ibcType}/txs/${txHash}`;
  } else {
    return `https://www.etherscan.io/tx/${txHash}`;
  }
};

interface TransferHistoryListProps {
  columns: IDataListColumn[];
  data: TransferHistory[];
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
}

const TransferHistoryList: React.FC<TransferHistoryListProps> = ({ columns, data, totalPages, page, onPageChange }) => {
  const size = useContext(ResponsiveContext);
  const { chainStore, accountStore } = useStore();
  const [txDetail, setTxDetail] = useState<TransferHistory>();

  const handleCancelClick = useCallback(() => {
    if (txDetail && txDetail.txId) {
      const account = accountStore.getAccount(chainStore.current.chainId);
      account.umee.cancelSendToEth(txDetail.txId);
    }
  }, [accountStore, chainStore, txDetail]);

  return (
    <>
      {txDetail && (
        <TransferStatusModal
          onClose={() => setTxDetail(undefined)}
          status={txDetail.status}
          onCancel={handleCancelClick}
        />
      )}
      <Box margin={{ top: 'large' }} pad={{ top: 'medium' }}>
        <Box className="border-gradient-bottom" pad={{ bottom: 'medium' }}>
          <Text color="clrTextAndDataListHeader" size={size === 'small' ? 'small' : 'medium'}>
            Transfer History
          </Text>
        </Box>
        <DataList columns={columns}>
          {data.map(({ txHash, txType, amount, symbol, status }, key) => (
            <DataListRow
              align={
                (status === TxnStatusType.initiated || status === TxnStatusType.inProgress) && size === 'small'
                  ? 'start'
                  : 'center'
              }
              key={key}
              columnSizes={columns.map((col) => col.size)}
            >
              <TxLink href={txlink(txHash, txType)} target="_blank" rel="noopener noreferrer">
                <Box
                  direction="row"
                  align={
                    (status === TxnStatusType.initiated || status === TxnStatusType.inProgress) && size === 'small'
                      ? 'start'
                      : 'center'
                  }
                >
                  <Text
                    size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'}
                    className="shortence"
                    title={txHash}
                    color="clrTextAndDataListHeader"
                  >
                    {txHash}
                  </Text>
                  <Image
                    margin={{
                      top:
                        size === 'small' && (status === TxnStatusType.initiated || status === TxnStatusType.inProgress)
                          ? '-10px'
                          : '',
                    }}
                    src={LinkIcon}
                    alt="icon"
                  />
                </Box>
              </TxLink>
              {size !== 'medium' && size !== 'small' && (
                <TextItem justify="start">
                  <PrimaryText
                    color="clrTextAndDataListHeader"
                    size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'}
                  >
                    {txType}
                  </PrimaryText>
                </TextItem>
              )}
              <TextItem justify="start">
                <PrimaryText
                  color="clrTextAndDataListHeader"
                  size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'}
                >
                  {amount} {symbol}
                </PrimaryText>
              </TextItem>
              <TextItem
                justify="start"
                direction={size === 'small' ? 'column' : 'row'}
                align={size === 'small' ? 'start' : 'center'}
              >
                <Statusdiv size={size} status={status} />
                {(size === 'medium' || size === 'small') &&
                  (status === TxnStatusType.initiated || status === TxnStatusType.inProgress) &&
                  txType === TransferType.umeeToEth && (
                  <SecondaryBtn
                    onClick={() => setTxDetail(data[key])}
                    text="STATUS"
                    round="large"
                    pad={{ vertical: 'small', horizontal: 'small' }}
                    textSize="xsmall"
                    margin={{ top: size === 'small' ? 'small' : '', left: size === 'small' ? '' : 'medium' }}
                  />
                )}
              </TextItem>
              {(status === TxnStatusType.initiated || status === TxnStatusType.inProgress) &&
                size !== 'medium' && size !== 'small' &&
                txType === TransferType.umeeToEth && (
                <TextItem justify="start">
                  <SecondaryBtn
                    onClick={() => setTxDetail(data[key])}
                    text="STATUS"
                    round="large"
                    pad={{ vertical: 'small', horizontal: 'medium' }}
                    textSize="xsmall"
                  />
                </TextItem>
              )}
            </DataListRow>
          ))}
        </DataList>
        {(totalPages > 1 || page !== 1) && (
          <TablePagination page={page} numPages={totalPages} onPageChange={onPageChange} />
        )}
      </Box>
    </>
  );
};

export default observer(TransferHistoryList);

function Statusdiv({ status, size }: { status?: string; size: string }) {
  if (status == null) {
    return <TransferStatus image={PendingImage} label="Pending" />;
  }

  switch (status) {
    case TxnStatusType.complete:
      return <TransferStatus image={SuccessImage} label="Complete" />;
    case TxnStatusType.inProgress:
      return <TransferStatus image={PendingImage} label="In Progress" />;
    case TxnStatusType.initiated:
      return <TransferStatus image={PendingImage} label="Initiated" />;
    case TxnStatusType.cancelled:
      return <TransferStatus image={FailedImage} label="Cancelled" />;
    default:
      return null;
  }
}

const TablePagination: FunctionComponent<{
  page: number;
  numPages: number;
  onPageChange: (page: number) => void;
}> = ({ page, numPages, onPageChange }) => {
  const pageRender = [];

  for (let i = 0; i < numPages; i++) {
    const _page = i + 1;

    pageRender.push(
      <PaginationButton
        type="button"
        key={_page.toString()}
        onClick={() => onPageChange(_page)}
        selected={_page === page}
      >
        <Text color={_page === page ? 'clrPrimary' : 'clrTextAndDataListHeader'} size="sm">
          {_page}
        </Text>
      </PaginationButton>
    );
  }

  return <TablePaginationContainer>{pageRender}</TablePaginationContainer>;
};

const TxLink = styled.a`
  display: contents;
`;

const ButtonFaint = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const TablePaginationContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
`;

const PaginationButton = styled(ButtonFaint)<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  height: 2.25rem;
  padding-left: 12px;
  padding-right: 12px;
  ${({ selected = false }) => (selected ? { background: 'var(--umee-gradient)' } : null)}
`;
