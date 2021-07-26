import { useMemo } from 'react'
import { Theme, createTheme, useTheme } from '@material-ui/core'

export const useTableTheme = (): Theme => {
  const theme = useTheme()
  return useMemo(
    () =>
      createTheme({
        ...theme,
        components: {
          MuiTableContainer: {
            styleOverrides: {
              root: {
                '&[data-scroll] [data-freeze]': {
                  borderRight: `1px solid ${theme.palette.divider}`,
                },
              },
            },
          },
          MuiTable: {
            styleOverrides: {
              root: {
                borderCollapse: 'separate',
                background: theme.palette.background.paper,
                whiteSpace: 'nowrap',
              },
            },
          },

          MuiTableHead: {
            styleOverrides: {
              root: {
                position: 'sticky',
                top: 0,
                zIndex: 2,
                background: theme.palette.grey['50'],
                '&[data-resize] *': {
                  cursor: 'col-resize',
                },
              },
            },
          },

          MuiTableBody: {
            styleOverrides: {
              root: {
                background: 'inherit',
              },
            },
          },

          MuiTableRow: {
            styleOverrides: {
              root: {
                background: 'inherit',
              },
            },
          },

          MuiTableCell: {
            styleOverrides: {
              root: {
                background: 'inherit',
                position: 'relative',
                padding: theme.spacing(0.5),

                '&[data-checkbox]': {
                  position: 'sticky',
                  left: 0,
                  zIndex: 1,
                  textAlign: 'center',
                  paddingTop: 0,
                  paddingBottom: 0,

                  '& + td, & + th': {
                    left: 50,
                  },
                },

                '&[data-freeze]': {
                  position: 'sticky',
                  left: 0,
                  zIndex: 1,
                },
              },

              head: {},

              body: {
                maxWidth: 0,
              },
            },
          },

          MuiTableSortLabel: {
            styleOverrides: {
              root: {
                marginRight: 4,
                display: 'flex',
                minHeight: theme.spacing(4),

                '& > .text': {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                },
              },
            },
          },
        },
      }),
    [theme]
  )
}
