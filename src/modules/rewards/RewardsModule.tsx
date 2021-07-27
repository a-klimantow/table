import { Route, useRouteMatch } from 'react-router-dom'
import {
  AddBoxOutlined as PlusIcon,
  IndeterminateCheckBoxOutlined as MinusIcon,
} from '@material-ui/icons'

import { ModuleMenu } from 'components'

export const RewardsModule = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <ModuleMenu
        menuName="Вознаграждения"
        items={[
          {
            name: 'Выплаты',
            icon: MinusIcon,
            submenu: [
              { name: 'Заявки', path: 'заявки' },
              { name: 'Отчеты', path: 'отчеты' },
            ],
          },
          { name: 'Начисления', icon: PlusIcon, path: `${path}начисления` },
        ]}
      />
      <Route path={`${path}test`} component={() => <div>test</div>} />
    </>
  )
}
