import * as React from 'react'

import { TableState } from './state'
import { columns } from '../data'
type S = 'local' | 'session'
type D = string | number | object

export const useStorage = (key: string, st: S) => {
  const storage = st === 'local' ? localStorage : sessionStorage

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

export function useTable() {
  return React.useRef(
    new TableState(
      columns,
      useStorage('key', 'local'),
      useStorage('key', 'session')
    )
  ).current
}
