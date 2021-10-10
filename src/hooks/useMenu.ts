import { useLocalObservable } from 'mobx-react-lite'

const initialState = {
  ancorEl: null as null | Element,

  open(el: Element) {
    this.ancorEl = el
  },

  close() {
    this.ancorEl = null
  },
}

export const useMenu = () => useLocalObservable(() => initialState)
