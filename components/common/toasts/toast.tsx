import React, { FunctionComponent } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import failed from '../../../public/assets/FailedTx.png';
import success from '../../../public/assets/ToastSuccess.png';
import loading from '../../../public/assets/Loading.png';
import view from '../../../public/assets/Link.png';
import ViewWhite from '../../../public/assets/LinkWhite.png';
import Logo from '../../../public/images/Logo.svg';
import { Image, Box, Text, Button } from 'grommet';
import './toast.css';
import { Theme, useTheme } from 'lib/hooks/theme/context';
import { Close } from 'grommet-icons';

const CloseButton: FunctionComponent<{ closeToast: () => void }> = ({ closeToast }) => {
  return (
    <Button
      style={{ position: 'absolute', top: '5px', right: '5px' }}
      onClick={() => closeToast()}
      plain={true}
      icon={<Close size="18px" color="clrTextAndDataListHeader" />}
    />
  );
};

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
  TX_INFO,
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
  ) => void) &
  ((
    string: String,
    type: TToastType.TX_INFO,
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
  } else if (type === TToastType.TX_INFO) {
    toast(<ToastTxInfo string={string} />, inputOptions);
  } else {
    console.error(`Undefined toast type - ${type}`);
  }
};

const ToastTxInfo: FunctionComponent<{ string: String }> = ({ string }) => (
  <Box
    style={{
      fontFamily: 'Helvetica',
      color: 'var(--umee-color-primary)',
    }}
    direction="row"
    align="center"
  >
    <Image style={{ display: 'flex' }} width="35px" alt="info" src={Logo} />
    <Box margin={{ left: 'small' }}>
      <Text color="clrTextAndDataListHeader" size="16px">
        {string}
      </Text>
    </Box>
  </Box>
);

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
      <Text color="clrTextAndDataListHeader" size="18px">
        {string}
      </Text>
      <Text color="clrTextAndDataListHeader" size="small" style={{ lineHeight: '16px' }}>
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
      <Text color="clrTextAndDataListHeader" size="18px">
        {string}
      </Text>
      <Text color="clrTextAndDataListHeader" size="small">
        {message}
      </Text>
    </Box>
  </Box>
);

const ToastTxSuccess: FunctionComponent<{ string: String; link: string }> = ({ link, string }) => {
  const { themeMode } = useTheme();

  return (
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
        <Text color="clrTextAndDataListHeader" size="18px">
          {string}
        </Text>
        <a target="__blank" href={link}>
          <Box direction="row" align="center">
            <Text color="clrTextAndDataListHeader" size="small">
              View in explorer
            </Text>{' '}
            <Image style={{ display: 'flex' }} alt="external link" src={themeMode === Theme.light ? view : ViewWhite} />
          </Box>
        </a>
      </Box>
    </Box>
  );
};
