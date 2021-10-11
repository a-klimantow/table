import { AppLayout } from 'components/app_layout'
import { AppHeader } from 'components/app_header'
// import { AppMenu } from 'components/app_menu'
import { AppPages } from 'components/app_pages'
import { ModuleMenu } from 'components'

export const App = () => {
  return (
    <AppLayout>
      <AppHeader />
      <ModuleMenu />
      <AppPages />
    </AppLayout>
  )
}
