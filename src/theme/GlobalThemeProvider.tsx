import { FC } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import theme from './theme'

export const GlobalThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
