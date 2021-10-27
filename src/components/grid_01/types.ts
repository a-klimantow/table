import * as React from 'react'
import * as Mui from '@mui/material'
import * as mobx from 'mobx'

type TCP = Mui.TableCellProps
type TSLP = Mui.TableSortLabelProps

export interface ICol {
  align?: TCP['align']
  filterQuick?: boolean
  filterCols?: boolean
  hidden?: boolean
  key: string
  name?: string
  type: 'number' | 'string' | 'date'
  renderCell?(...i: unknown[]): React.ReactNode
  width?: number
  sorted?: TSLP['direction']
}

export type ArrCol = mobx.IObservableArray<ICol>

export interface IDataItem {
  [key: string]: string | number | null | boolean | IDataItem
}
