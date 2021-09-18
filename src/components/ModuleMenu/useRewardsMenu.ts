import { useMemo } from 'react'

import { MenuItemProps } from './atoms'
export function useRewardsMenu(): MenuItemProps[] {
  return useMemo(
    () => [
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
    ],
    []
  )
}
