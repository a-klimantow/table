import { observer } from 'mobx-react-lite'
import { Box } from '@material-ui/core'

import { Header } from './atoms'
import { MenuApp, MenuUser } from 'components'

export const ModuleHeader = observer(({ children }) => (
  <Header>
    <MenuApp />
    {children}
    <MenuUser />
  </Header>
))
