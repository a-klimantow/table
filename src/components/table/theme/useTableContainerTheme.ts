import * as Mui from '@mui/material'

import { ThemeHookType as H } from '../types'

export const useTableContainerTheme: H<'MuiTableContainer'> = () => {
  const theme = Mui.useTheme()
  return {
    styleOverrides: {
      root: {
        position: 'relative',
        whiteSpace: 'nowrap',
        backgroundColor: theme?.palette.common.white,

        '&[data-scrolled] tr > :first-of-type': {
          borderRight: '1px solid',
          borderRightColor: theme?.palette.divider,
        },
      },
    },
  }
}
