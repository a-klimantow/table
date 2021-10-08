import { ModuleType as M, PageType as P } from 'types'

export const structure = [
  ['projects', []],
  ['panels', []],
  ['rewards', ['requests', 'reports', 'accruals']],
  ['administration', []],
] as Array<[M, P[]]>
