import { makeAutoObservable, reaction } from 'mobx'
import storage from 'store'

import { IUser } from 'types'

const USER = 'user'

export class User {
  private state: IUser | null

  constructor() {
    this.state = storage.get(USER, null)
    makeAutoObservable(this, {}, { proxy: false })

    reaction(
      () => this.state,
      (state) => store.set(USER, state)
    )
  }
  setUser(user: IUser | null) {
    this.state = user
  }

  get roles() {
    return this.state?.roles ?? ['Unknown']
  }

  get token() {
    return this.state?.token ?? ''
  }

  get name() {
    return this.state?.name ?? ''
  }

  get isAuthorized() {
    return !this.roles.includes('Unknown')
  }
}
