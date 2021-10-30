import * as React from 'react'
import * as mobx from 'mobx'
import buildQueries from 'odata-query'

import { columns, data } from '../data'
import { ICol as C, IData as I } from '../types'

const initialState = {
  search: '',
  top: 0,
  skip: 0,
  columns,
  data,
}

export function useTable() {
  return React.useRef(
    new (class {
      private state = initialState

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
        return this.state.columns
      }

      set columns(arr: C[]) {
        this.state.columns = arr
      }

      // itmes
      get items() {
        return this.state.data
      }

      set items(arr: I[]) {
        this.state.data = arr
      }

      // sorting order by
      get orderBy() {
        return this.state.columns
          .filter((c) => c.sort)
          .map((c) => `${c.key} ${c.sort}`)
      }

      // query
      get query() {
        return buildQueries({
          top: this.top,
          skip: this.skip,
          orderBy: this.orderBy,
        }).slice(1)
      }

      constructor() {
        mobx.makeAutoObservable(this)
      }
    })()
  ).current
}
