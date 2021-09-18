import { Route, Redirect, Switch } from 'react-router-dom'

import { pages, RewardsPageType } from './pages'

const pathes: RewardsPageType[] = ['requests', 'reports', 'accrual']

export const RewardsModule = () => {
  return (
    <Switch>
      {pathes.map((path) => (
        <Route key={path} path={`/:module/${path}`} component={pages[path]} />
      ))}
      <Redirect from="/:module" to={`/:module/${pathes[0]}`} />
    </Switch>
  )
}
