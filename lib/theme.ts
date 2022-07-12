/**
 * Grommet Theme
 *
 * https://v2.grommet.io/grommet
 */
interface ITheme {
  global: {
    font: {
      [key: string]: any;
    };
    colors: {
      [key: string]: any;
    };
    breakpoints: {
      [key: string]: {
        [key: string]: number;
      };
    };
  };
  text: {
    [key: string]: {
      [key: string]: string;
    };
  };
  layer: {
    [key: string]: any;
  };
  tip: any;
}

const grommetTheme: ITheme = {
  global: {
    font: {
      family: 'Helvetica',
    },
    colors: {
      clrPrimary: 'var(--umee-color-primary)',
      clrDark: 'var(--umee-full-dark)',
      clrDarkGreyOnNavy: 'var(--umee-dark-grey-on-navy)',
      clrWhite: 'var(--umee-full-white)',
      clrOffWhiteBlueLine: 'var(--umee-full-grey3)',
      clrMidGreyOnNavy: 'var(--umee-mid-grey-on-navy)',
      clrOffWhiteBlue: 'var(--umee-full-grey1)',
      clrIconOff: 'var(--umee-full-grey2)',
      clrInfoTooltipBackground: {
        light: 'clrWhite',
        dark: 'clrDarkGreyOnNavy'
      },
      clrBorderGrey: {
        light: 'clrOffWhiteBlueLine',
        dark: 'clrDarkGreyOnNavy'
      },
      clrBackground: {
        light: 'clrWhite',
        dark: 'clrPrimary',
      },
      clrModalBackground: {
        light: 'clrWhite',
        dark: 'clrDark'
      },
      clrSideNavBorder: {
        light: 'clrPrimary',
        dark: 'clrDarkGreyOnNavy',
      },
      clrMobileNavBackground: {
        light: 'clrWhite',
        dark: '#16183C',
      },
      clrBoxBorder: {
        light: 'clrWhite',
        dark: 'clrDarkGreyOnNavy'
      },
      clrBorder: {
        light: 'clrMidGreyOnNavy',
        dark: 'clrDarkGreyOnNavy'
      },
      clrTextAndDataListHeader: {
        light: 'clrPrimary',
        dark: 'clrWhite',
      },
      clrValidatorSelector: {
        light: 'clrOffWhiteBlueLine',
        dark: '#2A2C4E',
      },
      clrDataListBorderBottom: {
        light: 'clrOffWhiteBlueLine',
        dark: 'clrDarkGreyOnNavy',
      },
      clrBarBackground: {
        light: 'clrOffWhiteBlue',
        dark: '#2A2C4E',
      },
      clrBarRailBackground: {
        light: 'clrWhite',
        dark: 'clrMidGreyOnNavy'
      },
      clrButtonBorderGrey: {
        light: 'clrOffWhiteBlueLine',
        dark: 'clrIconOff'
      },
      clrTabPrimary: {
        light: 'clrPrimary',
        dark: 'clrWhite'
      },
      clrScale: {
        light: 'clrMidGreyOnNavy',
        dark: 'clrWhite'
      },
      clrBridgeFeeBox: {
        light: 'clrOffWhiteBlue',
        dark: '#2A2C4E'
      },
      clrThemeSwitchBG: {
        light: 'clrWhite',
        dark: 'clrDarkGreyOnNavy'
      },
      clrToggleBG: {
        light: 'clrPrimary',
        dark: 'clrDarkGreyOnNavy'
      },
      clrToggleOnText: {
        light: 'clrPrimary',
        dark: 'clrWhite'
      },
      clrToggleOffText: {
        light: 'clrWhite',
        dark: 'clrWhite'
      },
      clrTextGrey: {
        light: 'clrMidGreyOnNavy',
        dark: 'clrIconOff'
      },
      clrTabDisabled: 'clrMidGreyOnNavy',
      clrBoxGradient: 'var(--umee-gradient)',
      clrDetailBoxBorderTop1: 'var(--umee-full-pink)',
      clrDetailBoxBorderTop2: 'var(--umee-full-purple)',
      clrDetailBoxBorderTop3: 'var(--umee-full-green)',
      clrDefaultBGAndText: 'var(--umee-full-white)',
      clrNavLinkDefault: 'var(--umee-full-grey2)',
      clrOverlayLight: 'var(--umee-overlay)',
      clrOverlayDark: 'var(--umee-overlay-dark)',
      clrFullGreen: 'var(--umee-full-green)',
      clrDanger: '#ff0000',
      clrFullPurple: '#DFB2FF'
    },
    breakpoints: {
      small: { value: 568 },
      medium: { value: 768 },
      large: { value: 1024 },
      xlarge: { value: 1280 },
      xxlarge: { value: 1536 },
    },
  },
  text: {
    xsmall: {
      size: '11px',
    },
    small: {
      size: '15px',
    },
    medium: {
      size: '20px',
    },
    medium1: {
      size: '32px',
    },
    large: {
      size: '44px',
    },
    xlarge: {
      size: '54px',
    },
  },
  layer: {
    overlay: {
      background: {
        light: 'clrOverlayLight',
        dark: 'clrOverlayDark',
      },
    },
    responsiveBreakpoint: '',
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
}

export default grommetTheme
