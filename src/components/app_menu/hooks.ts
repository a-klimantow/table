import { useLocalObservable } from 'mobx-react-lite'
import { useHistory, useRouteMatch } from 'react-router-dom'

import { ModuleType as M } from 'types'

export const useHiddenMenu = () => Boolean(useRouteMatch('/login/'))

export const useMenu = () => {
  const m = useRouteMatch<{ m: M }>('/:m')?.params.m
  const { push } = useHistory()
  return useLocalObservable(() => ({
    isOpen: false,

    toggleMenu() {
      this.isOpen = !this.isOpen
      !this.isOpen && this.submenu.clear()
    },

    closeMemu(link: string) {
      this.isOpen = false
      this.submenu.clear()
      push(`/${m}/${link}/`)
    },

    submenu: new Set([] as string[]),

    toggleSubmenu(name: string) {
      if (this.submenu.has(name)) {
        this.submenu.delete(name)
        this.isOpen = false
      } else {
        this.submenu.add(name)
        this.isOpen = true
      }
    },
  }))
}
