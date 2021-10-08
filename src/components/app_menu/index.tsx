import * as Mui from '@material-ui/core'
import { Route } from 'react-router-dom'

import { useTheme } from './hooks'
import { MenuContextProvider } from './context'
import { Menu } from './atoms'
import { MenuList } from './menu_list'
import { MenuRewards } from './menu_rewards'

export const AppMenu = () => (
  <Mui.ThemeProvider theme={useTheme()}>
    <MenuContextProvider>
      <Menu>
        <MenuList />
      </Menu>
    </MenuContextProvider>
  </Mui.ThemeProvider>
)
