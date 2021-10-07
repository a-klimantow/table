import { observable } from 'mobx'

import { IUser } from 'types'

const user = observable({ id: 0, email: '', name: '' })
const token = observable({ access: '', refresh: '' })
const roles = observable.array(['Unknown'] as IUser['roles'])





export const store = {
  user,
  token,
  roles,
}
