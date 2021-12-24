import React, { useState } from 'react';
import { DataList, DataListRow, PrimaryText, TextItem, TokenItem } from './DataList';
import { IDataListColumn } from './DataList/DataList';
import { BigNumber, utils } from 'ethers';
import MarketModal from 'pages/markets/marketsDetail';
import { ButtonItem } from 'components';
import { bigNumberToString } from 'lib/number-utils';
import BridgeModal from './BridgeTransaction/BridgeModal';
import { AssetBalancesList } from 'pages/AssetBalancesList';

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

const MarketsDataList = ({ columns, data, showUsd, selectedTokenAddress, decimals }: MarketsDataListProps) => {
  const [token, setToken] = useState<any>();
  const [tokenAddress, setTokenAddress] = useState<string>('');
  const [isModalShow, setIsModalShow] = useState<string>('');
  const columnSizes = columns.map((col) => col.size);
  const aprDecimals = BigNumber.from(25);
  React.useEffect(() => {
    if (selectedTokenAddress) {
      setTokenAddress(selectedTokenAddress);
    }
  }, [selectedTokenAddress]);

  const setBridgeModal = (token: any) => {
    setTokenAddress(token.address);
    setIsModalShow('deposit');
  };

  return (
    <>
      {isModalShow && (
        <BridgeModal
          address={tokenAddress}
          onClose={() => {
            setTokenAddress('');
            setIsModalShow('');
          }}
        />
      )}
      {token && token.address && (
        <MarketModal
          token={token && token}
          onClose={() => {
            setToken('');
          }}
        />
      )}
      <DataList background="clrDefaultBg" columns={columns}>
        {data.map((row) => {
          const { name, marketSize, marketSizeUsd, depositAPY, variableBorrowAPR } = row;
          return (
            <DataListRow columnSizes={columnSizes} key={`row-${name}`}>
              <TokenItem name={name} handleClick={() => setToken(row)} />
              <TextItem
                handleClick={() => {
                  setToken(row);
                  setTokenAddress('');
                  setIsModalShow('');
                }}
              >
                {showUsd ? (
                  <>
                    <PrimaryText>${marketSizeUsd}</PrimaryText>
                  </>
                ) : (
                  <>
                    <PrimaryText>{marketSize}</PrimaryText>
                  </>
                )}
              </TextItem>
              <TextItem
                handleClick={() => {
                  setToken(row);
                  setTokenAddress('');
                  setIsModalShow('');
                }}
              >
                <PrimaryText>{depositAPY && bigNumberToString(depositAPY, aprDecimals)}%</PrimaryText>
              </TextItem>
              <TextItem
                handleClick={() => {
                  setToken(row);
                  setTokenAddress('');
                  setIsModalShow('');
                }}
              >
                <PrimaryText>{variableBorrowAPR && bigNumberToString(variableBorrowAPR, aprDecimals)}%</PrimaryText>
              </TextItem>
              <TextItem>
                <ButtonItem
                  onClick={() => setBridgeModal(row)}
                  textColor="white"
                  background="#131A33"
                  textSize="small"
                  round="5px"
                >
                  Bridge
                </ButtonItem>
              </TextItem>
              {name == 'ATOM' ? (
                <TextItem>
                  <AssetBalancesList />
                </TextItem>
              ) : (
                <></>
              )}
            </DataListRow>
          );
        })}
      </DataList>
    </>
  );
};

export default MarketsDataList;
//              <PrimaryText>{marketSize.toNumber().toFixed(2)}</PrimaryText>
