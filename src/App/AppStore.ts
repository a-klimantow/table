import { makeAutoObservable } from 'mobx'
import { useHistory } from 'react-router-dom'

import { LSKeys } from 'consts'
import { IUser } from './types'

type History = ReturnType<typeof useHistory>

export class AppStore {
  private readonly user: IUser | null = null
  private readonly history: History

  constructor({ history }: { history: History }) {
    makeAutoObservable(this)
    this.history = history

    const user = localStorage.getItem(LSKeys.User)
    if (user) {
      this.user = JSON.parse(user)
    }
  }
}
