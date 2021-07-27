import { observer } from 'mobx-react-lite'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Menu as OpenIcon, Close as CloseIcon } from '@material-ui/icons'

import { useMenuContext } from './MenuProvider'

export const MenuItemToggle = observer(() => {
  const { isOpen, toggleMenuOpen, menuName } = useMenuContext()
  return (
    <ListItem button onClick={toggleMenuOpen}>
      <ListItemIcon>{isOpen ? <CloseIcon /> : <OpenIcon />}</ListItemIcon>
      <ListItemText primary={menuName} />
    </ListItem>
  )
})
