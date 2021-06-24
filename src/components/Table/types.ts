import { ReactNode } from 'react'

export interface IColumn {
  name?: string
  field: string
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
