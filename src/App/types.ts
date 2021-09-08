export interface IUser {
  email: string
  id: number
  name: string
  refresh_token: string
  roles: Array<'ProjectManagement' | 'WebsiteManagement' | 'TemplateManagement'>
  token: string
}
