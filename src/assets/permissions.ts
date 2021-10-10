import { PageType, RoleType } from 'types'

export type ModuleType = 'administration' | 'panels' | 'projects' | 'rewards'
type M = ModuleType
type P = PageType
type R = RoleType

const modules = {
  AccrualsManager: ['rewards'],
  Administrator: ['administration'],
  PanelistManagement: ['panels'],
  PaymentsManager: ['rewards'],
  ProjectManagement: ['projects'],
  TemplateManagement: ['administration'],
  WebsiteManagement: ['administration'],
} as Record<R, M[]>

const pages = {
  AccrualsManager: ['accruals'],
  Administrator: ['plug'],
  PanelistManagement: ['plug'],
  PaymentsManager: ['requests', 'reports'],
  ProjectManagement: ['plug'],
  TemplateManagement: ['plug'],
  WebsiteManagement: ['plug'],
} as Record<R, P[]>

export const permissions = { modules, pages }

export type PermsType = keyof typeof permissions
