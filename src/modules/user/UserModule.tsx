import { observer } from 'mobx-react-lite'

import { useAppStore } from 'hooks'
import { Route, Redirect, Switch } from 'react-router-dom'
import { pages, PagePath } from './pages'

const pagePaths = ['settings', 'logout', 'refresh'] as PagePath[]

export const UserModule = observer(() => {
  const { user } = useAppStore()

  if (user.isUnknown) return null
  return (
    <Switch>
      {pagePaths.map((path) => (
        <Route key={path} path={`/:m/${path}/`} component={pages[path]} />
      ))}
      <Redirect from="/:m/" to={`/:m/${pagePaths[0]}/`} />
    </Switch>
  )
})
