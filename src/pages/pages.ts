import { Logout } from './logout'
import { Login } from './login'
import { Refresh } from './refresh'
import { UserSettings } from './user_settings'
import { Requests } from './requests'
import { Accruals } from './accruals'
import { Reports } from './reports'

export type PageType = keyof typeof pages

const pages = {
  // user
  login: Login,
  logout: Logout,
  user_settings: UserSettings,
  refresh: Refresh,

  // rewards
  requests: Requests,
  accruals: Accruals,
  reports: Reports,
}

export const getPage = (page: PageType) => pages[page]
