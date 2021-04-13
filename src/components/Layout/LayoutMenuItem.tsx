import { FC } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CloseOutlined as CloseIcon } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'

import { useActiveNavLinkStyle } from '../../hooks'
import { ILayoutMenuItem } from './types'

export const LayoutMenuItem: FC<ILayoutMenuItem> = ({ name, icon, path, onClick, isOpen }) => {
  const { active } = useActiveNavLinkStyle()
  
  return path ? (
    <NavLink to={path} activeClassName={active} exact>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{name}</ListItemText>
      </ListItem>
    </NavLink>
  ) : (
    <ListItem button onClick={onClick}>
      <ListItemIcon>{isOpen ? <CloseIcon /> : icon}</ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  )
}
