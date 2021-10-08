import { PageType, RoleType } from 'types'

export type MouleType = 'rewards'

export const modules = {
  AccrualsManager: ['rewards'],
  Administrator: [],
  PanelistManagement: [],
  PaymentsManager: ['rewards'],
  ProjectManagement: [],
  TemplateManagement: [],
  Unknown: [],
  WebsiteManagement: [],
} as Record<RoleType, MouleType[]>

export const pages = {
  AccrualsManager: ['accruals'],
  Administrator: [],
  PanelistManagement: [],
  PaymentsManager: ['requests', 'reports'],
  ProjectManagement: [],
  TemplateManagement: [],
  Unknown: ['login'],
  WebsiteManagement: [],
} as Record<RoleType, PageType[]>
