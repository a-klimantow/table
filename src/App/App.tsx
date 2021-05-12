import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { RewardsModule, PanelsModule, UsersModule } from 'modules'
import { Header } from 'components'
import { LoginPage } from 'pages'

export const App: FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/rewards" component={RewardsModule} />
      <Route path="/panels" component={PanelsModule} />
      <Route path="/users" component={UsersModule} />
    </Switch>
  </>
)
