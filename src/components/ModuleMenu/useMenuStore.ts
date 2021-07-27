import { useLocalObservable } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'

export const useMenuStore = () => {
  const { push } = useHistory()
  return useLocalObservable(() => ({
    isOpen: false,
    submenu: [] as number[],

    closeMenu() {
      this.isOpen = false
      this.submenu = []
    },

    toggleMenuOpen() {
      this.isOpen = !this.isOpen
      if (!this.isOpen && this.submenu.length) {
        this.submenu = []
      }
    },

    changeSubmenu(idx: number) {
      if (this.submenu.includes(idx)) {
        this.submenu = this.submenu.filter((i) => i !== idx)
      } else {
        this.submenu.push(idx)
        this.isOpen = true
      }
    },

    pushTo(path: string) {
      this.isOpen = false
      this.submenu = []
      push(path)
    },
  }))
}

export type MenuStoreType = ReturnType<typeof useMenuStore>
