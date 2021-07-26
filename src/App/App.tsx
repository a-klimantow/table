import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { ModuleLayout, ModuleHeader } from 'components'
import { LoginPage } from 'pages'
import { RewardsModule } from 'modules/rewards'

export const App: FC = () => (
  <Switch>
    <Route path="/login/" component={LoginPage} />
    <Route path="/logout/" component={() => <div>logout</div>} />
    <Route>
      <ModuleLayout>
        <ModuleHeader />
        <Route path="/rewards/" component={RewardsModule} />
      </ModuleLayout>
    </Route>
  </Switch>
)
