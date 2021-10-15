import * as React from 'react'
import {
  Switch,
  Route,
  Redirect,
  // useHistory
} from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import {
  useRouter,
  // useToken
} from 'hooks'

export const AppPages = observer(() => {
  const router = useRouter()
  // useCheckToken()
  return (
    <Switch>
      {router.allRoutes.map((route) => (
        <Route key={route.path} path={route.path} component={route.page} />
      ))}
      <Redirect to={router.defPath} />
    </Switch>
  )
})

// function useCheckToken() {
//   const token = useToken()
//   const history = useHistory()
//   React.useEffect(() => {
//     if (token.access && token.refresh) {
//       history.push('/user/refresh', { from: history.location })
//     }
//   }, [token, history])
// }
