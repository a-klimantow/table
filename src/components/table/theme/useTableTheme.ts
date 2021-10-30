import * as React from 'react'
import { blue } from '@mui/material/colors'

import { ThemeHookType as H } from '../types'

export const useTableTheme: H = (theme) =>
  React.useMemo(
    () => ({
      MuiTableContainer: {
        styleOverrides: {
          root: {
            position: 'relative',
            whiteSpace: 'nowrap',
            backgroundColor: theme?.palette.common.white,

            '&[data-scrolled] tr > :first-of-type': {
              borderRight: '1px solid',
              borderRightColor: theme?.palette.divider,
            },
          },
        },
      },

      MuiTable: {
        defaultProps: { size: 'small' },
        styleOverrides: {
          root: {
            borderSpacing: 0,
            borderCollapse: 'separate',
            minWidth: 'max-content',
          },
        },
      },

      MuiTableRow: {
        styleOverrides: {
          root: {
            backgroundColor: theme?.palette.common.white,

            '&:hover:not(.MuiTableRow-head)': {
              backgroundColor: theme?.palette.grey['100'],
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
            backgroundColor: theme?.palette.grey['50'],
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            backgroundColor: 'inherit',
            position: 'relative',
            padding: theme?.spacing(1, 2),
            textOverflow: 'ellipsis',
            overflow: 'hidden',

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
              color: theme?.palette.action.focus,
              cursor: 'col-resize',

              '&:hover': {
                color: theme?.palette.action.active,
              },

              '& > svg': {
                transform: 'rotate(90deg)',
                fontSize: 24,
              },
            },
          },

          head: {},
          body: {
            minWidth: 100,
            maxWidth: 100,
          },
        },
      },

      MuiTableSortLabel: {
        styleOverrides: {
          root: {
            display: 'flex',

            '& > .MuiTypography-root': {
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            },
          },
        },
      },
    }),
    [theme]
  )
