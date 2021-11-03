import { ThemeHookType as H } from '../types'

export const useTableSortLabelTheme: H<'MuiTableSortLabel'> = () => ({
  styleOverrides: {
    root: {
      display: 'flex',

      '& > .MuiTypography-root': {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
  },
})
