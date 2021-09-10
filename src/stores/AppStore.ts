import { autorun } from 'mobx'
import { useHistory } from 'react-router-dom'
import { UserStore } from './UserStore'

type History = ReturnType<typeof useHistory>

export class AppStore {
  private history: History
  user = new UserStore()

  constructor(history: History) {
    this.history = history

    autorun(() => this.authentication())
  }

  authentication() {
    const url = this.user.defaultUrl
    url && this.history.push(url)
  }
}

export type AppStoreType = AppStore
