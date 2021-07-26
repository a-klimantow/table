import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginPage } from 'pages'

export const App: FC = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
  </Switch>
)
