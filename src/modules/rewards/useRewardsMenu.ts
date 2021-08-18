import React from 'react'
import {
  AddBoxOutlined as PlusIcon,
  IndeterminateCheckBoxOutlined as MinusIcon,
} from '@material-ui/icons'

import { ModuleMenuProps } from 'components'
import { Pages } from './enums'

export const useRewardsMenu = (): ModuleMenuProps =>
  React.useMemo(
    () => ({
      menuName: 'Вознаграждения',
      items: [
        {
          name: 'Выплаты',
          icon: MinusIcon,
          submenu: [
            { name: 'Заявки', path: Pages.Bids },
            { name: 'Отчеты', path: Pages.Reports },
          ],
        },
        { name: 'Начисления', icon: PlusIcon, path: Pages.Profit },
      ],
    }),
    []
  )
