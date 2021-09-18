import { LogoutPage } from './LogoutPage'
import { LoginPage } from './LoginPage'

export type PageType = keyof typeof pages

export const pages = {
  login: LoginPage,
  logout: LogoutPage,
  requests: () => <div>request</div>,
  reports: () => <div>reports</div>,
  accrural: () => <div>accrual</div>,
}
