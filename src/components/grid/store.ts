import * as Mui from '@material-ui/core'
import {
  makeAutoObservable,
  action,
  observable,
  ObservableMap,
  reaction,
  values,
} from 'mobx'
import React from 'react'
import storage from 'store'

export interface IGridCol {
  name: string
  type?: string | number | Date
  hidden?: boolean
  renderCell?(item: unknown): React.ReactNode
  quickFilter?: boolean
}

export class Store {
  count = 0
  rowsPerPage = 10
  page = 0
  search: string
  columns: ObservableMap<string, IGridCol>

  setSearch(value: string) {
    this.search = value
  }

  get pagination(): Mui.TablePaginationProps {
    return {
      count: this.count,
      page: this.page,
      rowsPerPage: this.rowsPerPage,
      onPageChange: action((_, page) => (this.page = page)),
      onRowsPerPageChange: action((e) => {
        this.page = 0
        this.rowsPerPage = +e.target.value
      }),
      rowsPerPageOptions: [10, 20, 30],
    }
  }

  get top() {
    return this.rowsPerPage
  }

  get skip() {
    return this.page * this.rowsPerPage
  }

  constructor(key: string, cols: Map<string, IGridCol>) {
    this.search = storage.get(key + '_s', '')
    this.columns = observable.map(storage.get(key + '_c', cols))

    makeAutoObservable(this)

    reaction(
      () => values(this.columns).map((c) => c.hidden),
      () => storage.set(key + '_c', this.columns)
    )

    reaction(
      () => this.search,
      (search) => storage.set(key + '_s', search)
    )
  }
}
