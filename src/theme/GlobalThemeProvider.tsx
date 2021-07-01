import { FC } from 'react'
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'

const colors = {
  primary: {
    main: '#028BEE',
    dark: '#1554F6',
    light: '#F5FBFF',
  },
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      dark: colors.primary.dark,
      light: colors.primary.light,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: { textDecoration: 'none', color: 'inherit' },
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: colors.primary.light,
        },
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

export const GlobalThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
