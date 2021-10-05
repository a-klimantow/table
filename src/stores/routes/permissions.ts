import { ModuleType, RoleType, PageType } from 'types'

type MT = ModuleType
type PT = PageType
type RT = RoleType

const perms: Record<RT, { modules: MT[]; pages: PT[] }> = {
  AccrualsManager: {
    modules: ['rewards', 'user'],
    pages: ['accruals', 'settings', 'logout'],
  },
  Administrator: {
    modules: ['administration', 'panels', 'projects', 'rewards', 'user'],
    pages: ['settings', 'logout'],
  },
  PanelistManagement: {
    modules: ['user'],
    pages: ['logout', 'settings'],
  },
  PaymentsManager: {
    modules: ['rewards', 'user'],
    pages: ['requests', 'reports', 'logout', 'settings'],
  },
  ProjectManagement: {
    modules: ['user'],
    pages: ['settings', 'logout'],
  },
  TemplateManagement: {
    modules: [],
    pages: ['settings', 'logout'],
  },
  Unknown: {
    modules: ['user'],
    pages: ['login'],
  },
  WebsiteManagement: {
    modules: ['user'],
    pages: ['settings', 'logout'],
  },
}

export const getPrommited = (roles: RT[]) => {
  const [first] = roles
  const {
    modules: [m],
    pages: [p],
  } = perms[first]
  const defPath = `/${m}/${p}/`

  return {
    modules: [...new Set(roles.flatMap((role) => perms[role].modules))],
    pages: [...new Set(roles.flatMap((role) => perms[role].pages))],
    defPath,
  }
}
