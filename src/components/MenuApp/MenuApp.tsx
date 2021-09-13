import { observer } from 'mobx-react-lite'
import { Menu, Button } from '@material-ui/core'

import { Provider, Item } from './atoms'
import { useMenu } from './useMenu'

export interface MenuAppProps {
  type?: 'home' | 'user'
}

export const MenuApp = observer<MenuAppProps>(({ type = 'home' }) => {
  const { button, menu, items } = useMenu({ type })

  return (
    <Provider type={type}>
      <Button {...button} />
      <Menu {...menu}>
        {items.map((item) => (
          <Item key={item.key} item={item} />
        ))}
      </Menu>
    </Provider>
  )
})
