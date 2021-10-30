import * as Mui from '@mui/material'
import { useTable } from './hooks/useTable'

export type TableType = ReturnType<typeof useTable>

type TSL = Mui.TableSortLabelProps
type TC = Mui.TableCellProps

interface Optional {
  hidden: boolean
  sort: TSL['direction']
  sortOrder?: number
  align: TC['align']
  width: number
  quickFilter: boolean
}

export interface ICol extends Partial<Optional> {
  name: string
  key: string
}

export interface IData {
  [key: string]: unknown
}
