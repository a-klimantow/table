import { LogoutPage } from './LogoutPage'

const SettingsPage = () => <div>settings</div>
const RefreshPage = () => <div>refresh</div>

export const pages = {
  settings: SettingsPage,
  logout: LogoutPage,
  refresh: RefreshPage,
}

export type UserPageType = keyof typeof pages
