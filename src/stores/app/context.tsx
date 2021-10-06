import * as React from 'react'
import { store } from './store'

const Context = React.createContext({} as typeof store)

export const useAppStore = () => React.useContext(Context)

export const AppStoreProvider: React.FC = (props) => (
  <Context.Provider value={store}>{props.children}</Context.Provider>
)
