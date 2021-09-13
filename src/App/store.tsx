import { createContext, useContext, FC } from 'react'
import { makeAutoObservable } from 'mobx'

const roles = [
  'Accruals Manager',
  'Administrator',
  'Panelist Management',
  'Payments Manager',
  'Project Management',
  'Template Management',
  'Website Management',
  'Unknown',
] as const

type RoleType = typeof roles[number]

const defaultUser = {
  id: 0,
  name: '',
  email: '',
  roles: ['Unknown'] as RoleType[],
  token: '',
  refresh_token: '',
}

type UserType = typeof defaultUser

class AppStore {
  private user = defaultUser

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: UserType) {
    this.user = user
  }

  clearUser() {
    this.user = defaultUser
  }

  get userRoles() {
    return this.user.roles
  }
}

// context

const Context = createContext({} as AppStore)

// hook

export const useAppStore = () => useContext(Context)

// provider

export const AppStoreProvider: FC = ({ children }) => (
  <Context.Provider value={new AppStore()}>{children}</Context.Provider>
)
