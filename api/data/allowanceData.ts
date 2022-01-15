import { useState, useEffect } from 'react';
import { BigNumber, EventFilter } from 'ethers';
import { useWeb3 } from '../web3';

import { ERC20 } from '../types';

import { useErc20DetailedContract, useErc20DetailedContracts } from './contracts';

function useAllowanceData(asset: ERC20 | undefined, spender: string) {
  const { account } = useWeb3();

  const [userAllowance, setUserAllowance] = useState<BigNumber>();

  useEffect(() => {
    if(account && asset) {
      asset.allowance(account, spender).then(setUserAllowance).catch(console.error);
    }
  }, [account, asset, spender]);

  return userAllowance;
}

function useUserBalance(address: string) {
  const { account } = useWeb3();

  const [userBalance, setUserBalance] = useState<BigNumber>();
  const asset = useErc20DetailedContract(address);

  useEffect(() => {
    if (!asset || !account) return;
    const getBalances = async () => {
      const bal = await asset.balanceOf(account);
      if (bal) {
        setUserBalance(bal);
      }
    };
    getBalances();

    const increaseBalance = (_: any, __: any, value: BigNumber) => setUserBalance(balance => balance ? balance.add(value) : undefined);
    const decreaseBalance = (_: any, __: any, value: BigNumber) => setUserBalance(balance => balance ? balance.sub(value) : undefined);

    const transferToListener = asset.filters.Transfer(null, account, null);
    asset.on(transferToListener, increaseBalance);

    const transferFromListener = asset.filters.Transfer(account, null, null);
    asset.on(transferFromListener, decreaseBalance);

    return () => {
      asset.removeListener(transferToListener, increaseBalance);
      asset.removeListener(transferFromListener, decreaseBalance);
    };
  }, [account, asset]);

  return userBalance;
}

function useUserBalances(addresses: string[]) {
  const { account } = useWeb3();

  const [userBalances, setUserBalances] = useState([] as BigNumber[]);
  const assets = useErc20DetailedContracts(addresses);

  useEffect(() => {
    if (!assets?.length || !account) return;
    const getBalances = async () => {
      const bals = await Promise.all(assets.map((asset) => asset.balanceOf(account)));
      if (bals.length) {
        setUserBalances(bals);
      }
    };
    getBalances();

    interface TypedEventFilter<_EventArgsArray, _EventArgsObject> extends EventFilter {}
    interface FilterListener {
      contract: ERC20,
      filter: TypedEventFilter<[string, string, BigNumber], { from: string, to: string, value: BigNumber }>,
      callback: ((_: string, __: string, value: BigNumber, ___: any) => void),
    }
    const filterListeners: FilterListener[] = [];

    const updateBalanceIncrease = (index: number, value: BigNumber) => {
      setUserBalances(userBalances => {
        const allUserBalances = [...userBalances];
        allUserBalances[index] = allUserBalances[index].add(value);
        return allUserBalances;
      });
    };

    const updateBalanceDecrease = (index: number, value: BigNumber) => {
      setUserBalances(userBalances => {
        const allUserBalances = [...userBalances];
        allUserBalances[index] = allUserBalances[index].sub(value);
        return allUserBalances;
      });
    };

    const increaseBalance = (index: number) => (_: any, __: any, value: BigNumber) => updateBalanceIncrease(index, value);
    const decreaseBalance = (index: number) => (_: any, __: any, value: BigNumber) => updateBalanceDecrease(index, value);

    assets.forEach((asset, i) => {
      const balanceIncreaseFilter = asset.filters.Transfer(null, account, null);
      const balanceIncreaseListener = increaseBalance(i);
      asset.on(balanceIncreaseFilter, balanceIncreaseListener);
      filterListeners.push({ contract: asset, filter: balanceIncreaseFilter, callback: balanceIncreaseListener });

      const balanceDecreaseFilter = asset.filters.Transfer(account, null, null);
      const balanceDecreaseListener = decreaseBalance(i);
      asset.on(balanceDecreaseFilter, balanceDecreaseListener);
      filterListeners.push({ contract: asset, filter: balanceDecreaseFilter, callback: balanceDecreaseListener });
    });

    return () => {
      filterListeners.forEach(listener => {
        listener.contract.removeListener(listener.filter, listener.callback);
      });
    };
  }, [account, assets]);
  return userBalances;
}

export { useAllowanceData, useUserBalance, useUserBalances };
