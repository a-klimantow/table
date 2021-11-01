import * as mobx from 'mobx'
import buildQueries from 'odata-query'

import { ICol as C, IData as I, StorageType as ST } from '../types'
import { data } from '../data'

const initialState = {
  search: '',
  top: 0,
  skip: 0,
}

export class TableState {
  private state: typeof initialState
  private _cols: C[]
  private data = { items: data }

  constructor(cols: C[], local: ST, session: ST) {
    this.state = session.get(initialState)
    this._cols = local.get(cols)

    mobx.makeAutoObservable(this)

    mobx.reaction(
      () => [this.search, this.top, this.skip],
      ([search, top, skip]) => session.set({ search, top, skip })
    )

    mobx.reaction(
      () => this._cols.map((c) => ({ ...c })),
      (cols) => local.set(cols)
    )
  }

  // search
  get search() {
    return this.state.search
  }

  set search(s: string) {
    this.state.search = s
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
    return this.state.skip
  }

  set skip(n: number) {
    this.state.skip = n
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
