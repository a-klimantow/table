import { Switch, Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Layout, Header } from 'components'
import { useAppStore } from 'hooks'
import { LoginPage } from 'pages'

export const App = observer(() => {
  const { user } = useAppStore()

  if (user.userRoles.includes('Unknown')) return <LoginPage />

  return (
    <Layout>
      <Header />
      <Route path="/rewards/">
        <Switch>
          <Route path="/:m/1">1</Route>
          <Route path="/:m/2">2</Route>
          <Route path="/:m/3">3</Route>
          <Route path="/:m/4">4</Route>
          <Route path="/:m/5">5</Route>
          <Redirect from="/:m/" to="/:m/3" />
        </Switch>
      </Route>
      <Route path="/projects/">
        <Route path="/:m/request">1</Route>
        <Route path="/:m/response">2</Route>
        <Route path="/:m/payments">3</Route>
      </Route>
      <Redirect to="/rewards/" />
    </Layout>
  )
})
