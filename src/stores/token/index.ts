import { makeAutoObservable, reaction } from 'mobx'
import storage from 'store'

import { IUser, Maybe } from 'types'

type S = Pick<IUser, 'token' | 'refresh_token'>

export class Token {
  private state = storage.get('tokens') as Maybe<S>

  constructor() {
    makeAutoObservable(this)

    reaction(
      () => this.state,
      (state) => storage.set('tokens', state)
    )
  }

  update(state: Token['state']) {
    this.state = state
  }

  get access(): string {
    return this.state?.token ?? ''
  }

  get refresh(): string {
    return this.state?.refresh_token ?? ''
  }
}
