import * as Mui from '@mui/material'
import { useTable } from './table/hooks'

export type TableType = ReturnType<typeof useTable>

type KC = keyof Mui.Components

export type ThemeHookType<K extends string = string> = (
  theme?: Mui.Theme
) => K extends KC ? Mui.Components[K] : Mui.Components

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

export interface TableProps {
  table: TableType
}
