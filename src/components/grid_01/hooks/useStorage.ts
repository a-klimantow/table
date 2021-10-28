import * as React from 'react'

type Storage = typeof sessionStorage | typeof localStorage

export const useStorage = (key: string, storage: Storage) => {
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
