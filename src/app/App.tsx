import { getPage } from 'pages'
import { useAppStore } from 'stores/app/context'
import { Layout, Header, ModuleMenu } from 'components'

const Login = getPage('login')

export const App = () => {
  const app = useAppStore()

  return (
    <Layout>
      <Header />
      <ModuleMenu />
      <Login />
    </Layout>
  )
}
