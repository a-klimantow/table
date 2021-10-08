import { PageType as P, ModuleType as M } from 'types'

type ItemsType = Array<P | P[]>

export const menus: Record<M, ItemsType> = {
  rewards: [['reports', 'requests'], 'accruals'],
  administration: [],
  panels: [],
  projects: [],
}
