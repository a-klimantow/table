import { List } from '@material-ui/core'
import { observer } from 'mobx-react-lite'

import { useGridStore } from '../../hooks'
import { MenuListItem } from './MenuListItem'

export const MenuList = observer(() => {
  const store = useGridStore()

  return (
    <List disablePadding>
      {store.filters.map((filter, i) => (
        <MenuListItem key={i} index={i} />
      ))}
    </List>
  )
})
