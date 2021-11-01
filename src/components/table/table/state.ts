import * as mobx from 'mobx'
import buildQueries from 'odata-query'

import { ICol as C, IData as I, StorageType as ST } from '../types'
import { getQuickFilter } from './utils'

const initialState = {
  search: '',
  page: 0,
  top: 15,
}

export class TableState {
  private state: typeof initialState
  private data = { items: [] as I[] }

  public count = 0
  public columns: C[]

  constructor(cols: C[], local: ST, session: ST) {
    this.state = session.get(initialState)
    this.columns = local.get(cols)

    mobx.makeAutoObservable(this)

    mobx.reaction(
      () => [this.search, this.top, this.page],
      ([search, top, page]) => session.set({ search, top, page })
    )

    mobx.reaction(
      () => this.columns.map((c) => ({ ...c })),
      (cols) => local.set(cols)
    )
  }

  // loader
  loader = true
  setLoader(l: boolean) {
    this.loader = l
  }

  // search
  get search() {
    return this.state.search
  }

  set search(s: string) {
    this.state.search = s
  }

  // page
  get page() {
    return this.state.page
  }

  set page(n: number) {
    this.state.page = n
  }

  // top
  get top() {
    return this.state.top
  }

  set top(n: number) {
    this.state.top = n
  }

  // skip
  get skip() {
    return this.page * this.top
  }

  set skip(n: number) {
    this.state.page = n
  }

  // itmes
  get items() {
    return this.data.items
  }

  set items(arr: I[]) {
    this.data.items = arr
  }

  update(items: I[], count: number) {
    this.items = items
    this.count = count
    if (count < this.top) this.page = 0
    this.loader = false
  }

  // sorting order by
  get orderBy() {
    return this.columns.filter((c) => c.sort).map((c) => `${c.key} ${c.sort}`)
  }

  get quickFilterCols() {
    return this.columns.filter((c) => c.quickFilter && !c.hidden)
  }

  // quickFilter
  get quickFilter() {
    if (!this.search) return ''
    if (!this.quickFilterCols.length) return ''
    return getQuickFilter(this.search, this.quickFilterCols)
  }

  // query
  get query() {
    return buildQueries({
      top: this.top,
      skip: this.skip,
      orderBy: this.orderBy,
      filter: this.quickFilter,
    }).slice(1)
  }
}
