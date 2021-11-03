import * as Mui from '@mui/material'
import { ruRU } from '@mui/material/locale'

import { useBackdropTheme } from './useBackgropTheme'
import { useContainerTheme } from './useContainerTheme'
import { usePaperTheme } from './usePaperTheme'
import { usePopoverTheme } from './usePopoverTheme'
import { useSvgIconTheme } from './useSvgIconTheme'
import { useSwitchTheme } from './useSwitchTheme'
import { useTableCellTheme } from './useTableCellTheme'
import { useTableContainerTheme } from './useTableContainerTheme'
import { useTablePaginationTheme } from './useTablePaginationTheme'
import { useTableRowTheme } from './useTableRowTheme'
import { useTableSortLabelTheme } from './useTableSortLabelTheme'
import { useTableTheme } from './useTableTheme'

export const useTheme = () => {
  return Mui.createTheme(
    {
      components: {
        MuiBackdrop: useBackdropTheme(),
        MuiContainer: useContainerTheme(),
        MuiPaper: usePaperTheme(),
        MuiPopover: usePopoverTheme(),
        MuiSvgIcon: useSvgIconTheme(),
        MuiSwitch: useSwitchTheme(),
        MuiTableCell: useTableCellTheme(),
        MuiTableContainer: useTableContainerTheme(),
        MuiTablePagination: useTablePaginationTheme(),
        MuiTableRow: useTableRowTheme(),
        MuiTableSortLabel: useTableSortLabelTheme(),
        MuiTable: useTableTheme(),
      },
    },
    ruRU
  )
}
