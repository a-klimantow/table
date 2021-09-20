import { createContext, useContext, FC } from 'react'

import { UserStore, RouterStore } from 'stores'

const appStore = {
  user: new UserStore(),
  router: new RouterStore(),
}

console.log(JSON.stringify(appStore.router, null, 2))

// context
const Context = createContext({} as typeof appStore)

// hook
export const useAppStore = () => useContext(Context)

// provider
export const AppStoreProvider: FC = ({ children }) => (
  <Context.Provider value={appStore}>{children}</Context.Provider>
)
