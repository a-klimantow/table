import { useState, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ListItemText, ListItemIcon } from '@material-ui/core'

import { ModuleMenuWrap, ModuleMenuBase, MenuList, MenuListItem } from './styles'
import { MenuItemToggle } from './MenuItemToggle'
import { IModuleMenu } from './types'

export const ModuleMenu: FC<IModuleMenu> = ({ name, data }) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen((o) => !o)
  const handleClose = () => setOpen(false)

  return (
    <ModuleMenuWrap>
      <ModuleMenuBase open={open} onClick={handleClose} />
      <MenuList open={open} component="div">
        <MenuItemToggle open={open} name={name} onClick={handleToggle} />
        {data.map(({ name, icon: Icon, ...props }) => (
          <MenuListItem button key={name}>
            <NavLink {...props}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
            </NavLink>
          </MenuListItem>
        ))}
      </MenuList>
    </ModuleMenuWrap>
  )
}
