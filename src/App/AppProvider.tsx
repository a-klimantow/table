import { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { AppContext } from './context'
import { AppStore } from './AppStore'

export const AppProvider: FC = ({ children }) => {
  const appStore = new AppStore({ history: useHistory() })

  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>
}
