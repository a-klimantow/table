import { observer } from 'mobx-react-lite'
import { ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

import { MenuItemType } from '../ModuleMenu'
import { useMenuContext } from './MenuProvider'
import { ArrowIcon } from './ArrowIcon'
import { SubmenuListItem } from './SubmenuListItem'

type SubmenuListProps = MenuItemType & { index: number }

export const SubmenuList = observer<SubmenuListProps>(
  ({ submenu: items = [], icon: Icon, name, index }) => {
    const { isOpen, submenu, changeSubmenu } = useMenuContext()
    const { pathname } = useLocation()
    const isSubmenuOpen = submenu.includes(index)
    const isSelected = items.some((i) => pathname.includes(i.path as string)) && !isSubmenuOpen

    return (
      <>
        <ListItem
          button
          onClick={() => changeSubmenu(index)}
          selected={isSelected}
          sx={{ color: isSelected ? 'primary.main' : '' }}
        >
          <ListItemIcon>
          <Icon color={isSelected ? 'primary' : undefined} />
          </ListItemIcon>
          <ListItemText primary={name} />
          <ArrowIcon isMenuOpen={isOpen} isSubmenuOpen={isSubmenuOpen} />
        </ListItem>
        <Collapse in={isSubmenuOpen}>
          {items.map((i) => (
            <SubmenuListItem key={i.name} name={i.name} path={i.path as string} />
          ))}
        </Collapse>
      </>
    )
  }
)
