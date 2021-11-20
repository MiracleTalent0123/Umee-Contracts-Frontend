/**
 * Grommet Theme
 *
 * https://v2.grommet.io/grommet
 */
interface ITheme {
  global: {
    colors: {
      [key: string]: string;
    };
  };
  tip: any;
}

const grommetTheme: ITheme = {
  global: {
    colors: {
      // Start of new color naming conventions
      clrBackButtonTextAndBoxBorder: 'var(--umee-body-dark)',
      clrButtonDefaultBg: 'var(--umee-full-purple)',
      clrButtonDefaultText: 'var(--umee-body-light)',
      clrButtonDisabledBg: 'var(--umee-body-medium)',
      clrCollateralSwitchChecked: 'var(--umee-light-green)',
      clrCollateralSwitchUnChecked: 'var(--umee-body-dark)',
      clrDefaultBg: 'var(--umee-body-light)',
      clrDefaultText: 'var(--umee-body-dark)',
      clrDisabledBg: 'var(--umee-body-medium)',
      clrHeaderBg: 'var(--umee-body-dark)',
      clrHeaderText: 'var(--umee-body-light)',
      clrInfoPanelBg: 'var(--umee-body-medium)',
      clrInfoPanelBorder: 'var(--umee-body-medium)',
      clrLozengeBorder: 'var(--umee-header-dark)',
      clrMessageTitle: 'var(--umee-full-purple)',
      clrNavItemText: 'var(--umee-body-light)',
      clrReserveIndicatorDefault: 'black',
      clrReserveIndicatorSecondary: 'var(--umee-full-purple)',
      clrSpinnerLarge: 'var(--umee-full-purple)',
      clrSpinnerSmall: 'var(--umee-full-blue)',
      clrSubtitle: 'var(--umee-full-purple)',
      clrTabActive: 'var(--umee-full-purple)',
      clrTabActiveText: 'var(--umee-body-light)',
      clrTabBorder: 'var(--umee-body-medium)',
      clrTabInactive: 'var(--umee-body-light)',
      clrTabInactiveText: 'undefined',
      clrTabSuccessFailureSideBorder: 'white',
      clrToggleBg: '#131A33',
      clrToggleOffText: '#131A33',
      clrToggleOnText: '#fff',
      clrTxnListButtonBg: 'var(--umee-light-blue)',
      clrTxnListButtonText: 'black',
      clrListHover: 'var(--umee-light-purple)',
      clrUrlLink: 'var(--umee-full-purple)',
      clrHealthOk: 'var(--umee-full-green)',
      clrConnectWalletBg: '#ffffff00',
      clrConnectWalletBgHover: 'var(--umee-full-blue)',
      clrConnectWalletText: 'var(--umee-body-light)',
      // clrMeter-# is used in the InfoPanelMeter.tsx file.
      'clrMeter-1': 'var(--umee-full-blue)',
      'clrMeter-2': 'var(--umee-full-purple)',
      'clrMeter-3': 'var(--umee-full-green)',
      //there was a merge conflict and wasn't sure why this was removed. looks like the hard coding..
      //kept just in case we needed this. Adam is the clean up/refactor master
      'clrMeter-4': '#FFCA58',
      'clrMeter-5': '#CCCCCC',
      'clrMeter-6': '#81FCED',
      'clrMeter-7': '#F2F2F2',
      'clrMeter-8': '#FD6FFF',
      'clrMeter-9': '#DADADA',
      'clrMeter-10': '#A2423D',
      'clrMeter-11': '#333333',
      'clrMeter-12': '#FF4040',
      'clrMeter-13': '#999999',
      'clrMeter-14': '#00739D',
      'clrMeter-15': '#555555',
      'clrMeter-16': '#00873D',
      'clrMeter-17': '#777777',
      'clrMeter-18': '#3D138D',
      'clrMeter-19': '#999999',
      'clrMeter-20': '#FFAA15',
      'clrMeter-21': '#F8F8F8',
      'clrMeter-22': '#FF4040',
      'clrMeter-23': '#EDEDED',

      /** DEPRECATED COLOR CODES -- DO NOT DIRECTLY USE*/
      brand: 'var(--umee-body-dark)',
      'accent-1': 'var(--umee-full-blue)',
      'accent-2': 'var(--umee-full-purple)',
      'accent-3': 'var(--umee-light-purple)',
      'accent-4': 'var(--umee-light-green)',
      'neutral-1': 'var(--umee-body-light)',
      'neutral-2': 'var(--umee-body-medium)',
      'neutral-3': 'var(--umee-light-blue)',
    },
  },
  tip: {
    content: {
      background: 'white',
      pad: 'xsmall',
    },
    drop: {
      round: 'xsmall',
      elevation: 'small',
    },
  },
};

export default grommetTheme;
