import { createTheme, Theme } from '@material-ui/core'

declare module '@material-ui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export default createTheme({
  palette: {
    background: {
      default: '#F1F3F5',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a {
          text-decoration: none;
          color: inherit;
          outline: 0;
        }
      `,
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
