export { LoginPage } from './LoginPage'
import { LogoutPage } from './LogoutPage'

export const pages = {
  logout: LogoutPage,
  requests: () => <div>request</div>,
  reports: () => <div>reports</div>,
  accrural: () => <div>accrual</div>,
}
