import { makeAutoObservable, reaction } from 'mobx'
import store from 'store'

import { IUser } from 'types'

export class User {
  private user: IUser | null = store.get('user') ?? null

  setUser(user: IUser) {
    this.user = user
  }

  clearUser() {
    this.user = null
  }

  get userRoles(): IUser['roles'] {
    return this.user?.roles ?? ['Unknown']
  }

  get isUnknown(): boolean {
    return !Boolean(this.user)
  }

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.user,
      (user) => store.set('user', user)
    )
  }
}
