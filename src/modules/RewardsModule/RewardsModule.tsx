import { Route, Redirect, Switch } from 'react-router-dom'

import { Layout, ModuleMenu } from 'components'
import { PaymentsPage, ProfitPage } from 'pages'
import { useRewardsPathes } from './useRewardsPathes'
import { useRewardsMenu } from './useRewardsMenu'

export const RewardsModule = () => {
  const pathes = useRewardsPathes()
  const menu = useRewardsMenu(pathes)

  const { request, reports, profit, rewards } = pathes

  return (
    <Layout.Module>
      <ModuleMenu name="Вознаграждения" menu={menu} />
      <Switch>
        <Route path={[request, reports]} component={PaymentsPage} />
        <Route path={profit} component={ProfitPage} />
        <Redirect from={rewards} to={request} exact />
        <Redirect to="/404" />
      </Switch>
    </Layout.Module>
  )
}
