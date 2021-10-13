import { ModuleType as M, PageType as P } from 'types'
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
