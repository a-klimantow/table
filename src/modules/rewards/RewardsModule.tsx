import { Route, useRouteMatch, Redirect, Switch } from 'react-router-dom'

import { ModuleMenu } from 'components'
import { useRewardsMenu } from './useRewardsMenu'

import { ReportsPage } from './pages/ReportsPage'

import { Pages } from './enums'

export const RewardsModule = () => {
  const { path } = useRouteMatch()
  const moduleMenu = useRewardsMenu()
  return (
    <>
      <ModuleMenu {...moduleMenu} />
      <Switch>
        <Route path={`${path}${Pages.Bids}`} component={ReportsPage} />
        <Route path={`${path}${Pages.Reports}`} component={ReportsPage} />
        <Route path={`${path}${Pages.Profit}`} component={ReportsPage} />
        <Redirect from={path} to={`${path}${Pages.Bids}`} />
      </Switch>
    </>
  )
}
