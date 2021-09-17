import { createContext, useContext, FC } from 'react'

import { User } from './stores'

const appStore = {
  user: new User(),
}

// context
const Context = createContext({} as typeof appStore)

// hook
export const useAppStore = () => useContext(Context)

// provider
export const AppStoreProvider: FC = ({ children }) => (
  <Context.Provider value={appStore}>{children}</Context.Provider>
)
