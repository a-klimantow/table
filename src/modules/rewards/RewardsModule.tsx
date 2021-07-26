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
            submenu: [{ name: 'Заявки' }, { name: 'Отчеты' }],
          },
          { name: 'Начисления', icon: PlusIcon },
        ]}
      />
      <Route path={`${path}test`} component={() => <div>test</div>} />
    </>
  )
}
