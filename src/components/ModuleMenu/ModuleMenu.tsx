import { observer } from 'mobx-react-lite'
import { SvgIcon } from '@material-ui/core'

import { MenuProvider, MenuWrap, MenuItemToggle, MenuList } from './components'

type IconType = typeof SvgIcon

export type MenuItemType = {
  name: string
  icon: IconType
  path?: string
  submenu?: Omit<MenuItemType, 'icon' | 'submenu'>[]
}

export interface ModuleMenuProps {
  menuName: string
  items: MenuItemType[]
}

export const ModuleMenu = observer<ModuleMenuProps>((props) => {
  return (
    <MenuProvider {...props}>
      <MenuWrap>
        <MenuItemToggle />
        <MenuList />
      </MenuWrap>
    </MenuProvider>
  )
})
