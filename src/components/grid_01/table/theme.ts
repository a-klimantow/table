import * as React from 'react'
import * as Mui from '@mui/material'
import { blue } from '@mui/material/colors'

export function useTableTheme() {
  const { palette, spacing } = Mui.useTheme()
  return React.useMemo(
    () =>
      Mui.createTheme({
        components: {
          MuiLinearProgress: {
            styleOverrides: {
              root: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
              },
            },
          },

          MuiTableContainer: {
            styleOverrides: {
              root: {
                '--line': 'none',
                '&[data-scroll-line]': {
                  '--line': 'block',
                },
                whiteSpace: 'nowrap',
                flex: 1,
                position: 'relative',
              },
            },
          },

          MuiTable: {
            defaultProps: { size: 'small' },
            styleOverrides: {
              root: {
                minWidth: 'max-content',
                borderSpacing: 0,
                borderCollapse: 'separate',
              },
            },
          },
          MuiTableRow: {
            styleOverrides: {
              root: {
                backgroundColor: palette.common.white,
                '&:hover': {
                  backgroundColor: palette.grey['100'],
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
                backgroundColor: palette.grey['50'],
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              root: {
                minWidth: 100,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                position: 'relative',
                padding: spacing(1, 2),
                ':first-of-type': {
                  position: 'sticky',
                  left: 0,
                  right: 0,
                  zIndex: 2,
                  background: 'inherit',
                  '::after': {
                    content: '""',
                    display: 'var(--line,none)',
                    position: 'absolute',
                    borderRight: '1px solid',
                    borderColor: palette.divider,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: 5,
                  },
                },
              },
            },
          },
          MuiTableSortLabel: {
            styleOverrides: {
              root: {
                display: 'flex',
              },
            },
          },
        },
      }),
    [palette, spacing]
  )
}
