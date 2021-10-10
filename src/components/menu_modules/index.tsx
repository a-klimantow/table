import * as Mui from '@material-ui/core'
import { observer } from 'mobx-react-lite'

import { Icon } from 'components'
import { useMenu, useItems, useHistory, useModuleName } from './hooks'

export const MenuModules = observer(() => {
  const menu = useMenu()
  const items = useItems()
  const moduleName = useModuleName()
  return (
    <>
      <Mui.Button
        startIcon={<Icon type="home" />}
        onClick={(e) => menu.open(e.currentTarget)}
      >
        {moduleName}
      </Mui.Button>
      <Mui.Menu
        open={Boolean(menu.ancorEl)}
        anchorEl={menu.ancorEl}
        onClick={menu.close}
      >
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </Mui.Menu>
    </>
  )
})

interface ItemProps {
  item: ReturnType<typeof useItems>[number]
}

const Item = observer<ItemProps>(({ item }) => {
  const { location, push } = useHistory()
  return (
    <Mui.MenuItem
      onClick={() => push(item.link)}
      selected={location.pathname.startsWith(item.link)}
      disabled={item.disabled}
    >
      {item.name}
    </Mui.MenuItem>
  )
})
