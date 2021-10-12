import * as React from 'react'

import { AppStore } from './AppStore'

const AppContext = React.createContext({} as AppStore)

export const AppContextProvider = AppContext.Provider

export const useAppContext = () => React.useContext(AppContext)
