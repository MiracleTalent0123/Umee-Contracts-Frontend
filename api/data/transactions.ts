import { ethers } from 'ethers';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { displayToast, TToastType } from 'components/common/toasts';
import { useWeb3 } from 'api/web3';
import { ETxnType, IReserveConfigurationData, TxnStatusType } from 'lib/types';
import { AppCurrency } from '@keplr-wallet/types';
import { formatUnits } from 'ethers/lib/utils';
import get from 'lodash/get';
import { useGravityContract } from './contracts';
import { Gravity } from '../types';
import { useProvider } from 'api/web3/providers';

interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

export const useTransaction = () => {
  const { chainId } = useWeb3();
  const exploreUrl =
    chainId === 4
      ? 'https://rinkeby.etherscan.io/tx/'
      : chainId === 5
        ? 'https://goerli.etherscan.io/tx/'
        : chainId === 1
          ? 'https://etherscan.io/tx/'
          : '';

  const contractCall = useCallback(
    (
      txnType: string,
      contractFn: () => Promise<ethers.ContractTransaction>,
      pendingMessage: string,
      failedMessage: string,
      successMessage: string,
      stopedCallback?: () => void,
      waitingCallback?: () => void,
      completedCallback?: () => void,
      txnHashCallback?: (hash: string) => void
    ) => {
      let toastId: React.ReactText;
      contractFn()
        .then((txResponse: ethers.ContractTransaction) => {
          displayToast(
            pendingMessage,
            TToastType.TX_BROADCASTING,
            { message: '' },
            {
              autoClose: false,
              closeOnClick: false,
              draggable: false,
              closeButton: false,
            }
          );
          if (stopedCallback) stopedCallback();
          return Promise.all([txResponse.wait(), toastId]);
        })
        .then(([txReceipt, toastId]) => {
          toast.dismiss(toastId);
          if (txReceipt.status === 0) {
            displayToast(failedMessage, TToastType.TX_FAILED);
          } else if (txReceipt.status === 1) {
            displayToast(successMessage, TToastType.TX_SUCCESSFUL, {
              customLink: exploreUrl + txReceipt.transactionHash,
            });
            if (waitingCallback) waitingCallback();
          } else {
            displayToast(failedMessage, TToastType.TX_FAILED, {
              message: 'Not sure what happened with that transaction',
            });
          }
          if (completedCallback) completedCallback();
          if (txnHashCallback) txnHashCallback(txReceipt.transactionHash);
        })
        .catch((error: ProviderRpcError) => {
          if (stopedCallback) stopedCallback();
          toast.dismiss(toastId);
          console.error(error);
          if (error.code !== 4001) {
            switch (error.code) {
              case 4100:
                displayToast(failedMessage, TToastType.TX_FAILED, {
                  message: 'Processing has not been approved by the user',
                });
                break;
              case 4200:
                displayToast(failedMessage, TToastType.TX_FAILED, {
                  message: 'The provider does not support this process',
                });
                break;
              case 4900:
                displayToast(failedMessage, TToastType.TX_FAILED, {
                  message: 'The provider is disconnected from all chains',
                });
                break;
              case 4901:
                displayToast(failedMessage, TToastType.TX_FAILED, {
                  message: 'The provider is not connected to the request chain',
                });
                break;
              default:
                if (txnType == ETxnType.mint) {
                  displayToast(failedMessage, TToastType.TX_FAILED, {
                    message: 'Only one mint allowed per day',
                  });
                } else {
                  displayToast(failedMessage, TToastType.TX_FAILED, {
                    message: `Unknown error code returned: ${error.code}; message: ${error.message}`,
                  });
                }
                break;
            }
          } else {
            displayToast(failedMessage, TToastType.TX_FAILED, { message: 'Transaction rejected' });
          }
          if (completedCallback) completedCallback();
        });
    },
    [exploreUrl]
  );

  return { contractCall };
};

export enum TransferType {
  umeeToEth = 'Send to Eth',
  ethToUmee = 'Send to Umee',
  ibcFromUmee = 'IBC from Umee',
  ibcToUmee = 'IBC to Umee'
}

export interface TransferHistory {
  txHash: string;
  txType: TransferType;
  amount: number;
  symbol: string;
  status: TxnStatusType;

  // umee to eth fields
  txId?: number;
}

export type GetBridgeHistoryFn = (
  senderAddress: [
    senderEth: string,
    senderUmee: string,
    senderCosmos: string,
    senderJuno: string,
    senderOsmo: string,
  ],
  currencies: [
    currenciesOnUmee: AppCurrency[],
    currenciesOnCosmos: AppCurrency[],
    currenciesOnJuno: AppCurrency[],
    currenciesOnOsmo: AppCurrency[],
  ],
  reserveTokens: IReserveConfigurationData[],
  convexity: boolean,
  mainnet: boolean
) => {
  transferHistory: TransferHistory[];
  refetch: () => void;
};

