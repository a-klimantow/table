import { createTheme, Theme } from '@material-ui/core'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    selected: Palette['primary']
  }
  interface PaletteOptions {
    selected: PaletteOptions['primary']
  }
}

declare module '@material-ui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const colors = {
  primary: {
    main: '#028BEE',
    dark: '#1554F6',
    light: '#F5FBFF',
  },
  action: '#E0EFFF',
}

export default createTheme({
  palette: {
    selected: { main: 'blue', contrastText: 'red' },
    primary: {
      main: colors.primary.main,
      dark: colors.primary.dark,
      light: colors.primary.light,
    },
    action: {
      hover: colors.action,
      focus: colors.action,
      selected: colors.action,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          a: { textDecoration: 'none', color: 'inherit' },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: '#fff',
          letterSpacing: 1,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
})
