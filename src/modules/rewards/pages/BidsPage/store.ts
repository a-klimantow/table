import { makeAutoObservable } from 'mobx'
import buildQuery from 'odata-query'
import f from 'odata-filter-builder'

import { IResponse } from '../../types'
import { ICol } from 'components'

class QuickFilter {
  value = ''

  constructor() {
    makeAutoObservable(this)
  }
  changeValue(value: string) {
    this.value = value
  }
}

type Columns<T> = (ICol & { key: keyof T })[]

export class Store<Item> {
  data: IResponse<Item> | null = null
  loading = true
  quickFilter = new QuickFilter()
  private columns
  private defaultQuickColumns: (keyof Item)[]

  constructor(columns: Columns<Item>, defaultQuickColumns: (keyof Item)[]) {
    this.columns = columns
    this.defaultQuickColumns = defaultQuickColumns
    makeAutoObservable(this)
  }

  successGet(data: IResponse<Item>) {
    this.data = data
  }

  final() {
    this.loading = false
  }

  get filter() {
    const filter = f('or')
    this.defaultQuickColumns.forEach((c) =>
      filter.contains((x) => x.toLower(c as string), this.quickFilter.value.toLowerCase())
    )
    return filter.toString()
  }

  get query() {
    return buildQuery({
      filter: this.filter,
    })
  }

  get colMenu() {
    return this.columns
  }

  get cols() {
    return this.columns.filter((c) => !c.hidden)
  }

  get rows() {
    if (!this.data) return []

    const { items } = this.data

    return items.map((item) =>
      this.cols.map((col) => (col.renderCell ? col.renderCell(item) : item[col.key]))
    )
  }
}
