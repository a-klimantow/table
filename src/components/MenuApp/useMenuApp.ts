import { useRef, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useLocalObservable } from 'mobx-react-lite'

const modules = [
  ['projects', 'Проекты'],
  ['panels', 'Панели'],
  ['rewards', 'Вознаграждения'],
  ['admin', 'Администрирование'],
]

const useCurrentName = () => {
  const { pathname } = useLocation()
  return useMemo(
    () => (modules.find(([path]) => pathname.includes(path)) ?? [])[1] ?? 'Меню',
    [pathname]
  )
}

export const useMenuApp = () => {
  const ref = useRef<HTMLButtonElement>(null)
  const currentName = useCurrentName()
  const state = useLocalObservable(() => ({
    isOpen: false,
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
  }))
  return { ref, currentName, state, modules }
}
