import * as Mui from '@material-ui/core'
import { observer } from 'mobx-react-lite'
//
import { Icon } from 'components'
import { useItems, useMenu, useUserName } from './hooks'

export const MenuUser = observer(() => {
  const menu = useMenu()
  const name = useUserName()
  const items = useItems()
  return (
    <>
      <Mui.Button
        endIcon={<Icon type="dropdown" />}
        onClick={(e) => menu.open(e.currentTarget)}
      >
        {name}
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

const Item = observer<ItemProps>(({ item }) => (
  <Mui.MenuItem onClick={item.push}>{item.name}</Mui.MenuItem>
))
