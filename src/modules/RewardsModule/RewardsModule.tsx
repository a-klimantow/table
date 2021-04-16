import { useRouteMatch, Route, Redirect, Switch } from 'react-router-dom'

import { Layout, ModuleMenu } from 'components'
import { useModuleMenu } from 'hooks'
import { PaymentsPage, ProfitPage } from 'pages'

export const RewardsModule = () => {
  const { path } = useRouteMatch()
  const menu = useModuleMenu(path)

  const [{ to: payments }, { to: profit }] = menu as { to: string }[]

  return (
    <Layout.Module>
      <ModuleMenu name="Вознаграждения" data={menu} />
      <Switch>
        <Route path={payments} component={PaymentsPage} />
        <Route path={profit} component={ProfitPage} />
        <Redirect from={path} to={payments} exact />
        <Redirect to="/404" />
      </Switch>
    </Layout.Module>
  )
}
