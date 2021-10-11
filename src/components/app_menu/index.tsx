import { rewards } from './menus'
import { Provider, Menu, MenuItem } from './atoms'
import { useHiddenMenu } from './hooks'

export const AppMenu = () =>
  useHiddenMenu() ? null : (
    <Provider>
      <Menu>
        {rewards.map((item) => (
          <MenuItem key={item.type + item.name} item={item} />
        ))}
      </Menu>
    </Provider>
  )
