import { getPage } from 'pages'
import { Layout, Header, ModuleMenu } from 'components'
import { AppModules } from 'components/app_modules'

const Login = getPage('login')

export const App = () => {
  return (
    <Layout>
      <Header />
      <ModuleMenu />
      <Login />
      <AppModules />
    </Layout>
  )
}
