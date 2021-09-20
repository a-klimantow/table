import { observer } from 'mobx-react-lite'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useRouter } from './useRouter'

export const Router = observer(() => {
  const { router, defaultUrl } = useRouter()
  console.log(router)
  return (
    <Switch>
      {router.map(({ module, pages, path }) => (
        <Route key={module} path={path}>
          <Switch>
            {pages.map(({ page, ...rest }) => (
              <Route key={page} {...rest} />
            ))}
            <Redirect from="/:module" to={pages[0].path} />
          </Switch>
        </Route>
      ))}
      <Redirect to={defaultUrl} />
    </Switch>
  )
})
