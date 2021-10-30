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

const useSwitchTheme: H<'MuiSwitch'> = () => ({
  defaultProps: { size: 'small' },
})
const usePopoverTheme: H<'MuiPopover'> = () => ({
  defaultProps: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
  },
})

const useTablePaginationTheme: H<'MuiTablePagination'> = () => ({
  defaultProps: { size: 'small' },
  styleOverrides: {
    root: {
      gridColumn: '-1',
    },
  },
})

const useBackdropTheme: H<'MuiBackdrop'> = (theme) => ({
  defaultProps: { invisible: true },
  styleOverrides: {
    root: {
      '&[data-resize]': {
        zIndex: theme?.zIndex.modal,
        cursor: 'col-resize',
      },
    },
  },
})

export const useComponentsTheme = () => {
  const theme = Mui.useTheme()
  const table = useTableTheme(theme)
  return Mui.createTheme(
    {
      components: {
        MuiPaper: usePaperTheme(theme),
        MuiTablePagination: useTablePaginationTheme(),
        MuiSwitch: useSwitchTheme(),
        MuiSvgIcon: useSvgIconTheme(),
        MuiPopover: usePopoverTheme(),
        MuiBackdrop: useBackdropTheme(theme),
        MuiContainer: useContainerTheme(theme),
        ...table,
      },
    },
    ruRU
  )
}
