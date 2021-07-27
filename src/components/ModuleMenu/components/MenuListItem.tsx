import { observer } from 'mobx-react-lite'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

import { MenuItemType } from '../ModuleMenu'
import { useMenuContext } from './MenuProvider'

type MenuListItemProps = Omit<MenuItemType, 'submenu'>

export const MenuListItem = observer<MenuListItemProps>(({ name, icon: Icon, path = '' }) => {
  const { pushTo } = useMenuContext()
  const { pathname } = useLocation()
  const isSelected = pathname.includes(path)
  return (
    <ListItem button onClick={() => pushTo(path)} selected={isSelected}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )
})
