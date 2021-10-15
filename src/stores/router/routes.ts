import { ModuleType as M, PageType as P, RoleType as R } from 'types'
import { getPage } from 'pages'

const routes: Record<M, P[]> = {
  administration: [],
  panels: [],
  projects: [],
  rewards: ['requests', 'reports', 'accruals'],
  user: ['login', 'logout', 'refresh', 'user_settings'],
}

export const getRoutes = (module: M, promPgs: P[]) => {
  const pages = routes[module].filter((p) => promPgs.includes(p))
  return pages.map((page) => ({
    page: getPage(page),
    path: `/${module}/${page}/` as const,
  }))
}

export type PathType = ReturnType<typeof getRoutes>[number]['path']

export const getDefaultRoutes = (roles: R[]) => {
  if (roles.includes('Unknown'))
    return [{ page: getPage('login'), path: '/user/login/' }]
  return routes['user']
    .filter((page) => page !== 'login')
    .map((page) => ({ page: getPage(page), path: `/user/${page}/` }))
}
