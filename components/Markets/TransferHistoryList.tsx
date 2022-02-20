import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent, useContext, useMemo, useState } from 'react';
import LinkIcon from '../../public/images/external-link.png';
import { Box, GridSizeType, Image, ResponsiveContext, Text } from 'grommet';
import PendingImage from '../../public/images/info-icon.png';
import SuccessImage from '../../public/images/success-icon.png';
import FailedImage from '../../public/images/error-icon.png';
import DataList, { IDataListColumn } from 'components/DataList/DataList';
import { DataListRow, PrimaryText, TextItem } from 'components';
import { SecondaryBtn } from 'components/common';
import TransferStatusModal from './TransferStatusModal';

export interface TransferHistory {
  txHash: string;
  explorerUrl: string;
  txType: string;
  amount: number;
  symbol: string;
  status: string;
}

export const TransferHistoryList = observer(function TransferHistoryList({
  columns,
  histories,
}: {
  columns: IDataListColumn[];
  histories: TransferHistory[];
}) {
  const size = useContext(ResponsiveContext);
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const numPages = Math.ceil(histories.length / itemsPerPage);

  const paginatedHistories = useMemo(() => {
    return histories.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }, [histories, page, itemsPerPage]);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  return (
    <>
      {modalShow && <TransferStatusModal onClose={() => setModalShow(false)} status={status} />}
      <Box margin={{ top: 'large' }} pad={{ top: 'medium' }}>
        <Box className="border-gradient-bottom" pad={{ bottom: 'medium' }}>
          <Text size={size === 'small' ? 'small' : 'medium'}>Transfer History</Text>
        </Box>
        <DataList columns={columns}>
          {paginatedHistories.map((history, index) => {
            return (
              <DataListRow
                align={history.status === 'pending' && size === 'small' ? 'start' : 'center'}
                key={index}
                columnSizes={columns.map((col) => col.size)}
              >
                <Box direction="row" align={history.status === 'pending' && size === 'small' ? 'start' : 'center'}>
                  <Text size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'} className="shortence">
                    {history.txHash}
                  </Text>
                  <a href={history.explorerUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      margin={{ top: size === 'small' && history.status === 'pending' ? '-10px' : '' }}
                      src={LinkIcon}
                      alt="icon"
                    />
                  </a>
                </Box>
                {size !== 'medium' && size !== 'small' && (
                  <TextItem justify="start">
                    <PrimaryText size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'}>
                      {history.txType}
                    </PrimaryText>
                  </TextItem>
                )}
                <TextItem justify="start">
                  <PrimaryText size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'}>
                    {history.amount} {history.symbol}
                  </PrimaryText>
                </TextItem>
                <TextItem
                  justify="start"
                  direction={size === 'small' ? 'column' : 'row'}
                  align={size === 'small' ? 'start' : 'center'}
                >
                  <Statusdiv size={size} status={'status' in history ? history.status : undefined} />
                  {(size === 'medium' || size === 'small') && history.status == 'pending' && (
                    <SecondaryBtn
                      onClick={() => {
                        setModalShow(true);
                        setStatus(history.status);
                      }}
                      text="STATUS"
                      round="large"
                      pad={{ vertical: 'small', horizontal: 'small' }}
                      textSize="xsmall"
                      margin={{ top: size === 'small' ? 'small' : '', left: size === 'small' ? '' : 'medium' }}
                    />
                  )}
                </TextItem>
                {size !== 'medium' && size !== 'small' && history.status === 'pending' && (
                  <TextItem justify="start">
                    <SecondaryBtn
                      onClick={() => {
                        setModalShow(true);
                        setStatus(history.status);
                      }}
                      text="STATUS"
                      round="large"
                      pad={{ vertical: 'small', horizontal: 'medium' }}
                      textSize="xsmall"
                    />
                  </TextItem>
                )}
              </DataListRow>
            );
          })}
        </DataList>
        {numPages > 1 || page !== 1 ? <TablePagination page={page} numPages={numPages} onPageChange={setPage} /> : null}
      </Box>
    </>
  );
});

function Statusdiv({ status, size }: { status?: string; size: string }) {
  if (status == null) {
    return (
      <Box>
        <Image width={size === 'medium' || size === 'small' ? '12px' : '20px'} src={PendingImage} alt="pending" />
        <Text size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'} margin={{ left: 'xsmall' }}>
          Pending
        </Text>
      </Box>
    );
  }

  switch (status) {
    case 'complete':
      return (
        <Box direction="row" align="center">
          <Image width={size === 'medium' || size === 'small' ? '12px' : '20px'} src={SuccessImage} alt="success" />
          <Text size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'} margin={{ left: 'small' }}>
            Complete
          </Text>
        </Box>
      );
    case 'pending':
      return (
        <Box direction="row" align="center">
          <Image width={size === 'medium' || size === 'small' ? '12px' : '20px'} src={PendingImage} alt="pending" />
          <Text size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'} margin={{ left: 'small' }}>
            In Progress
          </Text>
        </Box>
      );
    case 'refunded':
      return (
        <Box direction="row" align="center">
          <Image width={size === 'medium' || size === 'small' ? '12px' : '20px'} src={FailedImage} alt="redunded" />
          <Text size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'} margin={{ left: 'small' }}>
            Refunded
          </Text>
        </Box>
      );
    case 'timeout':
      return (
        <Box direction="row" align="center">
          <Image width={size === 'medium' || size === 'small' ? '12px' : '20px'} src={FailedImage} alt="pending" />
          <Text size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'} margin={{ left: 'small' }}>
            Failed: Pending Refund
          </Text>
        </Box>
      );
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
        <Text color="clrPrimary" size="sm">
          {_page}
        </Text>
      </PaginationButton>
    );
  }

  return <TablePaginationContainer>{pageRender}</TablePaginationContainer>;
};

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
