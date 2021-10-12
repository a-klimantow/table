import { ModuleType as M, PageType as P } from 'types'
import { getPage } from 'pages'

type K = M | 'default'

const routes: Record<K, P[]> = {
  administration: [],
  panels: [],
  projects: [],
  rewards: ['requests', 'reports', 'accruals'],
  default: ['login', 'logout', 'refresh', 'user_settings'],
}

export const getRoutes = (key: K, promPgs: P[]) => {
  const module = key === 'default' ? '' : `/${key}`
  const pages = routes[key].filter((p) => promPgs.includes(p))
  return pages.map((page) => ({
    page: getPage(page),
    path: `${module}/${page}/`,
  }))
}
