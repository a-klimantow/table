import { ReactNode } from 'react'
import { TableCellProps } from '@material-ui/core'

export interface IColumn {
  field: string
  name?: string
  align?: TableCellProps['align']
}

interface IDataItem {
  [key: string]: ReactNode
}

export interface ITableProps {
  columns: IColumn[]
  data: IDataItem[]
  selectable?: boolean
  showCheckbox?: boolean
  onCheckedChange?: Function
}
