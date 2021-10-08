import { ModuleType as M, PageType as P } from 'types'
import { name } from 'assets'

type I = [M, P[]]

export const createMenuItem = (item: P) => ({ name: item, hash: item })



export const createModuleMenuItem = ([module, pages]: I) => ({
  path: `/${module}/`,
  name: name(module),
  disabled: !pages.length,
})
