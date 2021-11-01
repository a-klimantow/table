import * as Mui from '@mui/material'

import { ThemeHookType as H } from '../types'

export const usePaperTheme: H<'MuiPaper'> = () => {
  const theme = Mui.useTheme()
  return {
    defaultProps: {
      elevation: 0,
    },

    styleOverrides: {
      root: {
        display: 'grid',
        columnGap: theme?.spacing(1),

        '&[data-section]': {
          display: 'grid',
          placeItems: 'center',
          columnGap: theme?.spacing(1),
          padding: theme?.spacing(0, 1),
        },

        '&[data-section=toolbar]': {
          background: theme?.palette.grey['300'],
          gridTemplate: '56px / repeat(3, auto) 1fr',
        },

        '&[data-section=bottom]': {
          gridTemplate: 'auto / repeat(2, auto) 1fr',
          borderTop: '1px solid',
          borderTopColor: theme?.palette.divider,
        },

        '&[data-section="search"]': {
          gridTemplate: 'auto / 32px 130px 32px',
          border: '1px solid',
          borderColor: 'transparent',
          padding: 0,

          '& input': {
            fontSize: 14,
          },

          '&:focus-within': {
            borderColor: theme?.palette.primary.main,
          },
        },
      },
    },
  }
}
