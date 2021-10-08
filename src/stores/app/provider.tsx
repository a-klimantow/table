import { FC } from 'react'
//
import { Context } from './context'
import { store } from './store'
import { useRoutes } from '../routes'

export const AppStoreProvider: FC = (props) => {
  return (
    <Context.Provider
      value={{
        store,
        routes: useRoutes(),
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
