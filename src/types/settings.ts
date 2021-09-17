import { ReactNode, FC } from 'react'
import { roles, modules } from 'app/settings'

export type RoleType = typeof roles[number]
export type ModuleType = typeof modules[number]

interface IPage {
  type: 'page'
  path: string
  perm: RoleType[]
  page: FC
}

interface IModule {
  type: 'module'
  path: ModuleType
  perm: RoleType[]
  module: ReactNode
  pages: IPage[]
}

export type RouterType = IModule[] | IPage[]

// user
export interface IUser {
  id: number
  name: string
  email: ''
  roles: RoleType[]
  token: string
  refresh_token: string
}
