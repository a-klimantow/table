import { Route, useRouteMatch } from 'react-router-dom'

import { ModuleMenu } from 'components'

export const RewardsModule = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <ModuleMenu />
      <Route path={`${path}test`} component={() => <div>test</div>} />
    </>
  )
}
