import * as React from 'react'
import * as mobx from 'mobx'

import { IGridRow as GR, ColsType as CT, ItemType as IT } from './types'

class Store {
  // pagination
  count = 0
  page = 0
  rowsPerPage = 15
  rowsPerPageOptions = [15, 20, 30]

  get top() {
    return this.rowsPerPage
  }

  get skip() {
    return this.page * this.rowsPerPage
  }

  setCount(count: number) {
    if (this.count < this.skip) this.page = 0
    this.count = count
  }

  // loading
  loading = false

  setLodaing(loading: boolean): void {
    this.loading = loading
  }

  // search
  search = ''

  setSearch(value: string): void {
    this.search = value
  }

  // items
  items = mobx.observable.array<IT>([])

  setItems(items: IT[]) {
    this.items.replace(items)
  }

  // headers
  get tableHead() {
    return this.cols.slice()
  }

  // rows
  get rows() {
    return getRows(this.items, this.tableHead)
  }

  update(count: number, items: IT[]) {
    this.count = count
  }

  constructor(public cols: CT) {
    mobx.makeAutoObservable(this, { cols: false })
  }
}

export const useGrid = (columns: CT) => React.useRef(new Store(columns)).current

function getRows(items: Store['items'], cols: Store['tableHead']): GR[] {
  return items.map((item, i) => ({
    key: String(i),
    cells: cols.map((col) => ({
      node: col.renderCell ? col.renderCell(item) : item[col.key],
      col,
    })),
  }))
}
