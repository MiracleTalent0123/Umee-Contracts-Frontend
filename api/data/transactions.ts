import { ethers } from 'ethers';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { displayToast, TToastType } from 'components/common/toasts';
import { useWeb3 } from 'api/web3';
import { ETxnType } from 'lib/types';

interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

const useTransaction = () => {
  const { chainId } = useWeb3();
  const exploreUrl =
    chainId === 4 ? 'https://rinkeby.etherscan.io/tx/' : chainId === 5 ? 'https://goerli.etherscan.io/tx/' : '';

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
            {message: ''},
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
            if(waitingCallback) waitingCallback();
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
                if(txnType == ETxnType.mint) {
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

export { useTransaction };
