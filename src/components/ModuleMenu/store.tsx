import { FC, createContext, useContext } from 'react'
import { makeAutoObservable } from 'mobx'

class Store {
  open = false
  activeSubmenu = ''

  close() {
    this.open = false
    this.activeSubmenu = ''
  }

  toggle() {
    this.open = !this.open
    this.activeSubmenu = ''
  }

  toggleSubmenu(name: string) {
    if (this.activeSubmenu === name) {
      this.activeSubmenu = ''
      this.open = false
    } else {
      this.activeSubmenu = name
      this.open = true
    }
  }

  constructor() {
    makeAutoObservable(this)
  }
}

const Context = createContext({} as Store)

export const useMenu = () => useContext(Context)

export const MenuContextProvider: FC = ({ children }) => (
  <Context.Provider value={new Store()}>{children}</Context.Provider>
)
