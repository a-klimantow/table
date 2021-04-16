import { FC } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Menu as MenuIcon, CloseOutlined as CloseIcon } from '@material-ui/icons'

import { IMenuItemToggle } from './types'

export const MenuItemToggle: FC<IMenuItemToggle> = ({ open, name, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemIcon>{open ? <CloseIcon /> : <MenuIcon />}</ListItemIcon>
    <ListItemText>{name}</ListItemText>
  </ListItem>
)
