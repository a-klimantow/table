import { PageType } from 'types'

const modules = {
  administration: [] as PageType[],
  panels: [] as PageType[],
  projects: [] as PageType[],
  rewards: ['accruals', 'requests', 'reports'] as PageType[],
  user: ['login', 'logout', 'settings'] as PageType[],
}

export type ModuleType = keyof typeof modules

export const getModulePages = (...args: ModuleType[]) =>
  args.flatMap((m) => modules[m])
