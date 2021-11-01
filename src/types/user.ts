export type RoleType =
  | 'AccrualsManager'
  | 'Administrator'
  | 'PanelistManagement'
  | 'PaymentsManager'
  | 'ProjectManagement'
  | 'TemplateManagement'
  | 'WebsiteManagement'
  | 'Unknown'

export interface IUser {
  id: number
  name: string
  email: string
  roles: RoleType[]
  partner_id: number
  token: string
  refresh_token: string
}
