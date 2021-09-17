export const roles = [
  'AccrualsManager',
  'Administrator',
  'PanelistManagement',
  'PaymentsManager',
  'ProjectManagement',
  'TemplateManagement',
  'WebsiteManagement',
  'Unknown',
] as const

export const modules = [
  'admimistration',
  'panels',
  'projects',
  'rewards',
  'user',
] as const

export const pages = [
  'accrual',
  'login',
  'logout',
  'payments',
  'reposts',
  'request',
  'settings',
] as const

type R = Exclude<typeof roles[number], 'Unknown'>
type M = typeof modules[number]
type P = typeof pages[number]
type U = `/${M}/${P}/` | ''

export const defaultUrls: Record<R, U> = {
  AccrualsManager: '/rewards/accrual/',
  Administrator: '',
  PanelistManagement: '',
  PaymentsManager: '/rewards/request/',
  ProjectManagement: '',
  TemplateManagement: '',
  WebsiteManagement: '',
}
