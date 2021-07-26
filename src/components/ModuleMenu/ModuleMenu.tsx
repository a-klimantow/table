
import { observer, useLocalObservable } from 'mobx-react-lite'
import { Collapse } from '@material-ui/core'

import { ModuleMenuWrap } from './ModuleMenuWrap'
import { ModuleMenuToggle } from './ModuleMenuToggle'
import { ModuleMenuItem } from './ModuleMenuItem'

import { ModuleMenuProps } from './types'

const MenuState = {
  isOpen: false,
  openSubmenu: [] as number[],
  toggleMenuOpen() {
    this.isOpen = !this.isOpen
  },

  closeMenu() {
    this.isOpen = false
    openSubmenu: []
  },

  toggleSubmenuOpen(idx: number) {
    if (this.openSubmenu.includes(idx)) {
      this.openSubmenu = this.openSubmenu.filter((i) => i !== idx)
    } else {
      this.openSubmenu.push(idx)
      this.isOpen = true
    }
  },
}

class MenuStore {
  menuOpen = false
  submOpen: number[] = []

  constructor(){

  }
}

export const ModuleMenu = observer<ModuleMenuProps>(({ menuName, items }) => {
  const menu = useLocalObservable(() => MenuState)
  return (
    <ModuleMenuWrap isOpen={menu.isOpen} onClose={menu.toggleMenuOpen}>
      <ModuleMenuToggle isOpen={menu.isOpen} onClick={menu.toggleMenuOpen}>
        {menuName}
      </ModuleMenuToggle>
      {items.map((item, idx) =>
        item.submenu ? (
          <>
            <ModuleMenuItem
              key={item.name}
              name={item.name}
              icon={item.icon}
              onClick={() => menu.toggleSubmenuOpen(idx)}
            />
            <Collapse in={menu.openSubmenu.includes(idx)}>
              {item.submenu.map((s) => (
                <ModuleMenuItem key={s.name} name={s.name} />
              ))}
            </Collapse>
          </>
        ) : (
          <ModuleMenuItem key={item.name} icon={item.icon} name={item.name} />
        )
      )}
    </ModuleMenuWrap>
  )
})
