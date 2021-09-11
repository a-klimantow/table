import { FC } from 'react'
import { Route } from 'react-router-dom'

import { RewardsModule } from 'modules'
import { Pages } from 'pages'
import { ModuleHeader } from 'components'
import { Provider } from './Provider'

export const App: FC = () => (
  <Provider>
    <Pages />
    {/* modules */}
    <Route path={['/rewards/', '/panels/']} children={<ModuleHeader />} />
    <Route path="/rewards/" component={RewardsModule} />
  </Provider>
)
