import { useState, FC, ReactElement, MouseEvent } from 'react'
import { Collapse } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'

import { IModuleMenu } from './types'

import { Menu } from './components/Menu'
import { MenuItemLink } from './components/MenuItemLink'

const isIncludes = (idx: number, arr: number[]) => arr.includes(idx)

interface ISubmenuProps {
  submenu: string[][]
  submenuName: string
  icon: ReactElement
  path: string
  handleMenuOpen: () => void
  openMenu: boolean
}
const Submenu: FC<ISubmenuProps> = ({
  submenu,
  submenuName,
  icon,
  path,
  openMenu,
  handleMenuOpen,
}) => {
  const [openSubmenu, setOpenSubmenu] = useState(false)
  const pathes = submenu.map(([, path]) => path)
  const isActive = Boolean(useRouteMatch(pathes))

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    isActive && e.preventDefault()
    !openMenu && handleMenuOpen()
    setOpenSubmenu(openMenu)
  }

  return (
    <>
      <MenuItemLink
        to={path}
        primary={submenuName}
        icon={icon}
        isActive={() => isActive}
        onClick={handleClick}
      />
      <Collapse in={openSubmenu}>
        <ul>
          {submenu.map(([subName, subPath]) => (
            <MenuItemLink key={subName} secondary={subName} to={subPath} submenuItem />
          ))}
        </ul>
      </Collapse>
    </>
  )
}

export const ModuleMenu: FC<IModuleMenu> = ({ name, menu }) => {
  const [collapseIdxs, setCollapseIdxs] = useState<number[]>([])
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuClose = () => setOpenMenu(false)
  const handleMenuOpen = () => setOpenMenu(true)

  const handleMenuToggle = () => {
    setOpenMenu((o) => !o)
    openMenu && setCollapseIdxs([])
  }
  const handleCollapseToggle = (idx: number) => () => {
    !openMenu && setOpenMenu(true)
    if (isIncludes(idx, collapseIdxs)) {
      setCollapseIdxs((_) => _.filter((i) => i !== idx))
    } else {
      setCollapseIdxs((_) => [..._, idx])
    }
  }

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
