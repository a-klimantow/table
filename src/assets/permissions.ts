import { PageType, RoleType } from 'types'

export type ModuleType = 'administration' | 'panels' | 'projects' | 'rewards'

const modules = {
  AccrualsManager: ['rewards'],
  Administrator: [],
  PanelistManagement: [],
  PaymentsManager: ['rewards'],
  ProjectManagement: [],
  TemplateManagement: [],
  WebsiteManagement: [],
} as Record<RoleType, ModuleType[]>

const pages = {
  AccrualsManager: ['accruals'],
  Administrator: [],
  PanelistManagement: [],
  PaymentsManager: ['requests', 'reports'],
  ProjectManagement: [],
  TemplateManagement: [],
  WebsiteManagement: [],
} as Record<RoleType, PageType[]>

const perms = { modules, pages }

export const getPerms = (type: 'modules' | 'pages', roles: RoleType[]) => {
  const result = new Set()
  roles.forEach((role) => {
    perms[type][role].forEach((i) => result.add(i))
  })
  return [...result]
}

// ============================== routes
type RoutesType = typeof routes
type M = ModuleType
type P = PageType

const routes = [
  ['projects', []],
  ['panels', []],
  ['rewards', ['requests', 'reports', 'accruals']],
  ['administration', []],
] as Array<[ModuleType, PageType[]]>

export const getRoutes = (modules: M[], pages: P[]): RoutesType =>
  routes.reduce((acc, [mod, pgs]) => {
    const prommPages = pgs.filter((p) => pages.includes(p))
    acc.push([mod, prommPages])
    return acc
  }, [] as RoutesType)
