import { createContext, FC, useContext } from 'react'
import { autorun } from 'mobx'

import { User } from '../user'
import { Routes } from '../routes'

class AppStore {
  constructor(public user = new User(), public routes = new Routes()) {
    autorun(() => routes.update(user.roles))
  }
}

const AppContext = createContext({} as AppStore)

export const useAppStore = () => useContext(AppContext)

export const AppContextProvider: FC = ({ children }) => (
  <AppContext.Provider value={new AppStore()}>{children}</AppContext.Provider>
)
