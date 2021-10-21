import * as React from 'react'
import * as mobx from 'mobx'

import { IGridRow as GR, ColsType as CT, ItemType as IT } from './types'

class Store {
  // pagination
  count = 0
  page = 0
  rowsPerPage = 15
  rowsPerPageOptions = [15, 20, 30]

  // loading
  loading = true

  setLodaing(loading: boolean): void {
    this.loading = loading
  }

  // search
  search = ''

  setSearch(value: string): void {
    this.search = value
  }

  // rows
  rows = mobx.observable.array<GR>([])

  constructor(public cols: CT) {
    mobx.makeAutoObservable(this, { cols: false })
  }

  get tableHead() {
    return this.cols.slice()
  }

  update(count: number, items: IT[]) {
    this.count = count

    const rows = items.map((item, i) => ({
      key: String(i),
      cells: this.tableHead.map((col) => ({
        node: col.renderCell ? col.renderCell(item) : item[col.key],
        col,
      })),
    }))

    this.rows.replace(rows)
    if (this.count < this.page * this.rowsPerPage) {
      this.page = 0
    }
  }

  // query

  get top() {
    return this.rowsPerPage
  }

  get skip() {
    return this.page * this.rowsPerPage
  }
}

export const useGrid = (columns: CT) => React.useRef(new Store(columns)).current
