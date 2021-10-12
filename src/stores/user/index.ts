import { makeAutoObservable, reaction } from 'mobx'
import storage from 'store'
// 
import { IUser, Maybe } from 'types'

type U = Omit<IUser, 'token' | 'refresh_token'>

export class User {
  private state = storage.get('user') as Maybe<U>

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.state,
      (state) => storage.set('user', state)
    )
  }

  update(state: User['state']) {
    this.state = state
  }

  get name(): string {
    return this.state?.name ?? ''
  }

  get email(): string {
    return this.state?.email ?? ''
  }

  get roles(): U['roles'] {
    return this.state?.roles ?? ['Unknown']
  }
}
