import { action, autorun, observable } from 'mobx'
import storage from 'store'

import { IUser } from 'types'

type R = IUser['roles']
type U = typeof initialUser
type T = typeof initialToken

const initialUser = { name: '', id: 0, email: '', roles: [] as R }
const initialToken = { access: '', refresh: '' }

export const user = observable(storage.get('user', initialUser), {
  roles: observable.shallow,
}) as U
export const token = observable(storage.get('token', initialToken)) as T

function updateUser(data: IUser) {
  user.id = data.id
  user.email = data.email
  user.name = data.name
  user.roles = data.roles
}

function updateToken(data: IUser) {
  token.access = data.token
  token.refresh = data.refresh_token
}

autorun(() =>
  storage.set('user', {
    id: user.id,
    name: user.name,
    email: user.email,
    roles: user.roles,
  } as U)
)
autorun(() =>
  storage.set('token', {
    access: token.access,
    refresh: token.refresh,
  } as T)
)

export const store = {
  user,
  token,
  updateUser: action(updateUser),
  updateToken: action(updateToken),
}
