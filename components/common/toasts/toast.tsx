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
    width="13px"
    height="14px"
    style={{ position: 'absolute', top: '10px', right: '10px' }}
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

export type DisplayToastFn = ((
  string: String,
  type: TToastType.TX_BROADCASTING,
  extraData?: Partial<Pick<IToastExtra, 'message'>>,
  options?: Partial<ToastOptions>
) => void) &
  ((
    string: String,
    type: TToastType.TX_SUCCESSFUL,
    extraData?: Partial<Pick<IToastExtra, 'customLink'>>,
    options?: Partial<ToastOptions>
  ) => void) &
  ((
    string: String,
    type: TToastType.TX_FAILED,
    extraData?: Partial<Pick<IToastExtra, 'message'>>,
    options?: Partial<ToastOptions>
  ) => void);

export interface DisplayToast {
  displayToast: DisplayToastFn;
}

export const displayToast: DisplayToastFn = (
  string: String,
  type: TToastType,
  extraData?: Partial<IToastExtra> | Partial<ToastOptions>,
  options?: Partial<ToastOptions>
) => {
  const refinedOptions = options;
  const refinedExtraData = extraData ? extraData : {};
  const inputExtraData = { ...defaultExtraData, ...refinedExtraData } as IToastExtra;
  const inputOptions = {
    ...defaultOptions,
    ...refinedOptions,
  } as ToastOptions;
  if (type === TToastType.TX_BROADCASTING) {
    toast(<ToastTxBroadcasting message={inputExtraData.message} string={string} />, inputOptions);
  } else if (type === TToastType.TX_SUCCESSFUL) {
    toast(<ToastTxSuccess string={string} link={inputExtraData.customLink} />, inputOptions);
  } else if (type === TToastType.TX_FAILED) {
    toast(<ToastTxFailed string={string} message={inputExtraData.message} />, inputOptions);
  } else {
    console.error(`Undefined toast type - ${type}`);
  }
};

const ToastTxBroadcasting: FunctionComponent<{ string: String; message: string }> = ({ string, message }) => (
  <Box
    style={{
      fontFamily: 'Helvetica',
      color: 'var(--umee-color-primary)',
    }}
    direction="row"
    align="center"
  >
    <Image className="toast-loading" style={{ display: 'flex' }} width="40px" alt="loading" src={loading} />
    <Box margin={{ left: 'small' }}>
      <Text size="18px">{string}</Text>
      <Text size="small" style={{ lineHeight: '16px' }}>
        {message ? message : 'Waiting for transaction to be included in the block'}
      </Text>
    </Box>
  </Box>
);

const ToastTxFailed: FunctionComponent<{ string: String; message: string }> = ({ string, message }) => (
  <Box
    style={{
      fontFamily: 'Helvetica',
      color: 'var(--umee-color-primary)',
    }}
    direction="row"
    align="center"
  >
    <Image style={{ display: 'flex' }} width="40px" alt="failed" src={failed} />
    <Box margin={{ left: 'small' }}>
      <Text size="18px">{string}</Text>
      <Text size="small">{message}</Text>
    </Box>
  </Box>
);

const ToastTxSuccess: FunctionComponent<{ string: String; link: string }> = ({ link, string }) => (
  <Box
    style={{
      fontFamily: 'Helvetica',
      color: 'var(--umee-color-primary)',
    }}
    direction="row"
    align="center"
  >
    <Image style={{ display: 'flex' }} width="40px" alt="success" src={success} />
    <Box margin={{ left: 'small' }}>
      <Text size="18px">{string}</Text>
      <a target="__blank" href={link}>
        <Box direction="row" align="center">
          <Text size="small">View in explorer</Text>{' '}
          <Image style={{ display: 'flex' }} alt="external link" src={view} />
        </Box>
      </a>
    </Box>
  </Box>
);
