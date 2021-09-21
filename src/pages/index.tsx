import { LogoutPage } from './LogoutPage'
import { LoginPage } from './LoginPage'
import { RequestsPage } from './RequestsPage'
import { SettingsPage } from './SettingsPage'
import { AccrualsPage } from './AccrualsPage'

export type PageType = keyof typeof pages

export const pages = {
  login: LoginPage,
  logout: LogoutPage,
  requests: RequestsPage,
  accruals: AccrualsPage,
  settings: SettingsPage,
  reports: () => <div>reports</div>,
}
