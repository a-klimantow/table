import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useAppStore } from 'hooks'

export const Router = observer(() => {
  const { router, user } = useAppStore()

  useEffect(() => {
    console.log(toJS(router.render))

    router.create(user.roles)
  }, [router, user])

  return (
    <Switch>
      {/* {router.render.map((m) => (
        <Route key={m.path} path={m.path}>
          {m.pages.map((p) => (
            <Route key={p.path} component={p.component} />
          ))}
        </Route>
      ))} */}
    </Switch>
  )
})
