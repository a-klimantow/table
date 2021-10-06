import { reaction } from 'mobx'
import { User } from '../user'

const user = new User()

export const store = { user }

reaction(
  () => user.roles,
  (roles) => {
    console.log(roles)
    user.save()
  }
)
