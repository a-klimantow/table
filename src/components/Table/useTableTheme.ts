import React from 'react'
import { createTheme, useTheme } from '@material-ui/core'

export const useTableTheme = () => {
  const theme = useTheme()
  return React.useMemo(
    () =>
      createTheme({
        components: {
          MuiBackdrop: {
            styleOverrides: {
              root: {
                position: 'absolute',
                background: 'none',
              },
            },
          },

          MuiTableContainer: {
            styleOverrides: {
              root: {
                position: 'relative',
              },
            },
          },

          MuiTable: {
            styleOverrides: {
              root: {
                borderSpacing: 0,
                borderCollapse: 'separate',
                whiteSpace: 'nowrap',
              },
            },
            defaultProps: {
              padding: 'none',
            },
          },

          MuiTableHead: {
            styleOverrides: {
              root: {
                position: 'sticky',
                top: 0,
                zIndex: 2,
              },
            },
          },

          MuiTableCell: {
            styleOverrides: {
              root: {
                padding: theme.spacing(1),

                '&:first-of-type': {
                  position: 'sticky',
                  left: 0,
                  zIndex: 1,
                },
              },
              head: {
                background: theme.palette.grey['50'],
                position: 'relative',

                '&::after': {
                  content: "'|'",
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: 'inline-flex',
                  placeItems: 'center',
                  placeContent: 'center',
                  width: 8,
                  color: theme.palette.grey['500'],
                },
              },

              body: {
                background: theme.palette.background.paper,
              },
            },
          },
        },
      }),
    [theme]
  )
}
