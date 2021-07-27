import { observer } from 'mobx-react-lite'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

import { useMenuContext } from './MenuProvider'

interface SubmenuListItemProps {
  name: string
  path: string
}

export const SubmenuListItem = observer<SubmenuListItemProps>(({ name, path }) => {
  const { pushTo } = useMenuContext()
  const { pathname } = useLocation()
  const isSelected = pathname.includes(path)
  return (
    <ListItem button onClick={() => pushTo(path)} selected={isSelected}>
      <ListItemIcon />
      <ListItemText secondary={name} />
    </ListItem>
  )
})
