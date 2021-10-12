import { autorun } from 'mobx'
import { User, Token, Router } from 'stores'

export class AppStore {
  constructor(
    public user = new User(),
    public token = new Token(),
    public router = new Router()
  ) {
    autorun(() => router.setRoles(user.roles))
  }
}
