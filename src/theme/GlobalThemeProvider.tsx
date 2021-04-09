import { FC } from 'react'
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export const GlobalThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
