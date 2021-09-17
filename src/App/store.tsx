import { createContext, useContext, FC } from 'react'
import { makeAutoObservable, reaction } from 'mobx'
import store from 'store'

import { IUser } from 'types'

class User {
  private user: IUser | null = store.get('user') ?? null

  setUser(user: IUser) {
    this.user = user
  }

  clearUser() {
    this.user = null
  }

  get userRoles(): IUser['roles'] {
    return this.user?.roles ?? ['Unknown']
  }

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.user,
      (user) => store.set('user', user)
    )
  }
}

// context

const Context = createContext({} as typeof appStore)

// hook

export const useAppStore = () => useContext(Context)

// provider
const appStore = {
  user: new User(),
}

export const AppStoreProvider: FC = ({ children }) => (
  <Context.Provider value={appStore}>{children}</Context.Provider>
)
