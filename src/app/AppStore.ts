import { User } from 'stores'

export class AppStore {
  constructor(public user = new User()) {}
}
