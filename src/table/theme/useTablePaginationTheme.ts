import { ThemeHookType as H } from '../types'

export const useTablePaginationTheme: H<'MuiTablePagination'> = () => ({
  defaultProps: { size: 'small' },
  styleOverrides: {
    root: {
      gridColumn: '-1',
    },
  },
})
