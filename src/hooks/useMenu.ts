import { useLocalObservable } from 'mobx-react-lite'

type A = null | Element

export function useMenu() {
  return useLocalObservable(() => ({
    anchor: null as A,
    setAnchor(anchor: A) {
      this.anchor = anchor
    },
  }))
}
