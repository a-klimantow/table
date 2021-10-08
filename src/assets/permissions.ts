import { PageType, RoleType } from 'types'

export type ModuleType = 'administration' | 'panels' | 'projects' | 'rewards'
type M = ModuleType
type P = PageType
type R = RoleType

const modules = {
  AccrualsManager: ['rewards'],
  Administrator: [],
  PanelistManagement: [],
  PaymentsManager: ['rewards'],
  ProjectManagement: [],
  TemplateManagement: [],
  WebsiteManagement: [],
} as Record<R, M[]>

const pages = {
  AccrualsManager: ['accruals'],
  Administrator: [],
  PanelistManagement: [],
  PaymentsManager: ['requests', 'reports'],
  ProjectManagement: [],
  TemplateManagement: [],
  WebsiteManagement: [],
} as Record<R, P[]>

export const permissions = { modules, pages }

export type PermsType = keyof typeof permissions
