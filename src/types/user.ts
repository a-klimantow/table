export type UserRole =
  | 'ProjectManagement'
  | 'WebsiteManagement'
  | 'TemplateManagement'

export interface IUser {
  id: number
  name: string
  email: string
  roles: UserRole[]
  token: string
  refresh_token: string
}
