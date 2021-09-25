import { useRef } from 'react'
import { useLocalObservable } from 'mobx-react-lite'

const initialState = {
  open: false,
  toggle(type: 'open' | 'close') {
    this.open = type === 'open'
  },
}

export function useMenu() {
  const menu = useLocalObservable(() => initialState)
  const ref = useRef(null)
  return { menu, ref }
}
