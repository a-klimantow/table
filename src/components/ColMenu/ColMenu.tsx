import { observer } from 'mobx-react-lite'

import { ColMenuContext } from './context'
import { MenuButton, MenuPopover, MenuList, Buttons } from './atoms'
import { ColMenuStore } from './store'

export const ColMenu = observer<{ colMenu: ColMenuStore }>(({ colMenu }) => (
  <ColMenuContext.Provider value={colMenu}>
    <MenuButton />
    <MenuPopover>
      <MenuList />
      <Buttons />
    </MenuPopover>
  </ColMenuContext.Provider>
))
