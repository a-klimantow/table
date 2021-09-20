import { Layout, Header, ModuleMenu } from 'components'
import { Router } from 'router'

export const App = () => (
  <Layout>
    <Header />
    <ModuleMenu />
    <Router />
  </Layout>
)
