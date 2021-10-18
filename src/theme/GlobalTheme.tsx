import * as React from 'react'
import * as Mui from '@material-ui/core'
import { ruRU } from '@material-ui/core/locale'

declare module '@material-ui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Mui.Theme {}
}

export const GlobalTheme: React.FC = (props) => {
  const theme = Mui.useTheme()
  return (
    <Mui.ThemeProvider
      theme={React.useMemo(
        () =>
          Mui.createTheme(
            {
              typography: {
                h5: { fontSize: 22, fontWeight: 500 },
                h6: { fontSize: 16, fontWeight: 500 },
                subtitle1: { fontSize: 22, fontWeight: 500 },
                subtitle2: { fontSize: 16, fontWeight: 500 },
              },

              components: {
                MuiCheckbox: {
                  defaultProps: {
                    size: 'small',
                  },
                },

                MuiSwitch: {
                  defaultProps: {
                    size: 'small',
                  },
                },

                MuiRadio: {
                  defaultProps: {
                    size: 'small',
                  },
                },

                MuiInputBase: {
                  styleOverrides: {
                    root: {
                      background: theme.palette.background.paper,
                    },
                  },
                },

                MuiTable: {
                  defaultProps: {
                    sx: {
                      borderCollapse: 'separate',
                      borderSpacing: 0,
                    },
                  },
                },

                MuiTableHead: {
                  defaultProps: {
                    sx: {
                      bgcolor: theme.palette.grey['50'],
                      position: 'sticky',
                      top: 0,
                    },
                  },
                },

                MuiTableCell: {
                  styleOverrides: {
                    root: {
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      '&[data-hidden]': {
                        display: 'none',
                      },
                    },

                    head: {
                      fontWeight: 300,
                      '&[data-quick-filter]': {
                        fontWeight: 500,
                      },
                    },
                  },
                },
              },
            },
            ruRU
          ),
        [theme]
      )}
    >
      <Mui.CssBaseline />
      {props.children}
    </Mui.ThemeProvider>
  )
}
