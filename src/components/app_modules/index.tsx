import { observer } from 'mobx-react-lite'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useAppStore } from 'hooks'

export const AppModules = observer(() => {
  const app = useAppStore()
  console.log(app.redirect)
  return (
    <Switch>
      {app.routes.map(([module, pages]) => (
        <Route key={module} path={`/${module}/`}>
          <Switch>
            {pages.map((page: string) => (
              <Route key={page} path={`/:module/${page}/`}>
                {page}
              </Route>
            ))}
            <Redirect from="/:module/" to={`/:module/${pages[0]}`} />
          </Switch>
        </Route>
      ))}
      <Redirect to={app.redirect} />
    </Switch>
  )
})
