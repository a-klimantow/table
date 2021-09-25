import { ReactNode } from 'react'
import { makeObservable, observable } from 'mobx'

import { ICol } from 'types'

type RowType = { [key: string]: ReactNode }

export class GridStore {
  rows = [] as RowType[]
  constructor(public columns: ICol[] = [], public quickFilter: string[] = []) {
    makeObservable(this, { rows: observable })
  }

  setRows(rows: RowType[]) {
    this.rows = rows
  }
}
