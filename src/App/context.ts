import { createContext, useContext } from 'react'

import { AppStore } from './AppStore'

export const AppContext = createContext({} as AppStore)

export const useAppContext = () => useContext(AppContext)