const status = (pool: any, id: string) => {
  if (pool.unbatched_transfers.findIndex((tx: any) => tx.id === id) >= 0) {
    return TxnStatusType.initiated;
  } else if (pool.transfers_in_batches.findIndex((batch: any) => batch.id === id) >= 0) {
    return TxnStatusType.inProgress;
  } else {
    return TxnStatusType.complete;
  }
};

/**
 * local domain for each region
 * https://github.com/umee-network/umee/tree/main/networks/umee-1
 */

export type IbcType = 'cosmos' | 'juno' | 'osmosis'

const baseUrls = {
  main: {
    umee: 'https://api.blue.main.network.umee.cc',
    cosmos: 'https://api.narwhal.cosmos-main.network.umee.cc',
  },
  test: {
    umee: 'https://api.poke.umeemania-1.network.umee.cc',
    cosmos: 'https://api.flash.gaia-umeemania-1.network.umee.cc',
    juno: 'https://api.section.juno-umeemania-1.network.umee.cc',
    osmosis: 'https://api.wall.osmosis-umeemania-1.network.umee.cc',
  }
};

const getUmeeToEth = (senderUmee: string, currencies: AppCurrency[], mainnet: boolean) =>
  Promise.all([
    // umee to eth batch status
    fetch(
      (mainnet ? baseUrls.main.umee : baseUrls.test.umee) + '/gravity/v1beta/query_pending_send_to_eth?' +
        `sender_address=${senderUmee}`
    ),
    // umee to eth tx list
    fetch(
      (mainnet ? baseUrls.main.umee : baseUrls.test.umee) + '/cosmos/tx/v1beta1/txs?' +
        'events=message.action=\'/gravity.v1.MsgSendToEth\'&' +
        `events=message.sender='${senderUmee}'`
    ),
  ])
    .then(([batchStatus, umeeToEth]) =>
      Promise.all([batchStatus.json(), umeeToEth.json()])
    )
    .then(([batchStatus, umeeToEthData]) =>
      umeeToEthData.tx_responses.map(({ logs, tx, txhash, timestamp }: any) => {
        const { amount, denom } = tx.body.messages[0].amount;
        const currency = currencies.find((cur) => cur.coinMinimalDenom.toLowerCase() === denom.toLowerCase());
        const id = get(logs[0].events, [
          2, // message
          'attributes',
          3, // outgoing_tx_id
          'value',
        ]);

        return {
          txHash: txhash,
          txType: TransferType.umeeToEth,
          amount: formatUnits(amount, currency?.coinDecimals),
          symbol: currency?.coinDenom,
          status: status(batchStatus, id),
          txId: id,
          timestamp: Math.floor(new Date(timestamp).getTime() / 1000),
        };
      })
    );

const getEthToUmee = (
  gravityContract: Gravity,
  reserveTokens: IReserveConfigurationData[],
  sendToCosmosEventFilter: ethers.EventFilter,
  provider: ethers.providers.Provider
) =>
  // ether to umee tx list
  gravityContract
    .queryFilter(sendToCosmosEventFilter)
    .then(sendToCosmosEvents =>
      Promise.all(
        sendToCosmosEvents.map(e => provider.getBlock(e.blockNumber))
      ).then((blocks) =>
        blocks.map((block, key) => ({
          timestamp: block.timestamp,
          ...sendToCosmosEvents[key],
        }))
      ),
    )
    .then(ethToUmeeData =>
      ethToUmeeData.map(({ transactionHash, args, timestamp, blockNumber }) => {
        const currency = args
          ? reserveTokens.find((token) => token.address.toLowerCase() === args['_tokenContract'].toLowerCase())
          : null;
        return {
          txHash: transactionHash,
          txType: TransferType.ethToUmee,
          amount: formatUnits(args ? args['_amount'] : 0, currency?.decimals),
          symbol: currency?.symbol,
          timestamp: Number(timestamp),
          blockNumber,
        };
      })
    );

const getIbcFromUmee = (senderUmee: string, currencies: AppCurrency[], mainnet: boolean) =>
  fetch(
    (mainnet ? baseUrls.main.umee : baseUrls.test.umee) + '/cosmos/tx/v1beta1/txs?' +
    'events=message.action=\'/ibc.applications.transfer.v1.MsgTransfer\'&' +
    `events=message.sender='${senderUmee}'`
  )
    .then(result => result.json())
    .then(result =>
      result
        .tx_responses
        .filter((res: any) => res.tx.body.messages[0].receiver.startsWith('cosmos'))
        .map(({ tx, txhash, timestamp }: any) => {
          const { amount, denom } = tx.body.messages[0].token;
          const currency = currencies.find((cur) => cur.coinMinimalDenom.toLowerCase() === denom.toLowerCase());

          return {
            txHash: txhash,
            txType: TransferType.ibcFromUmee,
            amount: formatUnits(amount, currency?.coinDecimals),
            symbol: currency?.coinDenom,
            timestamp: Math.floor(new Date(timestamp).getTime() / 1000),
          };
        })
    );

