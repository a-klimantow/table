import * as React from 'react'
import * as Mui from '@mui/material'

export function useTableTheme() {
  const { palette } = Mui.useTheme()
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
                color: 'var(--test)',
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
    [palette]
  )
}
