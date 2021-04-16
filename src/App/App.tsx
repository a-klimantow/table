import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { RewardsModule, PanelsModule, UsersModule } from 'modules'
import { Header } from 'components'

export const App: FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/rewards" component={RewardsModule} />
      <Route path="/panels" component={PanelsModule} />
      <Route path="/users" component={UsersModule} />
    </Switch>
  </>
)
