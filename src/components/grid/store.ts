import * as React from 'react'
import * as mobx from 'mobx'

import { IGridRow, ColsType } from './types'

class Store {
  // pagination
  count = 0
  page = 0
  rowsPerPage = 15
  rowsPerPageOptions = [15, 20, 30]

  // loading
  loading = false
  setLodaing = (loading: boolean) => (this.loading = loading)

  // search
  search = ''
  setSearch = (value: string): string => (this.search = value)

  // rows
  rows = mobx.observable.array<IGridRow>([])

  constructor(public cols: ColsType) {
    mobx.makeAutoObservable(this, { cols: false })
  }

  get tableHead() {
    return this.cols.slice()
  }

  update(count: number, rows: IGridRow[]) {
    this.count = count
    this.rows.replace(rows)
    if (this.count < this.page * this.rowsPerPage) {
      this.page = 0
    }
    this.loading = false
  }

  // query

  get top() {
    return { $top: this.rowsPerPage }
  }

  get skip() {
    return this.page ? { $skip: this.page * this.rowsPerPage } : {}
  }
}

export const useGrid = (columns: ColsType) =>
  React.useRef(new Store(columns)).current
