import { AppLayout } from 'components/app_layout'
import { AppHeader } from 'components/app_header'
import { AppMenu } from 'components/app_menu'
import { AppPages } from 'components/app_pages'
import { AppContextProvider } from './context'
import { AppStore } from './AppStore'

export const App = () => {
  return (
    <AppContextProvider value={new AppStore()}>
      <AppLayout>
        <AppHeader />
        <AppMenu />
        <AppPages />
      </AppLayout>
    </AppContextProvider>
  )
}
