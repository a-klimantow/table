import { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { GlobalTheme } from 'theme'
import { AppStore } from 'stores'
import { AppStoreProvider } from './context'

export const Provider: FC = ({ children }) => {
  return (
    <AppStoreProvider store={new AppStore(useHistory())}>
      <GlobalTheme>{children}</GlobalTheme>
    </AppStoreProvider>
  )
}
