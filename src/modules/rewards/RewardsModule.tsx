import { Route, useRouteMatch } from 'react-router-dom'
import {
  AddBoxOutlined as PlusIcon,
  IndeterminateCheckBoxOutlined as MinusIcon,
} from '@material-ui/icons'

import { ModuleMenu, ModuleMenuProps } from 'components'

const moduleMenu: ModuleMenuProps = {
  menuName: 'Вознаграждения',
  items: [
    {
      name: 'Выплаты',
      icon: MinusIcon,
      submenu: [
        { name: 'Заявки', path: 'заявки' },
        { name: 'Отчеты', path: 'отчеты' },
      ],
    },
    { name: 'Начисления', icon: PlusIcon, path: 'начисления' },
  ],
}

export const RewardsModule = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <ModuleMenu {...moduleMenu} />
      <Route path={`${path}заявки`} component={() => <div>заявки</div>} />
      <Route path={`${path}отчеты`} component={() => <div>отчеты</div>} />
      <Route path={`${path}начисления`} component={() => <div>начисления</div>} />
    </>
  )
}
