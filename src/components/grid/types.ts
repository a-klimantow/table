import { IObservableArray } from 'mobx'
import { ReactNode } from 'react'

export interface IGridCol {
  key: string
  name?: string
  type?: string | number | Date
  hidden?: boolean
  renderCell?(...item: unknown[]): ReactNode
  quickFilter?: boolean
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
