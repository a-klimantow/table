import { makeAutoObservable } from 'mobx'
//
import { RoleType as R } from 'types'
import { getDefPath, getPrommited } from './permissions'
import { getRoutes } from './routes'

export class Router {
  private _roles = [] as R[]
  defPath = ''

  constructor() {
    makeAutoObservable(this, { setRoles: false })
  }

  setRoles(roles: R[]) {
    this._roles = roles
    this.defPath = getDefPath(roles)
  }

  get prommited() {
    return getPrommited(this._roles)
  }

  get rewardsRoutes() {
    return getRoutes('rewards', this.prommited.pages)
  }

  get userRoutes() {
    return getRoutes('user', this.prommited.pages)
  }

  get allRoutes() {
    return this.userRoutes.concat(this.rewardsRoutes)
  }
}
