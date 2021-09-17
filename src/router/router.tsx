import { observer } from 'mobx-react-lite'
import { Switch, Route } from 'react-router-dom'

import { useAppStore } from 'hooks'
import { LoginPage } from 'pages'
import { modules, ModuleType } from 'modules'

const modulePaths: ModuleType[] = ['rewards', 'user']

export const Router = observer(() => {
  const { user } = useAppStore()
  console.log(user.isUnknown)

  if (user.isUnknown) return <LoginPage />

  return (
    <Switch>
      {modulePaths.map((path) => (
        <Route key={path} path={`/${path}/`} component={modules[path]} />
      ))}
    </Switch>
  )
})
