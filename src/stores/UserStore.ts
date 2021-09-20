import { makeAutoObservable, reaction } from 'mobx'
import store from 'store'

import { RoleType } from 'types'

const USER = 'user'

export type UserType = typeof initialUser

const initialUser = {
  id: 0,
  name: '',
  email: '',
  roles: ['Unknown'] as RoleType[],
  token: '',
  refresh_token: '',
}

export class UserStore {
  private user = store.get(USER) ?? initialUser

  setUser(user: UserType) {
    this.user = user
  }
  clearUser() {
    this.user = null
  }

  get roles() {
    return this.user?.roles ?? ['Unknown']
  }

  get token() {
    return this.user?.token ?? ''
  }

  get isAuthorized() {
    return !this.roles.includes('Unknown')
  }

  constructor() {
    makeAutoObservable(this)

    reaction(
      () => this.user,
      (user) => {
        console.log('reaction', user)
        store.set(USER, this.user)
      }
    )
  }
}
