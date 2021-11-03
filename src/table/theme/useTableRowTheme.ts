import * as Mui from '@mui/material'
import { blue } from '@mui/material/colors'

import { ThemeHookType as H } from '../types'


export const useTableRowTheme: H<'MuiTableRow'> = () => {
  const theme = Mui.useTheme()
  return {
    styleOverrides: {
      root: {
        backgroundColor: theme?.palette.common.white,
        
        '&:hover:not(.MuiTableRow-head)': {
          backgroundColor: theme?.palette.grey['100'],
        },

        '&[data-selected]': {
          backgroundColor: blue['50'],
          '&:hover': {
            backgroundColor: blue['100'],
          },
        },
      },
      
      head: {
        position: 'sticky',
        top: 0,
        zIndex: 3,
        backgroundColor: theme?.palette.grey['50'],
      },
    },
  }
}