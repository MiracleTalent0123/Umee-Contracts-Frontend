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
    [key: string]: any
  },
  tip: any;
}

const grommetTheme: ITheme = {
  global: {
    colors: {
      clrPrimary: 'var(--umee-color-primary)',
      clrDisabled: 'var(--umee-color-disabled)',
      clrBoxGradient: 'var(--umee-gradient)',
      clrDetailBoxBorderTop1: 'var(--umee-full-pink)',
      clrDetailBoxBorderTop2: 'var(--umee-full-purple)',
      clrDetailBoxBorderTop3: 'var(--umee-full-green)',
      clrDefaultBGAndText: 'var(--umee-full-white)',
      clrNavLinkDefault: 'var(--umee-full-grey2)',
      clrOverlay: 'var(--umee-overlay)',
      clrButtonBorderGrey: 'var(--umee-full-grey3)',
      clrInfoBarBG: 'var(--umee-full-grey1)',
    },
    breakpoints: {
      small: { value: 640 },
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
    large: {
      size: '44px',
    },
    xlarge: {
      size: '54px',
    },
  },
  layer: {
    overlay: {
      background: 'clrOverlay',
    },
    responsiveBreakpoint: ''
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
