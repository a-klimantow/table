import { getPage } from 'pages'

import { AppLayout } from 'components/app_layout'
import { AppHeader } from 'components/app_header'
import { AppModules } from 'components/app_modules'

const Login = getPage('login')

export const App = () => {
  return (
    <AppLayout>
      <AppHeader />
      <div data-app-menu>menu</div>
      <div data-app-page>page</div>

      {/* <Header />
      <ModuleMenu />
      <Login />
      <AppModules />
      */}
    </AppLayout>
  )
}
