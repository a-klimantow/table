import { LogoutPage } from './LogoutPage'
import { LoginPage } from './LoginPage'
import { RequestsPage } from './RequestsPage'
import { SettingsPage } from './SettingsPage'

export type PageType = keyof typeof pages

export const pages = {
  login: LoginPage,
  logout: LogoutPage,
  requests: RequestsPage,
  reports: () => <div>reports</div>,
  accrual: () => <div>accrual</div>,
  settings: SettingsPage,
}
