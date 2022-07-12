import React, { useEffect, useState } from 'react';
import { useConvexityData } from 'api/convexity';
import { BorrowPageProps } from './reflection';
import { useStore } from 'api/cosmosStores';
import PageLoading from 'components/common/Loading/PageLoading';
import AvailableBorrowsDataList, { IAvailableBorrowsData } from 'components/AvailableBorrowsDataList';
import { BigNumber, utils } from 'ethers';
import { observer } from 'mobx-react-lite';

const Borrow: React.FC<BorrowPageProps> = ({ availableTokensColumns, userAssetsColumns, state }) => {
  const { accountStore, chainStore, queriesStore } = useStore();
  const account = accountStore.getAccount(chainStore.current.chainId);
  const { RegisteredTokens, getConvexityData, ConvexityAccountData } = useConvexityData();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [tokens, setTokens] = useState<IAvailableBorrowsData[]>([]);
  const [myBorrowsData, setMyBorrowsData] = useState<IAvailableBorrowsData[]>();

  // useEffect(() => {
  //   getConvexityData();
  // }, []);

  useEffect(() => {
    if (account.bech32Address) setLoggedIn(true);
    else setLoggedIn(false);
  }, [account.bech32Address]);

  useEffect(() => {
    if (RegisteredTokens.length > 0) setPageLoading(false);
  }, [RegisteredTokens]);

  useEffect(() => {
    if (RegisteredTokens && ConvexityAccountData && account.bech32Address) {
      const tokens = RegisteredTokens.reduce((acc, token) => {
        let availableAmount;
        const usdPrice = token.usdPrice;
        const availableAmountUsd =
          Number(ConvexityAccountData.borrowLimit) * 0.8 - Number(ConvexityAccountData.totalBorrowed);
        availableAmount =
          availableAmountUsd > 0 && Number(usdPrice) > 0
            ? utils.parseUnits(
              (availableAmountUsd / Number(usdPrice)).toFixed(token.decimals.toNumber()).toString(),
              token.decimals
            )
            : BigNumber.from(0);
        const availableLiquidity = token.availableLiquidity;

        if (token.borrowed.isZero()) {
          acc.push({
            address: token.address,
            symbol: token.name,
            tokensAvailable: availableLiquidity.gt(availableAmount) ? availableAmount : availableLiquidity,
            variableAPR: token.variableBorrowAPR,
            decimals: token.decimals.toNumber(),
            borrowingEnabled: true,
          });
        }

        return acc;
      }, Array<IAvailableBorrowsData>());

      const orderedTokens = tokens.sort(
        (asset1, asset2) =>
          (asset2.tokensAvailable ? asset2.tokensAvailable.toNumber() : 0) -
          (asset1.tokensAvailable ? asset1.tokensAvailable?.toNumber() : 0)
      );
      setTokens(orderedTokens);

      const myBorrows = RegisteredTokens.reduce((acc, token) => {
        if (!token.borrowed.isZero()) {
          acc.push({
            address: token.address,
            symbol: token.name,
            balance: parseFloat(utils.formatUnits(token.borrowed, token.decimals)),
            variableAPR: token.variableBorrowAPR,
            decimals: token.decimals.toNumber(),
            borrowingEnabled: true,
          });
        }

        return acc;
      }, Array<IAvailableBorrowsData>());

      const orderedUserBorrows = myBorrows.sort(
        (asset1, asset2) =>
          (asset2.balance ? asset2.balance : 0) -
          (asset1.balance ? asset1.balance : 0)
      );
      setMyBorrowsData(orderedUserBorrows);
    } else if (!account.bech32Address) {
      const data = RegisteredTokens.reduce((acc, token) => {
        acc.push({
          address: token.address,
          symbol: token.name,
          balance: 0,
          variableAPR: token.variableBorrowAPR,
          decimals: token.decimals.toNumber(),
          borrowingEnabled: true,
        });

        return acc;
      }, Array<IAvailableBorrowsData>());
      
      const orderedTokens = data.sort(
        (asset1, asset2) =>
          (asset2.balance ? asset2.balance : 0) -
          (asset1.balance ? asset1.balance : 0)
      );
      setTokens(orderedTokens);
    }
  }, [RegisteredTokens, ConvexityAccountData, account.bech32Address]);

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <AvailableBorrowsDataList
      columns={availableTokensColumns}
      userAssetsColumns={userAssetsColumns}
      data={tokens}
      myBorrowsData={myBorrowsData}
      loggedIn={loggedIn}
      selectedTokenAddress={state && state.tokenAddress}
    />
  );
};

export default observer(Borrow);
