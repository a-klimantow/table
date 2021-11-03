import * as React from 'react'

import { ICol as C } from '../types'
import { TableState } from './state'

type S = 'local' | 'session'
type D = string | number | object

export const useStorage = (st: S, key?: string) => {
  const storage = st === 'local' ? localStorage : sessionStorage

  return React.useMemo(
    () => ({
      get<T extends D>(d: T): T {
        if (typeof key === 'undefined') return d

        const res = storage.getItem(key)
        return res ? JSON.parse(res) : d
      },
      set<T extends D>(d: T) {
        if (typeof key === 'undefined') return
        storage.setItem(key, JSON.stringify(d))
      },
      remove() {
        if (typeof key === 'undefined') return
        storage.removeItem(key)
      },
      clear() {
        if (typeof key === 'undefined') return
        storage.clear()
      },
    }),
    [key, storage]
  )
}

export function useTable(columns: C[], key?: string) {
  return React.useRef(
    new TableState(
      columns,
      useStorage('local', key),
      useStorage('session', key)
    )
  ).current
}
