import { observer } from 'mobx-react-lite'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useRouter } from './useRouter'

export const Router = observer(() => {
  const { router, defaultUrl, modulesPath } = useRouter()
  console.log(router)
  console.log(modulesPath)
  return (
    <Switch>
      <Route path={modulesPath}>
        {router.map(({ module, pages, path }) => (
          <Route key={module} path={path}>
            <Switch>
              {pages.map(({ page, ...rest }) => (
                <Route key={page} {...rest} />
              ))}
              <Redirect from="/:module" to={defaultUrl} />
            </Switch>
          </Route>
        ))}
      </Route>
      <Redirect to={modulesPath[0]} />
    </Switch>
  )
})
