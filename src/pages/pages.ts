import { Logout } from './logout'
import { Login } from './login'
import { Refresh } from './refresh'
import { UserSettings } from './user_settings'
import { Plug } from './plug'
import { RequestsPage } from './RequestsPage'

export type PageType = keyof typeof pages

const pages = {
  login: Login,
  logout: Logout,
  refresh: Refresh,
  requests: RequestsPage,
  accruals: () => null,
  user_settings: UserSettings,
  reports: () => null,
  plug: Plug,
}

export const getPage = (page: PageType) => pages[page]
