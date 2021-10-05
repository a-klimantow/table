import { LogoutPage } from './LogoutPage'
import { LoginPage } from './LoginPage'
import { RequestsPage } from './RequestsPage'
import { SettingsPage } from './SettingsPage'
import { AccrualsPage } from './AccrualsPage'

export type PageType = keyof typeof pages

const pages = {
  login: LoginPage,
  logout: LogoutPage,
  requests: RequestsPage,
  accruals: AccrualsPage,
  settings: SettingsPage,
  reports: () => <div>reports</div>,
}

export const getPage = (page: PageType) => pages[page]
export const getPages = (...page: PageType[]) => page.map((p) => pages[p])
