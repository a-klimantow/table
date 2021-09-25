import { FC, useMemo } from 'react'
import { ThemeProvider, createTheme, useTheme } from '@material-ui/core'

export const GridTheme: FC = ({ children }) => {
  const theme = useTheme()
  return (
    <ThemeProvider
      theme={useMemo(
        () =>
          createTheme({
            components: {
              MuiTable: {
                styleOverrides: {
                  root: {
                    borderSpacing: 0,
                    borderCollapse: 'separate',
                  },
                },
              },

              MuiTableHead: {
                styleOverrides: {
                  root: {
                    backgroundColor: theme.palette.grey['50'],
                    position: 'sticky',
                    top: 0,
                    zIndex: 3,
                  },
                },
              },

              MuiTableBody: {
                styleOverrides: {
                  root: {
                    backgroundColor: theme.palette.background.paper,
                  },
                },
              },

              MuiTableRow: {
                styleOverrides: {
                  root: {
                    backgroundColor: 'inherit',
                  },
                },
              },

              MuiTableCell: {
                styleOverrides: {
                  root: {
                    fontWeight: 400,
                    backgroundColor: 'inherit',

                    '&[data-hidden]': {
                      display: 'none',
                    },

                    '&[data-qf]': {
                      fontWeight: 500,
                    },
                  },
                  head: {
                    padding: theme.spacing(1.4, 2),
                  },
                  body: {
                    padding: theme.spacing(1.1, 2),
                  },
                },
              },
            },
          }),
        []
      )}
    >
      {children}
    </ThemeProvider>
  )
}
