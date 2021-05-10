import { useMemo } from 'react'
import { useRouteMatch } from 'react-router-dom'
import {
  AddBoxOutlined as PlusIcon,
  IndeterminateCheckBoxOutlined as MinusIcon,
} from '@material-ui/icons'

import { IModuleMenuItem } from 'components'
import { RewardsPathesType } from './types'

export const useRewardsMenu = ({
  request,
  reports,
  profit,
  rewards,
}: RewardsPathesType): IModuleMenuItem[] => {
  const { path } = useRouteMatch()

  return useMemo(() => {
    switch (path) {
      case rewards:
        return [
          {
            name: 'Выплаты',
            Icon: MinusIcon,
            path: request,
            submenu: [
              ['Заявки', request],
              ['Отчеты', reports],
            ],
          },
          {
            name: 'Начисления',
            Icon: PlusIcon,
            path: profit,
          },
        ]

      default:
        return []
    }
  }, [path, request, reports, profit, rewards])
}
