import React, { FunctionComponent, ReactComponentElement, ReactElement, ReactNode } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import failed from '../../../public/assets/FailedTx.png';
import success from '../../../public/assets/ToastSuccess.png';
import loading from '../../../public/assets/Loading.png';
import view from '../../../public/assets/Link.png';
import close from '../../../public/assets/Exit.png';
import { Image, Box, Text } from 'grommet';
import './toast.css';

const CloseButton: FunctionComponent<{ closeToast: () => void }> = ({ closeToast }) => (
  <Image
    width="15px"
    height="16px"
    style={{ position: 'absolute', top: '15px', right: '15px' }}
    onClick={() => closeToast()}
    alt="close"
    src={close}
  />
);

const defaultOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  pauseOnFocusLoss: false,
  closeButton: CloseButton,
};

const defaultExtraData = { message: '', customLink: '' };

export enum TToastType {
  TX_BROADCASTING,
  TX_SUCCESSFUL,
  TX_FAILED,
}

interface IToastExtra {
  message: string;
  customLink: string;
}

export type DisplayToastFn = ((type: TToastType.TX_BROADCASTING, options?: Partial<ToastOptions>) => void) &
  ((
    type: TToastType.TX_SUCCESSFUL,
    extraData?: Partial<Pick<IToastExtra, 'customLink'>>,
    options?: Partial<ToastOptions>
  ) => void) &
  ((
    type: TToastType.TX_FAILED,
    extraData?: Partial<Pick<IToastExtra, 'message'>>,
    options?: Partial<ToastOptions>
  ) => void);

export interface DisplayToast {
  displayToast: DisplayToastFn;
}

export const displayToast: DisplayToastFn = (
  type: TToastType,
  extraData?: Partial<IToastExtra> | Partial<ToastOptions>,
  options?: Partial<ToastOptions>
) => {
  const refinedOptions = type === TToastType.TX_BROADCASTING ? extraData ?? {} : options ?? {};
  const refinedExtraData = extraData ? extraData : {};
  const inputExtraData = { ...defaultExtraData, ...refinedExtraData } as IToastExtra;
  const inputOptions = {
    ...defaultOptions,
    ...refinedOptions,
  } as ToastOptions;
  if (type === TToastType.TX_BROADCASTING) {
    toast(<ToastTxBroadcasting />, inputOptions);
  } else if (type === TToastType.TX_SUCCESSFUL) {
    toast(<ToastTxSuccess link={inputExtraData.customLink} />, inputOptions);
  } else if (type === TToastType.TX_FAILED) {
    toast(<ToastTxFailed message={inputExtraData.message} />, inputOptions);
  } else {
    console.error(`Undefined toast type - ${type}`);
  }
};

const ToastTxBroadcasting: FunctionComponent = () => (
  <Box
    style={{
      fontFamily:
        'Sofia Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    }}
    direction="row"
    align="center"
  >
    <Image className="toast-loading" style={{ display: 'flex' }} width="50px" alt="loading" src={loading} />
    <Box margin={{ left: 'small' }}>
      <Text weight="bold" color="#000000">
        Transferring
      </Text>
      <Text size="small" color="#131A33">
        Waiting for transaction to be included in the block
      </Text>
    </Box>
  </Box>
);

const ToastTxFailed: FunctionComponent<{ message: string }> = ({ message }) => (
  <Box
    style={{
      fontFamily:
        'Sofia Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    }}
    direction="row"
    align="center"
  >
    <Image style={{ display: 'flex' }} width="50px" alt="failed" src={failed} />
    <Box margin={{ left: 'small' }}>
      <Text weight="bold" color="#000000">
        Transfer Failed
      </Text>
      <Text size="small" color="#131A33">
        {message}
      </Text>
    </Box>
  </Box>
);

const ToastTxSuccess: FunctionComponent<{ link: string }> = ({ link }) => (
  <Box
    style={{
      fontFamily:
        'Sofia Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    }}
    direction="row"
    align="center"
  >
    <Image style={{ display: 'flex' }} width="50px" alt="success" src={success} />
    <Box margin={{ left: 'small' }}>
      <Text weight="bold" color="#000000">
        Transfer Successful
      </Text>
      <a target="__blank" href={link}>
        <Box direction="row" align="center">
          <Text size="small" color="#131A33">
            View in explorer
          </Text>{' '}
          <Image style={{ display: 'flex' }} alt="external link" src={view} />
        </Box>
      </a>
    </Box>
  </Box>
);
