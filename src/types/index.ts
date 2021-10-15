export type { IconType } from 'assets'
export type { PageType } from 'pages/pages'
export type { PathType } from 'stores/router/routes'
export type { ICol } from 'components/table'
export type { IGridCol, IGridRow } from 'components/grid/types'

export * from './user'
export * from './errors'
export * from './data'
export * from './utils'

export type ModuleType =
  | 'user'
  | 'rewards'
  | 'panels'
  | 'projects'
  | 'administration'
