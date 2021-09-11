import { makeAutoObservable, reaction } from 'mobx'

export type UserRole =
  | 'PaymentsManager'
  | 'ProjectManagement'
  | 'TemplateManagement'
  | 'WebsiteManagement'

export class UserStore {
  id = 0
  name = ''
  email = ''
  roles: UserRole[] = []
  token = ''
  refresh_token = ''

  constructor() {
    makeAutoObservable(this)
    const userJSON = localStorage.getItem('user')
    userJSON && this.update(JSON.parse(userJSON))

    reaction(
      () => this.name,
      (name) =>
        name
          ? localStorage.setItem('user', JSON.stringify(this))
          : localStorage.removeItem('user')
    )
  }

  update(user: this) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.roles = user.roles
    this.token = user.token
    this.refresh_token = user.refresh_token
  }

  logout() {
    this.name = ''
  }

  get defaultUrl() {
    const role = this.roles[0]
    switch (role) {
      case 'PaymentsManager':
        return '/rewards/bids/'
      default:
        return ''
    }
  }
}
