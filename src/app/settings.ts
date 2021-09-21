import { PageType, pages } from 'pages'

// roles
type RoleArrType = typeof roles
export type RoleType = RoleArrType[number]

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

// modules
type ModuleArrType = typeof modules
export type ModuleType = ModuleArrType[number]

export const modules = [
  'administration',
  'panels',
  'projects',
  'rewards',
  'user',
] as const

// module permissions
type ModulePermType = Map<RoleType, ModuleType[] | ModuleArrType>

const modulePerm: ModulePermType = new Map()

modulePerm.set('AccrualsManager', ['rewards', 'user'])
modulePerm.set('Administrator', modules)
modulePerm.set('PanelistManagement', ['user'])
modulePerm.set('PaymentsManager', ['rewards', 'user'])
modulePerm.set('ProjectManagement', ['user'])
modulePerm.set('TemplateManagement', ['user'])
modulePerm.set('Unknown', ['user'])
modulePerm.set('WebsiteManagement', ['user'])

// page permissions
type PagePermType = Map<RoleType, PageType[]>

const pagePerm: PagePermType = new Map()

const allPage = Object.keys(pages) as PageType[]

pagePerm.set('AccrualsManager', ['accruals', 'settings', 'logout'])
pagePerm.set('Administrator', allPage)
pagePerm.set('PanelistManagement', ['settings', 'logout'])
pagePerm.set('PaymentsManager', ['requests', 'reports', 'settings', 'logout'])
pagePerm.set('ProjectManagement', ['settings', 'logout'])
pagePerm.set('TemplateManagement', ['settings', 'logout'])
pagePerm.set('Unknown', ['login'])
pagePerm.set('WebsiteManagement', ['settings', 'logout'])

// modules structure
type ModuleStuctureType = Record<ModuleType, PageType[]>

const moduleStructure: ModuleStuctureType = {
  administration: [],
  panels: [],
  projects: [],
  rewards: ['requests', 'reports', 'accruals'],
  user: ['settings', 'logout', 'login'],
}

// get unic modules
function getModules(roles: RoleType[]) {
  const modules = roles.flatMap((r) => modulePerm.get(r)).filter(Boolean)
  return [...new Set(modules)] as ModuleType[]
}

// get unic pages
function getPages(roles: RoleType[]) {
  const pages = roles.flatMap((r) => pagePerm.get(r)).filter(Boolean)
  return [...new Set(pages)] as PageType[]
}

// create render pages
function createRenderPage(page: PageType) {
  return { page, path: `/:module/${page}/`, component: pages[page] }
}

// filter pages
function filterByCurrentPage(module: ModuleType, pages: PageType[]) {
  return pages.filter((page) => moduleStructure[module].includes(page))
}

export function createRouter(roles: RoleType[]) {
  // prommited modules & pages
  const promPages = getPages(roles)
  const promModules = getModules(roles)

  // create router for render
  return promModules.map((module) => {
    const currentPages = filterByCurrentPage(module, promPages).map(
      createRenderPage
    )
    return { module, path: `/${module}/`, pages: currentPages }
  })
}
