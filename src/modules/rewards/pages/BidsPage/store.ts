import { makeAutoObservable } from 'mobx'

import { ICol } from 'components'
import { IBidItem, IResponse } from 'modules/rewards/types'
import { PaginationStore } from 'components/Pagination/Pagination'

type Data = IResponse<IBidItem>
type Columns<T> = (ICol & { key: keyof T })[]
type QuickFilterArr<T> = (keyof T)[]

export class BidsStore {
  quickFilter = ''
  pagination = new PaginationStore()

  loading = true
  private data: null | Data = null

  private quickFilterArr: QuickFilterArr<IBidItem>
  private columns: Columns<IBidItem>

  constructor(
    columns: Columns<IBidItem>,
    quickFilterArr: QuickFilterArr<IBidItem>
  ) {
    makeAutoObservable(this)
    this.columns = columns
    this.quickFilterArr = quickFilterArr

    this.columns.forEach(
      (c) => (c.quickFilter = this.quickFilterArr.includes(c.key))
    )
  }

  changeQuickFilter(s: string) {
    this.quickFilter = s
  }

  get showCancelQF() {
    return Boolean(this.quickFilter.trim())
  }

  changePerPage(n: number) {
    this.pagination.perPage = n
    if (this.pagination.count < n) {
      this.pagination.page = 0
    }
  }

  changePage(n: number) {
    this.pagination.page = n
  }

  fetchStart() {
    this.loading = true
  }

  getSuccess(data: Data) {
    this.loading = false
    this.data = data
    // this.pagination.count = data.metadata.pagination.total_count
    this.pagination.setCount(data.metadata.pagination.total_count)
  }

  fail() {
    this.loading = false
  }

  get colMenu() {
    return this.columns
  }

  get currentColumns() {
    return this.columns.filter((c) => !c.hidden)
  }

  get rows() {
    if (!this.data) return []
    return this.data.items.map((i) =>
      this.currentColumns.map((c) =>
        c.renderCell ? c.renderCell(i) : i[c.key]
      )
    )
  }
}
