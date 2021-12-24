import { ethers } from 'ethers';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { displayToast, TToastType } from 'components/common/toasts';
import { useWeb3 } from 'api/web3';

interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

const useTransaction = () => {
  const [pending, setPending] = useState(false);
  const { chainId } = useWeb3();
  const exploreUrl = chainId === 4 ? 'https://rinkeby.etherscan.io/tx/' : 'https://goerli.etherscan.io/tx/';

  const contractCall = useCallback(
    (
      contractFn: () => Promise<ethers.ContractTransaction>,
      pendingMessage: string,
      failedMessage: string,
      successMessage: string,
      failedCallback?: () => void,
      successCallback?: () => void,
      completedCallback?: () => void,
      txnHashCallback?: (hash: string) => void
    ) => {
      setPending(true);
      let toastId: React.ReactText;
      displayToast(pendingMessage, TToastType.TX_BROADCASTING, {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      });
      contractFn()
        .then((txResponse: ethers.ContractTransaction) => {
          return Promise.all([txResponse.wait(), toastId]);
        })
        .then(([txReceipt, toastId]) => {
          setTimeout(() => {
            setPending(false);
          }, 5000);
          toast.dismiss(toastId);
          if (txReceipt.status === 0) {
            displayToast(failedMessage, TToastType.TX_FAILED);
            if (failedCallback) failedCallback();
          } else if (txReceipt.status === 1) {
            displayToast(successMessage, TToastType.TX_SUCCESSFUL, {
              customLink: exploreUrl + txReceipt.transactionHash,
            });
            if (successCallback) successCallback();
          } else {
            toast.error('Not sure what happened with that transaction');
            if (failedCallback) failedCallback();
          }
          if (completedCallback) completedCallback();
          if (txnHashCallback) txnHashCallback(txReceipt.transactionHash);
        })
        .catch((error: ProviderRpcError) => {
          console.error(error);
          setPending(false);
          toast.dismiss(toastId);
          if (error.code !== 4001) {
            switch (error.code) {
              case 4100:
                toast.error('Processing has not been approved by the user.');
                break;
              case 4200:
                toast.error('The provider does not support this process.');
                break;
              case 4900:
                toast.error('The provider is disconnected from all chains.');
                break;
              case 4901:
                toast.error('The provider is not connected to the request chain.');
                break;
              default:
                toast.error(`Unknown error code returned: ${error.code}; message: ${error.message}`);
                break;
            }
          }
          if (completedCallback) completedCallback();
          if (failedCallback) failedCallback();
        });
    },
    []
  );

  return { contractCall, pending };
};

export { useTransaction };
