import { useState, FC } from 'react'

import { IModuleMenu } from './types'

import { Menu } from './components/Menu'
import { Submenu } from './components/Submenu'
import { MenuItemLink } from './components/MenuItemLink'

export const ModuleMenu: FC<IModuleMenu> = ({ name, menu }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuClose = () => setOpenMenu(false)
  const handleMenuOpen = () => setOpenMenu(true)

  return (
    <Menu openMenu={openMenu} menuName={name} onClick={openMenu ? handleMenuClose : handleMenuOpen}>
      {menu.map(({ submenu, name, Icon, path }) =>
        submenu ? (
          <Submenu
            key={name}
            submenu={submenu}
            icon={<Icon />}
            submenuName={name}
            path={path}
            openMenu={openMenu}
            handleMenuOpen={handleMenuOpen}
          />
        ) : (
          <MenuItemLink key={name} primary={name} icon={<Icon />} to={path} />
        )
      )}
    </Menu>
  )
}
