import { useRef } from 'react'
import { useLocalObservable } from 'mobx-react-lite'

const links = [
  ['settings', 'Настройки'],
  ['logout', 'Выход'],
]

export const useMenuUser = () => {
  const ref = useRef<HTMLButtonElement>(null)

  const state = useLocalObservable(() => ({
    isOpen: false,
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
  }))
  return { ref, state, links }
}
