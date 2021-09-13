import { FC } from 'react'

import { RewardsModule } from 'modules'
import { Pages } from 'pages'
import { Layout, Header } from 'components'

export const App: FC = () => (
  <Layout>
    <Header />
    <RewardsModule />
    <Pages />
  </Layout>
)
