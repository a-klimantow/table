import { List } from '@material-ui/core'
import { observer } from 'mobx-react-lite'

import { useGridStore } from '../../hooks'
import { MenuListItem } from './MenuListItem'

export const MenuList = observer(() => {
  const store = useGridStore()

  return (
    <List disablePadding>
      {store.columns.map(({ name, hidden }) => (
        <MenuListItem
          key={name}
          hidden={Boolean(hidden)}
          onChange={() => store.toggleColHidden(name)}
          name={name}
        />
      ))}
    </List>
  )
})
