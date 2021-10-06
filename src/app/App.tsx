import { observer } from 'mobx-react-lite'
import { Route, Switch, Redirect } from 'react-router-dom'
import { getPage } from 'pages'

const Login = getPage('login')

import { Layout, Header, ModuleMenu } from 'components'

export const App = observer(() => {
  return (
    <Layout>
      <Header />
      <ModuleMenu />
      <Login />
      <Switch>
        {/* {routes.allModules.map((route) => {
          if (!route) return null
          const { path, pages } = route
          const [firstPage] = pages

          return (
            <Route key={path} path={path}>
              <Switch>
                {pages.map((i) => (
                  <Route
                    key={i.path}
                    path={`/:module${i.path}`}
                    component={i.page}
                  />
                ))}
                <Redirect from="/user/login/" to={routes.defPath} exact />
                <Redirect from="/:module/" to={`/:module${firstPage.path}`} />
              </Switch>
            </Route>
          )
        })}

        <Redirect to={routes.defPath} /> */}
      </Switch>
    </Layout>
  )
})
