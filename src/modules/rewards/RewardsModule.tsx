import { Route, RouteProps, Redirect, Switch } from 'react-router-dom'

import { ReportsPage, RequestPage, AccrualPage } from './pages'

const router = [
  { path: 'request', component: RequestPage },
  { path: 'reports', component: ReportsPage },
  { path: 'accruals', component: AccrualPage },
] as RouteProps<'request' | 'reports' | 'accruals'>[]

export const RewardsModule = () => {
  return (
    <Route path="/rewards/">
      <Switch>
        {router.map(({ path, component }) => (
          <Route
            key={path as string}
            path={`/:module/${path}`}
            component={component}
          />
        ))}
        <Redirect from="/:module" to={`/:module/${router[0].path}`} />
      </Switch>
    </Route>
  )
}
