export type UserRole = 'ProjectManagement' | 'WebsiteManagement' | 'TemplateManagement';

export interface IUser {
  email: string,
  id: number,
  name: string,
  roles: UserRole[],
  token: string,
}

export interface IServerResponse {
  status: number,
  data: IUser | null,
  Errors?: {
    ErrorDescription: string,
  },
  IsSuccessStatusCode: boolean,
  statusText: string
}