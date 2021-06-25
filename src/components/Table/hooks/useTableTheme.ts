import { useMemo } from 'react'
import { Theme, createMuiTheme, useTheme } from '@material-ui/core'

export const useTableTheme = (): Theme => {
  const theme = useTheme()
  return useMemo(
    () =>
      createMuiTheme({
        ...theme,
        overrides: {
          MuiTableContainer: {
            root: {
              '&[data-scroll] [data-freeze]': {
                borderRight: `1px solid ${theme.palette.divider}`,
              },
            },
          },
          MuiTable: {
            root: {
              borderCollapse: 'separate',
              background: theme.palette.background.paper,
              whiteSpace: 'nowrap',
            },
          },

          MuiTableHead: {
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

          MuiTableBody: {
            root: {
              background: 'inherit',
            },
          },

          MuiTableRow: {
            root: {
              background: 'inherit',
            },
          },

          MuiTableCell: {
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

          MuiTableSortLabel: {
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

        props: {
          MuiCheckbox: {
            color: 'primary',
          },
        },
      }),
    [theme]
  )
}
