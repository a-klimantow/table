import { FC } from 'react'
//
import { Context } from './context'
import { AppStore } from './store'

export const AppStoreProvider: FC = (props) => (
  <Context.Provider value={new AppStore()}>{props.children}</Context.Provider>
)
