import * as React from 'react'
import * as Mobx from 'mobx-react-lite'
import * as mobx from 'mobx'
import buildQueryes from 'odata-query'

import { IDataItem as I, ICol as C } from '../types'
import { createFQ } from '../utils'
import { useStorage } from './useStorage'

export const useGrid = (cols: C[], saveKey = '') => {
  const session = useStorage(saveKey, sessionStorage)
  const local = useStorage(saveKey, localStorage)

  const state = Mobx.useLocalObservable(() => ({
    columns: mobx.observable.array(local.get(cols)),

    search: session.get({ search: '' }).search,
    setSearch(s: string) {
      this.search = s
    },

    page: session.get({ page: 0 }).page,
    setPage(p: number) {
      this.page = p
    },

    rows: session.get({ rows: 10 }).rows,
    setRows(r: number) {
      this.rows = r
    },

    count: 0,
    setCount(c: number) {
      this.count = c
      if (this.page * this.rows > c) this.setPage(0)
    },

    loading: false,
    setLoaging(l: boolean) {
      this.loading = l
    },

    items: [] as I[],
    setItems(data: I[]) {
      this.items = data
    },

    selectedItem: null as null | I,
    setSelectedItem(item: null | I) {
      this.selectedItem = item
    },

    get orderBy() {
      return this.columns
        .filter((c) => c.sorted)
        .map((c) => `${c.key} ${c.sorted}`)
    },

    get filterQuick() {
      return createFQ(this.search, this.columns)
    },

    get query() {
      return buildQueryes({
        top: this.rows,
        skip: this.page * this.rows,
        orderBy: this.orderBy,
        filter: this.filterQuick,
      }).slice(1)
    },
  }))

  React.useEffect(() => {
    session.set({
      page: state.page,
      search: state.search,
      rows: state.rows,
    })
  })

  React.useEffect(() => {
    mobx.reaction(
      () => state.columns.map((c) => ({ ...c })),
      () => local.set(state.columns)
    )
  }, [local, state.columns])
  return state
}
