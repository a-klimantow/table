import * as React from 'react'
import * as Mobx from 'mobx-react-lite'
import * as mobx from 'mobx'
import buildQueryes from 'odata-query'

import { ArrCol as AC, IDataItem as I, ICol as C } from '../types'
import { createFQ } from '../utils'

export const useGrid = (columns: AC, saveKey = '') => {
  const session = useStorage(saveKey, sessionStorage)
  const local = useStorage(saveKey, localStorage)

  React.useEffect(() => {
    const savedCols = local.get() as C[]
    savedCols && columns.replace(savedCols)
  }, [local, columns])

  const state = Mobx.useLocalObservable(() => ({
    columns,

    search: session.get({ search: '' }).search,
    setSearch(s: string) {
      this.search = s
    },

    page: session.get({ page: 0 }).page,
    setPage(p: number) {
      this.page = p
    },

    rows: 10,
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

    setSorted(c: C) {
      const { key, sorted } = c
      c.sorted = !sorted ? 'asc' : sorted === 'asc' ? 'desc' : undefined
      this.columns.forEach((c) => {
        if (c.key !== key) c.sorted = undefined
      })
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
    session.set({ page: state.page, search: state.search })
  })

  React.useEffect(() => {
    mobx.reaction(
      () => columns.map((c) => [c.width, c.hidden]),
      () => local.set(columns)
    )
  }, [columns, local])
  return state
}

type Storage = typeof sessionStorage | typeof localStorage

const useStorage = (key: string, storage: Storage) => {
  type D = string | number | object

  return React.useMemo(
    () => ({
      get<T extends D>(d?: T): T {
        const res = storage.getItem(key)
        return res ? JSON.parse(res) : d ?? null
      },
      set<T extends D>(d: T) {
        storage.setItem(key, JSON.stringify(d))
      },
      remove() {
        storage.removeItem(key)
      },
      clear() {
        storage.clear()
      },
    }),
    [key, storage]
  )
}
