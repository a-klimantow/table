import * as Mui from '@mui/material'

import { ThemeHookType as H } from '../types'

export const useTableCellTheme: H<'MuiTableCell'> = () => {
  const theme = Mui.useTheme()
  return {
    styleOverrides: {
      root: {
        backgroundColor: 'inherit',
        position: 'relative',
        padding: theme?.spacing(1, 2),
        textOverflow: 'ellipsis',
        overflow: 'hidden',

        '&:first-of-type': {
          position: 'sticky',
          left: 0,
          zIndex: 1,
        },

        '& [data-resize]': {
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 8,
          overflow: 'hidden',
          color: theme?.palette.action.focus,
          cursor: 'col-resize',

          '&:hover': {
            color: theme?.palette.action.active,
          },

          '& > svg': {
            transform: 'rotate(90deg)',
            fontSize: 24,
          },
        },
      },

      head: {},
      body: {
        minWidth: 100,
        maxWidth: 100,
      },
    },
  }
}
