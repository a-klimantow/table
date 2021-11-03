import { ThemeHookType as H } from '../types'

export const useTableTheme: H<'MuiTable'> = () => ({
  defaultProps: { size: 'small' },
  styleOverrides: {
    root: {
      borderSpacing: 0,
      borderCollapse: 'separate',
      minWidth: 'max-content',
    },
  },
})
