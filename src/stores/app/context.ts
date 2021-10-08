import * as React from 'react'
import { AppStore } from './store'

export const Context = React.createContext({} as AppStore)

export const useAppStore = () => React.useContext(Context)
