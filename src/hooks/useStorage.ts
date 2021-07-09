import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

type Props = 'local' | 'session'

type KeyType = 'widths' | 'hidden' | 'quickFilter'

export const useStorage = (type: Props) => {
  const { pathname } = useLocation()
  const storage = type === 'local' ? localStorage : sessionStorage
  const { current } = useRef(storage)

  const store = JSON.parse(current.getItem(`${pathname}`) ?? '{}')

  const clearStorage = (name: 'all' | 'page') =>
    name === 'all' ? current.clear() : current.removeItem(pathname)

  const get = (key: KeyType) => {
    switch (key) {
      case 'quickFilter':
        return store[key] ?? ''

      case 'widths':
      case 'hidden':
        return store[key] ?? []

      default:
        return store[key] ?? null
    }
  }

  const set = (key: KeyType, data: unknown) =>
    current.setItem(pathname, JSON.stringify({ ...store, [key]: data }))

  return {
    store,
    clearStorage,
    get,
    set,
  }
}
