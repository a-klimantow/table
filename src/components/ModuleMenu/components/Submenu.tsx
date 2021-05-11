import { useState, useEffect, FC, ReactElement, MouseEvent } from 'react'
import { Collapse } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'

import { MenuItemLink } from './MenuItemLink'
import { ArrowIcon } from './ArrowIcon'

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
  const [openCollapse, setOpenCollapse] = useState(false)
  const pathes = submenu.map(([, path]) => path)
  const isActive = Boolean(useRouteMatch(pathes))

  useEffect(() => {
    !openMenu && setOpenCollapse(false)
  }, [openMenu])

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    !openMenu && handleMenuOpen()
    setOpenCollapse((o) => !o)
  }

  return (
    <>
      <MenuItemLink
        to={path}
        primary={submenuName}
        icon={icon}
        isActive={() => isActive}
        onClick={handleClick}
        arrowIcon={<ArrowIcon openMenu={openMenu} openCollapse={openCollapse} />}
      />
      <Collapse in={openCollapse}>
        <ul>
          {submenu.map(([subName, subPath]) => (
            <MenuItemLink key={subName} secondary={subName} to={subPath} submenuItem />
          ))}
        </ul>
      </Collapse>
    </>
  )
}
