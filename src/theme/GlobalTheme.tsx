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
          typography: {
            h5: { fontSize: 22, fontWeight: 500 },
            h6: { fontSize: 16, fontWeight: 500 },
          },

          components: {},
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
