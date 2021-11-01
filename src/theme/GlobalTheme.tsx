import * as React from 'react'
import * as Mui from '@mui/material'
import { ruRU } from '@mui/material/locale'

import { usePallete } from './usePalette'

export const GlobalTheme: React.FC = (props) => {
  const theme = Mui.useTheme()
  const palette = usePallete(theme)
  return (
    <Mui.ThemeProvider
      theme={React.useMemo(
        () =>
          Mui.createTheme(
            {
              palette,
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

                MuiFormHelperText: {
                  defaultProps: {
                    variant: 'standard',
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
                  styleOverrides: {
                    root: {
                      borderCollapse: 'separate',
                      borderSpacing: 0,
                      minWidth: 'max-content',
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
                      zIndex: 5,
                      '& > tr': {
                        background: theme.palette.grey['50'],
                      },
                    },
                  },
                },

                MuiTableRow: {
                  defaultProps: {
                    sx: {
                      '&:hover > td': {
                        background: theme.palette.action.hover,
                      },

                      '&[data-selected=true] > td': {
                        background: theme.palette.action.selected,
                      },
                    },
                  },

                  styleOverrides: {
                    root: {},
                  },
                },

                MuiTableCell: {
                  styleOverrides: {
                    root: {
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      minWidth: 100,
                      background: 'inherit',
                      '&[data-hidden]': {
                        display: 'none',
                      },

                      '&:first-of-type': {
                        position: 'sticky',
                        left: 0,
                        zIndex: 3,
                      },
                    },

                    head: {
                      position: 'relative',
                      padding: theme.spacing(1.5, 2),
                      fontWeight: 300,
                      '&[data-filter-quick]': {
                        fontWeight: 500,
                      },
                    },

                    body: {
                      padding: theme.spacing(1.2, 2),
                      background: theme.palette.background.paper,
                      maxWidth: 0,
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
            },
            ruRU
          ),
        [theme, palette]
      )}
    >
      <Mui.CssBaseline />
      {props.children}
    </Mui.ThemeProvider>
  )
}
