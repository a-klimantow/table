import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { ModuleLayout, ModuleHeader } from 'components'
import { LoginPage } from 'pages'
import { RewardsModule } from 'modules/rewards'
import { AppRoute } from '../consts/route';

export const App: FC = () => (
  <Switch>
    <Route path={AppRoute.LOGIN} component={LoginPage} />
    <Route path={AppRoute.LOGOUT} component={() => <div>logout</div>} />
    <Route path={AppRoute.REFRESH} component={() => <div>refresh</div>} />
    <Route>
      <ModuleLayout>
        <ModuleHeader />
        <Route path={AppRoute.REWARDS} component={RewardsModule} />
      </ModuleLayout>
    </Route>
  </Switch>
)
