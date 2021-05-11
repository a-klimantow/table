import { FC, useState, ReactElement, MouseEvent } from 'react'
import { Collapse } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'

import { MenuItemLink } from './MenuItemLink'

interface ISubmenuProps {
  submenu: string[][]
  submenuName: string
  icon: ReactElement
  path: string
  handleMenuOpen: () => void
  openMenu: boolean
}
export const Submenu: FC<ISubmenuProps> = ({
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
