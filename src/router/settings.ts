import { PageType } from 'pages'

// roles
export type RoleType = typeof roles[number]

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
export type ModuleType = typeof modules[number]

export const modules = [
  'administration',
  'panels',
  'projects',
  'rewards',
  'user',
] as const

type PermissoinsType = Map<
  RoleType,
  {
    modules: ModuleType[]
    pages: PageType[]
  }
>

const permissoins: PermissoinsType = new Map([])
permissoins.set('AccrualsManager', {
  modules: ['rewards', 'user'],
  pages: ['accrual'],
})
permissoins.set('Administrator', {
  modules: ['user'],
  pages: [],
})
permissoins.set('PanelistManagement', {
  modules: ['user'],
  pages: [],
})
permissoins.set('PaymentsManager', {
  modules: ['rewards', 'user'],
  pages: ['requests', 'reports'],
})
permissoins.set('ProjectManagement', {
  modules: ['user'],
  pages: [],
})
permissoins.set('TemplateManagement', {
  modules: ['user'],
  pages: [],
})
permissoins.set('Unknown', {
  modules: [],
  pages: ['login'],
})
permissoins.set('WebsiteManagement', {
  modules: ['user'],
  pages: [],
})

// module pages
type ModulePagesType = Map<ModuleType, PageType[]>

const modPages: ModulePagesType = new Map()
modPages.set('administration', [])
modPages.set('panels', [])
modPages.set('projects', [])
modPages.set('rewards', ['requests', 'reports', 'accrual'])
modPages.set('user', ['settings', 'logout', 'login'])

export function getModules(roles: RoleType[]) {
  const res = roles.flatMap((r) => permissoins.get(r)?.modules)
  const unic = new Set(res)
  const modules = [] as ModuleType[]
  unic.forEach((i) => i && modules.push(i))
  return modules
}

export function getPages(roles: RoleType[]) {
  return roles.flatMap((r) => permissoins.get(r)?.pages)
}

const createModule = (m: ModuleType) => ({
  path: m,
  pages: modPages.get(m) ?? [],
})

export function createRouter(roles: RoleType[]) {
  const modules = getModules(roles).map(createModule)
  const pages = getPages(roles)

  return {
    modules,
    pages,
  }
}
