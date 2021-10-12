import { ModuleType as M, PageType as P, RoleType as R } from 'types'

export const permissions = new Map<R, { modules: M[]; pages: P[] }>()
  .set('AccrualsManager', {
    modules: ['rewards'],
    pages: ['accruals'],
  })
  .set('PanelistManagement', {
    modules: [],
    pages: [],
  })
  .set('PaymentsManager', {
    modules: ['rewards'],
    pages: ['requests', 'reports'],
  })
  .set('ProjectManagement', {
    modules: [],
    pages: [],
  })
  .set('TemplateManagement', {
    modules: [],
    pages: [],
  })
  .set('WebsiteManagement', {
    modules: [],
    pages: [],
  })

const prommitedModules = new Set([] as M[])
const prommitedPages = new Set([] as P[])

const addModule = (m: M) => prommitedModules.add(m)
const addPage = (p: P) => prommitedPages.add(p)

export const getPrommited = (roles: R[]): { modules: M[]; pages: P[] } => {
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
