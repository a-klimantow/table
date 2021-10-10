import { makeAutoObservable, reaction } from 'mobx'
import storage from 'store'

import { IUser } from 'types'
import * as utils from 'utils'

type R = IUser['roles']
type U = typeof initialUser
type T = typeof initialToken

const initialUser = { name: '', id: 0, email: '', roles: [] as R }
const initialToken = { access: '', refresh: '' }

export class AppStore {
  user = storage.get('user', initialUser) as U
  token = storage.get('token', initialToken) as T

  constructor() {
    makeAutoObservable(this)

    reaction(
      () => this.user,
      (user) => storage.set('user', user)
    )

    reaction(
      () => this.token,
      (token) => storage.set('token', token)
    )
  }

  updateUser(user: U) {
    this.user = user
  }

  updateToken(token: T) {
    this.token = token
  }

  clear() {
    this.user = initialUser
  }

  // все разрешенные модули для ролей
  get modules() {
    return utils.getPermsModules(this.user.roles)
  }

  // все разрешенные страницы для ролей
  get pages() {
    return utils.getPermsPages(this.user.roles)
  }

  // меню выплат
  get pageMenus() {
    return []
  }
}
