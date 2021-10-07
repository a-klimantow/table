import { makeAutoObservable } from 'mobx'
import storage from 'store'

import { IUser } from 'types'

export class User implements IUser {
  id = 0
  email = ''
  name = ''
  refresh_token = ''
  roles = ['Unknown'] as IUser['roles']
  token = ''

  constructor() {
    makeAutoObservable(this, { save: false })
    this.setUser(storage.get('user'))
  }

  setUser(user: IUser | null) {
    if (!user) return
    this.id = user.id
    this.email = user.email
    this.name = user.name
    this.refresh_token = user.refresh_token
    this.token = user.token
    this.roles = user.roles
  }

  save() {
    storage.set('user', this)
  }
}
