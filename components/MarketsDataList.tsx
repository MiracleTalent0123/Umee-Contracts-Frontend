import React, { useEffect, useMemo, useState } from 'react';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber } from 'ethers';
import MarketModal from 'pages/markets/marketsDetail';
import BridgeModal from './BridgeTransaction/BridgeModal';
import { AssetBalancesList } from './Markets/AssetBalancesList';
import { bigNumberToString } from 'lib/number-utils';
import abbreviateNumber from 'lib/abbreviate';
import { SecondaryBtn } from './common';

export interface IMarketsData {
  name: string;
  address: string;
  color: string;
  marketSize: string;
  totalBorrowed: BigNumber;
  marketSizeUsd: string;
  totalBorrowedUsd: string;
  depositAPY: BigNumber;
  variableBorrowAPR: BigNumber;
  stableBorrowAPR: BigNumber;
}

export interface MarketsDataListProps {
  columns: IDataListColumn[];
  data: IMarketsData[];
  selectedTokenAddress?: string;
  decimals?: BigNumber;
}

const aprDecimals = BigNumber.from(25);

const MarketsDataList: React.FC<MarketsDataListProps> = ({ columns, data, selectedTokenAddress, decimals }) => {
  const [tokenAddress, setTokenAddress] = useState<string>('');
  const [tokenName, setTokenName] = useState<string>('');
  const [isModalShow, setIsModalShow] = useState<string>('');
  const columnSizes = columns.map((col) => col.size);

  useMemo(() => {
    if (selectedTokenAddress) {
      setTokenAddress(selectedTokenAddress);
    }
  }, [selectedTokenAddress]);

  const setBridgeModal = ({ address, name }: IMarketsData) => {
    setTokenAddress(address);
    setTokenName(name);
    setIsModalShow('bridge');
  };

  const setMarketsModal = (address: string) => {
    setTokenAddress(address);
    setIsModalShow('markets');
  };

  return (
    <>
      {isModalShow == 'bridge' && (
        <BridgeModal
          address={tokenAddress}
          tokenName={tokenName}
          onClose={() => {
            setTokenAddress('');
            setTokenName('');
            setIsModalShow('');
          }}
        />
      )}
      {isModalShow == 'markets' && (
        <MarketModal
          address={tokenAddress}
          onClose={() => {
            setTokenAddress('');
            setIsModalShow('');
          }}
        />
      )}
      <DataList background="clrDefaultBg" columns={columns}>
        {data.map(({ name, marketSizeUsd, depositAPY, variableBorrowAPR, address }) => (
          <DataListRow columnSizes={columnSizes} key={`row-${name}`}>
            <TokenItem textSize="small" name={name} handleClick={() => setMarketsModal(address)} />
            <TextItem justify="start" handleClick={() => setMarketsModal(address)}>
              <PrimaryText size="small">{'$' + abbreviateNumber(marketSizeUsd)}</PrimaryText>
            </TextItem>
            <TextItem justify="start" handleClick={() => setMarketsModal(address)}>
              <PrimaryText size="small">{depositAPY && bigNumberToString(depositAPY, aprDecimals)}%</PrimaryText>
            </TextItem>
            <TextItem justify="start" handleClick={() => setMarketsModal(address)}>
              <PrimaryText size="small">
                {variableBorrowAPR && bigNumberToString(variableBorrowAPR, aprDecimals)}%
              </PrimaryText>
            </TextItem>
            {name == 'ATOM' && (
              <>
                <TextItem justify="end">
                  <SecondaryBtn
                    onClick={() => setBridgeModal({ address, name } as IMarketsData)}
                    round="large"
                    pad={{ vertical: 'small', horizontal: 'medium' }}
                    text="BRIDGE"
                    margin={{ right: 'small' }}
                    textSize="xsmall"
                  />
                  <AssetBalancesList />
                </TextItem>
              </>
            )}
            {name == 'UMEE' && (
              <>
                <TextItem justify="end">
                  <SecondaryBtn
                    onClick={() => setBridgeModal({ address, name } as IMarketsData)}
                    round="large"
                    pad={{ vertical: 'small', horizontal: 'medium' }}
                    text="BRIDGE"
                    margin={{ right: '110px' }}
                    textSize="xsmall"
                  />
                </TextItem>
              </>
            )}
          </DataListRow>
        ))}
      </DataList>
    </>
  );
};

export default MarketsDataList;
