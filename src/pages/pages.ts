import { Logout } from './logout'
import { Login } from './login'
import { UserSettings } from './user_settings'
import { Plug } from './plug'

export type PageType = keyof typeof pages

const pages = {
  login: Login,
  logout: Logout,
  requests: () => null,
  accruals: () => null,
  user_settings: UserSettings,
  reports: () => null,
  plug: Plug,
}

export const getPage = (page: PageType) => pages[page]
