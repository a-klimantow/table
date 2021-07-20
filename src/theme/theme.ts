import { createMuiTheme } from '@material-ui/core'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    selected: Palette['primary']
  }
  interface PaletteOptions {
    selected: PaletteOptions['primary']
  }
}

const colors = {
  primary: {
    main: '#028BEE',
    dark: '#1554F6',
    light: '#F5FBFF',
  },
  action: '#E0EFFF',
}

export default createMuiTheme({
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
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: { textDecoration: 'none', color: 'inherit' },
      },
    },
  },
  typography: {
    body1: {
      fontWeight: 500,
    },
  },
  props: {
    MuiRadio: {
      color: 'primary',
    },
    MuiCheckbox: {
      color: 'primary',
    },
  },
})
