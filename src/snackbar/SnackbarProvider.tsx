import { FC } from 'react'
import { SnackbarProvider as Provider } from 'notistack'

import { icons } from './atoms'

export const SnackbarProvider: FC = ({ children }) => (
  <Provider
    maxSnack={2}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    iconVariant={icons}
  >
    {children}
  </Provider>
)
