import { createContext, useContext, FC } from 'react'

import { AppStore } from 'stores'

const Context = createContext({} as AppStore)

export const useAppStore = () => useContext(Context)

export const AppStoreProvider: FC<{ store: AppStore }> = ({
  children,
  store,
}) => <Context.Provider value={store}>{children}</Context.Provider>
