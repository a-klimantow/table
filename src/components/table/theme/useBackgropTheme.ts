import * as Mui from '@mui/material'

import { ThemeHookType as H } from '../types'

export const useBackdropTheme: H<'MuiBackdrop'> = () => {
  const theme = Mui.useTheme()
  return {
    defaultProps: { invisible: true },
    styleOverrides: {
      root: {
        '&[data-resize]': {
          zIndex: theme?.zIndex.modal,
          cursor: 'col-resize',
        },
      },
    },
  }
}
