import * as React from 'react'
import { store } from './store'
import { RoutesType } from '../routes'

interface IStore {
  store: typeof store
  routes: RoutesType
}

export const Context = React.createContext({} as IStore)

export const useAppStore = () => React.useContext(Context).store
