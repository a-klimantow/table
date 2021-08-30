export type UserRole = 'ProjectManagement' | 'WebsiteManagement' | 'TemplateManagement';

export interface IUser {
  email: string,
  id: number,
  name: string,
  roles: UserRole[],
  token: string,
}

export interface IServerResponse {
  StatusCode: number,
  Data: object | IUser | null,
  Errors?: {
    ErrorDescription: string,
  },
  IsSuccessStatusCode: boolean,
}