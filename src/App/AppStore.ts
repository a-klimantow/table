import { makeAutoObservable, autorun } from 'mobx'

import { History } from 'types'
import { Keys } from 'consts'
import { IUser } from './types'

export class AppStore {
  user: IUser | null = null
  private readonly history: History

  constructor({ history }: { history: History }) {
    makeAutoObservable(this)
    this.history = history

    const user = localStorage.getItem(Keys.User)
    if (user) {
      this.user = JSON.parse(user)
    }

    autorun(() => {
      if (this.user) {
        localStorage.setItem(Keys.User, JSON.stringify(this.user))
        history.push('/')
        console.log('user update', this.user)
      } else {
        history.push('/login')
      }
    })
  }

  setUser(user: IUser) {
    this.user = user
  }
}
