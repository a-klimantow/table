import * as React from 'react'
import * as Mui from '@mui/material'
import { ruRU } from '@mui/material/locale'

import { ThemeHookType as H } from '../types'

import { useContainerTheme } from './useContainerTheme'
import { usePaperTheme } from './usePaperTheme'
import { useTableTheme } from './useTableTheme'

const useSvgIconTheme: H<'MuiSvgIcon'> = () => ({
  defaultProps: {
    fontSize: 'inherit',
  },
})

const useSwitchTheme: H = () =>
  React.useMemo(
    () => ({
      MuiSwitch: {
        defaultProps: { size: 'small' },
      },
    }),
    []
  )
const usePopoverTheme: H = () =>
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

const usePaginationTheme: H = () =>
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

const useBackdropTheme: H = (theme) =>
  React.useMemo(
    () => ({
      MuiBackdrop: {
        defaultProps: { invisible: true },
        styleOverrides: {
          root: {
            '&[data-resize]': {
              zIndex: theme?.zIndex.modal,
              cursor: 'col-resize',
            },
          },
        },
      },
    }),
    [theme]
  )

export const useComponentsTheme = () => {
  const theme = Mui.useTheme()
  const container = useContainerTheme(theme)
  const paper = usePaperTheme(theme)
  const MuiSvgIcon = useSvgIconTheme()
  const swtch = useSwitchTheme()
  const popover = usePopoverTheme()
  const table = useTableTheme(theme)
  const pagination = usePaginationTheme()
  const backdrop = useBackdropTheme(theme)
  return React.useMemo(
    () =>
      Mui.createTheme(
        {
          components: {
            ...container,
            ...paper,
            ...swtch,
            ...popover,
            ...table,
            ...pagination,
            ...backdrop,
            MuiSvgIcon,
          },
        },
        ruRU
      ),
    [container, pagination, paper, popover, MuiSvgIcon, swtch, table, backdrop]
  )
}
