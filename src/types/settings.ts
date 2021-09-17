import { pages } from 'pages'
import { roles } from 'router/settings'

export type RoleType = typeof roles[number]
export type PageType = keyof typeof pages

// user
export interface IUser {
  id: number
  name: string
  email: ''
  roles: RoleType[]
  token: string
  refresh_token: string
}
