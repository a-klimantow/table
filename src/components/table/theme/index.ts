import * as React from 'react'
import * as Mui from '@mui/material'
import { ruRU } from '@mui/material/locale'
import { blue } from '@mui/material/colors'

type Hook = (theme?: Mui.Theme) => Mui.ThemeOptions['components']

const useContainer: Hook = (theme) =>
  React.useMemo(
    () => ({
      MuiContainer: {
        defaultProps: { disableGutters: true },
        styleOverrides: {
          root: {
            width: 'auto',
            border: '1px solid',
            borderColor: theme?.palette.divider,
            borderRadius: theme?.shape.borderRadius,
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
          },
        },
      },
    }),
    [theme]
  )

const usePaper: Hook = (theme) =>
  React.useMemo(
    () => ({
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            display: 'grid',
            columnGap: theme?.spacing(1),

            '&[data-section]': {
              display: 'grid',
              placeItems: 'center',
              columnGap: theme?.spacing(1),
              padding: theme?.spacing(0, 1),
            },

            '&[data-section=toolbar]': {
              background: theme?.palette.grey['300'],
              gridTemplate: '56px / repeat(3, auto) 1fr',
            },

            '&[data-section=bottom]': {
              gridTemplate: 'auto / repeat(2, auto) 1fr',
              borderTop: '1px solid',
              borderTopColor: theme?.palette.divider,
            },

            '&[data-section="search"]': {
              gridTemplate: 'auto / 32px 130px 32px',
              border: '1px solid',
              borderColor: 'transparent',

              '& input': {
                fontSize: 14,
              },

              '&:focus-within': {
                borderColor: theme?.palette.primary.main,
              },
            },
          },
        },
      },
    }),
    [theme]
  )

const useSvgIcon: Hook = () =>
  React.useMemo(
    () => ({
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'inherit',
        },
      },
    }),
    []
  )

const useSwitch: Hook = () =>
  React.useMemo(
    () => ({
      MuiSwitch: {
        defaultProps: { size: 'small' },
      },
    }),
    []
  )
const usePopover: Hook = () =>
  React.useMemo(
    () => ({
      MuiPopover: {
        defaultProps: {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
        },
      },
    }),
    []
  )
const useTable: Hook = (theme) =>
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
const usePagination: Hook = () =>
  React.useMemo(
    () => ({
      MuiTablePagination: {
        defaultProps: { size: 'small' },
        styleOverrides: {
          root: {
            gridColumn: '-1',
          },
        },
      },
    }),
    []
  )

const useBackdrop: Hook = (theme) =>
  React.useMemo(
    () => ({
      MuiBackdrop: {
        defaultProps: { invisible: true },
        styleOverrides: {
          root: {
            zIndex: theme?.zIndex.modal,
            cursor: 'col-resize',
          },
        },
      },
    }),
    [theme]
  )

export const useTableTheme = () => {
  const theme = Mui.useTheme()
  const container = useContainer(theme)
  const paper = usePaper(theme)
  const svg = useSvgIcon()
  const swtch = useSwitch()
  const popover = usePopover()
  const table = useTable(theme)
  const pagination = usePagination()
  const backdrop = useBackdrop(theme)
  return React.useMemo(
    () =>
      Mui.createTheme(
        {
          components: {
            ...container,
            ...paper,
            ...svg,
            ...swtch,
            ...popover,
            ...table,
            ...pagination,
            ...backdrop,
          },
        },
        ruRU
      ),
    [container, pagination, paper, popover, svg, swtch, table, backdrop]
  )
}
