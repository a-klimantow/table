import { Switch, Route, Redirect } from 'react-router-dom'

import { useAppStore } from 'hooks'
import { observer } from 'mobx-react-lite'

export const Router = observer(() => {
  const { user } = useAppStore()

  return (
    <Switch>
      {user.modules.map((m) => (
        <Route key={m.path} path={m.path}>
          <Switch>
            {m.pages.map((page) => (
              <Route key={page.path as string} {...page} />
            ))}
            <Redirect from={m.path} to={m.pages[0].path as string} />
          </Switch>
        </Route>
      ))}
      {user.pages.map((page) => (
        <Route key={page.path as string} {...page} />
      ))}
      <Redirect to={user.defaultUrl} />
    </Switch>
  )
})
