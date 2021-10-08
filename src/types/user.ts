export type RoleType =
  | 'AccrualsManager'
  | 'Administrator'
  | 'PanelistManagement'
  | 'PaymentsManager'
  | 'ProjectManagement'
  | 'TemplateManagement'
  | 'WebsiteManagement'

export interface IUser {
  id: number
  name: string
  email: string
  roles: RoleType[]
  token: string
  refresh_token: string
}
