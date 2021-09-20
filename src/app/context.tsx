import { createContext, useContext, FC } from 'react'

import { UserStore } from 'stores'

const appStore = {
  user: new UserStore(),
}

// context
const Context = createContext({} as typeof appStore)

// hook
export const useAppStore = () => useContext(Context)

// provider
export const AppStoreProvider: FC = ({ children }) => (
  <Context.Provider value={appStore}>{children}</Context.Provider>
)
