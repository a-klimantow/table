import { Switch, Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { getPage } from 'pages'
import {
  useRoutes,
  useDefaultPath,
  useShowLogin,
  useShowLogout,
  useShowSettings,
} from './hooks'

import { DrawerPages } from './atoms'

const Login = getPage('login')
const UserSettings = getPage('user_settings')
const Logout = getPage('logout')

export const AppPages = observer(() => {
  const routes = useRoutes()
  const redirect = useDefaultPath()
  const showLogin = useShowLogin()
  const showLogout = useShowLogout()

  return (
    <>
      <Switch>
        {routes.map(([module, pages]) => (
          <Route key={module} path={`/${module}/`}>
            <Switch>
              {pages.map((page) => (
                <Route
                  key={page}
                  path={`/:module/${page}/`}
                  component={getPage(page)}
                />
              ))}
              <Redirect from="/:module/" to={`/:module/${pages[0]}`} />
            </Switch>
          </Route>
        ))}
        <Redirect to={redirect} />
      </Switch>
      {showLogin ? <Login /> : null}
      {showLogout ? <Logout /> : null}
      <DrawerPages pages={['user_settings']}>
        <UserSettings />
      </DrawerPages>
    </>
  )
})
