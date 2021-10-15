import { IObservableArray } from 'mobx'
import { ReactNode } from 'react'
import { TableCellProps } from '@material-ui/core'

export interface IGridCol {
  key: string
  name?: string
  type?: string | number | Date
  hidden?: boolean
  renderCell?(...item: unknown[]): ReactNode
  quickFilter?: boolean
  aling?: TableCellProps['align']
}

interface IGridCell {
  node: ReactNode
  col: IGridCol
}

export interface IGridRow {
  key: string
  cells: IGridCell[]
}

export type ColsType = IObservableArray<IGridCol>
