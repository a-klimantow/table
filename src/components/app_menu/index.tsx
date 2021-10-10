import * as Mui from '@material-ui/core'

import { useTheme } from './hooks'
import { MenuContextProvider } from './context'
import { Menu } from './atoms'
import { MenuList } from './menu_list'

export const AppMenu = () => (
  <Mui.ThemeProvider theme={useTheme()}>
    <MenuContextProvider>
      <Menu>
        <MenuList />
      </Menu>
    </MenuContextProvider>
  </Mui.ThemeProvider>
)
