import { makeAutoObservable } from 'mobx'

import { RoleType } from 'types'
import { createRouter } from 'app'

type RouterType = ReturnType<typeof createRouter>

export class RouterStore {
  private router = [] as RouterType

  create(roles: RoleType[]) {
    this.router = createRouter(roles)
  }

  get render() {
    return this.router
  }

  get redirectTo() {
    if (!this.router.length) return '/user/login/'
    const [m] = this.router
    return `/${m.module}/${m.pages[0].page}/`
  }

  constructor() {
    makeAutoObservable(this, {}, { proxy: false })
  }
}
