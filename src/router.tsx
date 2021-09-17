import { LoginPage, LogoutPage } from 'pages'
import { RoleType } from 'types'

export const pages = {
  accrual: null,
  reports: null,
  requests: null,
  login: LoginPage,
  logout: LogoutPage,
} as const

type PageType = keyof typeof pages

type LinkItemType = { name: 'string'; link: "" }

export const rewarsdMenu = {
  link: 'rewards',
  name: 'Вознаграждения',
  perm: ['AccrualsManager', 'PaymentsManager'] as RoleType[],
  // submenu: {
  //   name: 'Выплаты',
  //   links: [
  //     { link: 'requests', name: 'Заявки' },
  //     { link: 'reports', name: 'Отчеты' },
  //   ] as {
  //     link: PageType
  //     name: string
  //   }[],
  items: [
    { name: 'Выплаты', links: [{ name: '' }, { name: '' }] },
    { name: 'Начисления', link: 'accrual' as PageType },
  ],
}
