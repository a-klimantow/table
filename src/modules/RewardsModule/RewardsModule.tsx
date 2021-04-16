import { useRouteMatch } from 'react-router-dom'

import { Layout, ModuleMenu } from 'components'
import { useModuleMenu } from 'hooks'

export const RewardsModule = () => {
  const { path } = useRouteMatch()
  const menu = useModuleMenu(path)
  return (
    <Layout.Module>
      <ModuleMenu name="Вознаграждения" data={menu} />
      <Layout.Page>
        <div>a</div>
        <div>a</div>
      </Layout.Page>
    </Layout.Module>
  )
}
