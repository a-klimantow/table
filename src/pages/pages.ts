import { Logout } from './logout'
import { Login } from './login'
import { RequestsPage } from './RequestsPage'
import { UserSettings } from './user_settings'
import { AccrualsPage } from './AccrualsPage'

export type PageType = keyof typeof pages

const pages = {
  login: Login,
  logout: Logout,
  requests: () => null,
  accruals: () => null,
  user_settings: UserSettings,
  reports: () => null,
}

export const getPage = (page: PageType) => pages[page]
export const getPages = (...page: PageType[]) => page.map((p) => pages[p])
