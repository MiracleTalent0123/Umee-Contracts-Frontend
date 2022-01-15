import React, { useEffect, useState } from 'react';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, utils } from 'ethers';
import MarketModal from 'pages/markets/marketsDetail';
import { ButtonItem } from 'components';
import BridgeModal from './BridgeTransaction/BridgeModal';
import { AssetBalancesList } from 'pages/AssetBalancesList';
import { bigNumberToString } from 'lib/number-utils';
import abbreviateNumber from 'lib/abbreviate';
import { TTokenConfig } from 'lib/types';

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
  showUsd: boolean;
  selectedTokenAddress?: string;
  decimals?: BigNumber;
}

const aprDecimals = BigNumber.from(25);

const MarketsDataList: React.FC<MarketsDataListProps> = ({ columns, data, showUsd, selectedTokenAddress, decimals }) => {
  const [tokenAddress, setTokenAddress] = useState<string>('');
  const [tokenName, setTokenName] = useState<string>('');
  const [isModalShow, setIsModalShow] = useState<string>('');
  const columnSizes = columns.map((col) => col.size);

  useEffect(() => {
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
        {data.map(({ name, marketSize, marketSizeUsd, depositAPY, variableBorrowAPR, address }) => (
          <DataListRow columnSizes={columnSizes} key={`row-${name}`}>
            <TokenItem name={name} handleClick={() => setMarketsModal(address)} />
            <TextItem handleClick={() => setMarketsModal(address)}>
              <PrimaryText>
                {showUsd ? (
                  '$' + abbreviateNumber(marketSizeUsd)
                ) : (
                  abbreviateNumber(marketSize)
                )}
              </PrimaryText>
            </TextItem>
            <TextItem handleClick={() => setMarketsModal(address)}>
              <PrimaryText>
                {depositAPY && bigNumberToString(depositAPY, aprDecimals)}%
              </PrimaryText>
            </TextItem>
            <TextItem handleClick={() =>  setMarketsModal(address)}>
              <PrimaryText>
                {variableBorrowAPR && bigNumberToString(variableBorrowAPR, aprDecimals)}%
              </PrimaryText>
            </TextItem>
            {name == 'ATOM' && (
              <>
                <TextItem>
                  <ButtonItem
                    onClick={() => setBridgeModal({ address, name } as IMarketsData)}
                    textColor="white"
                    background="#131A33"
                    textSize="small"
                    round="5px"
                  >
                    Bridge
                  </ButtonItem>
                </TextItem>
                <TextItem>
                  <AssetBalancesList />
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
