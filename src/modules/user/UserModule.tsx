import { observer } from 'mobx-react-lite'

import { useAppStore } from 'hooks'
import { Route, Redirect, Switch } from 'react-router-dom'
import { pages, UserPageType } from './pages'

const pathes = ['settings', 'logout', 'refresh'] as UserPageType[]

export const UserModule = observer(() => {
  const { user } = useAppStore()

  if (user.isUnknown) return null
  return (
    <Switch>
      {pathes.map((path) => (
        <Route key={path} path={`/:m/${path}/`} component={pages[path]} />
      ))}
      <Redirect from="/:m/" to={`/:m/${pathes[0]}/`} />
    </Switch>
  )
})
