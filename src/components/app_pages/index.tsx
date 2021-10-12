import { Switch, Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { useRouter } from 'hooks'

export const AppPages = observer(() => {
  const router = useRouter()

  return (
    <Switch>
      {router.allRoutes.map((route) => (
        <Route key={route.path} path={route.path} component={route.page} />
      ))}
      <Redirect to={router.defPath} />
    </Switch>
  )
})
