import { AppLayout } from 'components/app_layout'
import { AppHeader } from 'components/app_header'
// import { AppMenu } from 'components/app_menu'
import { AppPages } from 'components/app_pages'

export const App = () => {
  return (
    <AppLayout>
      <AppHeader />
      <AppPages />
    </AppLayout>
  )
}
