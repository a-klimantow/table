import * as React from 'react'
import * as Mui from '@mui/material'
import { ruRU } from '@mui/material/locale'
import { blue } from '@mui/material/colors'

export const useTableTheme = () => {
  const theme = Mui.useTheme()
  return React.useMemo(
    () =>
      Mui.createTheme(
        {
          components: {
            MuiContainer: {
              defaultProps: { disableGutters: true },
              styleOverrides: {
                root: {
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  borderRadius: theme.shape.borderRadius,
                  display: 'flex',
                  flexDirection: 'column',
                },
              },
            },

            MuiPaper: {
              defaultProps: {
                elevation: 0,
              },
              styleOverrides: {
                root: {
                  display: 'grid',
                  columnGap: theme.spacing(1),

                  '&[data-section]': {
                    display: 'grid',
                    placeItems: 'center',
                    columnGap: theme.spacing(1),
                    padding: theme.spacing(0, 1),
                  },

                  '&[data-section=toolbar]': {
                    background: theme.palette.grey['300'],
                    gridTemplate: '56px / repeat(3, auto) 1fr',
                  },

                  '&[data-section=bottom]': {
                    gridTemplate: 'auto / repeat(2, auto) 1fr',
                    borderTop: '1px solid',
                    borderTopColor: theme.palette.divider,
                  },

                  '&[data-section="search"]': {
                    gridTemplate: 'auto / 32px 130px 32px',
                    border: '1px solid',
                    borderColor: 'transparent',

                    '& input': {
                      fontSize: 14,
                    },

                    '&:focus-within': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                },
              },
            },

            MuiSvgIcon: {
              defaultProps: {
                fontSize: 'inherit',
              },
            },

            MuiSwitch: {
              defaultProps: { size: 'small' },
            },

            MuiPopover: {
              defaultProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                },
              },
            },

            MuiTableContainer: {
              styleOverrides: {
                root: {
                  position: 'relative',
                  whiteSpace: 'nowrap',
                },
              },
            },

            MuiTable: {
              defaultProps: { size: 'small' },
              styleOverrides: {
                root: {
                  borderSpacing: 0,
                  borderCollapse: 'separate',
                },
              },
            },

            MuiTableRow: {
              styleOverrides: {
                root: {
                  backgroundColor: theme.palette.common.white,

                  '&:hover:not(.MuiTableRow-head)': {
                    backgroundColor: theme.palette.grey['100'],
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
                  backgroundColor: theme.palette.grey['50'],
                },
              },
            },

            MuiTableCell: {
              styleOverrides: {
                root: {
                  backgroundColor: 'inherit',
                  position: 'relative',

                  '&:first-of-type': {
                    position: 'sticky',
                    left: 0,
                    zIndex: 1,
                  },

                  '& [data-resize]': {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 8,
                    overflow: 'hidden',
                    color: theme.palette.action.focus,
                    cursor: 'col-resize',

                    '&:hover': {
                      color: theme.palette.action.active,
                    },

                    '& > svg': {
                      transform: 'rotate(90deg)',
                      fontSize: 24,
                    },
                  },
                },
              },
            },

            MuiTablePagination: {
              defaultProps: { size: 'small' },
              styleOverrides: {
                root: {
                  gridColumn: '-1',
                },
              },
            },
          },
        },
        ruRU
      ),
    [theme]
  )
}
