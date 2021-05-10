import { FC } from 'react'
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from '@material-ui/core'
import { ExpandMore as ArrowIcon } from '@material-ui/icons'
import { useLocation, NavLink } from 'react-router-dom'

import { IModuleMenuItem } from '../types'

export const Submenu: FC<IModuleMenuItem & { isOpen: boolean; arrowIcon: SvgIconProps }> = ({
  children,
  isOpen,
  Icon,
  path,
  name,
  className,
  onClick,
  arrowIcon,
}) => {
  const { pathname } = useLocation()
  const isActive = () =>
    (children as { props: { path: string } }[])
      .map(({ props }) => props.path)
      .some((p) => p === pathname)

  return (
    <>
      <ListItem button onClick={onClick} className={className}>
        <NavLink to={path} isActive={isActive} onClick={(e) => isActive() && e.preventDefault()}>
          <ListItemIcon>{Icon ? <Icon /> : null}</ListItemIcon>
          <ListItemText primary={name} />
          {arrowIcon}
        </NavLink>
      </ListItem>
      <Collapse in={isOpen}>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  )
}
