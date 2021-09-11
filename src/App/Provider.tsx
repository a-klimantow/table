import { FC } from 'react'

import { GlobalTheme } from 'theme'
import { UserStore } from 'stores'
import { AppStoreProvider } from './context'

export const Provider: FC = ({ children }) => (
  <AppStoreProvider store={{ user: new UserStore() }}>
    <GlobalTheme>{children}</GlobalTheme>
  </AppStoreProvider>
)
