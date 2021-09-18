import { Route } from 'react-router-dom'

import { MenuItem, MenuItemProps, Provider } from './atoms'

const rewards: MenuItemProps[] = [
  {
    type: 'menu_btn',
    name: 'Вознаграждения',
  },
  {
    type: 'submenu_btn',
    name: 'Выплаты',
    icon: 'minus',
    items: [
      { type: 'submenu_item', name: 'Заявки', link: 'requests' },
      { type: 'submenu_item', name: 'Отчеты', link: 'reports' },
    ],
  },
  {
    type: 'menu_item',
    name: 'Начисления',
    icon: 'plus',
    link: 'accrual',
  },
]

export const ModuleMenu = () => {
  return (
    <Provider>
      <Route path="/rewards/">
        {rewards.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Route>
    </Provider>
  )
}
