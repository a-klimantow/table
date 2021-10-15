import { ModuleType as M, PageType as P, RoleType as R } from 'types'

export const permissions = new Map<R, { modules: M[]; pages: P[] }>()
  .set('AccrualsManager', {
    modules: ['rewards', 'user'],
    pages: ['accruals'],
  })
  .set('PanelistManagement', {
    modules: ['user'],
    pages: [],
  })
  .set('PaymentsManager', {
    modules: ['rewards', 'user'],
    pages: ['requests', 'reports'],
  })
  .set('ProjectManagement', {
    modules: ['user'],
    pages: [],
  })
  .set('TemplateManagement', {
    modules: ['user'],
    pages: [],
  })
  .set('WebsiteManagement', {
    modules: ['user'],
    pages: [],
  })
  .set('Unknown', {
    modules: ['user'],
    pages: ['login'],
  })

const prommitedModules = new Set([] as M[])
const prommitedPages = new Set([] as P[])

const addModule = (m: M) => prommitedModules.add(m)
const addPage = (p: P) => prommitedPages.add(p)

export const getPrommited = (roles: R[]): { modules: M[]; pages: P[] } => {
  prommitedModules.clear()
  prommitedPages.clear()

  permissions.forEach(({ pages, modules }, role) => {
    if (roles.includes(role)) {
      pages.map(addPage)
      modules.map(addModule)
    }
  })
  return {
    modules: [...prommitedModules],
    pages: [...prommitedPages],
  }
}

export const getDefPath = (roles: R[]) => {
  const [first] = roles
  const [module] = permissions.get(first)?.modules ?? []
  const [page] = permissions.get(first)?.pages ?? []
  return `/${module}/` + page ?? ''
}
