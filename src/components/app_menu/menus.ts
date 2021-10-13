import { PageType as P, IconType as I } from 'types'
import { moduleNames, pageNames, submenuNames } from 'assets'

type SubItemType = { type: 'sub_item'; name?: string; link: P }

export type MenuItemType =
  | { type: 'toggle'; name?: string }
  | {
      type: 'submenu'
      name?: string
      icon: I
      items: SubItemType[]
    }
  | { type: 'item'; name?: string; icon: I; link: P }
  | SubItemType

//   -------------------------- меню вознаграждений

export const rewards: MenuItemType[] = [
  { type: 'toggle', name: moduleNames.get('rewards') },
  {
    type: 'submenu',
    name: submenuNames.get('rewards'),
    icon: 'minus',
    items: [
      { name: pageNames.get('requests'), link: 'requests', type: 'sub_item' },
      { name: pageNames.get('reports'), link: 'reports', type: 'sub_item' },
    ],
  },
  {
    type: 'item',
    name: pageNames.get('accruals'),
    link: 'accruals',
    icon: 'plus',
  },
]
