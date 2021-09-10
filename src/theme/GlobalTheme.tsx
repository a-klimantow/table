import { FC, useMemo } from 'react'
import { ruRU } from '@material-ui/core/locale'
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Theme,
} from '@material-ui/core'

declare module '@material-ui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const GlobalTheme: FC = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme(
        {
          components: {
            MuiOutlinedInput: {
              defaultProps: {
                sx: {
                  letterSpacing: 1,
                  bgcolor: 'background.paper',
                },
              },
            },

            MuiFormHelperText: {
              defaultProps: {
                sx: {
                  position: 'absolute',
                  top: '100%',
                  whiteSpace: 'nowrap',
                  left: -14,
                },
              },
            },
          },
        },
        ruRU
      ),
    []
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
