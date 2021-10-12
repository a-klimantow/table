import { makeAutoObservable } from 'mobx'
//
import { RoleType as R } from 'types'
import { getPrommited } from './permissions'
import { getRoutes } from './routes'

export class Router {
  private _roles = [] as R[]

  constructor() {
    makeAutoObservable(this, { setRoles: false })
  }

  setRoles(roles: R[]) {
    this._roles = roles
  }

  get prommited() {
    return getPrommited(this._roles)
  }

  get rewardsRoutes() {
    return getRoutes('rewards', this.prommited.pages)
  }

  get defaultRoutes() {
    return getRoutes('default', this.prommited.pages)
  }
}
