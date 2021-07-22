export enum RoleType {
  PM = 'ProjectManagement',
  WM = 'WebsiteManagement',
  TM = 'TemplateManagement',
}

export interface IUser {
  email: string,
  id: number,
  name: string,
  'roles': RoleType[],
  'token': string,
}

export interface IServerResponse {
  StatusCode: number,
  Data: object | null,
  Errors?: {
    ErrorDescription: string,
  },
  IsSuccessStatusCode: boolean,
}