const getIbcToUmee = (
  senderCosmos: string,
  currencies: AppCurrency[],
  mainnet: boolean,
  ibcType: IbcType,
) =>
  fetch(
    (mainnet ? baseUrls.main.cosmos : baseUrls.test[ibcType]) + '/cosmos/tx/v1beta1/txs?' +
    'events=message.action=\'/ibc.applications.transfer.v1.MsgTransfer\'&' +
    `events=message.sender='${senderCosmos}'`
  )
    .then(result => result.json())
    .then(result =>
      result.tx_responses.map(({ tx, txhash, timestamp }: any) => {
        const { amount, denom } = tx.body.messages[0].token;
        const currency = currencies.find((cur) => cur.coinMinimalDenom.toLowerCase() === denom.toLowerCase());

        return {
          txHash: txhash,
          txType: TransferType.ibcToUmee,
          amount: formatUnits(amount, currency?.coinDecimals),
          symbol: currency?.coinDenom,
          timestamp: Math.floor(new Date(timestamp).getTime() / 1000),
          ibcType,
        };
      })
    );

export const useBridgeHistory: GetBridgeHistoryFn = (
  senderAddress,
  currencies,
  reserveTokens,
  convexity,
  mainnet
) => {
  const gravityContract = useGravityContract();
  const getBridgeHistoryLocker = useRef(false);
  const provider = useProvider();
  const [transferHistoryList, setTransferHistoryList] = useState<any[]>([]);
  const [latestBlock, setLatestBlock] = useState<number>();

  const refetch = useCallback(
    (
      gravityContract: Gravity,
      senders: string[],
      currencies: [AppCurrency[], AppCurrency[], AppCurrency[], AppCurrency[]],
      reserveTokens: IReserveConfigurationData[],
      sendToCosmosEventFilter: ethers.EventFilter,
      provider: ethers.providers.Provider,
      mainnet: boolean
    ) => {
      const [, senderUmee, senderCosmos, senderJuno, senderOsmo ] = senders;
      const [currenciesOnUmee, currenciesOnCosmos, currenciesOnJuno, currenciesOnOsmo ] = currencies;

      setTransferHistoryList([]);

      getUmeeToEth(senderUmee, currenciesOnUmee, mainnet)
        .then(result => setTransferHistoryList(s => s.concat(result)));

      getEthToUmee(
        gravityContract,
        reserveTokens,
        sendToCosmosEventFilter,
        provider
      ).then(result => setTransferHistoryList(s => s.concat(result)));

      getIbcFromUmee(senderUmee, currenciesOnUmee, mainnet)
        .then(result => setTransferHistoryList(s => s.concat(result)));

      getIbcToUmee(senderCosmos, currenciesOnCosmos, mainnet, 'cosmos')
        .then(result => setTransferHistoryList(s => s.concat(result)));

      getIbcToUmee(senderJuno, currenciesOnJuno, mainnet, 'juno')
        .then(result => setTransferHistoryList(s => s.concat(result)));

      getIbcToUmee(senderOsmo, currenciesOnOsmo, mainnet, 'osmosis')
        .then(result => setTransferHistoryList(s => s.concat(result)));

    },
    []
  );

  const refetchFunc = useCallback(() => {
    const [senderUmee, senderEth, senderCosmos] = senderAddress;

    if (
      !gravityContract ||
      !provider.provider ||
      senderAddress.includes('') ||
      getBridgeHistoryLocker.current
    ) {
      return;
    }

    getBridgeHistoryLocker.current = true;
    provider.provider.getBlockNumber().then(setLatestBlock);

    refetch(
      gravityContract,
      senderAddress,
      currencies,
      reserveTokens,
      gravityContract.filters.SendToCosmosEvent(null, senderAddress[0], null, null, null),
      provider.provider,
      mainnet
    );
  }, [refetch, currencies, gravityContract, reserveTokens, senderAddress, provider, mainnet]);

  useEffect(() => {
    getBridgeHistoryLocker.current = false;
  }, [mainnet]);

  useEffect(() => {
    provider.provider?.on('block', setLatestBlock);
    refetchFunc();
  }, [refetchFunc, provider.provider]);

  const transferHistory: TransferHistory[] = useMemo(
    () => {
      const now = Date.now();
      const history = convexity
        ? transferHistoryList
        : transferHistoryList.filter(i => [TransferType.ethToUmee, TransferType.umeeToEth].includes(i.txType));

      return history.map(({ blockNumber, txType, timestamp, status, ...others }) => {
        if (txType === TransferType.ethToUmee) {
          if (latestBlock && latestBlock >= blockNumber + 15) {
            status = TxnStatusType.complete;
          } else {
            status = TxnStatusType.inProgress;
          }
        } else if ([TransferType.ibcFromUmee, TransferType.ibcToUmee].includes(txType)) {
          if (timestamp + 60 * 5 < Math.floor(now / 1000)) {
            status = TxnStatusType.complete;
          } else {
            status = TxnStatusType.inProgress;
          }
        }

        return {
          ...others,
          timestamp,
          txType,
          status,
        };
      }).sort((a: any, b: any) => b.timestamp - a.timestamp);
    },
    [latestBlock, transferHistoryList, convexity]
  );

  return {
    transferHistory,
    refetch: () => {
      getBridgeHistoryLocker.current = false;
      refetchFunc();
    },
  };
};
