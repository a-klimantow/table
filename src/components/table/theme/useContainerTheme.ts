import * as Mui from '@mui/material'

import { ThemeHookType as H } from '../types'

export const useContainerTheme: H<'MuiContainer'> = () => {
  const theme = Mui.useTheme()
  return {
    defaultProps: { disableGutters: true },
    styleOverrides: {
      root: {
        width: 'auto',
        border: '1px solid',
        borderColor: theme?.palette.divider,
        borderRadius: theme?.shape.borderRadius,
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
      },
    },
  }
}
