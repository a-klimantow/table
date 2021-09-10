import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { ModuleLayout, ModuleHeader } from 'components'
import { LoginPage, RefreshPage, LogoutPage, AuthenticationPage } from 'pages'
import { RewardsModule } from 'modules/rewards'
import { Provider } from './Provider'

export const App: FC = () => (
  <Provider>
    <Switch>
      <Route path="/login/" component={LoginPage} />
      <Route path="/logout/" component={LogoutPage} />
      <Route path="/refresh/" component={RefreshPage} />
      <Route path="/auth/" component={AuthenticationPage} />
      <Route>
        <ModuleLayout>
          <ModuleHeader />
          <Route path="/rewards/" component={RewardsModule} />
        </ModuleLayout>
      </Route>
    </Switch>
  </Provider>
)
