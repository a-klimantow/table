import { createContext, useContext, FC } from 'react'

import { UserStore } from 'stores'

type Store = { user: UserStore }

const Context = createContext({} as Store)

export const useAppStore = () => useContext(Context)

export const AppStoreProvider: FC<{ store: Store }> = ({ children, store }) => (
  <Context.Provider value={store}>{children}</Context.Provider>
)
