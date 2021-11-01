import * as mobx from 'mobx'
import buildQueries from 'odata-query'

import { ICol as C, IData as I, StorageType as ST } from '../types'

const initialState = {
  search: '',
  page: 0,
  top: 10,
}

export class TableState {
  private state: typeof initialState
  private _cols: C[]
  private data = { items: [] as I[] }
  private _count = null as null | number

  constructor(cols: C[], local: ST, session: ST) {
    this.state = session.get(initialState)
    this._cols = local.get(cols)

    mobx.makeAutoObservable(this)

    mobx.reaction(
      () => [this.search, this.top, this.page],
      ([search, top, page]) => session.set({ search, top, page })
    )

    mobx.reaction(
      () => this._cols.map((c) => ({ ...c })),
      (cols) => local.set(cols)
    )
  }

  // loader
  loader = false
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

  // columns
  get columns() {
    return this._cols
  }

  set columns(arr: C[]) {
    this._cols = arr
  }

  // itmes
  get items() {
    return this.data.items
  }

  set items(arr: I[]) {
    this.data.items = arr
  }

  // count
  get count(): number {
    return this._count ?? 0
  }

  set count(n: number) {
    this._count = n
  }

  // sorting order by
  get orderBy() {
    return this._cols.filter((c) => c.sort).map((c) => `${c.key} ${c.sort}`)
  }

  // query
  get query() {
    return buildQueries({
      top: this.top,
      skip: this.skip,
      orderBy: this.orderBy,
    }).slice(1)
  }
}
